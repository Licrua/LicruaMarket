import { create } from 'zustand'
import { db } from '@/lib/fireBase'
import {
  collection,
  query,
  where,
  orderBy, // добавляем orderBy
  onSnapshot,
  addDoc,
  Timestamp,
  deleteDoc,
  doc,
} from 'firebase/firestore'
import Order from '@/types/order'
import Product from '@/types/product'

interface OrderStore {
  orders: Order[]
  loading: boolean
  fetchOrders: (userId: string) => void
  createOrder: (
    userId: string | undefined,
    products: Product[],
    deliveryMethod: 'pickup' | 'courier' | null,
    pickupLocation: string,
    email: string
  ) => Promise<void>
  deleteOrder: (orderId: string) => Promise<void>
}

export const useOrderStore = create<OrderStore>((set) => ({
  orders: [],
  loading: false,

  fetchOrders: (userId: string) => {
    set({ loading: true })
    const ordersQuery = query(
      collection(db, 'orders'),
      where('userId', '==', userId),
      orderBy('createdAt', 'desc') // добавляем сортировку по полю createdAt
    )

    const unsubscribe = onSnapshot(
      ordersQuery,
      (snapshot) => {
        const fetchedOrders = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        set({ orders: fetchedOrders, loading: false })
      },
      (error) => {
        console.error('Ошибка при получении заказов:', error)
        set({ loading: false })
      }
    )
    return unsubscribe
  },

  createOrder: async (
    userId: string | undefined,
    products: Product[],
    deliveryMethod: 'pickup' | 'courier' | null,
    pickupLocation: string,
    email: string
  ) => {
    if (!userId) return

    const newOrder: Order = {
      orderId: `#${Date.now()}`,
      userId,
      deliveryMethod,
      pickupLocation,
      email,
      products,
      createdAt: Timestamp.now(),
    }

    // Оптимистично добавляем заказ в Zustand
    set((state) => ({
      orders: [newOrder, ...state.orders],
    }))

    try {
      const orderRef = collection(db, 'orders')
      await addDoc(orderRef, newOrder)
      console.log('Заказ успешно создан!')
    } catch (error) {
      console.error('Ошибка при создании заказа:', error)

      // Откатываем состояние, если ошибка
      set((state) => ({
        orders: state.orders.filter(
          (order) => order.orderId !== newOrder.orderId
        ),
      }))
    }
  },

  deleteOrder: async (orderId: string) => {
    set((state) => ({
      orders: state.orders.filter((order) => order.orderId !== orderId),
    }))

    try {
      const orderRef = doc(db, 'orders', orderId)
      await deleteDoc(orderRef)
      console.log('Заказ успешно удален из базы данных!')
    } catch (error) {
      console.error('Ошибка при удалении заказа:', error)

    }
  },
}))

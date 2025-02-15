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
    const order: Order = {
      orderId: `#${Date.now()}`,
      userId,
      deliveryMethod,
      pickupLocation,
      email: email,
      products: products,
      createdAt: Timestamp.now(),
    }

    try {
      const orderRef = collection(db, 'orders')
      await addDoc(orderRef, order)
      console.log('Order successfully saved!')
    } catch (error) {
      console.error('Error saving order:', error)
    }
  },
}))

import { db } from '@/lib/fireBase'
import Order from '@/types/order'
import Product from '@/types/product'
import { addDoc, collection } from 'firebase/firestore'
import { create } from 'zustand'

interface DeliveryStore {
  deliveryMethod: 'pickup' | 'courier' | null
  pickupLocation: string
  setDeliveryMethod: (method: 'pickup' | 'courier') => void
  setPickupLocation: (location: string) => void
  createOrder: (
    userId: string | undefined,
    products: Product[],
    deliveryMethod: 'pickup' | 'courier' | null,
    pickupLocation: string,
    email: string
  ) => void
}

export const useDeliveryStore = create<DeliveryStore>((set) => ({
  deliveryMethod: 'pickup',
  pickupLocation: 'Ростов-на-Дону, Мечникова 77Б',
  createOrder: async (
    userId: string | undefined,
    products: Product[],
    deliveryMethod: 'pickup' | 'courier' | null,
    pickupLocation: string,
    email: string
  ) => {
    const order: Order = {
      orderId: `order_${Date.now()}`,
      userId,
      deliveryAddress:
        deliveryMethod === 'courier' ? pickupLocation : 'Not applicable',
      email: email, // Пример номера телефона
      products: products, // Список продуктов
      createdAt: new Date().toISOString(),
    }

    try {
      const orderRef = collection(db, 'orders')
      await addDoc(orderRef, order)
      console.log('Order successfully saved!')
    } catch (error) {
      console.error('Error saving order:', error)
    }
  },
  setDeliveryMethod: (method) => set({ deliveryMethod: method }),
  setPickupLocation: (location) => set({ pickupLocation: location }),
}))

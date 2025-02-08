import { create } from 'zustand'
import { collection, getDocs, onSnapshot } from 'firebase/firestore'
import { db } from '@/lib/fireBase'

type Product = {
  id: string
  [key: string]: any
}

type ProductStore = {
  products: Product[]
  loading: boolean
  fetchProducts: () => () => void
}

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  loading: false,
  fetchProducts: () => {
    set({ loading: true })
    const unsubscribe = onSnapshot(
      collection(db, 'product'),
      (snapshot) => {
        const fetchedProducts = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        set({ products: fetchedProducts, loading: false })
      },
      (error) => {
        console.error('Ошибка при получении продуктов:', error)
        set({ loading: false })
      }
    )

    // Вернём функцию для отключения подписки, если нужно
    return unsubscribe
  },
}))

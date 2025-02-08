import { create } from 'zustand'
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
} from 'firebase/firestore'
import { db } from '@/lib/fireBase'
import cardProduct from '@/types/cardProduct'

type Product = {
  id: string
  [key: string]: any
}

type ProductStore = {
  products: Product[]
  loading: boolean
  fetchProducts: () => () => void
  addProduct: (product: cardProduct, userId: string) => Promise<void>
  removeProduct: (productId: string) => Promise<void>
  removeAllProducts: () => Promise<void>
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

  addProduct: async (product: cardProduct, userId: string) => {
    try {
      await addDoc(collection(db, 'product'), {
        userId,
        productId: product?.id,
        productName: product?.name,
        productOldPrice: product?.oldPrice || null,
        productImage: product?.image,
        productPrice: product?.currentPrice,
        productCategory: product?.category,
        createdAt: new Date().toISOString(),
      })
      console.log('Продукт успешно добавлен')
    } catch (error) {
      console.error('Ошибка при добавлении продукта:', error)
      throw new Error('Не удалось сохранить продукт.')
    }
  },
  removeProduct: async (productId) => {
    try {
      const productDoc = doc(db, 'product', productId)
      await deleteDoc(productDoc) // Удаление из Firestore
      console.log('Продукт успешно удалён')

      // Обновляем состояние в store
      set((state) => ({
        products: state.products.filter((product) => product.id !== productId),
      }))
    } catch (error) {
      console.error('Ошибка при удалении продукта:', error)
      throw new Error('Не удалось удалить продукт.')
    }
  },
  removeAllProducts: async () => {
    try {
      const productsSnapshot = await getDocs(collection(db, 'product'))
      console.log('productsSnapshot', productsSnapshot)

      const deletePromises = productsSnapshot.docs.map((doc) =>
        deleteDoc(doc.ref)
      )
      console.log('deletePromises', deletePromises)

      await Promise.all(deletePromises) // Ожидаем удаления всех продуктов

      console.log('Все продукты успешно удалены')

      // Обновляем состояние в store
      set({ products: [] }) // Очищаем список продуктов в Zustand
    } catch (error) {
      console.error('Ошибка при удалении всех продуктов:', error)
      throw new Error('Не удалось удалить все продукты.')
    }
  },
}))

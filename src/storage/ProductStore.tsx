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
  fetchProducts: (userId: string) => () => void;
  addProduct: (product: cardProduct, userId: string) => Promise<void>
  removeProduct: (productId: string) => Promise<void>
  setStatus: (status: string) => void
  removeAllProducts: (userId: string) => Promise<void>;
  status: string
}


export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  status: 'registered',
  loading: false,
  setStatus: (status) => set({ status }),

  fetchProducts: (userId: string) => {
    set({ loading: true })
    const unsubscribe = onSnapshot(
      collection(db, 'product'),
      (snapshot) => {
        const fetchedProducts = snapshot.docs
          .map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
          .filter((product) => product.userId === userId) // Фильтруем продукты по userId

        set({ products: fetchedProducts, loading: false })
      },
      (error) => {
        console.error('Ошибка при получении продуктов:', error)
        set({ loading: false })
      }
    )

    return unsubscribe
  },

  addProduct: async (product: cardProduct, userId: string) => {
    try {
      await addDoc(collection(db, 'product'), {
        userId, // Привязываем продукт к конкретному пользователю
        productId: product.id,
        productName: product.name,
        productOldPrice: product.oldPrice || null,
        productImage: product.image,
        productPrice: product.currentPrice,
        productCategory: product.category,
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
      await deleteDoc(productDoc)
      console.log('Продукт успешно удалён')

      set((state) => ({
        products: state.products.filter((product) => product.id !== productId),
      }))
    } catch (error) {
      console.error('Ошибка при удалении продукта:', error)
      throw new Error('Не удалось удалить продукт.')
    }
  },

  removeAllProducts: async (userId: string) => {
    try {
      const productsSnapshot = await getDocs(collection(db, 'product'))
      const deletePromises = productsSnapshot.docs
        .filter((doc) => doc.data().userId === userId) // Удаляем только продукты этого пользователя
        .map((doc) => deleteDoc(doc.ref))

      await Promise.all(deletePromises)
      console.log('Все продукты пользователя успешно удалены')

      set({ products: [] })
    } catch (error) {
      console.error('Ошибка при удалении всех продуктов:', error)
      throw new Error('Не удалось удалить все продукты.')
    }
  },
}))

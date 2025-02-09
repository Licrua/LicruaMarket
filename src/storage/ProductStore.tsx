
import { create } from 'zustand'
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  updateDoc,
  query,
  where,
} from 'firebase/firestore'
import { db } from '@/lib/fireBase'
import cardProduct from '@/types/cardProduct'

type Product = {
  id: string
  quantity: number
  [key: string]: any
}

type ProductStore = {
  products: Product[]
  loading: boolean
  fetchProducts: (userId: string) => () => void
  addProduct: (product: cardProduct, userId: string) => Promise<void>
  removeProduct: (productId: string) => Promise<void>
  setStatus: (status: string) => void
  incrementProduct: (productId: string, userId: string) => Promise<void>
  decrementProduct: (productId: string, userId: string) => Promise<void>
  removeAllProducts: (userId: string) => Promise<void>
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
      query(collection(db, 'product'), where('userId', '==', userId)),
      (snapshot) => {
        const fetchedProducts = snapshot.docs.map((doc) => ({
          id: doc.id,
          quantity: doc.data().quantity || 1,
          ...doc.data(),
        }))
        set({ products: fetchedProducts, loading: false })
      },
      (error) => {
        console.error('Ошибка при получении продуктов:', error)
        set({ loading: false })
      }
    )
    return unsubscribe
  },
  incrementProduct: async (productId: string, userId: string) => {
    try {
      const productQuery = query(
        collection(db, 'product'),
        where('userId', '==', userId),
        where('productId', '==', productId)
      )

      const productSnapshot = await getDocs(productQuery)
      if (!productSnapshot.empty) {
        const productRef = productSnapshot.docs[0].ref
        const currentQuantity = productSnapshot.docs[0].data().quantity
        await updateDoc(productRef, { quantity: currentQuantity + 1 })
      }
    } catch (error) {
      console.error('Ошибка при увеличении количества продукта:', error)
    }
  },

  decrementProduct: async (productId: string, userId: string) => {
    try {
      const productQuery = query(
        collection(db, 'product'),
        where('userId', '==', userId),
        where('productId', '==', productId)
      )

      const productSnapshot = await getDocs(productQuery)
      if (!productSnapshot.empty) {
        const productRef = productSnapshot.docs[0].ref
        const currentQuantity = productSnapshot.docs[0].data().quantity

        if (currentQuantity > 1) {
          await updateDoc(productRef, { quantity: currentQuantity - 1 })
        } else {
          // Удаляем продукт, если количество стало 0
          await deleteDoc(productRef)
        }
      }
    } catch (error) {
      console.error('Ошибка при уменьшении количества продукта:', error)
    }
  },
  addProduct: async (product: cardProduct, userId: string) => {
    try {
      const productRef = collection(db, 'product')
      const productQuery = query(
        productRef,
        where('userId', '==', userId),
        where('productId', '==', product.id)
      )
      const existingProducts = await getDocs(productQuery)
      if (!existingProducts.empty) {
        // Если продукт уже существует, увеличиваем quantity
        const productDoc = existingProducts.docs[0].ref
        const currentQuantity = existingProducts.docs[0].data().quantity || 1
        await updateDoc(productDoc, { quantity: currentQuantity + 1 })
      } else {
        // Если продукта еще нет, добавляем его с quantity = 1
        await addDoc(productRef, {
          userId,
          productId: product.id,
          productName: product.name,
          productOldPrice: product.oldPrice || null,
          productImage: product.image,
          productPrice: product.currentPrice,
          productCategory: product.category,
          quantity: 1,
          createdAt: new Date().toISOString(),
        })
        console.log('Продукт успешно добавлен')
      }
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
        .filter((doc) => doc.data().userId === userId)
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

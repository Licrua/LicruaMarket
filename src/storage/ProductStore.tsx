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
import Product from '@/types/product'

type ProductStore = {
  products: Product[]
  loading: boolean
  fetchProducts: (userId: string) => () => void
  addProduct: (product: cardProduct, userId: string) => Promise<void>
  removeProduct: (productId: string) => Promise<void>
  setStatus: (status: string) => void
  incrementProduct: (productId: string, userId: string) => Promise<void>
  decrementProduct: (productId: string, userId: string) => Promise<void>
  removeAllProducts: (userId: string | undefined) => Promise<void>
  status: string
}

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  status: 'registered',
  loading: false,
  setStatus: (status) => set({ status }),
  fetchProducts: (userId: string) => {
    console.log('db', db)
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
        console.log('calculateTotals', productRef)

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
      const productsQuery = query(
        collection(db, 'product'),
        where('userId', '==', userId)
      )
      const productsSnapshot = await getDocs(productsQuery)

      if (productsSnapshot.empty) {
        console.log('Нет продуктов для удаления')
        return
      }

      const deletePromises = productsSnapshot.docs.map((doc) =>
        deleteDoc(doc.ref)
      )
      await Promise.all(deletePromises)

      console.log('Все продукты пользователя успешно удалены')
      set({ products: [] }) // Обновить состояние
    } catch (error) {
      console.error('Ошибка при удалении всех продуктов:', error)
      throw new Error('Не удалось удалить все продукты.')
    }
  },
}))

// import { create } from 'zustand'
// import {
//   addDoc,
//   collection,
//   deleteDoc,
//   doc,
//   getDocs,
//   onSnapshot,
//   updateDoc,
//   query,
//   where,
// } from 'firebase/firestore'
// import { db } from '@/lib/fireBase'
// import cardProduct from '@/types/cardProduct'
// import Product from '@/types/product'

// type ProductStore = {
//   products: Product[]
//   totalQuantity: number
//   totalPrice: number
//   loading: boolean
//   fetchProducts: (userId: string) => () => void
//   addProduct: (product: cardProduct, userId: string) => Promise<void>
//   removeProduct: (productId: string) => Promise<void>
//   setStatus: (status: string) => void
//   incrementProduct: (productId: string, userId: string) => Promise<void>
//   decrementProduct: (productId: string, userId: string) => Promise<void>
//   removeAllProducts: (userId: string) => Promise<void>
//   status: string
// }

// export const useProductStore = create<ProductStore>((set) => ({
//   products: [],
//   totalQuantity: 0,
//   totalPrice: 0,
//   status: 'registered',
//   loading: false,
//   setStatus: (status) => set({ status }),

//   // Функция для подсчета общего количества товаров и общей суммы
//   calculateTotals: (products: Product[]) => {
//     const totalQuantity = products.reduce((total, product) => total + product.quantity, 0)
//     const totalPrice = products.reduce((total, product) => total + product.quantity * product.productPrice, 0)
//     set({ totalQuantity, totalPrice })
//   },

//   fetchProducts: (userId: string) => {
//     set({ loading: true })
//     const unsubscribe = onSnapshot(
//       query(collection(db, 'product'), where('userId', '==', userId)),
//       (snapshot) => {
//         const fetchedProducts = snapshot.docs.map((doc) => ({
//           id: doc.id,
//           quantity: doc.data().quantity || 1,
//           productPrice: doc.data().productPrice,
//           ...doc.data(),
//         }))
//         set({ products: fetchedProducts, loading: false })
//         // Обновляем подсчеты после получения продуктов
//         set.calculateTotals(fetchedProducts)
//       },
//       (error) => {
//         console.error('Ошибка при получении продуктов:', error)
//         set({ loading: false })
//       }
//     )
//     return unsubscribe
//   },

//   incrementProduct: async (productId: string, userId: string) => {
//     try {
//       const productQuery = query(
//         collection(db, 'product'),
//         where('userId', '==', userId),
//         where('productId', '==', productId)
//       )

//       const productSnapshot = await getDocs(productQuery)
//       if (!productSnapshot.empty) {
//         const productRef = productSnapshot.docs[0].ref
//         const currentQuantity = productSnapshot.docs[0].data().quantity
//         await updateDoc(productRef, { quantity: currentQuantity + 1 })

//         // Обновляем локальные данные
//         set((state) => {
//           const updatedProducts = state.products.map((product) =>
//             product.id === productId ? { ...product, quantity: product.quantity + 1 } : product
//           )
//           set.calculateTotals(updatedProducts)
//           return { products: updatedProducts }
//         })
//       }
//     } catch (error) {
//       console.error('Ошибка при увеличении количества продукта:', error)
//     }
//   },

//   decrementProduct: async (productId: string, userId: string) => {
//     try {
//       const productQuery = query(
//         collection(db, 'product'),
//         where('userId', '==', userId),
//         where('productId', '==', productId)
//       )

//       const productSnapshot = await getDocs(productQuery)
//       if (!productSnapshot.empty) {
//         const productRef = productSnapshot.docs[0].ref
//         const currentQuantity = productSnapshot.docs[0].data().quantity

//         if (currentQuantity > 1) {
//           await updateDoc(productRef, { quantity: currentQuantity - 1 })

//           // Обновляем локальные данные
//           set((state) => {
//             const updatedProducts = state.products.map((product) =>
//               product.id === productId ? { ...product, quantity: product.quantity - 1 } : product
//             )
//             set.calculateTotals(updatedProducts)
//             return { products: updatedProducts }
//           })
//         } else {
//           // Удаляем продукт, если количество стало 0
//           await deleteDoc(productRef)

//           // Обновляем локальные данные
//           set((state) => {
//             const updatedProducts = state.products.filter((product) => product.id !== productId)
//             set.calculateTotals(updatedProducts)
//             return { products: updatedProducts }
//           })
//         }
//       }
//     } catch (error) {
//       console.error('Ошибка при уменьшении количества продукта:', error)
//     }
//   },

//   addProduct: async (product: cardProduct, userId: string) => {
//     try {
//       const productRef = collection(db, 'product')
//       const productQuery = query(
//         productRef,
//         where('userId', '==', userId),
//         where('productId', '==', product.id)
//       )
//       const existingProducts = await getDocs(productQuery)
//       if (!existingProducts.empty) {
//         // Если продукт уже существует, увеличиваем quantity
//         const productDoc = existingProducts.docs[0].ref
//         const currentQuantity = existingProducts.docs[0].data().quantity || 1
//         await updateDoc(productDoc, { quantity: currentQuantity + 1 })

//         // Обновляем локальные данные
//         set((state) => {
//           const updatedProducts = state.products.map((product) =>
//             product.id === product.id ? { ...product, quantity: product.quantity + 1 } : product
//           )
//           set.calculateTotals(updatedProducts)
//           return { products: updatedProducts }
//         })
//       } else {
//         // Если продукта еще нет, добавляем его с quantity = 1
//         await addDoc(productRef, {
//           userId,
//           productId: product.id,
//           productName: product.name,
//           productOldPrice: product.oldPrice || null,
//           productImage: product.image,
//           productPrice: product.currentPrice,
//           productCategory: product.category,
//           quantity: 1,
//           createdAt: new Date().toISOString(),
//         })

//         // Обновляем локальные данные
//         set((state) => {
//           const updatedProducts = [
//             ...state.products,
//             {
//               id: product.id,
//               quantity: 1,
//               productPrice: product.currentPrice,
//               ...product,
//             },
//           ]
//           set.calculateTotals(updatedProducts)
//           return { products: updatedProducts }
//         })
//         console.log('Продукт успешно добавлен')
//       }
//     } catch (error) {
//       console.error('Ошибка при добавлении продукта:', error)
//       throw new Error('Не удалось сохранить продукт.')
//     }
//   },

//   removeProduct: async (productId) => {
//     try {
//       const productDoc = doc(db, 'product', productId)
//       await deleteDoc(productDoc)
//       console.log('Продукт успешно удалён')

//       set((state) => {
//         const updatedProducts = state.products.filter((product) => product.id !== productId)
//         set.calculateTotals(updatedProducts)
//         return { products: updatedProducts }
//       })
//     } catch (error) {
//       console.error('Ошибка при удалении продукта:', error)
//       throw new Error('Не удалось удалить продукт.')
//     }
//   },

//   removeAllProducts: async (userId: string) => {
//     try {
//       const productsSnapshot = await getDocs(collection(db, 'product'))
//       const deletePromises = productsSnapshot.docs
//         .filter((doc) => doc.data().userId === userId)
//         .map((doc) => deleteDoc(doc.ref))

//       await Promise.all(deletePromises)
//       console.log('Все продукты пользователя успешно удалены')

//       set({ products: [] })
//       set({ totalQuantity: 0, totalPrice: 0 }) // Сбрасываем общие подсчеты
//     } catch (error) {
//       console.error('Ошибка при удалении всех продуктов:', error)
//       throw new Error('Не удалось удалить все продукты.')
//     }
//   },
// }))

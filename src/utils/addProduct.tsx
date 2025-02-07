import {
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
} from 'firebase/firestore'
import { db } from '@/lib/fireBase'
import notify from './notify'
// Функция для добавления покупки в Firestore
async function addProduct(product: any, userId: string) {
  console.log('db', db)
  if (db) {
    try {
      // Допустим, ты хочешь сохранить продукт и дату покупки
      const docRef = await addDoc(collection(db, 'product'), {
        userId, // ID пользователя, который совершил покупку
        productId: product?.id,
        productName: product?.name,
        productOldprice: product?.oldPrice,
        productImage: product?.image,
        productPrice: product?.currentPrice,
        productCategory: product?.category,
      })
      if (docRef) {
        notify.addProduct()
      }

      //   const querySnapshot = await getDocs(collection(db, 'product'))
        // const purchases = querySnapshot.docs.map((doc) => ({
        //   id: doc.id,
        //   ...doc.data(),
        // }))
      //   console.log('Все покупки:', purchases)
      //   console.log('Покупка сохранена с ID:', docRef.id)
    } catch (error) {
      console.error('Ошибка при добавлении покупки в Firestore:', error)
    }
  }
}

export default addProduct

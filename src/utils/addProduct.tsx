import { collection, addDoc } from 'firebase/firestore'
import { db } from '@/lib/fireBase'

const addProduct = async (product: any, userId: string) => {
  try {
    const docRef = await addDoc(collection(db, 'product'), {
      userId,
      productId: product?.id,
      productName: product?.name,
      productOldPrice: product?.oldPrice || null,
      productImage: product?.image,
      productPrice: product?.currentPrice,
      productCategory: product?.category,
      createdAt: new Date().toISOString(),
    })
    console.log('Покупка сохранена с ID:', docRef.id)
    return true
  } catch (error) {
    console.error('Ошибка при добавлении покупки в Firestore:', error)
    throw new Error('Не удалось сохранить покупку.')
  }
}

export default addProduct

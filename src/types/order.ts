import { Timestamp } from 'firebase/firestore'
import Product from './product'

type Order = {
  orderId: string
  userId: string | undefined
  deliveryMethod: 'pickup' | 'courier' | null
  pickupLocation: string
  email: string
  products: Product[]
  createdAt: Timestamp
}
export default Order

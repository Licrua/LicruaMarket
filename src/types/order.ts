import Product from './product'

type Order = {
  orderId: string
  userId: string | undefined
  deliveryMethod: 'pickup' | 'courier' | null
  //   deliveryAddress: string
  pickupLocation: string
  email: string
  products: Product[]
  createdAt: string
}
export default Order

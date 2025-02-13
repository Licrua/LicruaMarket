import Product from './product'

type Order = {
  orderId: string
  userId: string | undefined
  deliveryAddress: string
  email: string
  products: Product[]
  createdAt: string
}
export default Order

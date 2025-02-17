import Product from '@/types/product'
import { useProductStore } from '@/storage/ProductStore'

interface CartItemProps {
  item: Product
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { incrementProduct, decrementProduct } = useProductStore()

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 border-b-2 border-black p-3 sm:pb-6">
      <img
        src={item.productImage}
        alt={item.productName}
        className="max-w-[200px] rounded shadow-lg shadow-black"
      />
      <div className="flex-1 text-center">
        <h3 className="text-lg sm:text-xl font-semibold">{item.productName}</h3>
        <p className="text-gray-600">₽{item.productPrice * item.quantity}</p>
      </div>
      <div className="flex items-center gap-2 sm:gap-4">
        <button
          onClick={() => decrementProduct(item.productId, item.userId)}
          className="btn btn-sm btn-circle"
        >
          -
        </button>
        <span className="font-medium">{item.quantity}</span>
        <button
          onClick={() => incrementProduct(item.productId, item.userId)}
          className="btn btn-sm btn-circle"
        >
          +
        </button>
      </div>
    </div>
  )
}

export default CartItem

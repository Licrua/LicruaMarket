import { useRouter } from 'next/navigation'
import { useProductStore } from '@/storage/ProductStore'

interface CartSummaryProps {
  cartTotalSumm: number
}

const CartSummary: React.FC<CartSummaryProps> = ({ cartTotalSumm }) => {
  const router = useRouter()
  const { products, removeAllProducts } = useProductStore()

  return (
    <div className="flex justify-between flex-col sm:flex-row items-center mb-5">
      <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-0">
        Итого: ₽ {cartTotalSumm}
      </h2>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
        <button
          className="btn btn-error w-full sm:w-auto"
          onClick={removeAllProducts}
        >
          Очистить корзину
        </button>
        <button
          onClick={() => router.push('/checkout')}
          disabled={products.length < 1}
          className="btn btn-success w-full sm:w-auto"
        >
          Оформить заказ
        </button>
      </div>
    </div>
  )
}

export default CartSummary

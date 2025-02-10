import { useRouter } from 'next/navigation'

const CartEmptyState = () => {
  const router = useRouter()

  return (
    <div className="text-center">
      <p className="text-gray-500 mb-4">Ваша корзина пуста.</p>
      <button className="btn btn-primary mt-4" onClick={() => router.push('/')}>
        Вернуться к покупкам
      </button>
    </div>
  )
}

export default CartEmptyState

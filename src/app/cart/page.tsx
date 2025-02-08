'use client'

import { useCartStore } from '@/storage/CartStore'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const CartPage = () => {
  const router = useRouter()
  const {
    cartItems,
    totalAmount,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  } = useCartStore()

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl text-center font-bold mb-8">Корзина</h1>
      {cartItems.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-500">Ваша корзина пуста.</p>
          <button
            className="btn btn-primary mt-4"
            onClick={() => router.push('/')}
          >
            Вернуться к покупкам
          </button>
        </div>
      ) : (
        <>
          <div className="grid gap-6 mb-8">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-6 border-b pb-4"
              >
                <Image
                  src={item.productImage}
                  alt={item.productName}
                  width={100}
                  height={100}
                  className="rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{item.productName}</h3>
                  <p className="text-gray-600">₽{item.productPrice}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="btn btn-sm btn-circle"
                  >
                    -
                  </button>
                  <span className="font-medium">{item.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="btn btn-sm btn-circle"
                  >
                    +
                  </button>
                </div>
                <p className="font-semibold">
                  ₽{item.productPrice * item.quantity}
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center mt-8">
            <h2 className="text-xl font-bold">Итого: ₽{totalAmount}</h2>
            <div className="flex gap-4">
              <button className="btn btn-error" onClick={clearCart}>
                Очистить корзину
              </button>
              <button className="btn btn-success">Оформить заказ</button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default CartPage

'use client'

import PurchaseProccess from '@/components/generalComponents/PurchaseProccess'
import useAuthStore from '@/storage/AuthState'
// import { useCartStore } from '@/storage/CartStore'
import { useProductStore } from '@/storage/ProductStore'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useMemo } from 'react'

const CartPage = () => {
  const router = useRouter()
  const { products, removeAllProducts } = useProductStore()
  const { currentUser } = useAuthStore()
  const { setStatus } = useProductStore()
  const summPrice = useMemo(() => {
    return products.reduce((acc, item) => acc + item.productPrice, 0)
  }, [products])

  useEffect(() => {
	setStatus('selectedProducts')
  },[])

  return (
    <div className="container mx-auto p-4 sm:p-10">
      <PurchaseProccess />
      <h1 className="text-2xl text-center font-bold mb-6 sm:mb-8">Корзина</h1>
      {products.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-500 mb-4">Ваша корзина пуста.</p>
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
            {products.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 border-b-2 border-black p-3 sm:pb-6"
              >
                <img
                  src={item.productImage}
                  alt={item.productName}
                  className="max-w-[200px]"
                />
                <div className="flex-1 text-center">
                  <h3 className="text-lg sm:text-xl font-semibold">
                    {item.productName}
                  </h3>
                  <p className="text-gray-600">₽{item.productPrice}</p>
                </div>
                <div className="flex  items-center gap-2 sm:gap-4">
                  <button
                    // onClick={() => decreaseQuantity(item.id)}
                    className="btn btn-sm btn-circle"
                  >
                    -
                  </button>
                  <span className="font-medium">{item.quantity}</span>
                  <button
                    // onClick={() => increaseQuantity(item.id)}
                    className="btn btn-sm btn-circle"
                  >
                    +
                  </button>
                </div>
                <p className="font-semibold text-right sm:text-left sm:w-32">
                  ₽{item.productPrice * item.quantity}
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-between flex-col sm:flex-row items-center mb-5">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-0">
              Итого: ₽ {summPrice}
            </h2>
            {/* <Image src={'/licruaCard.png'} alt="dads" fill className='w-[15px]' /> */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
              <button
                className="btn btn-error w-full sm:w-auto"
                onClick={removeAllProducts}
              >
                Очистить корзину
              </button>
              <button className="btn btn-success w-full sm:w-auto">
                Оформить заказ
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default CartPage

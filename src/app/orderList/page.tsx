'use client'

import { useEffect } from 'react'
import { useOrderStore } from '@/storage/OrderStorage'
import useAuthStore from '@/storage/AuthStateStorage'
import timestampToDate from '@/utils/timestampToDate'
import { useCartSummary } from '@/hooks/useCartSummary'
import ProductOrderCard from '@/components/ordersPage/ProductOrderCard'
import CancelButton from '@/components/generalComponents/CancelButton'

export default function OrderList() {
  const { orders, fetchOrders, loading } = useOrderStore()
  const currentUser = useAuthStore((state) => state.currentUser)
  const { cartTotalSumm } = useCartSummary()

  useEffect(() => {
    fetchOrders(currentUser?.uid ?? '')
  }, [currentUser, fetchOrders])

  return (
    <div className="container mx-auto px-4 py-8 ">
      <h1 className="text-3xl text-center font-bold mb-6">Мои заказы</h1>
      {loading ? (
        <p className="text-center text-lg">Загрузка заказов...</p>
      ) : orders.length === 0 ? (
        <p className="text-center text-lg">Заказы отсутствуют.</p>
      ) : (
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6">
          {orders.map((order) => (
            <div
              key={order.orderId}
              className="bg-white shadow-xl rounded-xl relative p-6 border border-gray-200 hover:shadow-2xl transition duration-300"
            >
              <CancelButton order={order.orderId} />
              <h2 className="text-xl font-semibold mb-2">
                Заказ:{' '}
                <span className="bg-gray-100 px-2 py-1 rounded-md">
                  {order.orderId}
                </span>
              </h2>
              <p className="font-medium">
                Статус:{' '}
                <span className="bg-yellow-100 px-2  rounded-md">В сборке</span>
              </p>
              <p className="text-gray-600">
                Дата:{' '}
                <span className="bg-gray-100 px-2  rounded-md">
                  {timestampToDate(
                    order.createdAt.seconds,
                    order.createdAt.nanoseconds
                  )}
                </span>
              </p>
              <p className="text-gray-600">
                Доставка:{' '}
                <span className="bg-gray-100 px-2  rounded-md">
                  {order.deliveryMethod === 'pickup' ? 'Самовывоз' : 'Курьер'}
                </span>
              </p>
              <p className="font-medium">
                Сумма к оплате:{' '}
                <span className="bg-green-100 px-2  rounded-md">
                  {cartTotalSumm} ₽
                </span>
              </p>
              <p className="mt-4 font-medium">Товары:</p>
              <div className="overflow-x-auto flex space-x-4 mt-3 pb-2">
                {order.products.map((product, index) => (
                  <ProductOrderCard key={index} product={product} />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

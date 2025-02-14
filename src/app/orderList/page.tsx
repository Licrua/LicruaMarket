'use client'
import { useEffect } from 'react'
import { useOrderStore } from '@/storage/OrderStorage'
import useAuthStore from '@/storage/AuthStateStorage'
import timestampToDate from '@/utils/timestampToDate'

export default function OrderList() {
  const { orders, fetchOrders, loading } = useOrderStore()
  const currentUser = useAuthStore((state) => state.currentUser)

  console.log('orders', orders)

  useEffect(() => {
    fetchOrders(currentUser?.uid ?? '')
  }, [fetchOrders])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl text-center  font-bold mb-6">Мои заказы</h1>
      {loading ? (
        <p className="text-center text-lg">Загрузка заказов...</p>
      ) : orders.length === 0 ? (
        <p className="text-center text-lg">Заказы отсутствуют.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {orders.map((order) => (
            <div
              key={order.orderId}
              className="bg-white shadow-lg rounded-lg p-6 border border-gray-200"
            >
              <h2 className="text-xl font-semibold mb-2">
                Заказ: {order.orderId}
              </h2>
              <p className="text-gray-600">
                Дата:{' '}
                {timestampToDate(
                  order.createdAt.seconds,
                  order.createdAt.nanoseconds
                )}
              </p>
              <p className="text-gray-600">
                Метод доставки:{' '}
                {order.deliveryMethod === 'pickup' ? 'Самовывоз' : 'Курьер'}
              </p>
              <p className="mt-4 font-medium">Товары:</p>
              <ul className="list-disc list-inside text-gray-700">
                {order.products.map((product, index) => (
                  <li key={index}>
                    {product.productName} — {product.quantity} шт.
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

'use client'
import { useEffect, useState } from 'react'
// import { useOrderStore } from './store' // Импорт хранилища
import Link from 'next/link'
// import Loading from './Loading'
import { useOrderStore } from '@/storage/OrderStorage'
import Loading from '../loading'

const Order = () => {
  const orders = useOrderStore((state) => state.orders)
  console.log('orderssss', orders);
  
  const [currentOrder, setCurrentOrder] = useState(orders.at(-1))
  //   const deliveryAddress = 'Ростов-на-Дону, ул. Юфимцева 14/2' // Заменить на реальный адрес доставки
  console.log(currentOrder)

  useEffect(() => {
    // Обновление currentOrder, если orders изменится
    setCurrentOrder(orders.at(-1))
  }, [orders])

  return orders.length > 0 ? (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="max-w-lg flex flex-col bg-white rounded-lg shadow-xl p-8 text-center">
        <h1 className="text-4xl font-bold text-green-600 mb-4">
          Спасибо за заказ!
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Ваш номер заказа:{' '}
          <span className="font-semibold">{currentOrder?.orderId}</span>
        </p>
        <p className="text-gray-600 mb-4">
          Доставка будет по адресу:{' '}
          <span className="shadow-2xl p-1 bg-slate-300/40 font-medium">
            {currentOrder?.pickupLocation}
          </span>
        </p>
        <p className="text-gray-600 mb-6">
          В течение двух дней мы свяжемся с вами по почте{' '}
          <span className="bg-slate-200 p-1">${currentOrder?.email}</span> для
          подтверждения готовности вашего товара
        </p>
        <Link href="/orderList">
          <button className="btn btn-primary w-full">Перейти в заказы</button>
        </Link>
        <div className="divider divider-neutral">Или</div>
        <Link href="/">
          <button className="btn btn-primary w-full">Перейти на главную</button>
        </Link>
      </div>
    </div>
  ) : (
    <Loading />
  )
}

export default Order

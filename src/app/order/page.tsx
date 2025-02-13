'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const Order = () => {
  const [orderNumber, setOrderNumber] = useState<string>('')
  const deliveryAddress = 'Ростов-на-Дону, ул. Юфимцева 14/2' // Заменить на реальный адрес доставки

  useEffect(() => {
    const randomOrderNumber = Math.floor(100000 + Math.random() * 900000).toString()
    setOrderNumber(randomOrderNumber)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="max-w-lg flex flex-col bg-white rounded-lg shadow-xl p-8 text-center">
        <h1 className="text-4xl font-bold text-green-600 mb-4">Спасибо за заказ!</h1>
        <p className="text-lg text-gray-700 mb-4">
          Ваш номер заказа: <span className="font-semibold">{orderNumber}</span>
        </p>
        <p className="text-gray-600 mb-4">
          Доставка будет по адресу: <span className="shadow-2xl  p-1 font-medium">{deliveryAddress}</span>
        </p>
        <p className="text-gray-600 mb-6">
          В течение двух дней мы свяжемся с вами по почте для подтверждения готовности вашего товара.
        </p>
        <Link href="/orders">
          <button className="btn btn-primary w-full">Перейти в заказы</button>
        </Link>
		<div className="divider divider-neutral">Или</div>
		<Link href="/">
          <button className="btn btn-primary w-full">Перейти на главную</button>
        </Link>
      </div>
    </div>
  )
}

export default Order

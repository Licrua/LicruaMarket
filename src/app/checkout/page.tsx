// app/checkout/page.tsx
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
// import { Button } from '@/components/ui/button'

const CheckoutPage = () => {
  const [isProcessing, setIsProcessing] = useState(false)
  const [paymentStatus, setPaymentStatus] = useState<
    'idle' | 'success' | 'fail'
  >('idle')
  const router = useRouter()

  const handlePayment = async () => {
    setIsProcessing(true)
    setPaymentStatus('idle')

    // Симуляция обработки платежа
    await new Promise((resolve) => setTimeout(resolve, 3000))

    // Генерация случайного результата (успех или неудача)
    const isSuccess = Math.random() > 0.5
    setPaymentStatus(isSuccess ? 'success' : 'fail')
    setIsProcessing(false)
  }

  const resetPayment = () => {
    setPaymentStatus('idle')
    router.push('/') // Возвращаемся на главную после сброса
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">Оплата заказа</h1>

        {paymentStatus === 'idle' && (
          <div className="flex flex-col space-y-4">
            <p className="text-gray-600">Введите данные для оплаты.</p>
            <button onClick={handlePayment} disabled={isProcessing}>
              {isProcessing ? 'Обработка...' : 'Оплатить'}
            </button>
          </div>
        )}

        {paymentStatus === 'success' && (
          <div className="text-center">
            <h2 className="text-green-600 text-xl font-semibold">
              Оплата прошла успешно!
            </h2>
            <button className="mt-4" onClick={resetPayment}>
              Вернуться на главную
            </button>
          </div>
        )}

        {paymentStatus === 'fail' && (
          <div className="text-center">
            <h2 className="text-red-600 text-xl font-semibold">
              Оплата не удалась.
            </h2>
            <p className="text-gray-600">Попробуйте ещё раз.</p>
            <button className="mt-4" onClick={handlePayment}>
              Повторить оплату
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default CheckoutPage

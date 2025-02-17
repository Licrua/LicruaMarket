'use client'
import React, { useEffect } from 'react'
import PurchaseProccess from '@/components/generalComponents/PurchaseProccess'
import { useCartSummary } from '@/hooks/useCartSummary'
import { useProductStore } from '@/storage/ProductStore'
import OrderList from './OrderList'
import PaymentMethod from './PaymentMethod'
import OrderSummary from './OrderSummary'

const CheckoutPage = () => {
  const { setStatus, products } = useProductStore()
  const { cartTotalSumm } = useCartSummary()

  useEffect(() => {
    setStatus('paid')
  }, [setStatus])

  return (
    <div className="container mx-auto p-1 sm:p-2">
      <PurchaseProccess />
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Левая колонка - список заказов */}
        <OrderList products={products} />
        {/* Правая колонка - выбор оплаты и оформление заказа */}
        <PaymentMethod />
      </div>
      <OrderSummary cartTotalSumm={cartTotalSumm} />
    </div>
  )
}

export default CheckoutPage

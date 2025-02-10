'use client'

import PurchaseProccess from '@/components/generalComponents/PurchaseProccess'
import { useCartSummary } from '@/hooks/useCartSummary'
import { useProductStore } from '@/storage/ProductStore'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import CartItem from './CartItem'
import CartSummary from './CartSummary'
import CartEmptyState from './CartEmptyState'
// import CartEmptyState from './CartEmptyState'

const CartPage = () => {
//   const router = useRouter()
  const { products, setStatus } = useProductStore()
  const { cartTotalSumm } = useCartSummary()

  useEffect(() => {
    setStatus('selectedProducts')
  }, [])

  return (
    <div className="container mx-auto p-4 sm:p-10">
      <PurchaseProccess />
      <h1 className="text-2xl text-center font-bold mb-6 sm:mb-8">Корзина</h1>
      {products.length === 0 ? (
        <CartEmptyState />
      ) : (
        <>
          <div className="grid gap-6 mb-8">
            {products.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <CartSummary cartTotalSumm={cartTotalSumm} />
        </>
      )}
    </div>
  )
}

export default CartPage

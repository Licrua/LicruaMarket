'use client'
import cardProduct from '@/types/cardProduct'
import Product from '@/types/product'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { useMemo } from 'react'

function HeaderCartDetails({ cartLength }: { cartLength: number }) {
//   const summ = useMemo(() => {
//     return products.reduce((prev, cur) => prev + (cur.productPrice || 0), 0)
//   }, [products])

  return (
    <div
      tabIndex={0}
      className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
    >
      <div className="card-body">
        <span className="text-lg font-bold">
          В корзине {cartLength} позиций
        </span>
        <span className="text-info">сумма: {summ} ₽ </span>
        <div className="card-actions">
          <button
            onClick={() => redirect('/cart')}
            className="btn btn-primary btn-block"
          >
            В корзину
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeaderCartDetails

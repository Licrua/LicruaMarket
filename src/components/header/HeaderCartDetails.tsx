'use client'
import cardProduct from '@/types/cardProduct'
import Link from 'next/link'
import { redirect } from 'next/navigation'

function HeaderCartDetails({ prods }: { prods: cardProduct[] }) {
  const summ = prods.reduce((prev, cur) => {
    return prev + (cur.productPrice || 0)
  }, 0)

  return (
    <div
      tabIndex={0}
      className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
    >
      <div className="card-body">
        <span className="text-lg font-bold">В корзине  {prods.length} позиций</span>
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

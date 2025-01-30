'use client'
import Link from 'next/link'
import { redirect } from 'next/navigation'

function HeaderCartDetails() {
  return (
    <div
      tabIndex={0}
      className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
    >
      <div className="card-body">
        <span className="text-lg font-bold">8 Items</span>
        <span className="text-info">сумма: Р999</span>
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

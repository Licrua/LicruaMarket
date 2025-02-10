import { redirect } from 'next/navigation'
import { useRouter } from 'next/router'
import React from 'react'

const PaymentMethod = () => {
  return (
    <div className="lg:w-1/3 bg-base-100 shadow-lg rounded-lg p-4">
      <h2 className="text-xl font-bold mb-4">Оплата</h2>
      <div className="form-control mb-4">
        <label className="label">
          <span className="label-text">Выберите способ оплаты</span>
        </label>
        <select className="select select-bordered">
          <option>Картой онлайн при получении</option>
          <option>Наличными курьеру</option>
        </select>
      </div>
      <button
        onClick={() => redirect('delivery')}
        className="btn btn-success w-full"
      >
        Оформить заказ
      </button>
    </div>
  )
}

export default PaymentMethod

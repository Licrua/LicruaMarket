import React from 'react'

const OrderSummary = ({ cartTotalSumm }: { cartTotalSumm: number }) => {
  return (
    <div className="mt-6  font-bold text-lg">
      <span>Итого:</span>
      <span className='ms-2'>{cartTotalSumm} ₽</span>
    </div>
  )
}

export default OrderSummary

import Product from '@/types/product'
import React from 'react'

const OrderList = ({ products }: { products: Product[] }) => {
  return (
    <div className="lg:w-2/3 bg-base-100 shadow-lg rounded-lg p-4">
      <h2 className="text-xl font-bold mb-4">Ваши заказы</h2>
      <ul className="space-y-3 overflow-scroll h-52">
        {products.map((prod) => (
          <li
            key={prod.id}
            className="flex justify-between items-center bg-base-200 p-3 rounded-lg"
          >
            <img
              src={prod.productImage}
              className="w-20 me-2 sm:me-0 rounded"
              alt="prod"
            />
            <div>
              <h3 className="font-medium">{prod.productName}</h3>
              <p className="text-sm text-gray-500">
                Количество: {prod.quantity}
              </p>
            </div>
            <p className="font-bold">{prod.productPrice * prod.quantity} ₽</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default OrderList

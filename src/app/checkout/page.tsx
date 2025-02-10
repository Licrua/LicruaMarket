// 'use client'
// import PurchaseProccess from '@/components/generalComponents/PurchaseProccess'
// import { useCartSummary } from '@/hooks/useCartSummary'
// import { useProductStore } from '@/storage/ProductStore'
// import React, { useEffect } from 'react'

import CheckoutPage from '@/components/checkoutPage/CheckoutPage'

// const CheckoutPage = () => {
//   const { setStatus, products } = useProductStore()
//   const { cartTotalSumm } = useCartSummary()

//   useEffect(() => {
//     setStatus('paid')
//   }, [])
//   return (
//     <div className="container mx-auto p-1 sm:p-2">
//       <PurchaseProccess />
//       <div className="flex flex-col lg:flex-row gap-6">
//         {/* Левая колонка - список заказов */}
//         <div className="lg:w-2/3 bg-base-100 shadow-lg rounded-lg p-4">
//           <h2 className="text-xl font-bold mb-4">Ваши заказы</h2>
//           <ul className="space-y-3 overflow-scroll h-52">
//             {products.map((prod) => (
//               <li
//                 key={prod.id}
//                 className="flex justify-between items-center bg-base-200 p-3 rounded-lg"
//               >
//                 <img src={prod.productImage} className='w-20 me-2 sm:me-0 rounded' alt="prod" />
//                 <div>
//                   <h3 className="font-medium">{prod.productName}</h3>
//                   <p className="text-sm text-gray-500">
//                     Количество: {prod.quantity}
//                   </p>
//                 </div>
//                 <p className="font-bold">
//                   {prod.productPrice * prod.quantity} ₽
//                 </p>
//               </li>
//             ))}
//           </ul>
//           <div className="mt-6 flex justify-between font-bold text-lg">
//             <span>Итого:</span>
//             <span>{cartTotalSumm} ₽</span>
//           </div>
//         </div>

//         {/* Правая колонка - выбор оплаты и оформление заказа */}
//         <div className="lg:w-1/3 bg-base-100 shadow-lg rounded-lg p-4">
//           <h2 className="text-xl font-bold mb-4">Оплата</h2>
//           <div className="form-control mb-4">
//             <label className="label">
//               <span className="label-text">Выберите способ оплаты</span>
//             </label>
//             <select className="select select-bordered">
//               <option>Картой онлайн</option>
//               <option>Наличными курьеру</option>
//               <option>Apple Pay / Google Pay</option>
//             </select>
//           </div>
//           <button className="btn btn-success w-full">Оформить заказ</button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default CheckoutPage

function Checkout() {
  return <CheckoutPage />
}

export default Checkout

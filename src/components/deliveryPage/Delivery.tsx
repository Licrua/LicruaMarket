'use client'

import { useDeliveryStore } from '@/storage/DeliveryStore'
import { useProductStore } from '@/storage/ProductStore'
import { useEffect, useState } from 'react'
import DeliveryMethodSelector from './DeliveryMethodSelector'
import PickupLocationSelector from './PickupLocationSelector'
import CourierAddressInput from './CourierAddressInput'
import PurchaseProccess from '../generalComponents/PurchaseProccess'
import notify from '@/utils/notify'
import useAuthStore from '@/storage/AuthStateStorage'
import { useOrderStore } from '@/storage/OrderStorage'
import { useRouter } from 'next/navigation'

const Delivery = () => {
  const products = useProductStore((state) => state.products)
  const currentUser = useAuthStore((state) => state.currentUser)
  const {
    deliveryMethod,
    setDeliveryMethod,
    setPickupLocation,
    pickupLocation,
  } = useDeliveryStore()
  const { createOrder, fetchOrders } = useOrderStore()
  const router = useRouter()
  const [deliveryAddress, setDeliveryAddress] = useState('')
  const { setStatus } = useProductStore()

  const handleSubmit = async () => {
    if (deliveryMethod === 'pickup' && !pickupLocation) {
      notify.notifyError('Укажите место самовывоза')
      return
    }
    if (deliveryMethod === 'courier' && !deliveryAddress) {
      notify.notifyError('Укажите адрес для доставки курьером!')
      return
    }
    await createOrder(
      currentUser?.uid ?? '',
      products,
      deliveryMethod,
      pickupLocation,
      currentUser?.email ?? ''
    )
    fetchOrders(currentUser?.uid ?? '')
    router.push('/order')
  }

  useEffect(() => {
    setStatus('received')
  }, [setStatus])

  console.log('pickupLocation', pickupLocation)

  return (
    <div className="mt-3">
      <PurchaseProccess />
      <h1 className="text-3xl text-center mt-1">Подтвердите заказ</h1>
      <div className="max-w-xl mx-auto mt-3 border-2 p-6 bg-white shadow-2xl rounded-lg">
        <h1 className="text-3xl font-bold text-center mb-6">
          Выберите способ доставки
        </h1>
        <DeliveryMethodSelector
          deliveryMethod={deliveryMethod}
          setDeliveryMethod={setDeliveryMethod}
        />
        {deliveryMethod === 'pickup' && (
          <PickupLocationSelector
            pickupLocation={pickupLocation}
            setPickupLocation={setPickupLocation}
          />
        )}
        {deliveryMethod === 'courier' && (
          <CourierAddressInput setDeliveryAddress={setDeliveryAddress} />
        )}
        <div className="flex justify-center mt-6">
          <button
            onClick={handleSubmit}
            className="btn btn-primary w-full py-3"
          >
            Подтвердить
          </button>
        </div>
      </div>
    </div>
  )
}

export default Delivery

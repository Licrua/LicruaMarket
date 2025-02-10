'use client'
import PurchaseProccess from '@/components/generalComponents/PurchaseProccess'
import { useDeliveryStore } from '@/storage/DeliveryStore'
import { useProductStore } from '@/storage/ProductStore'
import { useEffect, useState } from 'react'

const DeliveryPage = () => {
  const {
    deliveryMethod,
    setDeliveryMethod,
    setPickupLocation,
    pickupLocation,
  } = useDeliveryStore()
  const [pickupInput, setPickupInput] = useState(pickupLocation)
  const { setStatus } = useProductStore()

  const handleSubmit = () => {
    if (deliveryMethod === 'pickup' && !pickupInput) {
      alert('Укажите место самовывоза!')
      return
    }
    // Дальнейшая обработка (например, отправка данных на сервер)
    alert(
      `Вы выбрали: ${
        deliveryMethod === 'pickup'
          ? 'Самовывоз: ' + pickupInput
          : 'Доставка курьером'
      }`
    )
  }

  useEffect(() => {
    setStatus('received')
  }, [])

  return (
    <div className="mt-3 ">
      <PurchaseProccess />
      <h1 className="text-3xl text-center mt-4">Подтвердите заказ</h1>
      <div className="max-w-xl   p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-center mb-6">
          Выберите способ доставки
        </h1>
        <div className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Способ доставки</span>
            </label>
            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="pickup"
                  name="deliveryMethod"
                  value="pickup"
                  checked={deliveryMethod === 'pickup'}
                  onChange={() => setDeliveryMethod('pickup')}
                  className="radio radio-primary"
                />
                <label htmlFor="pickup" className="ml-2 text-lg">
                  Самовывоз
                </label>
              </div>
              {deliveryMethod === 'pickup' && (
                <div className="mt-2">
                  <input
                    type="text"
                    value={pickupInput}
                    onChange={(e) => setPickupInput(e.target.value)}
                    onBlur={() => setPickupLocation(pickupInput)}
                    placeholder="Укажите место самовывоза"
                    className="input input-bordered w-full"
                  />
                </div>
              )}
              <div className="flex items-center">
                <input
                  type="radio"
                  id="courier"
                  name="deliveryMethod"
                  value="courier"
                  checked={deliveryMethod === 'courier'}
                  onChange={() => setDeliveryMethod('courier')}
                  className="radio radio-primary"
                />
                <label htmlFor="courier" className="ml-2 text-lg">
                  Доставка курьером
                </label>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleSubmit}
              className="btn btn-primary w-full py-3"
            >
              Подтвердить
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeliveryPage

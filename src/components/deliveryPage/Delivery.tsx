'use client'
import { useDeliveryStore } from '@/storage/DeliveryStore'
import { useProductStore } from '@/storage/ProductStore'
import { useEffect, useState } from 'react'
import PurchaseProccess from '../generalComponents/PurchaseProccess'
import AddressAutocomplete from '@/app/autocomplete/page'

const Delivery = () => {
  const {
    deliveryMethod,
    setDeliveryMethod,
    setPickupLocation,
    pickupLocation,
  } = useDeliveryStore()
  const [pickupInput, setPickupInput] = useState(pickupLocation)
  const { setStatus } = useProductStore()
  const [deliveryAddress, setDeliveryAddress] = useState(' ')

  const handleSubmit = () => {
    if (deliveryMethod === 'pickup' && !pickupInput) {
      alert('Укажите место самовывоза!')
      return
    }
    if (deliveryMethod === 'courier' && !deliveryAddress) {
      alert('Укажите адрес для доставки курьером!')
      return
    }
    
    alert(
      `Вы выбрали: ${
        deliveryMethod === 'pickup'
          ? 'Самовывоз: ' + pickupInput
          : 'Доставка курьером: ' + deliveryAddress
      }`
    )
  }

  useEffect(() => {
    setStatus('received')
  }, [])

  return (
    <div className="mt-3  ">
      <PurchaseProccess />
      <h1 className="text-3xl text-center mt-1">Подтвердите заказ</h1>
      <div className="max-w-xl mx-auto mt-3 border-2 p-6  bg-white shadow-2xl rounded-lg">
        <h1 className="text-3xl font-bold text-center mb-6">
          Выберите способ доставки
        </h1>
        <div className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Способ доставки</span>
            </label>
            <div className="space-y-2 ">
              <div className="flex  items-center">
                <input
                  type="radio"
                  id="pickup"
                  name="deliveryMethod"
                  value="pickup"
                //   defaultChecked
                    checked={deliveryMethod === 'pickup'}
                  onChange={() => setDeliveryMethod('pickup')}
                  className="radio radio-primary"
                />
                <label htmlFor="pickup" className="ml-2 text-lg">
                  Самовывоз
                </label>
              </div>
              {deliveryMethod === 'pickup' && (
				<div className="mt-4 flex flex-col space-y-4">
				<label className="flex items-center bg-gray-100 p-4 rounded-lg shadow-sm cursor-pointer hover:bg-gray-200">
				  <input
					type="radio"
					name="pickupLocation"
					value="Ростов-на-Дону, Мечникова 77Б"
					checked={pickupLocation === 'Ростов-на-Дону, Мечникова 77Б'}
					onChange={(e) => setPickupLocation(e.target.value)}
					className="form-radio h-5 w-5 text-blue-600"
				  />
				  <span className="ml-3 text-lg font-medium">
					Ростов-на-Дону, <span className="font-bold">ул. Мечникова 77Б</span>
				  </span>
				</label>
			
				<label className="flex items-center bg-gray-100 p-4 rounded-lg shadow-sm cursor-pointer hover:bg-gray-200">
				  <input
					type="radio"
					name="pickupLocation"
					value="Ростов-на-Дону, Юфимцева 14/2"
					checked={pickupLocation === 'Ростов-на-Дону, Юфимцева 14/2'}
					onChange={(e) => setPickupLocation(e.target.value)}
					className="form-radio h-5 w-5 text-blue-600"
				  />
				  <span className="ml-3 text-lg font-medium">
					Ростов-на-Дону, <span className="font-bold">ул. Юфимцева 14/2</span>
				  </span>
				</label>
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

          {/* Добавляем поле для автозаполнения адреса только при выборе курьерской доставки */}
          {deliveryMethod === 'courier' && (
            <div className="mt-4">
              <AddressAutocomplete
                onSelect={(address) => setDeliveryAddress(address)} // Обновляем адрес доставки
              />
            </div>
          )}

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

export default Delivery

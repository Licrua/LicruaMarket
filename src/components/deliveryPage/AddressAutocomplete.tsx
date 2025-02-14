'use client'
import { useDeliveryStore } from '@/storage/DeliveryStore'
import { useEffect, useState } from 'react'

const AddressAutocomplete = ({
  onSelect,
}: {
  onSelect: (address: string) => void
}) => {
  const [address, setAddress] = useState('')
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const { setPickupLocation } = useDeliveryStore()
  console.log('Address', address)

  useEffect(() => {
    setPickupLocation(address)
  }, [address])

  const fetchSuggestions = async (query: string) => {
    const response = await fetch(
      `https://suggest-maps.yandex.ru/v1/suggest?text=${query}&print_address=1&apikey=45b616b1-9eb1-4e50-b7e9-97e6a6f4e3ba`
    )

    const data = await response.json()
    const items =
      data.results?.map((item: any) => item.address.formatted_address) || []

    setSuggestions(items)
    setIsOpen(items.length > 0)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setAddress(value)
    setPickupLocation(address)
    if (value.length > 2) {
      fetchSuggestions(value)
    } else {
      setSuggestions([])
      setIsOpen(false)
    }
  }

  const handleSelectSuggestion = (suggestion: string) => {
    setAddress(suggestion)
    setSuggestions([])
    setIsOpen(false)
    onSelect(suggestion) // Отправляем выбранный адрес в родительский компонент
  }

  return (
    <div className="max-w-md mx-auto">
      <label className="block text-gray-700 font-medium">
        Введите адрес доставки :
      </label>
      <input
        type="text"
        value={address}
        onChange={handleChange}
        className="w-full border p-3 rounded-md"
        placeholder="Начните вводить адрес..."
      />
      {isOpen && suggestions.length > 0 && (
        <ul className="border rounded-md mt-2 bg-white">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelectSuggestion(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default AddressAutocomplete

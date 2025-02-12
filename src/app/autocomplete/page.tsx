'use client'
import { useState } from 'react'

export default function AddressAutocomplete() {
  const [address, setAddress] = useState('')
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [isOpen, setIsOpen] = useState(false) // Состояние для управления открытием/закрытием списка предложений

  const fetchSuggestions = async (query: string) => {
    const response = await fetch(
      `https://suggest-maps.yandex.ru/v1/suggest?text=${query}&print_address=1&apikey=45b616b1-9eb1-4e50-b7e9-97e6a6f4e3ba`
    )

    const data = await response.json()
    const items =
      data.results?.map((item: any) => item.address.formatted_address) || []

    setSuggestions(items)
    setIsOpen(items.length > 0) // Открываем список, если есть предложения
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setAddress(value)
    if (value.length > 2) {
      fetchSuggestions(value)
    } else {
      setSuggestions([])
      setIsOpen(false) // Скрываем список, если длина текста меньше 3 символов
    }
  }

  const handleSelectSuggestion = (suggestion: string) => {
    setAddress(suggestion)
    setSuggestions([]) // Очищаем список предложений
    setIsOpen(false) // Закрываем список
  }

  return (
    <div className="max-w-md  mx-auto">
      <label className="block text-gray-700 font-medium">Введите адрес</label>
      <input
        type="text"
        value={address}
        onChange={handleChange}
        className="w-full border p-3 rounded-md"
        placeholder="Начните вводить адрес..."
      />
      {isOpen && suggestions.length > 0 && (
        <ul className="border  rounded-md mt-2 bg-white">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="p-2  hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelectSuggestion(suggestion)} // Закрываем список при выборе
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

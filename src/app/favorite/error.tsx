// app/dashboard/error.tsx
'use client'

import { useEffect } from 'react'

export default function Error({
  error, // ошибка, которая была поймана
  reset, // функция для сброса состояния и попытки перерисовать компонент
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    console.error('Error caught in dashboard:', error) // Логируем ошибку
  }, [error])

  return (
    <div>
      <h2>Что-то пошло не так!</h2>
      <button onClick={() => reset()}>Попробовать снова</button>
    </div>
  )
}

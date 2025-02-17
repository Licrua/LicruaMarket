'use client'
import FavoriteDivider from '@/components/favoritePage/FavoriteDivider'
import ProductCard from '@/components/generalComponents/ProductCard'
import useAuthStore from '@/storage/AuthStateStorage'
import useFavoritesStore from '@/storage/FavoriteStorage'
import Product from '@/types/product'
import { fetchAndStoreProducts } from '@/utils/fetchAndStoreProducts'
import { useEffect, useState } from 'react'

function Favorite() {
  const { favoriteIds, fetchFavorites } = useFavoritesStore()
  const [food, setFood] = useState<Product[]>([])
  const [loading, setLoading] = useState(true) // Добавляем состояние для загрузки
  const currentUser = useAuthStore((state) => state.currentUser?.uid)

  useEffect(() => {
    console.log('currentUser', currentUser)

    const loadFavorites = async () => {
      if (currentUser) {
        fetchFavorites(currentUser) // Загружаем favoriteIds из Firebase
      }
      const products = await fetchAndStoreProducts() // Загружаем все продукты
      const favoriteProducts = products.filter((product) => {
        return favoriteIds.includes(product.id)
      })
      console.log('favoriteIdssss', favoriteIds)
      console.log('productssss', products)

      setFood(favoriteProducts) // Устанавливаем отфильтрованные товары
      setLoading(false) // Завершаем загрузку
    }

    loadFavorites()
  }, [currentUser, favoriteIds, fetchFavorites])

  if (loading) {
    return <div>Загрузка...</div> // Показываем индикатор загрузки
  }

  return (
    <div>
      <h1 className="text-xl mt-10 text-center">
        <span className="text-purple-500 backdrop-opacity-80">Избранное</span>
      </h1>
      <FavoriteDivider />
      <div className="grid grid-cols-1 sm:grid-cols-2 m-10 lg:grid-cols-3 gap-6 mt-8">
        {food.length > 0 && currentUser ? (
          food.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="mx-auto text-gray-500">
            Нет избранных товаров либо пользователь не авторизован
          </p>
        )}
      </div>
    </div>
  )
}

export default Favorite

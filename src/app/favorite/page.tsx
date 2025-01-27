'use client'

import FavoriteCard from '@/components/favoritePage/FavoriteCard'
import FavoriteDivider from '@/components/favoritePage/FavoriteDivider'
import CardSkeleton from '@/components/generalComponents/CardSkeleton'
import ProductCard from '@/components/generalComponents/ProductCard'
import useFavoritesStore from '@/storage/storage'
import Product from '@/types/product'
import { fetchAndStoreProducts } from '@/utils/fetchAndStoreProducts'
import { useEffect, useState } from 'react'



function Favorite() {
  const { favoriteIds } = useFavoritesStore()
  const [food, setFood] = useState<Product[]>([])

  useEffect(() => {
    const func = async () => {
      try {
        const products = await fetchAndStoreProducts()
        console.log('Fetched products:', products)

        const favoriteProducts = products?.filter((product) =>
          favoriteIds.includes(product.id)
        )

        console.log('Favorite products:', favoriteProducts)

        if (favoriteProducts && favoriteProducts.length > 0) {
          localStorage.setItem('fav', JSON.stringify(favoriteProducts))
        }

        // Обновляем состояние
        setFood(favoriteProducts || [])
      } catch (error) {
        console.error('Ошибка при загрузке избранных товаров:', error)
      }
    }

    func()
  }, [favoriteIds]) // Запускать каждый раз, когда изменяются favoriteIds



  console.log(food) // Это для отладки, можете удалить, если не нужно

  if (!food) {
    return <CardSkeleton />
  }

  return (
    <div>
      <h1 className="text-xl mt-10 text-center">
        <span className="text-purple-500 backdrop-opacity-80">Избранное</span>
      </h1>
      <FavoriteDivider />
      <div className="grid grid-cols-1 sm:grid-cols-2 m-10 lg:grid-cols-3 gap-6 mt-8">
        {food.length > 0 ? (
          food.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="text-center text-gray-500">Нет избранных товаров</p>
        )}
      </div>
    </div>
  )
}

export default Favorite

'use client'
import useFavoritesStore from '@/storage/storage'

function FavoriteCard({ products }) {
//   const { favoriteIds } = useFavoritesStore()
//   const favoriteProducts = products?.filter((product) =>
//     favoriteIds.includes(product.id)
//   )
//   console.log('favoriteProducts', favoriteProducts)

  return <p>{products}</p>
}

export default FavoriteCard

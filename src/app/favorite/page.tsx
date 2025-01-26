// 'use client'

import FavoriteCard from '@/components/favoritePage/FavoriteCard'
import useFavoritesStore from '@/storage/storage'
import { fetchAndStoreProducts } from '@/utils/fetchAndStoreProducts'
import { useState } from 'react'

// import FavoriteDivider from '@/components/favoritePage/FavoriteDivider'
// import playfairDisplay from '@/fonts/header-font'
// import useFavoriteStore from '@/storage/storage'
// import { fetchAndStoreProducts } from '@/utils/fetchAndStoreProducts'
// import { useEffect, useState } from 'react'
// import ProductCard from '@/components/generalComponents/ProductCard'
// import LoadingComp from '@/components/generalComponents/Loading'

// function Favorite() {
//   const { favorites } = useFavoriteStore()
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true)
//         const products = await fetchAndStoreProducts() // Загружаем товары с сервера
//         const favoriteProducts = products?.filter((product) =>
//           favorites.includes(product.id)
//         )

//         // Сохраняем в localStorage только избранные товары
//         localStorage.setItem('productEntites', JSON.stringify(favoriteProducts))
//       } catch (error) {
//         console.error('Ошибка загрузки данных:', error)
//       } finally {
//         setLoading(false)
//       }
//     }

//     // Загружаем продукты из localStorage, если они уже там есть
//     const storedProducts = localStorage.getItem('productEntites')
//     if (storedProducts) {
//       const favoriteProducts = JSON.parse(storedProducts)
//       if (favoriteProducts) {
//         setLoading(false) // Если данные уже в localStorage, не надо снова загружать
//       }
//     } else {
//       fetchData() // Если данных нет в localStorage, загружаем их
//     }
//   }, [favorites])

//   const storedProducts = localStorage.getItem('productEntites')
//   const favoriteProducts = storedProducts ? JSON.parse(storedProducts) : []

//   console.log('favoriteProducts', favoriteProducts)

//   return (
//     <div className="bg-orange-100">
//       <h1 className={`text-xl mt-10 text-center ${playfairDisplay.className}`}>
//         <span className="text-purple-500 backdrop-opacity-80">Избранное</span>
//       </h1>
//       <FavoriteDivider />

//       {loading ? (
//         <LoadingComp />
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 m-10 lg:grid-cols-3 gap-6 mt-8">
//           {favoriteProducts.length > 0 ? (
//             favoriteProducts.map((product) => (
//               <ProductCard key={product.id} product={product} />
//             ))
//           ) : (
//             <p className="text-center col-span-2/3">
//               Ваше избранное на данный момент пусто
//             </p>
//           )}
//         </div>
//       )}
//     </div>
//   )
// }

// export default Favorite

async function Favorite() {
  const { favoriteIds } = useFavoritesStore()
  const [stater, setStater] = useState()
  const products = await fetchAndStoreProducts()
  //   console.log(localStorage.getItem('favorite'));
  // console.log(localStorage.getItem('favorites'));

  //   if(products.length > 1 ) {
  // 	  console.log('products', products)
  //   }

  return (
    <div>
      <h1>Избранные товары</h1>
      {products.length > 0 ? (
        products?.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </div>
        ))
      ) : (
        <p>Нет избранных товаров</p>
      )}
    </div>
  )
}
export default Favorite

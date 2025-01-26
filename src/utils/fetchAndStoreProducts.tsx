// import useFavoriteStore from '@/storage/storage'

import useFavoritesStore from '@/storage/storage'

export const fetchAndStoreProducts = async () => {
//   const { favoriteIds } =  useFavoritesStore.getState();
//   console.log('favoriteIdsssss', favoriteIds)

  //   const { favoriteIds } = useFavoritesStore()
  try {
    const [res1, res2, res3] = await Promise.all([
      fetch('https://run.mocky.io/v3/ada7ea4f-0a1d-4ef3-8dfc-84824b6a0e06'),
      fetch('https://678aa3addd587da7ac2af1bd.mockapi.io/api/projectList/nnn'),
      fetch(
        'https://678aa3addd587da7ac2af1bd.mockapi.io/api/projectList/newGoods'
      ),
    ])

    if (!res1.ok || !res2.ok || !res3.ok) {
      throw new Error('Ошибка загрузки данных')
    }

    const data1 = await res1.json()
    const data2 = await res2.json()
    const data3 = await res3.json()

    // Объединяем массивы данных
    const combinedData = [...data1, ...data2, ...data3]

    // Сохраняем объединённые данные в Zustand
    // const { setProducts } = useFavoriteStore.getState()
    // console.log('sdasa', useFavoriteStore.getState())
    console.log(combinedData)

    // setProducts(combinedData)
	// if (favoriteIds.length > 1) 
    // const filteredData = combinedData.filter(
    //   (product) => favoriteIds.includes(product.id) // Предполагается, что у продукта есть поле id
    // )
    // console.log('filteredData', filteredData)

    return combinedData // Возвращаем данные, если нужно
  } catch (error) {
    console.error('Ошибка при загрузке данных:', error)
    throw error
  }
}

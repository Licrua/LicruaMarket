// import useFavoriteStore from '@/storage/storage'

import urls from '@/data/url'

// export const fetchAndStoreProducts = async () => {

//   try {
//     const [res1, res2, res3] = await Promise.all([
//       fetch('https://run.mocky.io/v3/ada7ea4f-0a1d-4ef3-8dfc-84824b6a0e06'),
//       fetch('https://678aa3addd587da7ac2af1bd.mockapi.io/api/projectList/nnn'),
//       fetch(
//         'https://678aa3addd587da7ac2af1bd.mockapi.io/api/projectList/newGoods'
//       ),
//     ])

//     if (!res1.ok || !res2.ok || !res3.ok) {
//       throw new Error('Ошибка загрузки данных')
//     }

//     const data1 = await res1.json()
//     const data2 = await res2.json()
//     const data3 = await res3.json()

//     // Объединяем массивы данных
//     const combinedData = [...data1, ...data2, ...data3]

//     return combinedData // Возвращаем данные, если нужно
//   } catch (error) {
//     console.error('Ошибка при загрузке данных:', error)
//     throw error
//   }
// }

export const fetchAndStoreProducts = async (): Promise<any[]> => {
  try {
   
    const responses = await Promise.all(urls.map((url) => fetch(url)))

    console.log('responses', responses)

    // Проверяем, что все запросы успешны
    if (responses.some((res) => !res.ok)) {
      throw new Error(
        `Ошибка загрузки: ${responses
          .filter((res) => !res.ok)
          .map((res) => `${res.url}: ${res.statusText}`)
          .join(', ')}`
      )
    }

    // Парсим JSON
    const dataArrays = await Promise.all(responses.map((res) => res.json()));
	console.log('dataArrays', dataArrays);
	

    return dataArrays.flat() // Объединяем массивы и возвращаем результат
  } catch (error) {
    console.error('Ошибка при загрузке данных:', error)
    throw error
  }
}

import urls from '@/data/url'

export const fetchAndStoreProducts = async (): Promise<any[]> => {
  try {
    const responses = await Promise.all(urls.map((url) => fetch(url)))

    console.log('responses', responses)

    if (responses.some((res) => !res.ok)) {
      throw new Error(
        `Ошибка загрузки: ${responses
          .filter((res) => !res.ok)
          .map((res) => `${res.url}: ${res.statusText}`)
          .join(', ')}`
      )
    }

    const dataArrays = await Promise.all(responses.map((res) => res.json()))
    console.log('dataArrays', dataArrays)

    return dataArrays.flat() // Объединяем массивы и возвращаем результат
  } catch (error) {
    console.error('Ошибка при загрузке данных:', error)
    throw error
  }
}

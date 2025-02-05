import { create } from 'zustand'

interface FavoriteState {
  favoriteIds: number[] // Массив ID избранных товаров
  addFavorite: (id: number) => void // Добавить в избранное
  removeFavorite: (id: number) => void // Удалить из избранного
  isFavorite: (id: number) => boolean // Проверить, в избранном ли товар
}

// Создаем Zustand-хранилище
const useFavoritesStore = create<FavoriteState>((set, get) => ({
  // Инициализация состояния (изначально пустой массив)
  favoriteIds: [],
  // Метод для добавления товара в избранное
  addFavorite: (id) => {
    set((state) => {
      const updatedFavorites = [...state.favoriteIds, id]
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites)) // Сохраняем в localStorage
      return { favoriteIds: updatedFavorites }
    })
  },

  // Метод для удаления товара из избранного
  removeFavorite: (id) => {
    set((state) => {
      const updatedFavorites = state.favoriteIds.filter((favId) => favId !== id)
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites)) // Обновляем localStorage
      return { favoriteIds: updatedFavorites }
    })
  },

  // Метод для проверки, находится ли товар в избранном
  isFavorite: (id) => {
    const favoriteIds = get().favoriteIds // Получаем состояние через get()
    return favoriteIds.includes(id) // Проверяем, содержится ли ID в массиве
  },
}))

// export const initializeAuthListener = () => {
//   const setCurrentUser = useAuthStore.getState().setCurrentUser
//   onAuthStateChanged(auth, (user) => {
//     setCurrentUser(user)
//   })
// }
export default useFavoritesStore

// export const useAuthStore = create((set) => ({
//   user: null,
//   setUser: (user) => set({ user }),
//   logout: () => set({ user: null }),
// }))


import { create } from 'zustand'
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  onSnapshot,
} from 'firebase/firestore'
import { db } from '@/lib/fireBase'

interface FavoriteState {
  favoriteIds: number[] // Список избранных ID товаров
  addFavorite: (userId: string, id: number) => Promise<void> // Добавить товар в избранное
  removeFavorite: (userId: string, id: number) => Promise<void> // Удалить товар из избранного
  isFavorite: (id: number) => boolean // Проверить, находится ли товар в избранном
  fetchFavorites: (userId: string) => void // Получить список избранных товаров
}

const useFavoritesStore = create<FavoriteState>((set,get) => ({
  favoriteIds: [], // Начальное состояние — пустой список избранных

  fetchFavorites: (userId) => {
    const unsubscribe = onSnapshot(
      doc(db, 'favorites', userId),
      (docSnap) => {
        if (docSnap.exists()) {
          set({ favoriteIds: docSnap.data().favoriteIds || [] })
        }
      },
      (error) => {
        console.error('Ошибка при получении избранных товаров:', error)
      }
    )
    return unsubscribe // Возвращаем функцию для отписки от изменений
  },

  // Добавление товара в избранное
  addFavorite: async (userId, id) => {
    try {
      set((state) => ({ favoriteIds: [...state.favoriteIds, id] }))
      const userRef = doc(db, 'favorites', userId)
      await setDoc(userRef, { favoriteIds: arrayUnion(id) }, { merge: true })
    } catch (error) {
      console.error('Ошибка при добавлении в избранное:', error)
    }
  },

  // Удаление товара из избранного
  removeFavorite: async (userId, id) => {
    try {
      set((state) => ({
        favoriteIds: state.favoriteIds.filter((favId) => favId !== id),
      }))
      const userRef = doc(db, 'favorites', userId)
      await updateDoc(userRef, { favoriteIds: arrayRemove(id) })
    } catch (error) {
      console.error('Ошибка при удалении из избранного:', error)
    }
  },

  // Проверка, находится ли товар в избранном
  isFavorite: (id) => {
    return get().favoriteIds.includes(id)
  },
}))

export default useFavoritesStore

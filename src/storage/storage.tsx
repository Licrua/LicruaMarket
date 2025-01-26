// import Product from '@/types/product'
// import { userAgentFromString } from 'next/server'
// import { create } from 'zustand'

// interface FavoriteState {
//   favorites: number[] // Массив ID избранных товаров
//   products: Product[]
//   addToFavorites: (id: number) => void
//   removeFromFavorites: (id: number) => void
//   isFavorite: (id: number) => boolean
//   setProducts: (products: Product[]) => void
// }

// const useFavoriteStore = create<FavoriteState>((set, get) => ({

//   favorites: [],
//   products: [],
//   addToFavorites: (id) =>
//     set((state) => ({ favorites: [...state.favorites, id] })),
//   removeFromFavorites: (id) =>
//     set((state) => ({
//       favorites: state.favorites.filter((favId) => favId !== id),
//     })),
//   isFavorite: (id) => {
// 	console.log('geeet', get());
//     const favorites = get().favorites // Получаем favorites из состояния
//     return favorites.includes(id) // Проверяем, содержится ли id в массиве favorites
//   },
//   setProducts: (products) => set({ products }),
// }))

// export default useFavoriteStore

import { create } from 'zustand';

interface FavoriteState {
  favoriteIds: number[]; // Массив ID избранных товаров
  addFavorite: (id: number) => void; // Добавить в избранное
  removeFavorite: (id: number) => void; // Удалить из избранного
  isFavorite: (id: number) => boolean; // Проверить, в избранном ли товар
}

// Создаем Zustand-хранилище
const useFavoritesStore = create<FavoriteState>((set, get) => ({
  // Инициализация состояния (изначально пустой массив)
  favoriteIds: [],

  // Метод для добавления товара в избранное
  addFavorite: (id) => {
    set((state) => {
      const updatedFavorites = [...state.favoriteIds, id];
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites)); // Сохраняем в localStorage
      return { favoriteIds: updatedFavorites };
    });
  },

  // Метод для удаления товара из избранного
  removeFavorite: (id) => {
    set((state) => {
      const updatedFavorites = state.favoriteIds.filter((favId) => favId !== id);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites)); // Обновляем localStorage
      return { favoriteIds: updatedFavorites };
    });
  },

  // Метод для проверки, находится ли товар в избранном
  isFavorite: (id) => {
    const favoriteIds = get().favoriteIds; // Получаем состояние через get()
    return favoriteIds.includes(id); // Проверяем, содержится ли ID в массиве
  },
}));

export default useFavoritesStore;

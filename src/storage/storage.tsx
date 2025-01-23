import { create } from 'zustand';

interface FavoriteState {
  favorites: number[]; // Массив ID избранных товаров
  addToFavorites: (id: number) => void;
  removeFromFavorites: (id: number) => void;
  isFavorite: (id: number) => boolean;
}

const useFavoriteStore = create<FavoriteState>((set) => ({
  favorites: [],
  addToFavorites: (id) =>
    set((state) => ({ favorites: [...state.favorites, id] })),
  removeFromFavorites: (id) =>
    set((state) => ({
      favorites: state.favorites.filter((favId) => favId !== id),
    })),
  isFavorite: (id) => false, 
}));

export default useFavoriteStore;

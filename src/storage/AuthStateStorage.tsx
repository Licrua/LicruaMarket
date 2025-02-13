// store/authStore.ts
// import create from 'zustand'
import { getAuth, onAuthStateChanged, User } from 'firebase/auth'
import { create } from 'zustand'

interface AuthState {
  currentUser: User | null
  setUser: (user: User | null) => void
}

const useAuthStore = create<AuthState>((set) => ({
  currentUser: null,
  setUser: (user) => set({ currentUser: user }),
}))

// Инициализация слушателя авторизации
export const initAuthListener = () => {
  const auth = getAuth()
  console.log('auth', auth)
  onAuthStateChanged(auth, (user) => {
    useAuthStore.getState().setUser(user) // Обновляем состояние в store
  })
}

export default useAuthStore

import { create } from 'zustand'

type CartItem = {
  id: string
  productName: string
  productImage: string
  productPrice: number
  quantity: number
}

type CartStore = {
  cartItems: CartItem[]
  totalAmount: number
  increaseQuantity: (id: string) => void
  decreaseQuantity: (id: string) => void
  clearCart: () => void
}

export const useCartStore = create<CartStore>((set, get) => ({
  cartItems: [],
  totalAmount: 0,
  increaseQuantity: (id) => {
    set((state) => {
      const item = state.cartItems.find((item) => item.id === id)
      if (item) item.quantity++
      return { totalAmount: calculateTotal(state.cartItems) }
    })
  },
  decreaseQuantity: (id) => {
    set((state) => {
      const item = state.cartItems.find((item) => item.id === id)
      if (item && item.quantity > 1) item.quantity--
      return { totalAmount: calculateTotal(state.cartItems) }
    })
  },
  clearCart: () => set({ cartItems: [], totalAmount: 0 }),
}))

const calculateTotal = (items: CartItem[]) =>
  items.reduce((total, item) => total + item.productPrice * item.quantity, 0)

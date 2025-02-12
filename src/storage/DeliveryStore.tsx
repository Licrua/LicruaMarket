// store.ts

import { create } from "zustand"

interface DeliveryStore {
  deliveryMethod: 'pickup' | 'courier' | null
  pickupLocation: string
  setDeliveryMethod: (method: 'pickup' | 'courier') => void
  setPickupLocation: (location: string) => void
}

export const useDeliveryStore = create<DeliveryStore>((set) => ({
  deliveryMethod: 'pickup',
  pickupLocation: 'Ростов-на-Дону, Мечникова 77Б',
  setDeliveryMethod: (method) => set({ deliveryMethod: method }),
  setPickupLocation: (location) => set({ pickupLocation: location }),
}))

// store.ts

import { create } from "zustand"

interface DeliveryStore {
  deliveryMethod: 'pickup' | 'courier' | null
  pickupLocation: string
  setDeliveryMethod: (method: 'pickup' | 'courier') => void
  setPickupLocation: (location: string) => void
}

export const useDeliveryStore = create<DeliveryStore>((set) => ({
  deliveryMethod: null,
  pickupLocation: '',
  setDeliveryMethod: (method) => set({ deliveryMethod: method }),
  setPickupLocation: (location) => set({ pickupLocation: location }),
}))

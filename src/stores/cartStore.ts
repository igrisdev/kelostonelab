import { create } from 'zustand'

type CartStore = {
  cart: number
  setCart: () => void
}

export const useStoreCart = create<CartStore>(set => ({
  cart: 1,
  setCart: () => set((state: any) => ({ cart: state.cart })),
}))

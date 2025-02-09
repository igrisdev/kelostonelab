import { create } from 'zustand'

export const useStoreCart = create(set => ({
  cart: 1,
  setCart: () => set((state: any) => ({ cart: state.cart })),
}))

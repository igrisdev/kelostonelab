import { create } from 'zustand'

type CartStore = {
  cart: iCart[]
  setCart: () => void
}

type iCart = {}

export const useStoreCart = create<CartStore>(set => ({
  cart: [{}, {}],
  setCart: (state = {}) => set(({ cart }) => ({ cart: [...cart, state] })),
}))

import { useStoreCart } from '@stores/cartStore'

export const ButtonAddToCart = () => {
  const { setCart } = useStoreCart()

  return (
    <button className='btn btn-accent rounded-none' onClick={() => setCart()}>
      Add to cart
    </button>
  )
}

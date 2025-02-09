import { useStoreCart } from '@stores/cartStore'

export const ButtonAddToCart = ({ small = false }) => {
  const { setCart } = useStoreCart()

  const handleClick = () => {
    setCart()
  }

  if (small)
    return (
      <button className='btn btn-ghost btn-square btn-sm' onClick={handleClick}>
        h
      </button>
    )

  return (
    <button className='btn btn-accent rounded-none' onClick={handleClick}>
      Add to cart
    </button>
  )
}

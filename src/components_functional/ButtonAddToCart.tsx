import { useStoreCart } from '@stores/cartStore'
import { ShoppingCart } from 'lucide-react'

export const ButtonAddToCart = ({ small = false }) => {
  const { setCart } = useStoreCart()

  const handleClick = () => {
    setCart()
  }

  if (small)
    return (
      <button className='btn btn-ghost btn-square btn-sm' onClick={handleClick}>
        <ShoppingCart size={17} />
      </button>
    )

  return (
    <button className='btn btn-accent rounded-none' onClick={handleClick}>
      Add to cart
    </button>
  )
}

import { createCart } from '@graphql/functions/cart'

export const ButtonOrder = () => {
  const handleClick = () => {
    createCart()
  }

  return (
    <button className='btn btn-outline w-full' onClick={handleClick}>
      Encargar
    </button>
  )
}

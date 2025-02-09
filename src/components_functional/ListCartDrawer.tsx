import { IconCircleX } from '@assets/icons/IconCircleX'
import { useStoreCart } from '@stores/cartStore'

export const ListCartDrawer = () => {
  const { cart } = useStoreCart()

  return (
    <ul className='mb-6 px-4 flex-1 h-full overflow-y-auto'>
      {cart.map((item, index) => (
        <CartUI key={index} />
      ))}
    </ul>
  )
}

const CartUI = () => {
  return (
    <li className='flex w-full justify-between border-b pb-4 mt-2'>
      <div className='flex gap-4'>
        <div className='aspect-square w-16 bg-base-200 overflow-hidden'>
          <img
            src='https://picsum.photos/id/1003/1200/800'
            alt='Producto img'
            className='w-full h-full object-cover'
          />
        </div>
        <div className='flex flex-col justify-between'>
          <p>Aloe</p>
          <div className='flex [&>*]:size-[2rem]'>
            <button className='border'> - </button>
            <div className='border-y flex items-center justify-center'>
              <span>1</span>
            </div>
            <button className='border'> + </button>
          </div>
        </div>
      </div>

      <div className='flex flex-col justify-between'>
        <div className='flex flex-row-reverse'>
          <IconCircleX className='text-gray-400' />
        </div>
        <div>$100.000</div>
      </div>
    </li>
  )
}

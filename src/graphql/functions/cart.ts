import { connection } from './connection'
import { createCartMutation } from '@graphql/queries/cart'

// export const createCart = async (cartInput: any) => {
export const createCart = async () => {
  const variables = {
    cartInput: {
      lines: [
        {
          quantity: 1,
          merchandiseId: 'gid://shopify/ProductVariant/47005634855136',
        },
      ],
      attributes: [
        {
          key: 'cart_attribute_key',
          value: 'This is a cart attribute value',
        },
      ],
    },
  }

  try {
    const { data, errors, extensions } = await connection(
      createCartMutation,
      variables
    )

    if (errors) {
      console.error('Errores en la consulta:', errors)
    } else {
      console.log('Cart created:', JSON.stringify(data.cartCreate, null, 2))
    }
  } catch (error) {
    console.error('Error ejecutando la consulta:', error)
  }
}

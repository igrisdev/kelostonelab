import { createCartMutation } from '@graphql/queries/cart'
import { connection } from './connection'

export const createCart = async (cartInput: any) => {
  const variables = {
    cartInput: {
      lines: [
        {
          quantity: 1,
          merchandiseId: 'gid://shopify/ProductVariant/8822411690208',
        },
      ],
      attributes: {
        key: 'cart_attribute_key',
        value: 'This is a cart attribute value',
      },
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

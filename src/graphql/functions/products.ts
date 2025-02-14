import { getProductQuery, getProductsQuery } from '@graphql/queries/products'
import { connection } from './connection'

export type iProductsQuery = {
  node: {
    id: string
    title: string
    description: string
    handle: string
    priceRange: {
      minVariantPrice: {
        amount: number
      }
    }
    images: {
      edges: [
        {
          node: {
            originalSrc: string
          }
        }
      ]
    }
  }
}

export type iProduct = {
  id: string
  title: string
  category: string
  price: number
  image: string
}

// export type iProductInfo = iProduct & {
//   descriptionHtml: string
// }

export async function getProducts(first = 10) {
  const variables = {
    first,
  }

  try {
    const { data, errors, extensions } = await connection(
      getProductsQuery,
      variables
    )

    if (errors) {
      console.error('Errores en la consulta:', errors)
    } else {
      console.log(
        'Productos obtenidos:',
        JSON.stringify(data.products.edges, null, 2)
      )

      const newData = data.products.edges.map(
        (product: iProductsQuery): iProduct => {
          return {
            id: product.node.id,
            idVariant: product.node.variants.edges[0].node.id,
            title: product.node.title,
            category: product.node.handle,
            price: product.node.priceRange.minVariantPrice.amount,
            image: product.node.images.edges[0].node.originalSrc,
          }
        }
      )

      return newData
    }
  } catch (error) {
    console.error('Error ejecutando la consulta:', error)
  }
}

export const getProduct = async (id: string) => {
  const variables = {
    id,
  }

  try {
    const { data, errors, extensions } = await connection(
      getProductQuery,
      variables
    )

    if (errors) {
      console.error('Errores en la consulta:', errors)
    } else {
      console.log('Producto obtenido:', JSON.stringify(data.product, null, 2))

      const newData = {
        id: data.product.id,
        title: data.product.title,
        category: data.product.handle,
        price: data.product.priceRange.minVariantPrice.amount,
        image: data.product.images.edges[0].node.originalSrc,
        description: data.product.description,
        descriptionHtml: data.product.descriptionHtml,
      }

      return newData
    }
  } catch (error) {
    console.error('Error ejecutando la consulta:', error)
  }
}

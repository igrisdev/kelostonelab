export const getProductsQuery = `
  query ProductsQuery($first: Int) {
    products(first: $first) {
      edges {
        node {
          id
          title
          description
          handle
          priceRange {
            minVariantPrice {
              amount
            }
          }
          images(first: 1) {
            edges {
              node {
                originalSrc
              }
            }
          }
        }
      }
    }
  }
`

export const getProductQuery = `
  query GetProductQuery($id: ID!) {
    product(id: $id) {
      id
      title
      description
      handle
      priceRange {
        minVariantPrice {
          amount
        }
      }
      images(first: 1) {
        edges {
          node {
            originalSrc
          }
        }
      }
    }
  }
`

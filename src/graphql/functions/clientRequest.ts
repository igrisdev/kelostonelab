import { client } from '@services/connectionShopify'

export const clientRequest = async (query: string, variables: any) => {
  const { data, errors, extensions } = await client.request(query, {
    variables,
  })

  return { data, errors, extensions }
}

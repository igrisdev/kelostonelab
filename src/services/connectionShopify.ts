import { createStorefrontApiClient } from '@shopify/storefront-api-client'
import { config } from './config'

export const client = createStorefrontApiClient({
  storeDomain: config.storeDomain,
  apiVersion: config.apiVersion,
  publicAccessToken: config.publicAccessToken,
})

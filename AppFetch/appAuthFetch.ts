
import type { UseFetchOptions } from "nuxt/dist/app/composables";
export const appAuthFetch = <DataT>(url: string, options?: UseFetchOptions<DataT>) => {
  return useFetch(url, {
    ...options,
    async onRequest({ request, options }) {

    },
    async onRequestError({ request, options, error }) {

    },
    async onResponse({ request, response, options }) {

    },
    async onResponseError({ request, response, options }) {

    },
  })
}
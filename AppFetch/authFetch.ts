import { UseFetchOptions } from "nuxt/dist/app/composables";

export const authFetch = (url: string, options?: UseFetchOptions<object>) => {
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
    });
};
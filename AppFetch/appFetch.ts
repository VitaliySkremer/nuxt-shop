import type { UseFetchOptions } from "nuxt/dist/app/composables";
import { useAuthStore } from "~/store/authStore";

export const appFetch = <DataT>(url: string, options?: UseFetchOptions<DataT>) => {
    const store = useAuthStore();
    return useFetch(url, {
        ...options,
        async onRequest({ request, options }) {

            const headers = new Headers(options.headers);
            headers.set("Authorization", `"Bearer ${store.getToken}"`);

            options.headers = headers;
        },
        async onRequestError({ request, options, error }) {
            
        },
        async onResponse({ request, response, options }) {

        },
        async onResponseError({ request, response, options }) {

        },
    });
};
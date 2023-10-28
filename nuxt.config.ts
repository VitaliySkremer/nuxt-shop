import {resolve} from "pathe";

export default defineNuxtConfig({
  app: {
    head: {
      title: 'Shop',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Shop',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  alias:{
    "@": resolve(__dirname, "/"),
  },

  css: [
    "~/style/normalize.css",
    "~/style/main.scss"
  ],

  devtools: { enabled: true },

  modules: [
    '@pinia/nuxt',
    '@element-plus/nuxt',
    '@nuxt/image',
  ],

  elementPlus: { 
    icon: 'ElIcon',
    importStyle: 'scss',
    themes: ['dark'],
   },

  runtimeConfig: {
    public: {
      JWT_TOKEN: 'jwt_token'
    }
  },
})

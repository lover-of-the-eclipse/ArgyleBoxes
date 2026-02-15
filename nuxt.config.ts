// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  app: { baseURL: '/ArgyleBoxes/', buildAssetsDir: 'assets' },

  ssr: false,

  nitro: {
    baseURL: "http://localhost:3000",
    prerender: {
      crawlLinks: false,
      routes: [],
      failOnError: false
    }
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@tresjs/nuxt'
  ]
})
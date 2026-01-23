// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/ui'],

  devtools: {
    enabled: true,
  },

  // GitHub Pages用の設定
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    buildAssetsDir: '/_nuxt/',
  },

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/': { prerender: true },
    '/horns': { prerender: true },
  },

  compatibilityDate: '2025-01-15',

  // 静的サイト生成（SSG）の設定
  nitro: {
    prerender: {
      routes: ['/'],
    },
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs',
      },
    },
  },
})

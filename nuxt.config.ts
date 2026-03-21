// https://nuxt.com/docs/api/configuration/nuxt-config
import Components from 'unplugin-vue-components/vite'
import { PrimeVueResolver } from 'unplugin-vue-components/resolvers'

export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxtjs/tailwindcss', '@nuxtjs/sitemap'],

  devtools: {
    enabled: true,
  },

  // GitHub Pages用の設定
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    buildAssetsDir: '/_nuxt/',
  },

  // Tailwind + アプリ固有CSSはmain.cssに一本化して、@nuxtjs/tailwindcss経由で読み込む
  css: [],

  // サイトマップの絶対URL用（@nuxtjs/sitemap / nuxt-site-config）
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || 'https://morijellyfish.github.io',
  },

  routeRules: {
    '/': { prerender: true },
    '/huntingHorns': { prerender: true },
    '/longSwords': { prerender: true },
    '/lances': { prerender: true },
    '/swordAndShields': { prerender: true },
    '/greatSwords': { prerender: true },
    '/hammers': { prerender: true },
    '/insectGlaives': { prerender: true },
    '/chargeBlades': { prerender: true },
    '/switchAxes': { prerender: true },
    '/gunlances': { prerender: true },
    '/dualBlades': { prerender: true },
    '/others': { prerender: true },
    '/melodyTimer': { prerender: true },
  },

  compatibilityDate: '2025-01-15',

  // 静的サイト生成（SSG）の設定
  nitro: {
    prerender: {
      routes: [
        '/',
        '/huntingHorns',
        '/longSwords',
        '/lances',
        '/swordAndShields',
        '/greatSwords',
        '/hammers',
        '/insectGlaives',
        '/chargeBlades',
        '/switchAxes',
        '/gunlances',
        '/dualBlades',
        '/others',
        '/melodyTimer',
      ],
      crawlLinks: true,
    },
  },

  vite: {
    plugins: [
      Components({
        // PrimeVueのコンポーネントをテンプレート利用時に自動import
        resolvers: [PrimeVueResolver()],
      }),
    ],
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs',
      },
    },
  },

  // 既定の XSL は静的ホストで 404 になり、ブラウザが真っ白になることがあるため無効化
  sitemap: {
    xsl: false,
    // prerender のリンク巡回で base と二重に結合された誤 URL を除外
    exclude: [/\/XXHornTools\/XXHornTools\/?$/],
  },

  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config.cjs',
  },
})

// https://nuxt.com/docs/api/configuration/nuxt-config
import Components from 'unplugin-vue-components/vite'
import { PrimeVueResolver } from 'unplugin-vue-components/resolvers'
import type { Plugin } from 'vite'
import { runGenerate } from './build/generateMonsterEffectiveElementsByName'

/** dev 中にモンスター TS を編集したときだけ再生成（初回は下のインラインモジュールが担当） */
function monsterEffectiveElementsVitePlugin(rootDir: string): Plugin {
  return {
    name: 'monster-effective-elements-regen',
    configureServer(server) {
      server.watcher.on('change', file => {
        const n = file.replace(/\\/g, '/')
        if (
          n.includes('/app/data/monsters/') &&
          n.endsWith('.ts') &&
          !n.includes('monsterEffectiveElementsByName.generated')
        ) {
          void runGenerate(rootDir)
        }
      })
    },
  }
}

export default defineNuxtConfig({
  modules: [
    async function monsterEffectiveElementsBootstrap(_options, nuxt) {
      await runGenerate(nuxt.options.rootDir)
    },
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sitemap',
    '@nuxt/test-utils/module',
  ],

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
      monsterEffectiveElementsVitePlugin(process.cwd()),
      Components({
        // PrimeVueのコンポーネントをテンプレート利用時に自動import
        resolvers: [PrimeVueResolver()],
      }),
    ],
  },

  // test/ 以下を Nuxt の TS コンテキストに含める
  typescript: {
    tsConfig: {
      include: ['../test/**/*'],
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

  sitemap: {
    // prerender のリンク巡回で base と二重に結合された誤 URL を除外
    exclude: [/\/XXHornTools\/XXHornTools\/?$/],
  },
})

import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitest/config'
import { defineVitestProject } from '@nuxt/test-utils/config'

const appDir = fileURLToPath(new URL('./app', import.meta.url))

export default defineConfig({
  test: {
    projects: [
      {
        resolve: {
          alias: {
            '~': appDir,
            '@': appDir,
          },
        },
        test: {
          name: 'node',
          include: ['test/**/*.{test,spec}.{ts,vue}'],
          exclude: ['test/nuxt/**'],
          environment: 'node',
        },
      },
      await defineVitestProject({
        test: {
          name: 'nuxt',
          include: ['test/nuxt/**/*.{test,spec}.{ts,vue}'],
          environment: 'nuxt',
        },
      }),
    ],
  },
})

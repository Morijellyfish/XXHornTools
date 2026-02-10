<script setup>
useHead({
  meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
  link: [{ rel: 'icon', href: '/favicon.ico' }],
  htmlAttrs: {
    lang: 'ja',
    class: 'dark',
  },
})

const title = '狩猟笛比較表'
const description = 'モンスターハンターXXの狩猟笛の攻撃力比較表'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  twitterCard: 'summary',
})
</script>

<template>
  <div class="bg-[var(--mainpalette-bg)] min-h-screen flex flex-col">
    <header class="bg-[var(--mainpalette-surface-1)] border-b border-white/10">
      <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div class="h-14 flex items-center justify-between gap-4">
          <div class="flex items-center gap-4">
            <NuxtLink to="/" class="font-semibold text-lg text-white hover:text-white/90">
              狩りピTools
            </NuxtLink>

            <nav class="hidden sm:flex items-center gap-2">
              <NuxtLink
                to="/huntingHorns"
                class="text-sm text-gray-200 hover:text-white px-3 py-2 rounded hover:bg-white/5 transition"
              >
                武器比較表
              </NuxtLink>
              <NuxtLink
                to="/melodyTimer"
                class="text-sm text-gray-200 hover:text-white px-3 py-2 rounded hover:bg-white/5 transition"
              >
                旋律タイマー
              </NuxtLink>
            </nav>
          </div>
        </div>
      </div>
    </header>

    <main class="flex-1">
      <NuxtPage />
    </main>

    <footer class="border-t border-white/10">
      <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6">
        <div class="space-y-1">
          <p class="text-sm text-gray-300">狩りピTools • © {{ new Date().getFullYear() }}</p>
          <p class="text-xs text-gray-400">
            本ツールは非公式です。モンスターハンターXXはカプコンの著作物です。
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

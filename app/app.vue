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

const authorXUrl = 'https://x.com/mori_jellyfish'
const repoUrl = 'https://github.com/Morijellyfish/XXHornTools'
const issuesUrl = 'https://github.com/Morijellyfish/XXHornTools/issues'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  twitterCard: 'summary',
})
</script>

<template>
  <div class="mp-bg min-h-screen flex flex-col">
    <header class="mp-surface-1 border-b mp-border">
      <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div class="h-14 flex items-center justify-between gap-4">
          <div class="flex items-center gap-4">
            <NuxtLink to="/" class="font-semibold text-lg text-white hover:text-white/90">
              狩りピTools
            </NuxtLink>

            <nav class="hidden sm:flex items-center gap-2">
              <NuxtLink to="/huntingHorns" class="text-sm mp-navlink">武器比較表</NuxtLink>
              <NuxtLink to="/melodyTimer" class="text-sm mp-navlink">旋律タイマー</NuxtLink>
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
        <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div class="space-y-1">
            <p class="text-sm mp-muted">狩りピTools • © {{ new Date().getFullYear() }}</p>
            <p class="text-xs mp-muted">
              本ツールは非公式です。モンスターハンターXXはカプコンの著作物です。
            </p>
          </div>

          <nav class="flex flex-wrap items-center gap-1 -mx-2">
            <a
              :href="authorXUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="text-xs mp-navlink"
            >
              X: @mori_jellyfish
            </a>
            <a :href="repoUrl" target="_blank" rel="noopener noreferrer" class="text-xs mp-navlink">
              GitHub
            </a>
            <a
              :href="issuesUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="text-xs mp-navlink"
            >
              Issue / 要望・不具合
            </a>
          </nav>
        </div>
      </div>
    </footer>
  </div>
</template>

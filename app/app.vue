<script setup>
useHead({
  meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
  link: [{ rel: 'icon', href: '/favicon.ico' }],
  htmlAttrs: {
    lang: 'ja',
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
  <UApp class="bg-[#323339] min-h-screen">
    <UHeader class="bg-[#1e1f23]">
      <template #left>
        <NuxtLink to="/" class="font-bold text-lg"> 狩りピTools </NuxtLink>

        <UButton to="/huntingHorns" variant="ghost" color="neutral"> 武器比較表 </UButton>

        <UButton to="/melodyTimer" variant="ghost" color="neutral"> 旋律タイマー </UButton>
      </template>
    </UHeader>

    <UMain>
      <NuxtPage />
    </UMain>

    <UFooter>
      <template #left>
        <div class="text-sm text-muted space-y-1">
          <p>狩りピTools • © {{ new Date().getFullYear() }}</p>
          <p class="text-xs">本ツールは非公式です。モンスターハンターXXはカプコンの著作物です。</p>
        </div>
      </template>
    </UFooter>
  </UApp>
</template>

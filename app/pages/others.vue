<script setup lang="ts">
useHead({
  title: 'その他 - 狩りピTools',
})

interface WeaponItem {
  title: string
  to?: string
  implemented: boolean
}

const column1: WeaponItem[] = [
  { title: '大剣', to: '/greatSwords', implemented: true },
  { title: '太刀', to: '/longSwords', implemented: true },
  { title: '片手剣', to: '/swordAndShields', implemented: true },
  { title: '双剣', implemented: false },
  { title: 'ハンマー', to: '/hammers', implemented: true },
  { title: '狩猟笛', to: '/huntingHorns', implemented: true },
  { title: 'ランス', to: '/lances', implemented: true },
]

const column2: WeaponItem[] = [
  { title: 'ガンランス', implemented: false },
  { title: 'スラッシュアックス', implemented: false },
  { title: 'チャージアックス', implemented: false },
  { title: '操虫棍', to: '/insectGlaives', implemented: true },
  { title: '弓', implemented: false },
  { title: 'ライトボウガン', implemented: false },
  { title: 'ヘビィボウガン', implemented: false },
]
</script>

<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <section class="mx-auto max-w-6xl py-10 sm:py-14">
      <h1 class="mp-page-title mp-text">その他</h1>
      <p class="mt-3 mp-body mp-muted">各種武器比較表やツールへのリンク</p>
    </section>

    <section class="mx-auto max-w-6xl py-8 sm:py-10">
      <h2 class="mp-section-title mp-text mb-4">武器比較表</h2>
      <div class="grid grid-cols-2 gap-3 max-w-md">
        <div class="flex flex-col gap-3">
          <NuxtLink
            v-for="item in column1"
            :key="item.title"
            :to="item.implemented ? item.to! : '#'"
            class="block p-4 mp-panel rounded-lg transition-colors"
            :class="
              item.implemented
                ? 'mp-hover-surface-2 cursor-pointer'
                : 'opacity-50 cursor-default pointer-events-none'
            "
          >
            <span class="mp-text font-medium">{{ item.title }}</span>
          </NuxtLink>
        </div>
        <div class="flex flex-col gap-3">
          <NuxtLink
            v-for="item in column2"
            :key="item.title"
            :to="item.implemented ? item.to! : '#'"
            class="block p-4 mp-panel rounded-lg transition-colors"
            :class="
              item.implemented
                ? 'mp-hover-surface-2 cursor-pointer'
                : 'opacity-50 cursor-default pointer-events-none'
            "
          >
            <span class="mp-text font-medium">{{ item.title }}</span>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

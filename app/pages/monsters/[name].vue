<script setup lang="ts">
import { getMonster } from '~/data/monsters'

const route = useRoute()
const name = route.params.name as string
const monster = getMonster(name)

useSeoMeta({
  title: monster ? `${monster.name} (MHXX) - 狩りピTools` : 'モンスターが見つかりません',
})
</script>

<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <section v-if="monster" class="mx-auto max-w-6xl py-10 sm:py-14">
      <NuxtLink to="/monsters" class="mp-muted hover:mp-text transition-colors text-sm">
        ← モンスター一覧に戻る
      </NuxtLink>
      <h1 class="mp-page-title mp-text mt-4">{{ monster.name }}</h1>
    </section>

    <section v-else class="mx-auto max-w-6xl py-10 sm:py-14">
      <NuxtLink to="/monsters" class="mp-muted hover:mp-text transition-colors text-sm">
        ← モンスター一覧に戻る
      </NuxtLink>
      <h1 class="mp-page-title mp-text mt-4">モンスターが見つかりません</h1>
      <p class="mt-3 mp-body mp-muted">
        「{{ name }}」に該当するモンスターは存在しないか本ツールに実装されていません。
      </p>
    </section>
  </div>
</template>

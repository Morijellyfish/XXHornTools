<script setup lang="ts">
import { computed } from 'vue'
import { allMonsters } from '~/data/monsters'
import type { Monster } from '~/types/monster/monster'
import { formatMonsterEffectIntensity } from '~/types/monster/monsterOverview'

useSeoMeta({
  title: 'モンスターデータ一覧 (MHXX) - 狩りピTools',
  description:
    'MHXXのモンスターについて、種族・有効属性・咆哮・風圧・振動などの参照用データ一覧（未入力は未定義表示）。',
  ogTitle: 'モンスターデータ一覧 (MHXX) - 狩りピTools',
  ogDescription:
    'MHXXのモンスターについて、種族・有効属性・咆哮・風圧・振動などの参照用データ一覧（未入力は未定義表示）。',
  twitterCard: 'summary',
})

const sortedMonsters = computed(() =>
  [...allMonsters].sort((a, b) => a.name.localeCompare(b.name, 'ja'))
)

function isBlank(value: string | undefined): boolean {
  return value === undefined || value === ''
}

function missingHighlightClass(defined: boolean): string {
  return defined ? '' : 'text-amber-300/90'
}

function effectIntensityLine(m: Monster, key: 'roar' | 'windPressure' | 'tremor'): string {
  return formatMonsterEffectIntensity(m[key])
}

function effectIntensityRowMissing(m: Monster, key: 'roar' | 'windPressure' | 'tremor'): boolean {
  const line = formatMonsterEffectIntensity(m[key])
  return line === '未定義'
}

function monsterSpeciesDisplay(m: Monster): string {
  const s = m.species
  if (s === undefined || s === '') return '未定義'
  return s
}

function monsterSpeciesDefined(m: Monster): boolean {
  return !isBlank(m.species)
}
</script>

<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <section class="mx-auto max-w-6xl py-10 sm:py-14">
      <h1 class="mp-page-title mp-text">モンスターデータ</h1>
      <p class="mt-3 mp-body mp-muted">
        各モンスターのデータを参照します。有効属性は未実装のため未定義です。
      </p>
    </section>

    <section class="mx-auto max-w-6xl pb-14 sm:pb-16">
      <h2 class="mp-section-title mp-text mb-4">モンスター一覧</h2>
      <ul class="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3" role="list">
        <li v-for="m in sortedMonsters" :key="m.name">
          <div class="block h-full rounded-lg border mp-border mp-panel p-4 mp-text">
            <p class="font-medium">{{ m.name }}</p>
            <dl class="mt-3 space-y-2 text-sm">
              <div class="flex justify-between gap-2 border-b border-white/5 pb-2">
                <dt class="mp-muted shrink-0">種族</dt>
                <dd class="text-right" :class="missingHighlightClass(monsterSpeciesDefined(m))">
                  {{ monsterSpeciesDisplay(m) }}
                </dd>
              </div>
              <div class="flex justify-between gap-2 border-b border-white/5 pb-2">
                <dt class="mp-muted shrink-0">有効属性</dt>
                <dd class="text-right" :class="missingHighlightClass(false)">未定義</dd>
              </div>
              <div class="flex justify-between gap-2 border-b border-white/5 pb-2">
                <dt class="mp-muted shrink-0">咆哮</dt>
                <dd
                  class="text-right"
                  :class="missingHighlightClass(!effectIntensityRowMissing(m, 'roar'))"
                >
                  {{ effectIntensityLine(m, 'roar') }}
                </dd>
              </div>
              <div class="flex justify-between gap-2 border-b border-white/5 pb-2">
                <dt class="mp-muted shrink-0">風圧</dt>
                <dd
                  class="text-right"
                  :class="missingHighlightClass(!effectIntensityRowMissing(m, 'windPressure'))"
                >
                  {{ effectIntensityLine(m, 'windPressure') }}
                </dd>
              </div>
              <div class="flex justify-between gap-2">
                <dt class="mp-muted shrink-0">振動</dt>
                <dd
                  class="text-right"
                  :class="missingHighlightClass(!effectIntensityRowMissing(m, 'tremor'))"
                >
                  {{ effectIntensityLine(m, 'tremor') }}
                </dd>
              </div>
            </dl>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

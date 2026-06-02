<script setup lang="ts">
import { getMonster, monsterEffectiveElementsByName } from '~/data/monsters'
import { formatMonsterEffectIntensity } from '~/types/monster/monsterOverview'

const route = useRoute()
const name = route.params.name as string
const monster = getMonster(name)

const WEAK_MELLEE_THRESHOLD = 45

function formatList(values: readonly string[]): string {
  return values.length === 0 ? 'なし' : values.join('、')
}

function getWeakHitZonePartNames(): string[] {
  const variant =
    monster?.hitZoneVariants.find(v => v.name === '通常時') ?? monster?.hitZoneVariants[0]
  if (!variant) return []

  return variant.hitZones
    .filter(
      hz =>
        hz.mellee.slash >= WEAK_MELLEE_THRESHOLD ||
        hz.mellee.impact >= WEAK_MELLEE_THRESHOLD ||
        hz.mellee.shot >= WEAK_MELLEE_THRESHOLD
    )
    .map(hz => hz.name)
}

const overviewItems = monster
  ? [
      { label: '種族', value: monster.species },
      { label: '弱点属性', value: formatList(monsterEffectiveElementsByName[monster.name] ?? []) },
      { label: '弱点', value: formatList(getWeakHitZonePartNames()) },
      { label: '咆哮', value: formatMonsterEffectIntensity(monster.roar) },
      { label: '風圧', value: formatMonsterEffectIntensity(monster.windPressure) },
      { label: '振動', value: formatMonsterEffectIntensity(monster.tremor) },
    ]
  : []

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

      <div class="mt-8 space-y-8">
        <div class="grid gap-8 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 class="mp-section-title mp-text mb-3">基本情報</h2>
            <div class="mp-panel overflow-hidden">
              <dl class="divide-y divide-white/5 text-sm">
                <div
                  v-for="item in overviewItems"
                  :key="item.label"
                  class="flex items-center justify-between gap-4 p-3"
                >
                  <dt class="mp-muted whitespace-nowrap">{{ item.label }}</dt>
                  <dd class="text-right mp-text">{{ item.value }}</dd>
                </div>
              </dl>
            </div>
          </div>

          <MonsterPartDurabilityTable :parts="monster.partDurabilities" />
        </div>

        <MonsterHitZoneTable
          v-for="variant in monster.hitZoneVariants"
          :key="variant.name"
          :variant="variant"
        />

        <MonsterQuestTable :quests="monster.quests" />
      </div>
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

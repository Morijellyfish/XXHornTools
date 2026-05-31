<script setup lang="ts">
import { computed, ref } from 'vue'
import { allMonsters, monsterEffectiveElementsByName } from '~/data/monsters'
import type { ElementType } from '~/types/attackType'
import type { Monster } from '~/types/monster/monster'
import { formatMonsterEffectIntensity } from '~/types/monster/monsterOverview'
import { MONSTER_TAXONOMIES } from '~/types/monster/monsterTaxonomy'

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

const searchQuery = ref('')
const selectedWeakElements = ref<ElementType[]>([])

const weakElementOptions: readonly ElementType[] = ['火', '水', '雷', '氷', '龍']

const filteredMonsters = computed(() => {
  const query = searchQuery.value.trim().toLocaleLowerCase('ja')
  const elements = selectedWeakElements.value

  return sortedMonsters.value.filter(m => {
    const matchesName = query === '' || m.name.toLocaleLowerCase('ja').includes(query)
    const effectiveElements = monsterEffectiveElementsByName[m.name] ?? []
    const matchesWeakElement =
      elements.length === 0 || elements.every(element => effectiveElements.includes(element))

    return matchesName && matchesWeakElement
  })
})

const monsterGroups = computed(() => {
  return MONSTER_TAXONOMIES.map(species => ({
    species,
    monsters: filteredMonsters.value.filter(m => m.species === species),
  })).filter(group => group.monsters.length > 0)
})

function missingHighlightClass(defined: boolean): string {
  return defined ? '' : 'text-amber-300/90'
}

function isWeakElementSelected(element: ElementType): boolean {
  return selectedWeakElements.value.includes(element)
}

function toggleWeakElement(element: ElementType): void {
  selectedWeakElements.value = isWeakElementSelected(element)
    ? selectedWeakElements.value.filter(e => e !== element)
    : [...selectedWeakElements.value, element]
}

function effectIntensityLine(m: Monster, key: 'roar' | 'windPressure' | 'tremor'): string {
  return formatMonsterEffectIntensity(m[key])
}

function effectIntensityRowMissing(m: Monster, key: 'roar' | 'windPressure' | 'tremor'): boolean {
  const line = formatMonsterEffectIntensity(m[key])
  return line === '未定義'
}

function monsterEffectiveElementsRow(m: Monster): { text: string; defined: boolean } {
  const list = [...(monsterEffectiveElementsByName[m.name] ?? [])]
  return {
    text: list.length === 0 ? 'なし' : list.join('、'),
    defined: list.length > 0,
  }
}
</script>

<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <section class="mx-auto max-w-6xl py-10 sm:py-14">
      <h1 class="mp-page-title mp-text">モンスターデータ</h1>
      <p class="mt-3 mp-body mp-muted">
        モンスターごとの種族・有効属性・咆哮・風圧・振動の一覧です。
      </p>
    </section>

    <section class="mx-auto max-w-6xl pb-14 sm:pb-16">
      <div class="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h2 class="mp-section-title mp-text">モンスター一覧</h2>
          <p class="mt-2 text-sm mp-muted">
            {{ filteredMonsters.length }} / {{ sortedMonsters.length }}体・{{
              monsterGroups.length
            }}種族
          </p>
        </div>

        <div class="flex flex-col gap-3 sm:flex-row sm:items-end">
          <div>
            <span class="mp-caption mp-muted mb-1 block">弱点属性</span>
            <div class="flex flex-wrap gap-2">
              <div
                v-for="element in weakElementOptions"
                :key="element"
                class="flex items-center gap-2"
              >
                <Checkbox
                  :model-value="isWeakElementSelected(element)"
                  binary
                  :input-id="`weak-element-${element}`"
                  @update:model-value="toggleWeakElement(element)"
                />
                <label
                  :for="`weak-element-${element}`"
                  class="mp-label mp-text cursor-pointer whitespace-nowrap"
                  @click="toggleWeakElement(element)"
                >
                  {{ element }}
                </label>
              </div>
            </div>
          </div>

          <label class="block w-full sm:w-80">
            <span class="mp-caption mp-muted mb-1 block">名前検索</span>
            <input
              v-model="searchQuery"
              type="search"
              class="w-full rounded-lg border mp-border bg-transparent px-3 py-2 text-sm mp-text outline-none transition-colors placeholder:text-white/30 focus:border-white/40"
              placeholder="例: リオレウス"
            />
          </label>
        </div>
      </div>

      <div v-if="monsterGroups.length > 0" class="space-y-8">
        <section v-for="group in monsterGroups" :key="group.species">
          <div class="mb-3 flex items-baseline justify-between gap-3">
            <h3 class="mp-section-title mp-text">{{ group.species }}</h3>
            <span class="text-sm mp-muted">{{ group.monsters.length }}体</span>
          </div>

          <div class="mp-panel overflow-hidden">
            <div class="overflow-x-auto">
              <table class="weapon-table w-full min-w-[52rem] table-fixed text-sm">
                <colgroup>
                  <col class="w-[30%]" />
                  <col class="w-[22%]" />
                  <col class="w-[16%]" />
                  <col class="w-[16%]" />
                  <col class="w-[16%]" />
                </colgroup>
                <thead>
                  <tr>
                    <th class="text-left p-2 whitespace-nowrap">モンスター</th>
                    <th class="text-left p-2 whitespace-nowrap">有効属性</th>
                    <th class="text-left p-2 whitespace-nowrap">咆哮</th>
                    <th class="text-left p-2 whitespace-nowrap">風圧</th>
                    <th class="text-left p-2 whitespace-nowrap">振動</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="m in group.monsters" :key="m.name">
                    <td class="p-2 whitespace-nowrap font-medium">
                      <NuxtLink
                        :to="`/monsters/${m.name}`"
                        class="block truncate mp-text hover:text-white transition-colors"
                      >
                        {{ m.name }}
                      </NuxtLink>
                    </td>
                    <td
                      class="p-2 truncate whitespace-nowrap"
                      :class="missingHighlightClass(monsterEffectiveElementsRow(m).defined)"
                    >
                      {{ monsterEffectiveElementsRow(m).text }}
                    </td>
                    <td
                      class="p-2 truncate whitespace-nowrap"
                      :class="missingHighlightClass(!effectIntensityRowMissing(m, 'roar'))"
                    >
                      {{ effectIntensityLine(m, 'roar') }}
                    </td>
                    <td
                      class="p-2 truncate whitespace-nowrap"
                      :class="missingHighlightClass(!effectIntensityRowMissing(m, 'windPressure'))"
                    >
                      {{ effectIntensityLine(m, 'windPressure') }}
                    </td>
                    <td
                      class="p-2 truncate whitespace-nowrap"
                      :class="missingHighlightClass(!effectIntensityRowMissing(m, 'tremor'))"
                    >
                      {{ effectIntensityLine(m, 'tremor') }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>

      <p v-else class="mp-panel rounded-lg p-4 text-sm mp-muted">
        条件に一致するモンスターが見つかりません。
      </p>
    </section>
  </div>
</template>

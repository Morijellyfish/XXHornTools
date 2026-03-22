<script setup lang="ts">
import { allHorns } from '~/data/weapons/horns'
import { melodyNames } from '~/data/melodies'
import { ref, computed } from 'vue'
import type { TableBaseOption } from '~/types/tableBaseOption'
import { createDefaultTableOptions } from '~/utils/tableOptions'
import { DEFAULT_HITZONE_TYPE } from '~/types/weapons/huntingHorn'
import WeaponCompareShell from '~/components/layout/WeaponCompareShell.vue'
import MelodyFilter from '~/components/MelodyFilter.vue'
import HornTable from '~/components/weaponsTable/HornTable.vue'

useSeoMeta({
  title: '狩猟笛ダメージ比較表 (MHXX) - 狩りピTools',
  description: 'MHXXの狩猟笛のダメージ比較表。バフ・会心率・切れ味などを反映した比較ツール',
  ogTitle: '狩猟笛ダメージ比較表 (MHXX) - 狩りピTools',
  ogDescription: 'MHXXの狩猟笛のダメージ比較表。バフ・会心率・切れ味などを反映した比較ツール',
  twitterCard: 'summary',
})

// TableBaseOption にすべてのオプションを集約
const tableOptions = ref<TableBaseOption>(createDefaultTableOptions())

// フィルター: 旋律
const selectedMelodyNames = ref<Set<string>>(new Set())

// ハイライト: 旋律
const highlightedMelodyNames = ref<Set<string>>(new Set())

// 旋律名のハイライトをトグル
const toggleMelodyHighlight = (melodyName: string) => {
  if (highlightedMelodyNames.value.has(melodyName)) {
    highlightedMelodyNames.value.delete(melodyName)
  } else {
    highlightedMelodyNames.value.add(melodyName)
  }
  highlightedMelodyNames.value = new Set(highlightedMelodyNames.value)
}

// 切れ味補正倍率を計算
const sharpnessMultiplier = computed(() => {
  const shortTermBuff = tableOptions.value.buffs?.attackModifiers?.shortTermBuff
  return shortTermBuff === 'demonBullet' || shortTermBuff === 'demonCriticalBullet' ? 1.1 : 1.0
})

// フィルター済みの狩猟笛を計算
const filteredHorns = computed(() => {
  if (selectedMelodyNames.value.size === 0) {
    return allHorns
  }

  return allHorns.filter(horn => {
    const hornMelodyNames = horn.notes.getMelodyNames()
    // 選択された旋律のいずれかが含まれているかチェック
    return Array.from(selectedMelodyNames.value).some(selectedName =>
      hornMelodyNames.includes(selectedName)
    )
  })
})
</script>

<template>
  <WeaponCompareShell
    v-model="tableOptions"
    title="狩猟笛比較表"
    description="モンスターハンターXXの狩猟笛のダメージ比較表"
    :allow-horn-dependent-melody="true"
    :default-hitzone-type="DEFAULT_HITZONE_TYPE"
    weapon-type="huntingHorn"
  >
    <template #filters>
      <MelodyFilter v-model="selectedMelodyNames" :melody-names="melodyNames" />
    </template>

    <HornTable
      :horns="filteredHorns"
      :selected-sharpness="tableOptions.selectedSharpness"
      :buffs="tableOptions.buffs"
      :sharpness-multiplier="sharpnessMultiplier"
      :target-damage-settings="tableOptions.targetDamageSettings"
      :visible-columns="tableOptions.visibleColumns"
      :selected-melody-names="selectedMelodyNames"
      :highlighted-melody-names="highlightedMelodyNames"
      :on-melody-click="toggleMelodyHighlight"
    />
  </WeaponCompareShell>
</template>

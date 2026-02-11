<script setup lang="ts">
import { allHorns } from '~/data/horns'
import { melodyNames } from '~/data/melodies'
import { ref, computed } from 'vue'
import type { TableBaseOption } from '~/types/tableBaseOption'
import { createDefaultTableOptions } from '~/utils/tableOptions'
import WeaponCompareShell from '~/components/layout/WeaponCompareShell.vue'
import MelodyFilter from '~/components/MelodyFilter.vue'
import HornTable from '~/components/weaponsTable/HornTable.vue'

useHead({
  title: '狩猟笛比較表 - 狩りピTools',
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

// criticalBuffsをそのまま使用
const criticalBuffs = computed(() => tableOptions.value.criticalBuffs)

// 切れ味補正倍率を計算
const sharpnessMultiplier = computed(() => {
  const shortTermBuff = tableOptions.value.attackModifiers?.shortTermBuff
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
    description="モンスターハンターXXの狩猟笛のステータス比較表"
    :allow-horn-dependent-melody="true"
  >
    <template #filters>
      <MelodyFilter v-model="selectedMelodyNames" :melody-names="melodyNames" />
    </template>

    <HornTable
      :horns="filteredHorns"
      :selected-sharpness="tableOptions.selectedSharpness"
      :critical-buffs="criticalBuffs"
      :attack-modifiers="tableOptions.attackModifiers"
      :sharpness-multiplier="sharpnessMultiplier"
      :critical-melody="tableOptions.criticalBuffs?.criticalMelody"
      :target-damage-settings="tableOptions.targetDamageSettings"
      :selected-melody-names="selectedMelodyNames"
      :highlighted-melody-names="highlightedMelodyNames"
      :on-melody-click="toggleMelodyHighlight"
    />
  </WeaponCompareShell>
</template>

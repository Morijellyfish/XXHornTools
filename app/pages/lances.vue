<script setup lang="ts">
import { allLances } from '~/data/weapons/lance'
import { ref, computed } from 'vue'
import type { TableBaseOption } from '~/types/tableBaseOption'
import { createDefaultTableOptions } from '~/utils/tableOptions'
import { DEFAULT_HITZONE_TYPE } from '~/types/weapons/lance'
import WeaponCompareShell from '~/components/layout/WeaponCompareShell.vue'
import LanceTable from '~/components/weaponsTable/LanceTable.vue'

useSeoMeta({
  title: 'ランスダメージ比較表 (MHXX) - 狩りピTools',
  description: 'MHXXのランスのダメージ比較表。バフ・会心率・切れ味などを反映した比較ツール',
  ogTitle: 'ランスダメージ比較表 (MHXX) - 狩りピTools',
  ogDescription: 'MHXXのランスのダメージ比較表。バフ・会心率・切れ味などを反映した比較ツール',
  twitterCard: 'summary',
})

// TableBaseOption にすべてのオプションを集約
const tableOptions = ref<TableBaseOption>(createDefaultTableOptions())

// 切れ味補正倍率を計算
const sharpnessMultiplier = computed(() => {
  const shortTermBuff = tableOptions.value.buffs?.attackModifiers?.shortTermBuff
  return shortTermBuff === 'demonBullet' || shortTermBuff === 'demonCriticalBullet' ? 1.1 : 1.0
})
</script>

<template>
  <WeaponCompareShell
    v-model="tableOptions"
    title="ランス比較表"
    description="モンスターハンターXXのランスのダメージ比較表"
    :default-hitzone-type="DEFAULT_HITZONE_TYPE"
    weapon-type="lance"
  >
    <LanceTable
      :lances="allLances"
      :selected-sharpness="tableOptions.selectedSharpness"
      :buffs="tableOptions.buffs"
      :sharpness-multiplier="sharpnessMultiplier"
      :target-damage-settings="tableOptions.targetDamageSettings"
      :visible-columns="tableOptions.visibleColumns"
    />
  </WeaponCompareShell>
</template>

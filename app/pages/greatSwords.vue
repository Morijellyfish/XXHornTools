<script setup lang="ts">
import { allGreatSwords } from '~/data/weapons/greatSwords'
import { ref, computed } from 'vue'
import type { TableBaseOption } from '~/types/tableBaseOption'
import { createDefaultTableOptions } from '~/utils/tableOptions'
import { DEFAULT_HITZONE_TYPE } from '~/types/weapons/greatSword'
import WeaponCompareShell from '~/components/layout/WeaponCompareShell.vue'
import GreatSwordTable from '~/components/weaponsTable/GreatSwordTable.vue'

useSeoMeta({
  title: '大剣ダメージ比較表 (MHXX) - 狩りピTools',
  description: 'MHXXの大剣のダメージ比較表。バフ・会心率・切れ味などを反映した比較ツール',
  ogTitle: '大剣ダメージ比較表 (MHXX) - 狩りピTools',
  ogDescription: 'MHXXの大剣のダメージ比較表。バフ・会心率・切れ味などを反映した比較ツール',
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
    title="大剣比較表"
    description="モンスターハンターXXの大剣のダメージ比較表"
    :default-hitzone-type="DEFAULT_HITZONE_TYPE"
    weapon-type="greatSword"
  >
    <GreatSwordTable
      :great-swords="allGreatSwords"
      :selected-sharpness="tableOptions.selectedSharpness"
      :buffs="tableOptions.buffs"
      :sharpness-multiplier="sharpnessMultiplier"
      :target-damage-settings="tableOptions.targetDamageSettings"
      :visible-columns="tableOptions.visibleColumns"
    />
  </WeaponCompareShell>
</template>

<script setup lang="ts">
import { allLongSwords } from '~/data/weapons/longSword'
import { ref, computed } from 'vue'
import type { TableBaseOption } from '~/types/tableBaseOption'
import { createDefaultTableOptions } from '~/utils/tableOptions'
import { DEFAULT_HITZONE_TYPE } from '~/types/weapons/longSword'
import WeaponCompareShell from '~/components/layout/WeaponCompareShell.vue'
import LongSwordTable from '~/components/weaponsTable/LongSwordTable.vue'

useSeoMeta({
  title: '太刀ダメージ比較表 (MHXX) - 狩りピTools',
  description: 'MHXXの太刀のダメージ比較表。バフ・会心率・切れ味などを反映した比較ツール',
  ogTitle: '太刀ダメージ比較表 (MHXX) - 狩りピTools',
  ogDescription: 'MHXXの太刀のダメージ比較表。バフ・会心率・切れ味などを反映した比較ツール',
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
    title="太刀比較表"
    description="モンスターハンターXXの太刀のダメージ比較表"
    :default-hitzone-type="DEFAULT_HITZONE_TYPE"
    weapon-type="longSword"
  >
    <LongSwordTable
      :long-swords="allLongSwords"
      :selected-sharpness="tableOptions.selectedSharpness"
      :buffs="tableOptions.buffs"
      :sharpness-multiplier="sharpnessMultiplier"
      :target-damage-settings="tableOptions.targetDamageSettings"
      :visible-columns="tableOptions.visibleColumns"
    />
  </WeaponCompareShell>
</template>

<script setup lang="ts">
import { allHammers } from '~/data/weapons/hammers'
import { ref, computed } from 'vue'
import type { TableBaseOption } from '~/types/tableBaseOption'
import { createDefaultTableOptions } from '~/utils/tableOptions'
import { DEFAULT_HITZONE_TYPE } from '~/types/weapons/hammer'
import WeaponCompareShell from '~/components/layout/WeaponCompareShell.vue'
import HammerTable from '~/components/weaponsTable/HammerTable.vue'

useSeoMeta({
  title: 'ハンマーダメージ比較表 (MHXX) - 狩りピTools',
  description: 'MHXXのハンマーのダメージ比較表。バフ・会心率・切れ味などを反映した比較ツール',
  ogTitle: 'ハンマーダメージ比較表 (MHXX) - 狩りピTools',
  ogDescription: 'MHXXのハンマーのダメージ比較表。バフ・会心率・切れ味などを反映した比較ツール',
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
    title="ハンマー比較表"
    description="モンスターハンターXXのハンマーのダメージ比較表"
    :default-hitzone-type="DEFAULT_HITZONE_TYPE"
    weapon-type="hammer"
  >
    <HammerTable
      :hammers="allHammers"
      :selected-sharpness="tableOptions.selectedSharpness"
      :buffs="tableOptions.buffs"
      :sharpness-multiplier="sharpnessMultiplier"
      :target-damage-settings="tableOptions.targetDamageSettings"
      :visible-columns="tableOptions.visibleColumns"
    />
  </WeaponCompareShell>
</template>

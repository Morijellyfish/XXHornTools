<script setup lang="ts">
import { allLongSwords } from '~/data/longSword'
import { ref, computed } from 'vue'
import type { TableBaseOption } from '~/types/tableBaseOption'
import { createDefaultTableOptions } from '~/utils/tableOptions'
import WeaponCompareShell from '~/components/layout/WeaponCompareShell.vue'
import LongSwordTable from '~/components/weaponsTable/LongSwordTable.vue'

useHead({
  title: '太刀比較表 - 狩りピTools',
})

// TableBaseOption にすべてのオプションを集約
const tableOptions = ref<TableBaseOption>(createDefaultTableOptions())

// criticalBuffsをそのまま使用
const criticalBuffs = computed(() => tableOptions.value.criticalBuffs)

// 切れ味補正倍率を計算
const sharpnessMultiplier = computed(() => {
  const shortTermBuff = tableOptions.value.attackModifiers?.shortTermBuff
  return shortTermBuff === 'demonBullet' || shortTermBuff === 'demonCriticalBullet' ? 1.1 : 1.0
})
</script>

<template>
  <WeaponCompareShell
    v-model="tableOptions"
    title="太刀比較表"
    description="モンスターハンターXXの太刀のステータス比較表"
  >
    <LongSwordTable
      :long-swords="allLongSwords"
      :selected-sharpness="tableOptions.selectedSharpness"
      :critical-buffs="criticalBuffs"
      :attack-modifiers="tableOptions.attackModifiers"
      :sharpness-multiplier="sharpnessMultiplier"
      :critical-melody="tableOptions.criticalBuffs?.criticalMelody"
      :target-damage-settings="tableOptions.targetDamageSettings"
    />
  </WeaponCompareShell>
</template>

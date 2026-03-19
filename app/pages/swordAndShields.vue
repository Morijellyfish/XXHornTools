<script setup lang="ts">
import { allSwordAndShields } from '~/data/weapons/swordAndShield'
import { ref, computed } from 'vue'
import type { TableBaseOption } from '~/types/tableBaseOption'
import { createDefaultTableOptions } from '~/utils/tableOptions'
import { DEFAULT_HITZONE_TYPE } from '~/types/weapons/swordAndShield'
import WeaponCompareShell from '~/components/layout/WeaponCompareShell.vue'
import SwordAndShieldTable from '~/components/weaponsTable/SwordAndShieldTable.vue'

useHead({
  title: '片手剣比較表 - 狩りピTools',
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
    title="片手剣比較表"
    description="モンスターハンターXXの片手剣のステータス比較表"
    :default-hitzone-type="DEFAULT_HITZONE_TYPE"
    weapon-type="swordAndShield"
  >
    <SwordAndShieldTable
      :sword-and-shields="allSwordAndShields"
      :selected-sharpness="tableOptions.selectedSharpness"
      :buffs="tableOptions.buffs"
      :sharpness-multiplier="sharpnessMultiplier"
      :target-damage-settings="tableOptions.targetDamageSettings"
      :visible-columns="tableOptions.visibleColumns"
    />
  </WeaponCompareShell>
</template>

<script setup lang="ts">
import { allChargeBlades } from '~/data/chargeBlade'
import { ref, computed } from 'vue'
import type { TableBaseOption } from '~/types/tableBaseOption'
import { createDefaultTableOptions } from '~/utils/tableOptions'
import { DEFAULT_HITZONE_TYPE } from '~/types/weapons/chargeBlade'
import WeaponCompareShell from '~/components/layout/WeaponCompareShell.vue'
import ChargeBladeTable from '~/components/weaponsTable/ChargeBladeTable.vue'

useHead({
  title: 'チャージアックス比較表 - 狩りピTools',
})

const tableOptions = ref<TableBaseOption>(createDefaultTableOptions())

const sharpnessMultiplier = computed(() => {
  const shortTermBuff = tableOptions.value.buffs?.attackModifiers?.shortTermBuff
  return shortTermBuff === 'demonBullet' || shortTermBuff === 'demonCriticalBullet' ? 1.1 : 1.0
})
</script>

<template>
  <WeaponCompareShell
    v-model="tableOptions"
    title="チャージアックス比較表"
    description="モンスターハンターXXのチャージアックスのステータス比較表"
    :default-hitzone-type="DEFAULT_HITZONE_TYPE"
    weapon-type="chargeBlade"
  >
    <ChargeBladeTable
      :charge-blades="allChargeBlades"
      :selected-sharpness="tableOptions.selectedSharpness"
      :buffs="tableOptions.buffs"
      :sharpness-multiplier="sharpnessMultiplier"
      :target-damage-settings="tableOptions.targetDamageSettings"
      :visible-columns="tableOptions.visibleColumns"
    />
  </WeaponCompareShell>
</template>

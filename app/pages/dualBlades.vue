<script setup lang="ts">
import { allDualBlades } from '~/data/dualBlades'
import { ref } from 'vue'
import type { TableBaseOption } from '~/types/tableBaseOption'
import { createDefaultTableOptions } from '~/utils/tableOptions'
import { DEFAULT_HITZONE_TYPE } from '~/types/weapons/dualBlade'
import WeaponCompareShell from '~/components/layout/WeaponCompareShell.vue'
import DualBladeTable from '~/components/weaponsTable/DualBladeTable.vue'

useHead({
  title: '双剣比較表 - 狩りピTools',
})

const tableOptions = ref<TableBaseOption>(createDefaultTableOptions())
</script>

<template>
  <WeaponCompareShell
    v-model="tableOptions"
    title="双剣比較表"
    description="モンスターハンターXXの双剣のステータス比較表"
    :default-hitzone-type="DEFAULT_HITZONE_TYPE"
    weapon-type="dualBlade"
  >
    <DualBladeTable
      :dual-blades="allDualBlades"
      :selected-sharpness="tableOptions.selectedSharpness"
      :buffs="tableOptions.buffs"
      :sharpness-multiplier="1.0"
      :target-damage-settings="tableOptions.targetDamageSettings"
      :visible-columns="tableOptions.visibleColumns"
    />
  </WeaponCompareShell>
</template>

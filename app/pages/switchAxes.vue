<script setup lang="ts">
import { allSwitchAxes } from '~/data/weapons/switchAxe'
import { ref } from 'vue'
import type { TableBaseOption } from '~/types/tableBaseOption'
import { createDefaultTableOptions } from '~/utils/tableOptions'
import { DEFAULT_HITZONE_TYPE } from '~/types/weapons/switchAxe'
import WeaponCompareShell from '~/components/layout/WeaponCompareShell.vue'
import SwitchAxeTable from '~/components/weaponsTable/SwitchAxeTable.vue'

useHead({
  title: 'スラッシュアックス比較表 - 狩りピTools',
})

const tableOptions = ref<TableBaseOption>(createDefaultTableOptions())
</script>

<template>
  <WeaponCompareShell
    v-model="tableOptions"
    title="スラッシュアックス比較表"
    description="モンスターハンターXXのスラッシュアックスのステータス比較表"
    :default-hitzone-type="DEFAULT_HITZONE_TYPE"
    weapon-type="switchAxe"
  >
    <SwitchAxeTable
      :switch-axes="allSwitchAxes"
      :selected-sharpness="tableOptions.selectedSharpness"
      :buffs="tableOptions.buffs"
      :sharpness-multiplier="1.0"
      :target-damage-settings="tableOptions.targetDamageSettings"
      :visible-columns="tableOptions.visibleColumns"
    />
  </WeaponCompareShell>
</template>

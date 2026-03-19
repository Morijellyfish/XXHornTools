<script setup lang="ts">
import { allGunlances } from '~/data/weapons/gunlance'
import { ref } from 'vue'
import type { TableBaseOption } from '~/types/tableBaseOption'
import { createDefaultTableOptions } from '~/utils/tableOptions'
import { DEFAULT_HITZONE_TYPE } from '~/types/weapons/gunlance'
import WeaponCompareShell from '~/components/layout/WeaponCompareShell.vue'
import GunlanceTable from '~/components/weaponsTable/GunlanceTable.vue'

useHead({
  title: 'ガンランス比較表 - 狩りピTools',
})

const tableOptions = ref<TableBaseOption>(createDefaultTableOptions())
</script>

<template>
  <WeaponCompareShell
    v-model="tableOptions"
    title="ガンランス比較表"
    description="モンスターハンターXXのガンランスのステータス比較表"
    :default-hitzone-type="DEFAULT_HITZONE_TYPE"
    weapon-type="gunlance"
  >
    <GunlanceTable
      :gunlances="allGunlances"
      :selected-sharpness="tableOptions.selectedSharpness"
      :buffs="tableOptions.buffs"
      :sharpness-multiplier="1.0"
      :target-damage-settings="tableOptions.targetDamageSettings"
      :visible-columns="tableOptions.visibleColumns"
    />
  </WeaponCompareShell>
</template>

<script setup lang="ts">
import { allGunlances } from '~/data/weapons/gunlance'
import { ref } from 'vue'
import type { TableBaseOption } from '~/types/tableBaseOption'
import { createDefaultTableOptions } from '~/utils/tableOptions'
import { DEFAULT_HITZONE_TYPE } from '~/types/weapons/gunlance'
import WeaponCompareShell from '~/components/layout/WeaponCompareShell.vue'
import GunlanceTable from '~/components/weaponsTable/GunlanceTable.vue'

useSeoMeta({
  title: 'ガンランスダメージ比較表 (MHXX) - 狩りピTools',
  description: 'MHXXのガンランスのダメージ比較表。バフ・会心率・切れ味などを反映した比較ツール',
  ogTitle: 'ガンランスダメージ比較表 (MHXX) - 狩りピTools',
  ogDescription: 'MHXXのガンランスのダメージ比較表。バフ・会心率・切れ味などを反映した比較ツール',
  twitterCard: 'summary',
})

const tableOptions = ref<TableBaseOption>(createDefaultTableOptions())
</script>

<template>
  <WeaponCompareShell
    v-model="tableOptions"
    title="ガンランス比較表"
    description="モンスターハンターXXのガンランスのダメージ比較表"
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

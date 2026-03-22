<script setup lang="ts">
import { allDualBlades } from '~/data/weapons/dualBlades'
import { ref } from 'vue'
import type { TableBaseOption } from '~/types/tableBaseOption'
import { createDefaultTableOptions } from '~/utils/tableOptions'
import { DEFAULT_HITZONE_TYPE } from '~/types/weapons/dualBlade'
import WeaponCompareShell from '~/components/layout/WeaponCompareShell.vue'
import DualBladeOptions from '~/components/DualBladeOptions.vue'
import DualBladeTable from '~/components/weaponsTable/DualBladeTable.vue'

useSeoMeta({
  title: '双剣ダメージ比較表 (MHXX) - 狩りピTools',
  description: 'MHXXの双剣のダメージ比較表。バフ・会心率・切れ味などを反映した比較ツール',
  ogTitle: '双剣ダメージ比較表 (MHXX) - 狩りピTools',
  ogDescription: 'MHXXの双剣のダメージ比較表。バフ・会心率・切れ味などを反映した比較ツール',
  twitterCard: 'summary',
})

const tableOptions = ref<TableBaseOption>(createDefaultTableOptions())

/** 属性の使用: 主属性の割合 0.0〜1.0（0.5 = 主50% / 副50%） */
const attributeMainRatio = ref(0.5)
</script>

<template>
  <WeaponCompareShell
    v-model="tableOptions"
    title="双剣比較表"
    description="モンスターハンターXXの双剣のダメージ比較表"
    :default-hitzone-type="DEFAULT_HITZONE_TYPE"
    weapon-type="dualBlade"
  >
    <template #filters>
      <DualBladeOptions v-model="attributeMainRatio" />
    </template>

    <DualBladeTable
      :dual-blades="allDualBlades"
      :selected-sharpness="tableOptions.selectedSharpness"
      :buffs="tableOptions.buffs"
      :sharpness-multiplier="1.0"
      :target-damage-settings="tableOptions.targetDamageSettings"
      :visible-columns="tableOptions.visibleColumns"
      :dual-blade-element-main-ratio="attributeMainRatio"
    />
  </WeaponCompareShell>
</template>

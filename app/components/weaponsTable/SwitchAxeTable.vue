<script setup lang="ts">
import type { SwitchAxe, SwitchAxePhialType } from '~/types/weapons'
import type { TableBaseOption } from '~/types/tableBaseOption'
import { isColumnVisible } from '~/types/tableBaseOption'
import { AttackMelody } from '~/types/Buffs/attackBuff'
import { ElementMelody } from '~/types/Buffs/elementBuff'
import WeaponTable from './WeaponTable.vue'

interface Props extends TableBaseOption {
  /** スラッシュアックス一覧（全レア度統合） */
  switchAxes: SwitchAxe[]
}

const props = withDefaults(defineProps<Props>(), {
  selectedSharpness: 'normal',
  buffs: () => ({
    criticalBuffs: { hasCriticalBoost: false, hasMadAffinity: false },
    attackModifiers: {
      powerCharm: false,
      powerTalon: false,
      attackSkill: 'none',
      attackMelody: AttackMelody.None,
    },
    elementModifiers: { elementMelody: ElementMelody.None },
  }),
  sharpnessMultiplier: 1.0,
})

/** 装着ビン種別を日本語ラベルに変換 */
const phialTypeLabel = (type: SwitchAxePhialType): string => {
  const labels: Record<SwitchAxePhialType, string> = {
    power: '強撃',
    element: '強属性',
    dragon: '滅龍',
    paralysis: '麻痺',
    poison: '毒',
    exhaust: '減気',
  }
  return labels[type]
}
</script>

<template>
  <WeaponTable
    :weapons="props.switchAxes"
    :selected-sharpness="props.selectedSharpness"
    :buffs="props.buffs"
    :sharpness-multiplier="props.sharpnessMultiplier"
    :target-damage-settings="props.targetDamageSettings"
    :visible-columns="props.visibleColumns"
  >
    <template #header-columns>
      <th v-if="isColumnVisible(props.visibleColumns, 'switchAxePhialType')" class="text-left p-2">
        装着ビン
      </th>
    </template>
    <template #row-columns="{ weapon: axe }">
      <td v-if="isColumnVisible(props.visibleColumns, 'switchAxePhialType')" class="p-2">
        {{ phialTypeLabel(axe.switchAxePhialType) }}
      </td>
    </template>
  </WeaponTable>
</template>

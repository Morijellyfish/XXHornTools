<script setup lang="ts">
import type { ChargeBlade } from '~/types/weapons'
import type { TableBaseOption } from '~/types/tableBaseOption'
import { isColumnVisible } from '~/types/tableBaseOption'
import { AttackMelody } from '~/types/Buffs/attackBuff'
import { ElementMelody } from '~/types/Buffs/elementBuff'
import WeaponTable from './WeaponTable.vue'

interface Props extends TableBaseOption {
  chargeBlades: ChargeBlade[]
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

const phialTypeLabel = (type: 'impact' | 'element'): string =>
  type === 'impact' ? '榴弾' : '強属性'
</script>

<template>
  <WeaponTable
    :weapons="props.chargeBlades"
    :selected-sharpness="props.selectedSharpness"
    :buffs="props.buffs"
    :sharpness-multiplier="props.sharpnessMultiplier"
    :target-damage-settings="props.targetDamageSettings"
    :visible-columns="props.visibleColumns"
  >
    <template #header-columns>
      <th
        v-if="isColumnVisible(props.visibleColumns, 'chargeBladePhialType')"
        class="text-left p-2"
      >
        装着ビン
      </th>
    </template>
    <template #row-columns="{ weapon: blade }">
      <td v-if="isColumnVisible(props.visibleColumns, 'chargeBladePhialType')" class="p-2">
        {{ phialTypeLabel(blade.chargeBladePhialType) }}
      </td>
    </template>
  </WeaponTable>
</template>

<script setup lang="ts">
import type { InsectGlaive } from '~/types/weapons'
import type { TableBaseOption } from '~/types/tableBaseOption'
import { isColumnVisible } from '~/types/tableBaseOption'
import { AttackMelody } from '~/types/Buffs/attackBuff'
import { ElementMelody } from '~/types/Buffs/elementBuff'
import WeaponTable from './WeaponTable.vue'

interface Props extends TableBaseOption {
  insectGlaives: InsectGlaive[]
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

const insectTypeLabel = (type: 'slash' | 'impact'): string => (type === 'slash' ? '切断' : '打撃')
</script>

<template>
  <WeaponTable
    :weapons="props.insectGlaives"
    :selected-sharpness="props.selectedSharpness"
    :buffs="props.buffs"
    :sharpness-multiplier="props.sharpnessMultiplier"
    :target-damage-settings="props.targetDamageSettings"
    :visible-columns="props.visibleColumns"
  >
    <template #header-columns>
      <th v-if="isColumnVisible(props.visibleColumns, 'insectType')" class="text-left p-2">系統</th>
    </template>
    <template #row-columns="{ weapon: glaive }">
      <td v-if="isColumnVisible(props.visibleColumns, 'insectType')" class="p-2">
        {{ insectTypeLabel(glaive.insectType) }}
      </td>
    </template>
  </WeaponTable>
</template>

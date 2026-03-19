<script setup lang="ts">
import type { DualBlade } from '~/types/weapons'
import type { TableBaseOption } from '~/types/tableBaseOption'
import { isColumnVisible } from '~/types/tableBaseOption'
import { AttackMelody } from '~/types/Buffs/attackBuff'
import { ElementMelody } from '~/types/Buffs/elementBuff'
import WeaponTable from './WeaponTable.vue'

interface Props extends TableBaseOption {
  dualBlades: DualBlade[]
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

const subElementLabel = (db: DualBlade): string => {
  if (!db.subElement) return '-'
  return `${db.subElement.type}${db.subElement.value}`
}
</script>

<template>
  <WeaponTable
    :weapons="props.dualBlades"
    :selected-sharpness="props.selectedSharpness"
    :buffs="props.buffs"
    :sharpness-multiplier="props.sharpnessMultiplier"
    :target-damage-settings="props.targetDamageSettings"
    :visible-columns="props.visibleColumns"
  >
    <template #header-columns>
      <th v-if="isColumnVisible(props.visibleColumns, 'dualBladeSubElement')" class="text-left p-2">
        副属性
      </th>
    </template>
    <template #row-columns="{ weapon: db }">
      <td v-if="isColumnVisible(props.visibleColumns, 'dualBladeSubElement')" class="p-2">
        {{ subElementLabel(db) }}
      </td>
    </template>
  </WeaponTable>
</template>

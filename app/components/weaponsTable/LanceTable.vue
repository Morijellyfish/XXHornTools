<script setup lang="ts">
import type { Lance } from '~/types/weapons'
import type { TableBaseOption } from '~/types/tableBaseOption'
import { AttackMelody } from '~/types/Buffs/attackBuff'
import { ElementMelody } from '~/types/Buffs/elementBuff'
import WeaponTable from './WeaponTable.vue'

interface Props extends TableBaseOption {
  lances: Lance[]
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
</script>

<template>
  <WeaponTable
    :weapons="props.lances"
    :selected-sharpness="props.selectedSharpness"
    :buffs="props.buffs"
    :sharpness-multiplier="props.sharpnessMultiplier"
    :target-damage-settings="props.targetDamageSettings"
    :visible-columns="props.visibleColumns"
  />
</template>

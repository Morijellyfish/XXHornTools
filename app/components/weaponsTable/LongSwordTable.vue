<script setup lang="ts">
import type { LongSword } from '~/types/weapons'
import type { TableBaseOption } from '~/types/tableBaseOption'
import { AttackMelody } from '~/types/attackBuff/attackBuff_H'
import WeaponTable from './WeaponTable.vue'

interface Props extends TableBaseOption {
  longSwords: LongSword[]
}

const props = withDefaults(defineProps<Props>(), {
  selectedSharpness: 'normal',
  criticalBuffs: () => ({
    criticalBonus: 0,
    hasCriticalBoost: false,
    hasMadAffinity: false,
  }),
  attackModifiers: () => ({
    powerCharm: false,
    powerTalon: false,
    attackSkill: 'none',
    attackMelody: AttackMelody.None,
    attackMelodyMultiplier: 1.0,
  }),
  sharpnessMultiplier: 1.0,
})
</script>

<template>
  <WeaponTable
    :weapons="props.longSwords"
    :selected-sharpness="props.selectedSharpness"
    :critical-buffs="props.criticalBuffs"
    :attack-modifiers="props.attackModifiers"
    :sharpness-multiplier="props.sharpnessMultiplier"
  />
</template>

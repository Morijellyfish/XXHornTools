<script setup lang="ts">
import type { LongSword } from '~/types/weapons'
import type { TableBaseOption } from '~/types/tableBaseOption'
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
    attackMelody: 0,
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
    :attack-melody="props.attackMelody"
    :critical-melody="props.criticalMelody"
    :critical-melody-bonus="props.criticalMelodyBonus"
  />
</template>

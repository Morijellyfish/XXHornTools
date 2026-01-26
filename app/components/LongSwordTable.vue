<script setup lang="ts">
import type { LongSword } from '~/types/weapons'
import type { TableBaseOption } from '~/types/tableBaseOption'
import WeaponTable from './WeaponTable.vue'

interface Props extends TableBaseOption {
  longSwords: LongSword[]
}

withDefaults(defineProps<Props>(), {
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
    attackMelody: 'none',
    attackMelodyMultiplier: 1.0,
  }),
  sharpnessMultiplier: 1.0,
})
</script>

<template>
  <WeaponTable
    :weapons="longSwords"
    :selected-sharpness="selectedSharpness"
    :critical-buffs="criticalBuffs"
    :attack-modifiers="attackModifiers"
    :sharpness-multiplier="sharpnessMultiplier"
  />
</template>

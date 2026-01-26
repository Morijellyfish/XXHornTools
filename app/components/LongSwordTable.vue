<script setup lang="ts">
import type { LongSword } from '~/types/weapons'
import type { AttackBuffs } from '~/types/attackBuff/attackBuffs'
import type { SharpnessType } from '~/composables/useWeaponTable'
import WeaponTable from './WeaponTable.vue'

interface Props {
  longSwords: LongSword[]
  selectedSharpness?: SharpnessType
  criticalBonus?: number
  hasCriticalBoost?: boolean
  hasMadAffinity?: boolean
  attackModifiers?: AttackBuffs
  sharpnessMultiplier?: number
}

withDefaults(defineProps<Props>(), {
  selectedSharpness: 'normal',
  criticalBonus: 0,
  hasCriticalBoost: false,
  hasMadAffinity: false,
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
    :critical-bonus="criticalBonus"
    :has-critical-boost="hasCriticalBoost"
    :has-mad-affinity="hasMadAffinity"
    :attack-modifiers="attackModifiers"
    :sharpness-multiplier="sharpnessMultiplier"
  />
</template>

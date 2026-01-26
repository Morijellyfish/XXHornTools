<script setup lang="ts">
import type { LongSword } from '~/types/weapons'
import type { SharpnessType } from '~/composables/useWeaponTable'
import WeaponTableRow from './WeaponTableRow.vue'

interface Props {
  longSword: LongSword
  expectedValue: number
  attackWithBuffs: number
  baseAttack: number
  showBaseAttack: boolean
  affinity: number
  baseAffinity: number
  showBaseAffinity: boolean
  selectedSharpness: SharpnessType
  bludgeoner?: boolean
}

defineProps<Props>()
</script>

<template>
  <WeaponTableRow
    :weapon="longSword"
    :expected-value="expectedValue"
    :attack-with-buffs="attackWithBuffs"
    :base-attack="baseAttack"
    :show-base-attack="showBaseAttack"
    :affinity="affinity"
    :base-affinity="baseAffinity"
    :show-base-affinity="showBaseAffinity"
    :selected-sharpness="selectedSharpness"
    :bludgeoner="bludgeoner"
  />
</template>

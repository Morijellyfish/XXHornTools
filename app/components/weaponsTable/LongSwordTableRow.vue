<script setup lang="ts">
import type { LongSword } from '~/types/weapons'
import type { VisibleColumns } from '~/types/tableBaseOption'
import type { SharpnessType } from '~/composables/useWeaponTable'
import WeaponTableRow from './WeaponTableRow.vue'

interface Props {
  longSword: LongSword
  requiredMotionValue?: number
  attackCount?: number
  expectedValue: number
  physicalExpectedValue: number
  elementExpectedValue: number
  elementDamage: number
  attackWithBuffs: number
  baseAttack: number
  showBaseAttack: boolean
  affinity: number
  baseAffinity: number
  showBaseAffinity: boolean
  selectedSharpness: SharpnessType
  bludgeoner?: boolean
  visibleColumns: VisibleColumns
}

defineProps<Props>()
</script>

<template>
  <WeaponTableRow
    :weapon="longSword"
    :required-motion-value="requiredMotionValue"
    :attack-count="attackCount"
    :expected-value="expectedValue"
    :physical-expected-value="physicalExpectedValue"
    :element-expected-value="elementExpectedValue"
    :element-damage="elementDamage"
    :attack-with-buffs="attackWithBuffs"
    :base-attack="baseAttack"
    :show-base-attack="showBaseAttack"
    :affinity="affinity"
    :base-affinity="baseAffinity"
    :show-base-affinity="showBaseAffinity"
    :selected-sharpness="selectedSharpness"
    :bludgeoner="bludgeoner"
    :visible-columns="visibleColumns"
  />
</template>

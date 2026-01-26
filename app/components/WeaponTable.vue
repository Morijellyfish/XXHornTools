<script setup lang="ts" generic="T extends WeaponMelee">
import type { WeaponMelee } from '~/types/weapons'
import type { AttackBuffs } from '~/types/attackBuff/attackBuffs'
import { useWeaponTable, type SharpnessType } from '~/composables/useWeaponTable'
import WeaponTableRow from './WeaponTableRow.vue'

interface Props {
  weapons: T[]
  selectedSharpness?: SharpnessType
  criticalBonus?: number
  hasCriticalBoost?: boolean
  hasMadAffinity?: boolean
  attackModifiers?: AttackBuffs
  sharpnessMultiplier?: number
}

const props = withDefaults(defineProps<Props>(), {
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

const {
  sortedWeapons,
  toggleSort,
  getSortIcon,
  calculateAffinity,
  getExpectedValue,
  getAttackWithBuffs,
  isShowBaseAttack,
} = useWeaponTable(props)
</script>

<template>
  <div class="overflow-x-auto">
    <table class="w-full border-collapse">
      <thead>
        <tr class="border-b">
          <th class="text-left p-2">名称</th>
          <th
            class="text-left p-2 cursor-pointer hover:bg-gray-700 select-none"
            @click="toggleSort('expected')"
          >
            <span class="inline-flex items-center gap-1">
              期待値 <span class="w-4 text-center">{{ getSortIcon('expected') }}</span>
            </span>
          </th>
          <th
            class="text-left p-2 cursor-pointer hover:bg-gray-700 select-none"
            @click="toggleSort('attack')"
          >
            <span class="inline-flex items-center gap-1">
              攻撃 <span class="w-4 text-center">{{ getSortIcon('attack') }}</span>
            </span>
          </th>
          <th
            class="text-left p-2 cursor-pointer hover:bg-gray-700 select-none"
            @click="toggleSort('defense')"
          >
            <span class="inline-flex items-center gap-1">
              防御 <span class="w-4 text-center">{{ getSortIcon('defense') }}</span>
            </span>
          </th>
          <th
            class="text-left p-2 cursor-pointer hover:bg-gray-700 select-none w-25"
            @click="toggleSort('slots')"
          >
            <span class="inline-flex items-center gap-1">
              スロット <span class="w-4 text-center">{{ getSortIcon('slots') }}</span>
            </span>
          </th>
          <th
            class="text-left p-2 cursor-pointer hover:bg-gray-700 select-none"
            @click="toggleSort('affinity')"
          >
            <span class="inline-flex items-center gap-1">
              会心率 <span class="w-1 text-center">{{ getSortIcon('affinity') }}</span>
            </span>
          </th>
          <th class="text-left p-2">属性・状態異常</th>
          <!-- 拡張用ヘッダー -->
          <slot name="header-columns" />
          <th class="text-left p-2">斬れ味</th>
        </tr>
      </thead>
      <tbody>
        <WeaponTableRow
          v-for="weapon in sortedWeapons"
          :key="weapon.name"
          :weapon="weapon"
          :expected-value="getExpectedValue(weapon)"
          :attack-with-buffs="getAttackWithBuffs(weapon)"
          :base-attack="weapon.attack"
          :show-base-attack="isShowBaseAttack(weapon)"
          :affinity="calculateAffinity(weapon)"
          :base-affinity="weapon.affinity"
          :show-base-affinity="criticalBonus !== 0"
          :selected-sharpness="selectedSharpness"
          :bludgeoner="attackModifiers.bludgeoner"
        >
          <!-- 拡張用カラム -->
          <template #additional-columns="{ weapon: w }">
            <slot name="row-columns" :weapon="w" />
          </template>
        </WeaponTableRow>
      </tbody>
    </table>
  </div>
</template>

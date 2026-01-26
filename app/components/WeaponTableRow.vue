<script setup lang="ts" generic="T extends WeaponMelee">
import type { WeaponMelee } from '~/types/weapons'
import type { AttackMelody } from '~/types/attackBuff/attackBuffs'
import { getSharpnessColor, SharpnessColor } from '~/types/sharpness'
import type { SharpnessType } from '~/composables/useWeaponTable'

interface Props {
  weapon: T
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

// 属性・状態異常を文字列で表示
const formatElementOrStatus = (weapon: WeaponMelee): string => {
  if (weapon.element) {
    return `${weapon.element.type}${weapon.element.value}`
  }
  if (weapon.statusAilment) {
    return `${weapon.statusAilment.type}${weapon.statusAilment.value}`
  }
  return '-'
}

// スロットの各位置の値を取得
const getSlotValue = (slots: number, index: number): string => {
  return index < slots ? '◯' : '─'
}

// 会心率を文字列で表示
const formatAffinity = (affinity: number): string => {
  if (affinity === 0) return '0%'
  return `${affinity > 0 ? '+' : ''}${affinity}%`
}

// 切れ味が緑以下かどうかを判定（鈍器使いの対象）
const isGreenOrBelow = (color: SharpnessColor): boolean => {
  return (
    color === SharpnessColor.Green ||
    color === SharpnessColor.Yellow ||
    color === SharpnessColor.Orange ||
    color === SharpnessColor.Red
  )
}
</script>

<template>
  <tr class="border-b hover:bg-gray-50 dark:hover:bg-gray-800">
    <td class="p-2">{{ weapon.name }}</td>
    <td class="p-2">{{ expectedValue }}</td>
    <td class="p-2 text-right">
      <div class="flex flex-col">
        <span>{{ attackWithBuffs }}</span>
        <span v-if="showBaseAttack" class="text-xs text-gray-400"> ({{ baseAttack }}) </span>
      </div>
    </td>
    <td class="p-2">{{ weapon.defense }}</td>
    <td class="p-2">
      <div class="flex gap-0">
        <span v-for="i in 3" :key="i" class="flex-1 text-center">
          {{ getSlotValue(weapon.slots, i - 1) }}
        </span>
      </div>
    </td>
    <td class="p-2 text-right">
      <div class="flex flex-col">
        <span
          :class="{
            'text-red-500': affinity > 100,
          }"
        >
          {{ formatAffinity(affinity) }}
        </span>
        <span v-if="showBaseAffinity" class="text-xs text-gray-400">
          ({{ formatAffinity(baseAffinity) }})
        </span>
      </div>
    </td>
    <td class="p-2">{{ formatElementOrStatus(weapon) }}</td>
    <!-- 拡張用スロット -->
    <slot name="additional-columns" :weapon="weapon" />
    <td class="p-2">
      <div class="flex flex-col gap-1">
        <div
          class="flex items-center gap-1"
          :class="{ 'opacity-50': selectedSharpness !== 'normal' }"
        >
          <span
            class="text-xs w-7"
            :class="{
              'text-yellow-500': bludgeoner && isGreenOrBelow(weapon.sharpness.normal.color),
            }"
          >
            通常:
          </span>
          <span
            class="inline-block w-4 h-4 border border-gray-600"
            :style="{ background: getSharpnessColor(weapon.sharpness.normal.color) }"
            :title="String(weapon.sharpness.normal.length)"
          />
          <div
            class="text-xs font-mono w-5 text-right"
            :class="{
              'text-yellow-500': bludgeoner && isGreenOrBelow(weapon.sharpness.normal.color),
            }"
          >
            {{ weapon.sharpness.normal.length }}
          </div>
        </div>
        <div
          v-if="weapon.sharpness.plus1"
          class="flex items-center gap-1"
          :class="{ 'opacity-50': selectedSharpness !== 'plus1' }"
        >
          <span
            class="text-xs w-7"
            :class="{
              'text-yellow-500': bludgeoner && isGreenOrBelow(weapon.sharpness.plus1.color),
            }"
          >
            匠1:
          </span>
          <span
            class="inline-block w-4 h-4 border border-gray-600"
            :style="{ background: getSharpnessColor(weapon.sharpness.plus1.color) }"
            :title="String(weapon.sharpness.plus1.length)"
          />
          <div
            class="text-xs font-mono w-5 text-right"
            :class="{
              'text-yellow-500': bludgeoner && isGreenOrBelow(weapon.sharpness.plus1.color),
            }"
          >
            {{ weapon.sharpness.plus1.length }}
          </div>
        </div>
        <div
          v-if="weapon.sharpness.plus2"
          class="flex items-center gap-1"
          :class="{ 'opacity-50': selectedSharpness !== 'plus2' }"
        >
          <span
            class="text-xs w-7"
            :class="{
              'text-yellow-500': bludgeoner && isGreenOrBelow(weapon.sharpness.plus2.color),
            }"
          >
            匠2:
          </span>
          <span
            class="inline-block w-4 h-4 border border-gray-600"
            :style="{ background: getSharpnessColor(weapon.sharpness.plus2.color) }"
            :title="String(weapon.sharpness.plus2.length)"
          />
          <div
            class="text-xs font-mono w-5 text-right"
            :class="{
              'text-yellow-500': bludgeoner && isGreenOrBelow(weapon.sharpness.plus2.color),
            }"
          >
            {{ weapon.sharpness.plus2.length }}
          </div>
        </div>
      </div>
    </td>
  </tr>
</template>

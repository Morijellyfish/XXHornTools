<script setup lang="ts" generic="T extends WeaponMelee">
import type { WeaponMelee } from '~/types/weapons'
import type { VisibleColumns } from '~/types/tableBaseOption'
import { isColumnVisible } from '~/types/tableBaseOption'
import { getSharpnessColor, SharpnessColor } from '~/types/sharpness'
import type { SharpnessType } from '~/composables/useWeaponTable'

interface Props {
  weapon: T
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

const props = defineProps<Props>()

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
  <tr class="border-b mp-border">
    <td v-if="isColumnVisible(props.visibleColumns, 'name')" class="p-2">
      <span class="mp-clamp-2">{{ weapon.name }}</span>
    </td>
    <td
      v-if="isColumnVisible(props.visibleColumns, 'requiredMotionValue')"
      class="p-2 text-right tabular-nums whitespace-nowrap"
    >
      <div class="flex flex-col items-end leading-tight">
        <span>{{ (requiredMotionValue ?? 0).toFixed(1) }}</span>
        <span v-if="(attackCount ?? 1) >= 2" class="text-xs mp-muted">
          (平均{{ ((requiredMotionValue ?? 0) / Math.max(1, attackCount ?? 1)).toFixed(1) }})
        </span>
      </div>
    </td>
    <td
      v-if="isColumnVisible(props.visibleColumns, 'expected')"
      class="p-2 text-right tabular-nums whitespace-nowrap"
    >
      <div class="flex flex-col items-end leading-tight">
        <span>{{ expectedValue }}</span>
        <span v-if="elementExpectedValue > 0 && weapon.element" class="text-xs mp-muted">
          ({{ physicalExpectedValue }}+{{ weapon.element.type }}{{ elementExpectedValue }})
        </span>
      </div>
    </td>
    <td
      v-if="isColumnVisible(props.visibleColumns, 'elementDamage')"
      class="p-2 text-right tabular-nums whitespace-nowrap"
    >
      <span v-if="elementDamage > 0">{{ elementDamage }}</span>
      <span v-else class="mp-muted">-</span>
    </td>
    <td
      v-if="isColumnVisible(props.visibleColumns, 'attack')"
      class="p-2 text-right tabular-nums whitespace-nowrap"
    >
      <div class="flex flex-col items-end leading-tight">
        <span>{{ attackWithBuffs }}</span>
        <span v-if="showBaseAttack" class="text-xs mp-muted">({{ baseAttack }})</span>
      </div>
    </td>
    <td
      v-if="isColumnVisible(props.visibleColumns, 'defense')"
      class="p-2 text-right tabular-nums whitespace-nowrap"
    >
      {{ weapon.defense }}
    </td>
    <td v-if="isColumnVisible(props.visibleColumns, 'slots')" class="p-2 whitespace-nowrap">
      <div class="inline-flex items-center">
        <span v-for="i in 3" :key="i" class="w-5 text-center">
          {{ getSlotValue(weapon.slots, i - 1) }}
        </span>
      </div>
    </td>
    <td
      v-if="isColumnVisible(props.visibleColumns, 'affinity')"
      class="p-2 text-right tabular-nums whitespace-nowrap"
    >
      <div class="flex flex-col items-end leading-tight">
        <span
          :class="{
            'mp-alert-attack': affinity > 100,
          }"
        >
          {{ formatAffinity(affinity) }}
        </span>
        <span v-if="showBaseAffinity" class="text-xs mp-muted">
          ({{ formatAffinity(baseAffinity) }})
        </span>
      </div>
    </td>
    <td v-if="isColumnVisible(props.visibleColumns, 'elementStatus')" class="p-2">
      <span class="whitespace-nowrap">{{ formatElementOrStatus(weapon) }}</span>
    </td>
    <!-- 拡張用スロット -->
    <slot name="additional-columns" :weapon="weapon" />
    <td v-if="isColumnVisible(props.visibleColumns, 'sharpness')" class="p-2">
      <div class="flex flex-col gap-1">
        <div
          class="flex items-center gap-1"
          :class="{ 'opacity-50': selectedSharpness !== 'normal' }"
        >
          <span
            class="text-xs w-7"
            :class="{
              'mp-alert-bludgeoner': bludgeoner && isGreenOrBelow(weapon.sharpness.normal.color),
            }"
          >
            通常:
          </span>
          <span
            class="inline-block w-4 h-4 border mp-border"
            :style="{ background: getSharpnessColor(weapon.sharpness.normal.color) }"
            :title="String(weapon.sharpness.normal.length)"
          />
          <div
            class="text-xs font-mono w-5 text-right"
            :class="{
              'mp-alert-bludgeoner': bludgeoner && isGreenOrBelow(weapon.sharpness.normal.color),
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
              'mp-alert-bludgeoner': bludgeoner && isGreenOrBelow(weapon.sharpness.plus1.color),
            }"
          >
            匠1:
          </span>
          <span
            class="inline-block w-4 h-4 border mp-border"
            :style="{ background: getSharpnessColor(weapon.sharpness.plus1.color) }"
            :title="String(weapon.sharpness.plus1.length)"
          />
          <div
            class="text-xs font-mono w-5 text-right"
            :class="{
              'mp-alert-bludgeoner': bludgeoner && isGreenOrBelow(weapon.sharpness.plus1.color),
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
              'mp-alert-bludgeoner': bludgeoner && isGreenOrBelow(weapon.sharpness.plus2.color),
            }"
          >
            匠2:
          </span>
          <span
            class="inline-block w-4 h-4 border mp-border"
            :style="{ background: getSharpnessColor(weapon.sharpness.plus2.color) }"
            :title="String(weapon.sharpness.plus2.length)"
          />
          <div
            class="text-xs font-mono w-5 text-right"
            :class="{
              'mp-alert-bludgeoner': bludgeoner && isGreenOrBelow(weapon.sharpness.plus2.color),
            }"
          >
            {{ weapon.sharpness.plus2.length }}
          </div>
        </div>
      </div>
    </td>
  </tr>
</template>

<script setup lang="ts">
import type { HuntingHorn } from '~/types/weapons'
import type { Note } from '~/types/notes'
import { NOTE_COLORS, getNoteBorderColor } from '~/types/notes'
import type { AttackMelody } from '~/types/attackBuff/attackBuffs'
import { getSharpnessColor, SharpnessColor } from '~/types/sharpness'

type SharpnessType = 'normal' | 'plus1' | 'plus2'
type CriticalMelody = 'none' | '15' | '20' | 'horn'

interface Props {
  horn: HuntingHorn
  expectedValue: number
  attackWithBuffs: number
  baseAttack: number
  showBaseAttack: boolean
  affinity: number
  baseAffinity: number
  showBaseAffinity: boolean
  selectedSharpness: SharpnessType
  attackMelody: AttackMelody
  criticalMelody: CriticalMelody
  bludgeoner?: boolean
  selectedMelodyNames?: Set<string> // フィルターで選択されている旋律名
  highlightedMelodyNames?: Set<string> // ハイライトされている旋律名
  onMelodyClick?: (melodyName: string) => void // 旋律名クリック時のコールバック
}

defineProps<Props>()

// 音色の色を取得
const getNoteColor = (note: Note): string => {
  return NOTE_COLORS[note]
}

// 属性・状態異常を文字列で表示
const formatElementOrStatus = (horn: HuntingHorn): string => {
  if (horn.element) {
    return `${horn.element.type}${horn.element.value}`
  }
  if (horn.statusAilment) {
    return `${horn.statusAilment.type}${horn.statusAilment.value}`
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
    <td class="p-2">{{ horn.name }}</td>
    <td class="p-2">{{ expectedValue }}</td>
    <td class="p-2 text-right">
      <div class="flex flex-col">
        <span>{{ attackWithBuffs }}</span>
        <span v-if="showBaseAttack" class="text-xs text-gray-400"> ({{ baseAttack }}) </span>
      </div>
    </td>
    <td class="p-2">{{ horn.defense }}</td>
    <td class="p-2">
      <div class="flex gap-0">
        <span v-for="i in 3" :key="i" class="flex-1 text-center">
          {{ getSlotValue(horn.slots, i - 1) }}
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
    <td class="p-2">{{ formatElementOrStatus(horn) }}</td>
    <td class="p-2">
      <div class="flex items-center gap-1">
        <span
          v-for="(note, index) in [horn.notes.note1, horn.notes.note2, horn.notes.note3]"
          :key="index"
          :title="note"
          class="inline-block w-5 h-5 rounded-full border-2 flex-shrink-0"
          :style="{
            background: getNoteColor(note),
            borderColor: getNoteBorderColor(note),
          }"
        />
      </div>
    </td>
    <td class="p-2">
      <div class="flex flex-col gap-1 text-sm">
        <span
          v-for="(name, index) in horn.notes.getMelodyNames()"
          :key="index"
          :class="{
            'text-red-500':
              (attackMelody === 'horn' &&
                (name === '攻撃力強化【小】' || name === '攻撃力強化【大】')) ||
              (criticalMelody === 'horn' && name === '会心率UP&体力回復【小】'),
            'bg-blue-200 dark:bg-blue-900 px-1 rounded':
              selectedMelodyNames && selectedMelodyNames.has(name),
            'bg-yellow-300 dark:bg-yellow-700 px-1 rounded cursor-pointer hover:bg-yellow-400 dark:hover:bg-yellow-600':
              highlightedMelodyNames && highlightedMelodyNames.has(name),
            'cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 px-1 rounded':
              onMelodyClick && !(highlightedMelodyNames && highlightedMelodyNames.has(name)),
          }"
          @click="onMelodyClick && onMelodyClick(name)"
        >
          {{ name }}
        </span>
      </div>
    </td>
    <td class="p-2">
      <div class="flex flex-col gap-1">
        <div
          class="flex items-center gap-1"
          :class="{ 'opacity-50': selectedSharpness !== 'normal' }"
        >
          <span
            class="text-xs w-7"
            :class="{
              'text-yellow-500': bludgeoner && isGreenOrBelow(horn.sharpness.normal.color),
            }"
          >
            通常:
          </span>
          <span
            class="inline-block w-4 h-4 border border-gray-600"
            :style="{ background: getSharpnessColor(horn.sharpness.normal.color) }"
            :title="String(horn.sharpness.normal.length)"
          />
          <div
            class="text-xs font-mono w-5 text-right"
            :class="{
              'text-yellow-500': bludgeoner && isGreenOrBelow(horn.sharpness.normal.color),
            }"
          >
            {{ horn.sharpness.normal.length }}
          </div>
        </div>
        <div
          v-if="horn.sharpness.plus1"
          class="flex items-center gap-1"
          :class="{ 'opacity-50': selectedSharpness !== 'plus1' }"
        >
          <span
            class="text-xs w-7"
            :class="{
              'text-yellow-500': bludgeoner && isGreenOrBelow(horn.sharpness.plus1.color),
            }"
          >
            匠1:
          </span>
          <span
            class="inline-block w-4 h-4 border border-gray-600"
            :style="{ background: getSharpnessColor(horn.sharpness.plus1.color) }"
            :title="String(horn.sharpness.plus1.length)"
          />
          <div
            class="text-xs font-mono w-5 text-right"
            :class="{
              'text-yellow-500': bludgeoner && isGreenOrBelow(horn.sharpness.plus1.color),
            }"
          >
            {{ horn.sharpness.plus1.length }}
          </div>
        </div>
        <div
          v-if="horn.sharpness.plus2"
          class="flex items-center gap-1"
          :class="{ 'opacity-50': selectedSharpness !== 'plus2' }"
        >
          <span
            class="text-xs w-7"
            :class="{
              'text-yellow-500': bludgeoner && isGreenOrBelow(horn.sharpness.plus2.color),
            }"
          >
            匠2:
          </span>
          <span
            class="inline-block w-4 h-4 border border-gray-600"
            :style="{ background: getSharpnessColor(horn.sharpness.plus2.color) }"
            :title="String(horn.sharpness.plus2.length)"
          />
          <div
            class="text-xs font-mono w-5 text-right"
            :class="{
              'text-yellow-500': bludgeoner && isGreenOrBelow(horn.sharpness.plus2.color),
            }"
          >
            {{ horn.sharpness.plus2.length }}
          </div>
        </div>
      </div>
    </td>
  </tr>
</template>

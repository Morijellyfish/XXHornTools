<script setup lang="ts">
import type { Horn, Note } from '~/types/horn'
import { NOTE_COLORS, getNoteBorderColor } from '~/types/horn'
import { getSharpnessColor } from '~/types/sharpness'
import { calculateExpectedValue } from '~/utils/damageCalculate'
import { ref, computed } from 'vue'

type SharpnessType = 'normal' | 'plus1' | 'plus2'

interface Props {
  horns: Horn[]
  selectedSharpness?: SharpnessType
  criticalBonus?: number
  hasCriticalBoost?: boolean
  hasMadAffinity?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  selectedSharpness: 'normal',
  criticalBonus: 0,
  hasCriticalBoost: false,
  hasMadAffinity: false,
})

// ソート状態
type SortKey = 'expected' | 'attack' | 'defense' | 'slots' | 'affinity' | null
type SortOrder = 'asc' | 'desc'

const sortKey = ref<SortKey>('expected')
const sortOrder = ref<SortOrder>('desc')

// ソート処理
const sortedHorns = computed(() => {
  if (!sortKey.value) return props.horns

  const sorted = [...props.horns].sort((a, b) => {
    let aValue: number
    let bValue: number

    switch (sortKey.value) {
      case 'expected':
        aValue = getExpectedValue(a)
        bValue = getExpectedValue(b)
        break
      case 'attack':
        aValue = a.attack
        bValue = b.attack
        break
      case 'defense':
        aValue = a.defense
        bValue = b.defense
        break
      case 'slots':
        aValue = a.slots
        bValue = b.slots
        break
      case 'affinity':
        aValue = a.affinity
        bValue = b.affinity
        break
      default:
        return 0
    }

    if (sortOrder.value === 'asc') {
      return aValue - bValue
    } else {
      return bValue - aValue
    }
  })

  return sorted
})

// ソート切り替え
const toggleSort = (key: SortKey) => {
  if (sortKey.value === key) {
    // 同じカラムをクリックした場合は昇順/降順を切り替え
    sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc'
  } else {
    // 別のカラムをクリックした場合はそのカラムで昇順ソート
    sortKey.value = key
    sortOrder.value = 'asc'
  }
}

// ソートアイコン表示
const getSortIcon = (key: SortKey): string => {
  if (sortKey.value !== key) return ''
  return sortOrder.value === 'asc' ? '↑' : '↓'
}

// 音色の色を取得
const getNoteColor = (note: Note): string => {
  return NOTE_COLORS[note]
}

// 属性・状態異常を文字列で表示
const formatElementOrStatus = (horn: Horn): string => {
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

// 会心率を計算（元の会心率 + 会心補正）
const calculateAffinity = (horn: Horn): number => {
  return horn.affinity + props.criticalBonus
}

// 期待値を計算
const getExpectedValue = (horn: Horn): number => {
  return calculateExpectedValue(
    horn,
    props.selectedSharpness,
    props.criticalBonus,
    props.hasCriticalBoost,
    props.hasMadAffinity
  )
}
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
          <th class="text-left p-2">音色</th>
          <th class="text-left p-2">斬れ味</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="horn in sortedHorns"
          :key="horn.name"
          class="border-b hover:bg-gray-50 dark:hover:bg-gray-800"
        >
          <td class="p-2">{{ horn.name }}</td>
          <td class="p-2">{{ getExpectedValue(horn) }}</td>
          <td class="p-2">{{ horn.attack }}</td>
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
              <span>{{ formatAffinity(calculateAffinity(horn)) }}</span>
              <span class="text-xs text-gray-400">({{ formatAffinity(horn.affinity) }})</span>
            </div>
          </td>
          <td class="p-2">{{ formatElementOrStatus(horn) }}</td>
          <td class="p-2">
            <div class="flex items-center gap-1">
              <span
                v-for="(note, index) in [horn.note1, horn.note2, horn.note3]"
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
            <div class="flex flex-col gap-1">
              <div
                class="flex items-center gap-1"
                :class="{ 'opacity-50': props.selectedSharpness !== 'normal' }"
              >
                <span class="text-xs w-7">通常:</span>
                <span
                  class="inline-block w-4 h-4 border border-gray-600"
                  :style="{ background: getSharpnessColor(horn.sharpness.normal.color) }"
                  :title="String(horn.sharpness.normal.length)"
                />
                <div class="text-xs font-mono w-5 text-right">
                  {{ horn.sharpness.normal.length }}
                </div>
              </div>
              <div
                v-if="horn.sharpness.plus1"
                class="flex items-center gap-1"
                :class="{ 'opacity-50': props.selectedSharpness !== 'plus1' }"
              >
                <span class="text-xs w-7">匠1:</span>
                <span
                  class="inline-block w-4 h-4 border border-gray-600"
                  :style="{ background: getSharpnessColor(horn.sharpness.plus1.color) }"
                  :title="String(horn.sharpness.plus1.length)"
                />
                <div class="text-xs font-mono w-5 text-right">
                  {{ horn.sharpness.plus1.length }}
                </div>
              </div>
              <div
                v-if="horn.sharpness.plus2"
                class="flex items-center gap-1"
                :class="{ 'opacity-50': props.selectedSharpness !== 'plus2' }"
              >
                <span class="text-xs w-7">匠2:</span>
                <span
                  class="inline-block w-4 h-4 border border-gray-600"
                  :style="{ background: getSharpnessColor(horn.sharpness.plus2.color) }"
                  :title="String(horn.sharpness.plus2.length)"
                />
                <div class="text-xs font-mono w-5 text-right">
                  {{ horn.sharpness.plus2.length }}
                </div>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

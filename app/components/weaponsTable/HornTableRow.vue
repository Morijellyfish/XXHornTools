<script setup lang="ts">
import type { HuntingHorn } from '~/types/weapons'
import type { Note } from '~/types/notes'
import { NOTE_COLORS, getNoteBorderColor } from '~/types/notes'
import { AttackMelody } from '~/types/attackBuff'
import { CriticalMelody } from '~/types/criticalBuff'
import type { SharpnessType } from '~/composables/useWeaponTable'
import WeaponTableRow from './WeaponTableRow.vue'

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
</script>

<template>
  <WeaponTableRow
    :weapon="horn"
    :expected-value="expectedValue"
    :attack-with-buffs="attackWithBuffs"
    :base-attack="baseAttack"
    :show-base-attack="showBaseAttack"
    :affinity="affinity"
    :base-affinity="baseAffinity"
    :show-base-affinity="showBaseAffinity"
    :selected-sharpness="selectedSharpness"
    :bludgeoner="bludgeoner"
  >
    <template #additional-columns>
      <!-- 音色カラム -->
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
      <!-- 旋律カラム -->
      <td class="p-2">
        <div class="flex flex-col gap-1 text-sm">
          <span
            v-for="(name, index) in horn.notes.getMelodyNames()"
            :key="index"
            :class="{
              'text-[var(--mh-alert-attack)]':
                (attackMelody === AttackMelody.HornDependent &&
                  (name === '攻撃力強化【小】' || name === '攻撃力強化【大】')) ||
                (criticalMelody === CriticalMelody.HornDependent &&
                  name === '会心率UP&体力回復【小】'),
              'bg-[var(--mh-primary)] text-[var(--mh-surface-1)] px-1 rounded':
                selectedMelodyNames &&
                selectedMelodyNames.has(name) &&
                !(highlightedMelodyNames && highlightedMelodyNames.has(name)),
              'bg-[var(--mh-accent)] text-[var(--mh-surface-1)] px-1 rounded cursor-pointer hover:opacity-90':
                highlightedMelodyNames && highlightedMelodyNames.has(name),
              'cursor-pointer hover:bg-[var(--mh-surface-2)] px-1 rounded':
                onMelodyClick && !(highlightedMelodyNames && highlightedMelodyNames.has(name)),
            }"
            @click="onMelodyClick && onMelodyClick(name)"
          >
            {{ name }}
          </span>
        </div>
      </td>
    </template>
  </WeaponTableRow>
</template>

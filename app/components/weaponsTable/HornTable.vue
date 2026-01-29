<script setup lang="ts">
import type { HuntingHorn } from '~/types/weapons'
import type { TableBaseOption } from '~/types/tableBaseOption'
import { CriticalMelody } from '~/types/tableBaseOption'
import { AttackMelody } from '~/types/attackBuff/attackBuff_H'
import { NOTE_COLORS, getNoteBorderColor } from '~/types/notes'
import WeaponTable from './WeaponTable.vue'

interface Props extends TableBaseOption {
  horns: HuntingHorn[]
  criticalMelody?: CriticalMelody
  criticalMelodyBonus?: number
  selectedMelodyNames?: Set<string> // フィルターで選択されている旋律名
  highlightedMelodyNames?: Set<string> // ハイライトされている旋律名
  onMelodyClick?: (melodyName: string) => void // 旋律名クリック時のコールバック
}

const props = withDefaults(defineProps<Props>(), {
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
    attackMelody: AttackMelody.None,
    attackMelodyMultiplier: 1.0,
  }),
  criticalMelody: CriticalMelody.None,
  criticalMelodyBonus: 0,
  sharpnessMultiplier: 1.0,
})
</script>

<template>
  <WeaponTable
    :weapons="props.horns"
    :selected-sharpness="props.selectedSharpness"
    :critical-buffs="props.criticalBuffs"
    :attack-modifiers="props.attackModifiers"
    :sharpness-multiplier="props.sharpnessMultiplier"
    :critical-melody="props.criticalMelody"
  >
    <template #header-columns>
      <th class="text-left p-2">音色</th>
      <th class="text-left p-2">旋律</th>
    </template>
    <template #row-columns="{ weapon: horn }">
      <!-- 音色カラム -->
      <td class="p-2">
        <div class="flex items-center gap-1">
          <span
            v-for="(note, index) in [horn.notes.note1, horn.notes.note2, horn.notes.note3]"
            :key="index"
            :title="note"
            class="inline-block w-5 h-5 rounded-full border-2 flex-shrink-0"
            :style="{
              background: NOTE_COLORS[note],
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
              'text-red-500':
                ((props.attackModifiers?.attackMelody ?? AttackMelody.None) === AttackMelody.HornDependent &&
                  (name === '攻撃力強化【小】' || name === '攻撃力強化【大】')) ||
                (props.criticalMelody === CriticalMelody.HornDependent && name === '会心率UP&体力回復【小】'),
              'bg-blue-200 dark:bg-blue-900 px-1 rounded':
                props.selectedMelodyNames && props.selectedMelodyNames.has(name),
              'bg-yellow-300 dark:bg-yellow-700 px-1 rounded cursor-pointer hover:bg-yellow-400 dark:hover:bg-yellow-600':
                props.highlightedMelodyNames && props.highlightedMelodyNames.has(name),
              'cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 px-1 rounded':
                props.onMelodyClick &&
                !(props.highlightedMelodyNames && props.highlightedMelodyNames.has(name)),
            }"
            @click="props.onMelodyClick && props.onMelodyClick(name)"
          >
            {{ name }}
          </span>
        </div>
      </td>
    </template>
  </WeaponTable>
</template>

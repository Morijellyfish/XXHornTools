<script setup lang="ts">
import type { HuntingHorn } from '~/types/weapons'
import type { TableBaseOption } from '~/types/tableBaseOption'
import { isColumnVisible } from '~/types/tableBaseOption'
import { CriticalMelody } from '~/types/criticalBuff'
import { AttackMelody } from '~/types/attackBuff'
import { ElementMelody } from '~/types/elementBuff'
import { NOTE_COLORS, getNoteBorderColor } from '~/types/notes'
import WeaponTable from './WeaponTable.vue'

interface Props extends TableBaseOption {
  horns: HuntingHorn[]
  selectedMelodyNames?: Set<string> // フィルターで選択されている旋律名
  highlightedMelodyNames?: Set<string> // ハイライトされている旋律名
  onMelodyClick?: (melodyName: string) => void // 旋律名クリック時のコールバック
}

const props = withDefaults(defineProps<Props>(), {
  selectedSharpness: 'normal',
  criticalBuffs: () => ({
    hasCriticalBoost: false,
    hasMadAffinity: false,
  }),
  attackModifiers: () => ({
    powerCharm: false,
    powerTalon: false,
    attackSkill: 'none',
    attackMelody: AttackMelody.None,
  }),
  elementModifiers: () => ({
    elementMelody: ElementMelody.None,
  }),
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
    :critical-melody="props.criticalBuffs?.criticalMelody"
    :target-damage-settings="props.targetDamageSettings"
    :visible-columns="props.visibleColumns"
  >
    <template #header-columns>
      <th v-if="isColumnVisible(props.visibleColumns, 'notes')" class="text-left p-2">音色</th>
      <th v-if="isColumnVisible(props.visibleColumns, 'melodies')" class="text-left p-2">旋律</th>
    </template>
    <template #row-columns="{ weapon: horn }">
      <!-- 音色カラム -->
      <td v-if="isColumnVisible(props.visibleColumns, 'notes')" class="p-2">
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
      <td v-if="isColumnVisible(props.visibleColumns, 'melodies')" class="p-2">
        <div class="flex flex-col gap-1 mp-body">
          <span
            v-for="(name, index) in horn.notes.getMelodyNames()"
            :key="index"
            :class="{
              'mp-alert-attack':
                ((props.attackModifiers?.attackMelody ?? AttackMelody.None) ===
                  AttackMelody.HornDependent &&
                  (name === '攻撃力強化【小】' || name === '攻撃力強化【大】')) ||
                ((props.criticalBuffs?.criticalMelody ?? CriticalMelody.None) ===
                  CriticalMelody.HornDependent &&
                  name === '会心率UP&体力回復【小】') ||
                ((props.elementModifiers?.elementMelody ?? ElementMelody.None) ===
                  ElementMelody.HornDependent &&
                  name === '属性攻撃力強化'),
              'mp-chip-primary':
                props.selectedMelodyNames &&
                props.selectedMelodyNames.has(name) &&
                !(props.highlightedMelodyNames && props.highlightedMelodyNames.has(name)),
              'mp-chip-accent cursor-pointer hover:opacity-90':
                props.highlightedMelodyNames && props.highlightedMelodyNames.has(name),
              'cursor-pointer mp-hover-surface-2 px-1 rounded':
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

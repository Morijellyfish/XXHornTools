<script setup lang="ts">
import type { HuntingHorn } from '~/types/weapons'
import type { AttackBuffs } from '~/types/attackBuff/attackBuffs'
import { calculateExpectedValue } from '~/utils/damageCalculate'
import { calculateAttackWithBuffs } from '~/utils/attackBuffCalculate'
import { NOTE_COLORS, getNoteBorderColor } from '~/types/notes'
import type { SharpnessType } from '~/composables/useWeaponTable'
import WeaponTable from './WeaponTable.vue'

type CriticalMelody = 'none' | '15' | '20' | 'horn'

interface Props {
  horns: HuntingHorn[]
  selectedSharpness?: SharpnessType
  criticalBonus?: number
  hasCriticalBoost?: boolean
  hasMadAffinity?: boolean
  attackModifiers?: AttackBuffs
  criticalMelody?: CriticalMelody
  criticalMelodyBonus?: number
  sharpnessMultiplier?: number // 切れ味補正倍率（デフォルト: 1.0 = 補正なし）
  selectedMelodyNames?: Set<string> // フィルターで選択されている旋律名
  highlightedMelodyNames?: Set<string> // ハイライトされている旋律名
  onMelodyClick?: (melodyName: string) => void // 旋律名クリック時のコールバック
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
  criticalMelody: 'none',
  criticalMelodyBonus: 0,
  sharpnessMultiplier: 1.0,
})

// 会心強化旋律の補正値を取得（criticalMelodyの設定を考慮）
const getCriticalMelodyBonus = (horn: HuntingHorn): number => {
  // 笛依存の場合は、各狩猟笛の旋律を確認
  if (props.criticalMelody === 'horn') {
    return horn.notes.getMaxMelodyBonus_Critical()
  }
  // 固定値の場合は、propsから取得
  return props.criticalMelodyBonus
}

// 攻撃旋律の倍率を取得（attackMelodyの設定を考慮）
const getAttackMelodyMultiplier = (horn: HuntingHorn): number => {
  if (props.attackModifiers.attackMelody !== 'horn') {
    return props.attackModifiers.attackMelodyMultiplier ?? 1.0
  }
  return horn.notes.getMaxMelodyMultiplier_Attack()
}

// 期待値を計算（HornTable固有のロジック）
const getExpectedValue = (horn: HuntingHorn): number => {
  // 補正済みの攻撃力を計算
  const attackWithBuffs = getAttackWithBuffs(horn)
  // 会心補正（会心補正 + 会心強化旋律）
  const criticalMelodyBonus = getCriticalMelodyBonus(horn)
  const totalCriticalBonus = props.criticalBonus + criticalMelodyBonus
  return calculateExpectedValue(
    attackWithBuffs,
    horn,
    props.selectedSharpness,
    totalCriticalBonus,
    props.hasCriticalBoost,
    props.hasMadAffinity,
    props.sharpnessMultiplier
  )
}

// 補正済みの攻撃力を計算
const getAttackWithBuffs = (horn: HuntingHorn): number => {
  return calculateAttackWithBuffs(
    horn.attack,
    props.attackModifiers,
    horn,
    props.selectedSharpness
  )
}

// 会心率を計算（元の会心率 + 会心補正 + 会心強化旋律）
const calculateAffinity = (horn: HuntingHorn): number => {
  const criticalMelodyBonus = getCriticalMelodyBonus(horn)
  return horn.affinity + props.criticalBonus + criticalMelodyBonus
}

// 元の攻撃力を括弧で表示するかどうかを判定
const isShowBaseAttack = (horn: HuntingHorn): boolean => {
  const modifiers = props.attackModifiers
  // 力の解放は攻撃力補正がないため除外
  const challengeSkill = modifiers.challengeSkill
  const hasAttackBuffFromChallengeSkill =
    challengeSkill &&
    challengeSkill !== 'none' &&
    challengeSkill !== 'latentPower1' &&
    challengeSkill !== 'latentPower2'

  return (
    modifiers.powerCharm ||
    modifiers.powerTalon ||
    (modifiers.preparedBuff && modifiers.preparedBuff !== 'none') ||
    (modifiers.shortTermBuff && modifiers.shortTermBuff !== 'none') ||
    modifiers.shortHypnosis ||
    (modifiers.attackSkill ?? 'none') !== 'none' ||
    (modifiers.adrenaline && modifiers.adrenaline !== 'none') ||
    hasAttackBuffFromChallengeSkill ||
    (modifiers.hunterSkill && modifiers.hunterSkill !== 'none') ||
    modifiers.bludgeoner ||
    modifiers.resuscitate ||
    modifiers.resentment ||
    (modifiers.fortify && modifiers.fortify !== 'none') ||
    modifiers.dragonInstinct ||
    getAttackMelodyMultiplier(horn) !== 1.0
  )
}
</script>

<template>
  <WeaponTable
    :weapons="horns"
    :selected-sharpness="selectedSharpness"
    :critical-bonus="criticalBonus"
    :has-critical-boost="hasCriticalBoost"
    :has-mad-affinity="hasMadAffinity"
    :attack-modifiers="attackModifiers"
    :sharpness-multiplier="sharpnessMultiplier"
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
                ((attackModifiers.attackMelody ?? 'none') === 'horn' &&
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
    </template>
  </WeaponTable>
</template>

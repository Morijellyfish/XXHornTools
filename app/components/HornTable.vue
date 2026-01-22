<script setup lang="ts">
import type { Horn } from '~/types/horn'
import type { AttackBuffs } from '~/types/attackBuff/attackBuffs'
import { calculateExpectedValue } from '~/utils/damageCalculate'
import { calculateAttackWithBuffs } from '~/utils/attackBuffCalculate'
import HornTableRow from './HornTableRow.vue'
import { ref, computed } from 'vue'

type SharpnessType = 'normal' | 'plus1' | 'plus2'
type CriticalMelody = 'none' | '15' | '20' | 'horn'

interface Props {
  horns: Horn[]
  selectedSharpness?: SharpnessType
  criticalBonus?: number
  hasCriticalBoost?: boolean
  hasMadAffinity?: boolean
  attackModifiers?: AttackBuffs
  criticalMelody?: CriticalMelody
  criticalMelodyBonus?: number
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

// 会心強化旋律の補正値を取得（criticalMelodyの設定を考慮）
const getCriticalMelodyBonus = (horn: Horn): number => {
  // 笛依存の場合は、各狩猟笛の旋律を確認
  if (props.criticalMelody === 'horn') {
    return horn.notes.getMaxMelodyBonus_Critical()
  }
  // 固定値の場合は、propsから取得
  return props.criticalMelodyBonus
}

// 会心率を計算（元の会心率 + 会心補正 + 会心強化旋律）
const calculateAffinity = (horn: Horn): number => {
  const criticalMelodyBonus = getCriticalMelodyBonus(horn)
  return horn.affinity + props.criticalBonus + criticalMelodyBonus
}

// 期待値を計算
const getExpectedValue = (horn: Horn): number => {
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
    props.hasMadAffinity
  )
}

// 攻撃旋律の倍率を取得（attackMelodyの設定を考慮）
const getAttackMelodyMultiplier = (horn: Horn): number => {
  if (props.attackModifiers.attackMelody !== 'horn') {
    return props.attackModifiers.attackMelodyMultiplier ?? 1.0
  }
  return horn.notes.getMaxMelodyMultiplier_Attack()
}

// 補正済みの攻撃力を計算
const getAttackWithBuffs = (horn: Horn): number => {
  return calculateAttackWithBuffs(horn.attack, props.attackModifiers, horn)
}

// 元の攻撃力を括弧で表示するかどうかを判定
const isShowBaseAttack = (horn: Horn): boolean => {
  // 力の解放は攻撃力補正がないため除外
  const challengeSkill = props.attackModifiers.challengeSkill
  const hasAttackBuffFromChallengeSkill =
    challengeSkill &&
    challengeSkill !== 'none' &&
    challengeSkill !== 'latentPower1' &&
    challengeSkill !== 'latentPower2'

  return (
    props.attackModifiers.powerCharm ||
    props.attackModifiers.powerTalon ||
    (props.attackModifiers.preparedBuff && props.attackModifiers.preparedBuff !== 'none') ||
    props.attackModifiers.shortHypnosis ||
    (props.attackModifiers.attackSkill ?? 'none') !== 'none' ||
    (props.attackModifiers.adrenaline && props.attackModifiers.adrenaline !== 'none') ||
    hasAttackBuffFromChallengeSkill ||
    (props.attackModifiers.hunterSkill && props.attackModifiers.hunterSkill !== 'none') ||
    props.attackModifiers.resuscitate ||
    props.attackModifiers.resentment ||
    (props.attackModifiers.fortify && props.attackModifiers.fortify !== 'none') ||
    props.attackModifiers.dragonInstinct ||
    getAttackMelodyMultiplier(horn) !== 1.0
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
          <th class="text-left p-2">旋律</th>
          <th class="text-left p-2">斬れ味</th>
        </tr>
      </thead>
      <tbody>
        <HornTableRow
          v-for="horn in sortedHorns"
          :key="horn.name"
          :horn="horn"
          :expected-value="getExpectedValue(horn)"
          :attack-with-buffs="getAttackWithBuffs(horn)"
          :base-attack="horn.attack"
          :show-base-attack="isShowBaseAttack(horn)"
          :affinity="calculateAffinity(horn)"
          :base-affinity="horn.affinity"
          :show-base-affinity="props.criticalBonus !== 0 || getCriticalMelodyBonus(horn) !== 0"
          :selected-sharpness="props.selectedSharpness"
          :attack-melody="props.attackModifiers.attackMelody ?? 'none'"
          :critical-melody="props.criticalMelody"
        />
      </tbody>
    </table>
  </div>
</template>

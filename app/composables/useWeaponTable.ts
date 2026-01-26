import { ref, computed, type Ref } from 'vue'
import type { WeaponMelee } from '~/types/weapons'
import type { AttackBuffs } from '~/types/attackBuff/attackBuffs'
import { calculateExpectedValue } from '~/utils/damageCalculate'
import { calculateAttackWithBuffs } from '~/utils/attackBuffCalculate'

export type SharpnessType = 'normal' | 'plus1' | 'plus2'
export type SortKey = 'expected' | 'attack' | 'defense' | 'slots' | 'affinity' | null
export type SortOrder = 'asc' | 'desc'

export interface UseWeaponTableProps<T extends WeaponMelee> {
  weapons: T[]
  selectedSharpness?: SharpnessType
  criticalBonus?: number
  hasCriticalBoost?: boolean
  hasMadAffinity?: boolean
  attackModifiers?: AttackBuffs
  sharpnessMultiplier?: number
}

export function useWeaponTable<T extends WeaponMelee>(props: UseWeaponTableProps<T>) {
  // ソート状態
  const sortKey = ref<SortKey>('expected')
  const sortOrder = ref<SortOrder>('desc')

  // ソート処理
  const sortedWeapons = computed(() => {
    if (!sortKey.value) return props.weapons

    const sorted = [...props.weapons].sort((a, b) => {
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

  // 会心率を計算（元の会心率 + 会心補正）
  const calculateAffinity = (weapon: T): number => {
    return weapon.affinity + (props.criticalBonus ?? 0)
  }

  // 期待値を計算
  const getExpectedValue = (weapon: T): number => {
    // 補正済みの攻撃力を計算
    const attackWithBuffs = getAttackWithBuffs(weapon)
    // 会心補正
    const totalCriticalBonus = props.criticalBonus ?? 0
    return calculateExpectedValue(
      attackWithBuffs,
      weapon as any, // HuntingHorn として扱う（LongSword の場合は後で対応）
      props.selectedSharpness ?? 'normal',
      totalCriticalBonus,
      props.hasCriticalBoost ?? false,
      props.hasMadAffinity ?? false,
      props.sharpnessMultiplier ?? 1.0
    )
  }

  // 補正済みの攻撃力を計算
  const getAttackWithBuffs = (weapon: T): number => {
    return calculateAttackWithBuffs(
      weapon.attack,
      props.attackModifiers ?? {},
      weapon as any, // HuntingHorn として扱う（LongSword の場合は後で対応）
      props.selectedSharpness ?? 'normal'
    )
  }

  // 元の攻撃力を括弧で表示するかどうかを判定
  const isShowBaseAttack = (weapon: T): boolean => {
    const modifiers = props.attackModifiers ?? {}
    // 力の解放は攻撃力補正がないため除外
    const challengeSkill = modifiers.challengeSkill
    const hasAttackBuffFromChallengeSkill = Boolean(
      challengeSkill &&
      challengeSkill !== 'none' &&
      challengeSkill !== 'latentPower1' &&
      challengeSkill !== 'latentPower2'
    )

    return Boolean(
      (modifiers.powerCharm ?? false) ||
      (modifiers.powerTalon ?? false) ||
      (modifiers.preparedBuff && modifiers.preparedBuff !== 'none') ||
      (modifiers.shortTermBuff && modifiers.shortTermBuff !== 'none') ||
      (modifiers.shortHypnosis ?? false) ||
      (modifiers.attackSkill ?? 'none') !== 'none' ||
      (modifiers.adrenaline && modifiers.adrenaline !== 'none') ||
      hasAttackBuffFromChallengeSkill ||
      (modifiers.hunterSkill && modifiers.hunterSkill !== 'none') ||
      (modifiers.bludgeoner ?? false) ||
      (modifiers.resuscitate ?? false) ||
      (modifiers.resentment ?? false) ||
      (modifiers.fortify && modifiers.fortify !== 'none') ||
      (modifiers.dragonInstinct ?? false) ||
      (modifiers.attackMelody && modifiers.attackMelody !== 'none' && (modifiers.attackMelodyMultiplier ?? 1.0) !== 1.0)
    )
  }

  return {
    sortKey,
    sortOrder,
    sortedWeapons,
    toggleSort,
    getSortIcon,
    calculateAffinity,
    getExpectedValue,
    getAttackWithBuffs,
    isShowBaseAttack,
  }
}

import { ref, computed } from 'vue'
import type { WeaponMelee, HuntingHorn } from '~/types/weapons'
import type { TableBaseOption, SharpnessType } from '~/types/tableBaseOption'
import { calculateExpectedValue } from '~/utils/damageCalculate'
import { calculateAttackWithBuffs } from '~/utils/attackBuffCalculate'

// SharpnessType を再エクスポート（後方互換性のため）
export type { SharpnessType }
export type SortKey = 'expected' | 'attack' | 'defense' | 'slots' | 'affinity' | null
export type SortOrder = 'asc' | 'desc'

export interface UseWeaponTableProps<T extends WeaponMelee> extends TableBaseOption {
  weapons: T[]
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

  // 会心率を計算（元の会心率 + 会心補正 + 会心旋律補正）
  const calculateAffinity = (weapon: T): number => {
    const criticalBonus = props.criticalBuffs?.criticalBonus ?? 0
    let criticalMelodyBonus = props.criticalMelodyBonus ?? 0

    // 笛依存（3）の場合は各武器の旋律から取得
    if (props.criticalMelody === 3) {
      const horn = weapon as unknown as HuntingHorn
      if (horn && 'notes' in horn && typeof horn.notes.getMaxMelodyBonus_Critical === 'function') {
        criticalMelodyBonus = horn.notes.getMaxMelodyBonus_Critical()
      }
    }

    return weapon.affinity + criticalBonus + criticalMelodyBonus
  }

  // 期待値を計算
  const getExpectedValue = (weapon: T): number => {
    // 補正済みの攻撃力を計算
    const attackWithBuffs = getAttackWithBuffs(weapon)
    // 会心補正（会心補正 + 会心旋律補正）
    const criticalBonus = props.criticalBuffs?.criticalBonus ?? 0
    let criticalMelodyBonus = props.criticalMelodyBonus ?? 0

    // 笛依存（3）の場合は各武器の旋律から取得
    if (props.criticalMelody === 3) {
      const horn = weapon as unknown as HuntingHorn
      if (horn && 'notes' in horn && typeof horn.notes.getMaxMelodyBonus_Critical === 'function') {
        criticalMelodyBonus = horn.notes.getMaxMelodyBonus_Critical()
      }
    }

    const totalCriticalBonus = criticalBonus + criticalMelodyBonus
    return calculateExpectedValue(
      attackWithBuffs,
      weapon as unknown as HuntingHorn, // HuntingHorn として扱う（LongSword の場合は後で対応）
      props.selectedSharpness ?? 'normal',
      totalCriticalBonus,
      props.criticalBuffs?.hasCriticalBoost ?? false,
      props.criticalBuffs?.hasMadAffinity ?? false,
      props.sharpnessMultiplier ?? 1.0
    )
  }

  // 補正済みの攻撃力を計算
  const getAttackWithBuffs = (weapon: T): number => {
    // TableBaseOptionのattackMelodyとattackModifiersのattackMelodyを統合
    // 数値ベース（0: 無, 1: x1.10, 2: x1.15, 3: x1.20, 4: 笛依存）
    const attackMelody = props.attackMelody ?? props.attackModifiers?.attackMelody ?? 0
    const attackMelodyMultiplier =
      props.attackMelodyMultiplier ?? props.attackModifiers?.attackMelodyMultiplier ?? 1.0

    // attackModifiersにattackMelodyとattackMelodyMultiplierを含める
    const modifiers = {
      ...(props.attackModifiers ?? {}),
      attackMelody,
      attackMelodyMultiplier,
    }

    return calculateAttackWithBuffs(
      weapon.attack,
      modifiers,
      weapon, // WeaponMelee
      props.selectedSharpness ?? 'normal'
    )
  }

  // 元の攻撃力を括弧で表示するかどうかを判定
  const isShowBaseAttack = (_weapon: T): boolean => {
    const modifiers = props.attackModifiers ?? {}
    // 力の解放は攻撃力補正がないため除外
    const challengeSkill = modifiers.challengeSkill
    const hasAttackBuffFromChallengeSkill = Boolean(
      challengeSkill &&
      challengeSkill !== 'none' &&
      challengeSkill !== 'latentPower1' &&
      challengeSkill !== 'latentPower2'
    )

    // TableBaseOptionのattackMelodyとattackModifiersのattackMelodyを統合
    const attackMelody = props.attackMelody ?? modifiers.attackMelody ?? 0
    const attackMelodyMultiplier =
      props.attackMelodyMultiplier ?? modifiers.attackMelodyMultiplier ?? 1.0

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
      (attackMelody !== 0 && attackMelodyMultiplier !== 1.0)
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

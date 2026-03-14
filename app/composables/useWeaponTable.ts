import { ref, computed } from 'vue'
import type { WeaponMelee } from '~/types/weapons'
import { isHuntingHorn } from '~/types/weapons'
import type { TableBaseOption, SharpnessType } from '~/types/tableBaseOption'
import { calculateCriticalBonus } from '~/types/Buffs/Buffs'
import { CriticalMelody } from '~/types/Buffs/criticalBuff'
import { AttackMelody } from '~/types/Buffs/attackBuff'
import { ElementMelody } from '~/types/Buffs/elementBuff'
import { calculateExpectedValue, calculateElementExpectedValue } from '~/utils/damageCalculate'
import { calculateAttackWithBuffs } from '~/utils/attackBuffCalculate'
import { calculateElementWithBuffs } from '~/utils/elementBuffCalculate'
import {
  calculateRequiredMotionValue,
  calculateElementDamage,
  getDefaultTargetDamageSettings,
} from '~/types/targetDamage'

// SharpnessType を再エクスポート（後方互換性のため）
export type { SharpnessType }
export type SortKey =
  | 'requiredMotionValue'
  | 'expected'
  | 'attack'
  | 'defense'
  | 'slots'
  | 'affinity'
  | null
export type SortOrder = 'asc' | 'desc'

export interface UseWeaponTableProps<T extends WeaponMelee> extends TableBaseOption {
  weapons: T[]
}

export function useWeaponTable<T extends WeaponMelee>(props: UseWeaponTableProps<T>) {
  // ソート状態
  const sortKey = ref<SortKey>('requiredMotionValue')
  const sortOrder = ref<SortOrder>('asc')

  // ソート処理
  const sortedWeapons = computed(() => {
    if (!sortKey.value) return props.weapons

    const sorted = [...props.weapons].sort((a, b) => {
      let aValue: number
      let bValue: number

      switch (sortKey.value) {
        case 'requiredMotionValue':
          aValue = getRequiredMotionValue(a)
          bValue = getRequiredMotionValue(b)
          break
        case 'expected':
          aValue = getPhysicalExpectedValue(a)
          bValue = getPhysicalExpectedValue(b)
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

  // 会心補正値を計算（武器依存の会心旋律も考慮）
  const calculateCriticalBonusForWeapon = (weapon: T): number => {
    // 固定値の会心補正を取得
    let bonus = calculateCriticalBonus(props.buffs ?? {})
    // 武器依存の会心旋律の補正を追加
    const criticalMelody = props.buffs?.criticalBuffs?.criticalMelody ?? CriticalMelody.None
    if (criticalMelody === CriticalMelody.HornDependent && isHuntingHorn(weapon)) {
      // HornDependent の場合は武器依存のため、武器の旋律から取得
      bonus += weapon.notes.getMaxMelodyBonus_Critical()
    }
    return bonus
  }

  // 会心率を計算（元の会心率 + 会心補正）
  const calculateAffinity = (weapon: T): number => {
    return weapon.affinity + calculateCriticalBonusForWeapon(weapon)
  }

  // 物理期待値を計算
  const getPhysicalExpectedValue = (weapon: T): number => {
    const attackWithBuffs = getAttackWithBuffs(weapon)
    const totalCriticalBonus = calculateCriticalBonusForWeapon(weapon)
    return calculateExpectedValue(
      attackWithBuffs,
      weapon,
      props.selectedSharpness ?? 'normal',
      totalCriticalBonus,
      props.buffs?.criticalBuffs?.hasCriticalBoost ?? false,
      props.buffs?.criticalBuffs?.hasMadAffinity ?? false,
      props.sharpnessMultiplier ?? 1.0
    )
  }

  // 属性期待値を計算
  const getElementExpectedValue = (weapon: T): number => {
    const elementWithBuffs = getElementWithBuffs(weapon)
    return calculateElementExpectedValue(
      weapon,
      props.selectedSharpness ?? 'normal',
      props.sharpnessMultiplier ?? 1.0,
      elementWithBuffs
    )
  }

  // 期待値（物理+属性の合計）を計算
  const getExpectedValue = (weapon: T): number => {
    return getPhysicalExpectedValue(weapon) + getElementExpectedValue(weapon)
  }

  // 補正済みの攻撃力を計算
  const getAttackWithBuffs = (weapon: T): number => {
    return calculateAttackWithBuffs(
      weapon.attack,
      props.buffs?.attackModifiers ?? {},
      weapon,
      props.selectedSharpness ?? 'normal'
    )
  }

  // 補正済みの属性値を計算
  const getElementWithBuffs = (weapon: T): number => {
    if (!weapon.element || weapon.element.type === '無') {
      return 0
    }
    return calculateElementWithBuffs(
      weapon.element.value,
      props.buffs?.elementModifiers ?? {},
      weapon
    )
  }

  // 必要モーション値を計算（属性だけで目標を超える場合は0を返す）
  const getRequiredMotionValue = (weapon: T): number => {
    const defaults = getDefaultTargetDamageSettings()
    const settings = props.targetDamageSettings ?? {}
    const targetDamage = settings.targetDamage ?? defaults.targetDamage
    const attackCount = Math.max(1, settings.attackCount ?? defaults.attackCount)

    // 1 hitあたりの属性ダメージ
    const elementDamagePerHit = getElementDamage(weapon)
    // 攻撃回数分の総属性ダメージ
    const totalElementDamage = elementDamagePerHit * attackCount
    // 物理で賄う必要があるダメージ
    const totalPhysicalDamageNeeded = targetDamage - totalElementDamage

    if (totalPhysicalDamageNeeded <= 0) {
      return 0
    }

    const mergedSettings = {
      targetDamage: totalPhysicalDamageNeeded,
      hitzone: settings.hitzone ?? defaults.hitzone,
      overallDefenseRate: settings.overallDefenseRate ?? defaults.overallDefenseRate,
    }

    const physicalExpectedValue = getPhysicalExpectedValue(weapon)
    return calculateRequiredMotionValue(mergedSettings, physicalExpectedValue) ?? 0
  }

  // 元の会心率を括弧で表示するかどうかを判定
  const isShowBaseAffinity = (weapon: T): boolean => {
    const totalCriticalBonus = calculateCriticalBonusForWeapon(weapon)
    return totalCriticalBonus !== 0
  }

  // 元の攻撃力を括弧で表示するかどうかを判定
  const isShowBaseAttack = (weapon: T): boolean => {
    const modifiers = props.buffs?.attackModifiers ?? {}
    // 力の解放は攻撃力補正がないため除外
    const challengeSkill = modifiers.challengeSkill
    const hasAttackBuffFromChallengeSkill = Boolean(
      challengeSkill &&
      challengeSkill !== 'none' &&
      challengeSkill !== 'latentPower1' &&
      challengeSkill !== 'latentPower2'
    )

    // 攻撃旋律の補正が適用されているかどうかを判定
    const attackMelody = modifiers.attackMelody ?? AttackMelody.None
    let hasAttackMelodyBuff = false
    if (attackMelody !== AttackMelody.None) {
      if (attackMelody === AttackMelody.HornDependent) {
        // 笛依存の場合、実際に狩猟笛で、かつ倍率が1.0でない場合のみ表示
        if (isHuntingHorn(weapon)) {
          const multiplier = weapon.notes.getMaxMelodyMultiplier_Attack()
          hasAttackMelodyBuff = multiplier !== 1.0
        }
      } else {
        // 固定値の場合は常に表示
        hasAttackMelodyBuff = true
      }
    }

    return Boolean(
      (modifiers.powerCharm ?? false) ||
      (modifiers.powerTalon ?? false) ||
      (modifiers.demonDrugBuff && modifiers.demonDrugBuff !== 'none') ||
      (modifiers.mealAttackBuff && modifiers.mealAttackBuff !== 'none') ||
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
      hasAttackMelodyBuff
    )
  }

  // 元の属性値を括弧で表示するかどうかを判定
  const isShowBaseElement = (weapon: T): boolean => {
    const elementMelody = props.buffs?.elementModifiers?.elementMelody ?? ElementMelody.None
    if (elementMelody === ElementMelody.None) return false
    if (elementMelody === ElementMelody.HornDependent) {
      return isHuntingHorn(weapon) && weapon.notes.getMaxMelodyMultiplier_Element() !== 1.0
    }
    return true
  }

  // 属性ダメージを計算（1 hitあたり）
  const getElementDamage = (weapon: T): number => {
    const elementExpectedValue = getElementExpectedValue(weapon)
    if (elementExpectedValue <= 0 || !weapon.element || weapon.element.type === '無') {
      return 0
    }
    const defaults = getDefaultTargetDamageSettings()
    const settings = props.targetDamageSettings ?? {}
    const elementHitzone =
      settings.elementHitzone?.[weapon.element.type] ?? defaults.elementHitzone[weapon.element.type]
    const overallDefenseRate = settings.overallDefenseRate ?? defaults.overallDefenseRate
    return calculateElementDamage(elementExpectedValue, elementHitzone, overallDefenseRate)
  }

  const getAttackCount = (): number => {
    const defaults = getDefaultTargetDamageSettings()
    return props.targetDamageSettings?.attackCount ?? defaults.attackCount
  }

  // 必要モーション値表示用の属性割合
  const getRequiredMotionValueElementInfo = (
    weapon: T
  ): { type: string; percentage: number } | null => {
    if (!weapon.element || weapon.element.type === '無') return null
    const totalElementDamage = getElementDamage(weapon) * getAttackCount()
    if (totalElementDamage <= 0) return null
    const defaults = getDefaultTargetDamageSettings()
    const targetDamage = props.targetDamageSettings?.targetDamage ?? defaults.targetDamage
    if (targetDamage <= 0) return null
    const percentage = Math.round((totalElementDamage / targetDamage) * 100)
    return { type: weapon.element.type, percentage }
  }

  return {
    sortKey,
    sortOrder,
    sortedWeapons,
    toggleSort,
    getSortIcon,
    calculateAffinity,
    getExpectedValue,
    getPhysicalExpectedValue,
    getElementExpectedValue,
    getAttackWithBuffs,
    getElementWithBuffs,
    getRequiredMotionValue,
    getRequiredMotionValueElementInfo,
    getElementDamage,
    getAttackCount,
    isShowBaseAttack,
    isShowBaseAffinity,
    isShowBaseElement,
  }
}

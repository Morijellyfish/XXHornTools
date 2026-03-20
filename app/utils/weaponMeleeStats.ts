/**
 * 近接武器（剣士）のステータス計算ユーティリティ
 *
 * バフ・切れ味・目標ダメージ設定などの context を受け取り、
 * 攻撃力・会心率・期待値・必要モーション値などを算出する。
 */
import type { ElementOrStatus, WeaponMelee } from '~/types/weapons'
import { isElementType, isHuntingHorn } from '~/types/weapons'
import type { Buffs } from '~/types/Buffs/Buffs'
import type { SharpnessType } from '~/types/tableBaseOption'
import type { TargetDamageSettings } from '~/types/targetDamage'
import { calculateCriticalWithBuffs } from '~/types/Buffs/Buffs'
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

export interface WeaponMeleeStatsContext {
  buffs?: Buffs
  selectedSharpness?: SharpnessType
  targetDamageSettings?: TargetDamageSettings
  sharpnessMultiplier?: number
}

// 会心補正
export function getCriticalBonus(weapon: WeaponMelee, context: WeaponMeleeStatsContext): number {
  return calculateCriticalWithBuffs(context.buffs ?? {}, weapon)
}

// 会心率
export function getAffinity(weapon: WeaponMelee, context: WeaponMeleeStatsContext): number {
  return weapon.affinity + getCriticalBonus(weapon, context)
}

// 攻撃力
export function getAttack(weapon: WeaponMelee, context: WeaponMeleeStatsContext): number {
  return calculateAttackWithBuffs(
    weapon.attack,
    context.buffs?.attackModifiers ?? {},
    weapon,
    context.selectedSharpness ?? 'normal'
  )
}

// 双剣の副属性スロット（存在しない武器は undefined）
function getSubElementSlot(weapon: WeaponMelee): ElementOrStatus | undefined {
  if (!('subElement' in weapon)) return undefined
  return (weapon as WeaponMelee & { subElement?: ElementOrStatus }).subElement
}

// 属性値（主属性）
export function getElement(weapon: WeaponMelee, context: WeaponMeleeStatsContext): number {
  if (!weapon.elementStatus || !isElementType(weapon.elementStatus)) {
    return 0
  }
  return calculateElementWithBuffs(
    weapon.elementStatus.value,
    context.buffs?.elementModifiers ?? {},
    weapon
  ).value
}

// 副属性の素値（双剣の属性スロットのみ。状態異常は 0）
export function getSubElement(weapon: WeaponMelee, context: WeaponMeleeStatsContext): number {
  const sub = getSubElementSlot(weapon)
  if (!sub || !isElementType(sub)) {
    return 0
  }
  return calculateElementWithBuffs(sub.value, context.buffs?.elementModifiers ?? {}, weapon).value
}

// 属性値が倍率上限に達しているか
export function isElementCapped(weapon: WeaponMelee, context: WeaponMeleeStatsContext): boolean {
  if (!weapon.elementStatus || !isElementType(weapon.elementStatus)) {
    return false
  }
  return calculateElementWithBuffs(
    weapon.elementStatus.value,
    context.buffs?.elementModifiers ?? {},
    weapon
  ).isCapped
}

// キャップ適用前の属性値（ツールチップ用）
export function getElementUncappedValue(
  weapon: WeaponMelee,
  context: WeaponMeleeStatsContext
): number | undefined {
  if (!weapon.elementStatus || !isElementType(weapon.elementStatus)) {
    return undefined
  }
  const result = calculateElementWithBuffs(
    weapon.elementStatus.value,
    context.buffs?.elementModifiers ?? {},
    weapon
  )
  return result.isCapped ? result.uncappedValue : undefined
}

// 物理期待値
export function getPhysicalExpectedValue(
  weapon: WeaponMelee,
  context: WeaponMeleeStatsContext
): number {
  const attackWithBuffs = getAttack(weapon, context)
  const totalCriticalBonus = getCriticalBonus(weapon, context)
  return calculateExpectedValue(
    attackWithBuffs,
    weapon,
    context.selectedSharpness ?? 'normal',
    totalCriticalBonus,
    context.buffs?.criticalBuffs?.hasCriticalBoost ?? false,
    context.buffs?.criticalBuffs?.hasMadAffinity ?? false,
    context.sharpnessMultiplier ?? 1.0
  )
}

// 属性期待値（主属性）
export function getElementExpectedValue(
  weapon: WeaponMelee,
  context: WeaponMeleeStatsContext
): number {
  const elementWithBuffs = getElement(weapon, context)
  return calculateElementExpectedValue(
    weapon,
    context.selectedSharpness ?? 'normal',
    context.sharpnessMultiplier ?? 1.0,
    elementWithBuffs
  )
}

// 属性期待値（副属性・双剣の属性スロットのみ）
export function getSubElementExpectedValue(
  weapon: WeaponMelee,
  context: WeaponMeleeStatsContext
): number {
  const subWithBuffs = getSubElement(weapon, context)
  if (subWithBuffs <= 0) {
    return 0
  }
  return calculateElementExpectedValue(
    weapon,
    context.selectedSharpness ?? 'normal',
    context.sharpnessMultiplier ?? 1.0,
    subWithBuffs
  )
}

// 期待値（物理 + 主属性期待値 + 副属性期待値）
export function getExpectedValue(weapon: WeaponMelee, context: WeaponMeleeStatsContext): number {
  return (
    getPhysicalExpectedValue(weapon, context) +
    getElementExpectedValue(weapon, context) +
    getSubElementExpectedValue(weapon, context)
  )
}

// 属性ダメージ
export function getElementDamage(weapon: WeaponMelee, context: WeaponMeleeStatsContext): number {
  const elementExpectedValue = getElementExpectedValue(weapon, context)
  const status = weapon.elementStatus
  if (elementExpectedValue <= 0 || !status || !isElementType(status)) {
    return 0
  }
  const elementKey = status.type
  const defaults = getDefaultTargetDamageSettings()
  const settings = context.targetDamageSettings ?? {}
  const elementHitzone =
    settings.elementHitzone?.[elementKey] ?? defaults.elementHitzone[elementKey]
  const overallDefenseRate = settings.overallDefenseRate ?? defaults.overallDefenseRate
  return calculateElementDamage(elementExpectedValue, elementHitzone, overallDefenseRate)
}

// 必要モーション値
export function getRequiredMotionValue(
  weapon: WeaponMelee,
  context: WeaponMeleeStatsContext
): number {
  const defaults = getDefaultTargetDamageSettings()
  const settings = context.targetDamageSettings ?? {}
  const targetDamage = settings.targetDamage ?? defaults.targetDamage
  const attackCount = Math.max(1, settings.attackCount ?? defaults.attackCount)

  const elementDamagePerHit = getElementDamage(weapon, context)
  const totalElementDamage = elementDamagePerHit * attackCount
  const totalPhysicalDamageNeeded = targetDamage - totalElementDamage

  if (totalPhysicalDamageNeeded <= 0) {
    return 0
  }

  const mergedSettings = {
    targetDamage: totalPhysicalDamageNeeded,
    hitzone: settings.hitzone ?? defaults.hitzone,
    overallDefenseRate: settings.overallDefenseRate ?? defaults.overallDefenseRate,
  }

  const physicalExpectedValue = getPhysicalExpectedValue(weapon, context)
  return calculateRequiredMotionValue(mergedSettings, physicalExpectedValue) ?? 0
}

// 必要モーション値の属性割合
export function getRequiredMotionValueElementInfo(
  weapon: WeaponMelee,
  context: WeaponMeleeStatsContext
): { type: string; percentage: number } | null {
  if (!weapon.elementStatus || !isElementType(weapon.elementStatus)) return null
  const defaults = getDefaultTargetDamageSettings()
  const attackCount = context.targetDamageSettings?.attackCount ?? defaults.attackCount
  const totalElementDamage = getElementDamage(weapon, context) * attackCount
  if (totalElementDamage <= 0) return null
  const targetDamage = context.targetDamageSettings?.targetDamage ?? defaults.targetDamage
  if (targetDamage <= 0) return null
  const percentage = Math.round((totalElementDamage / targetDamage) * 100)
  return { type: weapon.elementStatus.type, percentage }
}

// 元の会心率表示
export function isShowBaseAffinity(weapon: WeaponMelee, context: WeaponMeleeStatsContext): boolean {
  return getCriticalBonus(weapon, context) !== 0
}

// 元の攻撃力表示
export function isShowBaseAttack(weapon: WeaponMelee, context: WeaponMeleeStatsContext): boolean {
  const modifiers = context.buffs?.attackModifiers ?? {}
  const challengeSkill = modifiers.challengeSkill
  const hasAttackBuffFromChallengeSkill = Boolean(
    challengeSkill &&
    challengeSkill !== 'none' &&
    challengeSkill !== 'latentPower1' &&
    challengeSkill !== 'latentPower2'
  )

  const attackMelody = modifiers.attackMelody ?? AttackMelody.None
  let hasAttackMelodyBuff = false
  if (attackMelody !== AttackMelody.None) {
    if (attackMelody === AttackMelody.HornDependent) {
      if (isHuntingHorn(weapon)) {
        const multiplier = weapon.notes.getMaxMelodyMultiplier_Attack()
        hasAttackMelodyBuff = multiplier !== 1.0
      }
    } else {
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

// 元の属性値表示
export function isShowBaseElement(weapon: WeaponMelee, context: WeaponMeleeStatsContext): boolean {
  const mods = context.buffs?.elementModifiers
  const elementMelody = mods?.elementMelody ?? ElementMelody.None
  const elemental = mods?.elemental ?? 'none'
  const elemAtk = mods?.elemAtk ?? 'none'

  if (elementMelody !== ElementMelody.None) {
    if (elementMelody === ElementMelody.HornDependent) {
      if (isHuntingHorn(weapon) && weapon.notes.getMaxMelodyMultiplier_Element() !== 1.0) {
        return true
      }
    } else {
      return true
    }
  }
  if (elemental !== 'none') return true
  if (elemAtk !== 'none') return true

  return false
}

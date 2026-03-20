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
import {
  calculateElementWithBuffs,
  type ElementWithBuffsResult,
} from '~/utils/elementBuffCalculate'
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
  dualBladeElementMainRatio?: number
}

/** 双剣オプションの主属性寄与（0.1 刻みスライダーと揃える） */
function getDualBladeElementMainRatio(context: WeaponMeleeStatsContext): number {
  const r = context.dualBladeElementMainRatio
  if (r === undefined || Number.isNaN(r)) {
    return 0.5
  }
  return Math.round(r * 10) / 10
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

/** 主属性 / 副属性（双剣）のどちらのスロットか */
type ElementSlotKind = 'main' | 'sub'

function getElementSlotSource(
  weapon: WeaponMelee,
  slot: ElementSlotKind
): ElementOrStatus | undefined {
  return slot === 'main' ? weapon.elementStatus : getSubElementSlot(weapon)
}

/**
 * 属性バフ適用。属性でない・main,sub属性スロットなしは null。
 */
function getElementBuffResultForSlot(
  weapon: WeaponMelee,
  context: WeaponMeleeStatsContext,
  slot: ElementSlotKind
): ElementWithBuffsResult | null {
  const source = getElementSlotSource(weapon, slot)
  if (!source || !isElementType(source)) {
    return null
  }
  const mods = context.buffs?.elementModifiers ?? {}
  return calculateElementWithBuffs(source.value, mods, weapon)
}

function uncappedValueIfCapped(r: ElementWithBuffsResult | null): number | undefined {
  return r?.isCapped ? r.uncappedValue : undefined
}

// --- 主属性 ---
export function getElement(weapon: WeaponMelee, context: WeaponMeleeStatsContext): number {
  return getElementBuffResultForSlot(weapon, context, 'main')?.value ?? 0
}

export function isElementCapped(weapon: WeaponMelee, context: WeaponMeleeStatsContext): boolean {
  return getElementBuffResultForSlot(weapon, context, 'main')?.isCapped ?? false
}

export function getElementUncappedValue(
  weapon: WeaponMelee,
  context: WeaponMeleeStatsContext
): number | undefined {
  return uncappedValueIfCapped(getElementBuffResultForSlot(weapon, context, 'main'))
}

// --- 副属性（双剣・属性スロットのみ。状態異常は 0 / false） ---
export function getSubElement(weapon: WeaponMelee, context: WeaponMeleeStatsContext): number {
  return getElementBuffResultForSlot(weapon, context, 'sub')?.value ?? 0
}

export function isSubElementCapped(weapon: WeaponMelee, context: WeaponMeleeStatsContext): boolean {
  return getElementBuffResultForSlot(weapon, context, 'sub')?.isCapped ?? false
}

export function getSubElementUncappedValue(
  weapon: WeaponMelee,
  context: WeaponMeleeStatsContext
): number | undefined {
  return uncappedValueIfCapped(getElementBuffResultForSlot(weapon, context, 'sub'))
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

/**
 * 双剣で主・副の両スロットに値があるときだけ属性ダメージに割合を掛ける（副が状態異常でも可）。
 * 単スロット武器（副スロットなし）は割合なし。
 */
function useDualBladeElementRatio(weapon: WeaponMelee): boolean {
  if (!('subElement' in weapon)) return false
  const sub = getSubElementSlot(weapon)
  return Boolean(weapon.elementStatus && sub !== undefined)
}

/** 属性ダメージの合計と、主副とも属性のときの内訳行 */
export interface ElementDamageDetail {
  total: number
  /** 双属性（主・副とも属性ダメージが発生）のときのみ */
  breakdownLine: string | null
}

/**
 * 属性ダメージ（主・副それぞれ期待値→属性肉質。双剣で両スロットあればオプション割合を乗算）
 */
export function getElementDamageDetail(
  weapon: WeaponMelee,
  context: WeaponMeleeStatsContext
): ElementDamageDetail {
  const defaults = getDefaultTargetDamageSettings()
  const settings = context.targetDamageSettings ?? {}
  const overallDefenseRate = settings.overallDefenseRate ?? defaults.overallDefenseRate

  const mainEV = getElementExpectedValue(weapon, context)
  const subEV = getSubElementExpectedValue(weapon, context)
  const status = weapon.elementStatus
  const sub = getSubElementSlot(weapon)

  const hasMainEl = Boolean(status && isElementType(status) && mainEV > 0)
  const hasSubEl = Boolean(sub && isElementType(sub) && subEV > 0)

  if (!hasMainEl && !hasSubEl) {
    return { total: 0, breakdownLine: null }
  }

  const applyRatio = useDualBladeElementRatio(weapon)
  const mainRatio = applyRatio ? getDualBladeElementMainRatio(context) : 1
  const subRatio = applyRatio ? 1 - mainRatio : 1

  let mainDmg = 0
  let subDmg = 0

  if (hasMainEl && status && isElementType(status)) {
    const elementKey = status.type
    const elementHitzone =
      settings.elementHitzone?.[elementKey] ?? defaults.elementHitzone[elementKey]
    const weightedEV = mainEV * mainRatio
    mainDmg = calculateElementDamage(weightedEV, elementHitzone, overallDefenseRate)
  }
  if (hasSubEl && sub && isElementType(sub)) {
    const elementKey = sub.type
    const elementHitzone =
      settings.elementHitzone?.[elementKey] ?? defaults.elementHitzone[elementKey]
    const weightedEV = subEV * subRatio
    subDmg = calculateElementDamage(weightedEV, elementHitzone, overallDefenseRate)
  }

  const total = mainDmg + subDmg
  const breakdownLine =
    hasMainEl && hasSubEl && status && isElementType(status) && sub && isElementType(sub)
      ? `(${status.type}${mainDmg}+${sub.type}${subDmg})`
      : null

  return { total, breakdownLine }
}

export function getElementDamage(weapon: WeaponMelee, context: WeaponMeleeStatsContext): number {
  return getElementDamageDetail(weapon, context).total
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

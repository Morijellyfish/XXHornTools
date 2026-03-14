import type { AttackBuffs, SharpnessType } from '~/types/Buffs/attackBuff'
import { getAttackAddModifiers, getAttackMultiplyModifiers } from '~/types/Buffs/attackBuff'
import type { WeaponMelee } from '~/types/weapons'

/**
 * 補正済み攻撃力を計算（attackBuffクラスを使用）
 * @param baseAttack 基礎攻撃力
 * @param modifiers 攻撃バフ設定
 * @param weapon 武器
 * @param selectedSharpness 選択切れ味
 * @returns 補正済み攻撃力
 */
export const calculateAttackWithBuffs = (
  baseAttack: number,
  modifiers: AttackBuffs,
  weapon?: WeaponMelee,
  selectedSharpness?: SharpnessType
): number => {
  let attack = baseAttack + calculateAttackAddWithBuffs(modifiers)
  for (const modifier of getAttackMultiplyModifiers(modifiers, weapon, selectedSharpness)) {
    attack = modifier.apply(attack)
  }
  return attack
}

/**
 * 攻撃力加算バフの合計を計算（attackBuffクラスを使用）
 * @param modifiers 攻撃バフ設定
 * @returns 攻撃力加算バフの合計値
 */
export function calculateAttackAddWithBuffs(modifiers: AttackBuffs): number {
  const addModifiers = getAttackAddModifiers(modifiers)
  let total = 0
  for (const modifier of addModifiers) {
    modifier.apply(0)
    total += modifier.value
  }
  return total
}

/**
 * 攻撃力倍率（乗算バフ）の合計を計算（attackBuffクラスを使用）
 * @param modifiers 攻撃バフ設定
 * @returns 攻撃力倍率（乗算バフの合計）
 */
export function calculateAttackMultiplyWithBuffs(modifiers: AttackBuffs): number {
  const multiplyModifiers = getAttackMultiplyModifiers(modifiers)
  let multiplier = 1.0
  for (const modifier of multiplyModifiers) {
    modifier.apply(1)
    multiplier *= modifier.value
  }
  return multiplier
}

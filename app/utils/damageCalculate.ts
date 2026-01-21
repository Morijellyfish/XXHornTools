import type { Horn } from '~/types/horn'
import { SHARPNESS_MULTIPLIERS, type SharpnessColor } from '~/types/sharpness'

type SharpnessType = 'normal' | 'plus1' | 'plus2'

/**
 * 切れ味補正を適用した攻撃力を計算
 * @param attack 基礎攻撃力
 * @param color 切れ味の色
 * @returns 切れ味補正後の攻撃力
 */
const calculateSharpness = (attack: number, color: SharpnessColor): number => {
  return Math.round(attack * SHARPNESS_MULTIPLIERS[color].physical)
}

/**
 * クリティカル期待値を計算
 * @param baseAttack 基礎攻撃力（攻撃力 × 切れ味の物理倍率）
 * @param affinity 会心率（元の会心率 + 会心補正）
 * @param hasCriticalBoost 超会心の有無
 * @param hasMadAffinity 裏会心の有無
 * @returns 期待値（基礎攻撃力 × クリティカル倍率）
 */
const calculateCritical = (
  baseAttack: number,
  affinity: number,
  hasCriticalBoost: boolean,
  hasMadAffinity: boolean
): number => {
  // 会心率が負の場合（バッドクリティカル）
  if (affinity < 0) {
    // 裏会心あり: ATK*(1.0 - CRI/1600)
    if (hasMadAffinity) {
      return Math.round(baseAttack * (1.0 - affinity / 1600))
    }
    // バッド: ATK*(1.0 + CRI/400)
    return Math.round(baseAttack * (1.0 + affinity / 400))
  }

  // 会心率が0の場合（非会心）
  if (affinity === 0) {
    // 非会心: ATK*(1.0)
    return Math.round(baseAttack * 1.0)
  }

  // 会心率が正の場合
  // 超会心あり: ATK*(1.0 + CRI/250)
  if (hasCriticalBoost) {
    return Math.round(baseAttack * (1.0 + affinity / 250))
  }

  // 会心: ATK*(1.0 + CRI/400)
  return Math.round(baseAttack * (1.0 + affinity / 400))
}

/**
 * 期待値を計算（攻撃力 × 切れ味の物理補正 × 会心補正）
 * @param attack 攻撃力（攻撃旋律の倍率適用済み）
 * @param horn 狩猟笛データ
 * @param selectedSharpness 選択された切れ味（通常、匠1、匠2）
 * @param criticalBonus 会心補正値
 * @param hasCriticalBoost 超会心の有無
 * @param hasMadAffinity 裏会心の有無
 * @returns 期待ダメージ値
 */
export const calculateExpectedValue = (
  attack: number,
  horn: Horn,
  selectedSharpness: SharpnessType,
  criticalBonus: number,
  hasCriticalBoost: boolean,
  hasMadAffinity: boolean
): number => {
  // 選択された切れ味を取得
  let selectedSharpnessData
  if (selectedSharpness === 'normal') {
    selectedSharpnessData = horn.sharpness.normal
  } else if (selectedSharpness === 'plus1') {
    selectedSharpnessData = horn.sharpness.plus1!
  } else {
    selectedSharpnessData = horn.sharpness.plus2!
  }

  // 切れ味補正を適用した攻撃力を計算
  const expectedValue = calculateSharpness(attack, selectedSharpnessData.color)

  // 会心率を計算（元の会心率 + 会心補正）
  const affinity = horn.affinity + criticalBonus

  // クリティカル期待値を計算
  return calculateCritical(expectedValue, affinity, hasCriticalBoost, hasMadAffinity)
}

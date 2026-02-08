/**
 * 目標ダメージ設定
 * 目標ダメージから必要モーション値を計算するための設定をまとめた型
 */
export interface TargetDamageSettings {
  /** 目標ダメージ */
  targetDamage?: number
  /** 肉質（デフォルト: 100） */
  hitzone?: number
  /** 全体防御率（デフォルト: 1.0） */
  overallDefenseRate?: number
}

/**
 * デフォルト値を持つTargetDamageSettingsを取得
 */
export function getDefaultTargetDamageSettings(): Required<TargetDamageSettings> {
  return {
    targetDamage: 1000,
    hitzone: 45,
    overallDefenseRate: 1.0,
  }
}

/**
 * 期待値から必要モーション値を計算
 * @param settings 目標ダメージ設定
 * @param expectedValue 期待値（武器倍率 × 会心補正 × 斬れ味補正など、モーション値以外の補正を含む）
 * @returns 必要モーション値。設定が不完全な場合は undefined
 *
 * 計算式: ダメージ = 切捨(モーション値 ÷ 100 × 期待値 × 肉質 ÷ 100)
 * 逆算: モーション値 = ダメージ × 100 ÷ (期待値 × 肉質 ÷ 100)
 *                  = ダメージ × 10000 ÷ (期待値 × 肉質)
 */
export function calculateRequiredMotionValue(
  settings: TargetDamageSettings,
  expectedValue: number
): number | undefined {
  const defaults = getDefaultTargetDamageSettings()
  const hitzone = settings.hitzone ?? defaults.hitzone
  const overallDefenseRate = settings.overallDefenseRate ?? defaults.overallDefenseRate

  if (
    !settings.targetDamage ||
    settings.targetDamage <= 0 ||
    hitzone <= 0 ||
    overallDefenseRate <= 0 ||
    expectedValue <= 0
  ) {
    return undefined
  }

  // 計算式: モーション値 = ダメージ × 10000 ÷ (全体防御率 × 期待値 × 肉質)
  return (settings.targetDamage * 10000) / (overallDefenseRate * expectedValue * hitzone)
}

/**
 * 会心率関連のバフ設定
 * 会心補正、超会心、裏会心などの設定をまとめた型
 */
export interface CriticalBuffs {
  /** 会心補正値（%） */
  criticalBonus?: number
  /** 超会心の有無 */
  hasCriticalBoost?: boolean
  /** 裏会心の有無 */
  hasMadAffinity?: boolean
}

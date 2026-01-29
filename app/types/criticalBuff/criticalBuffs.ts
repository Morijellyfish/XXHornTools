import type { CriticalEye } from './criticalBuff_A'
import type { WeaknessExploit } from './criticalBuff_B'
import type { RepeatOffensive } from './criticalBuff_C'
import type { CriticalMelody } from './criticalBuff_D'
import type { DemonCriticalBullet } from './criticalBuff_F'

export type { CriticalEye } from './criticalBuff_A'
export type { WeaknessExploit } from './criticalBuff_B'
export type { RepeatOffensive } from './criticalBuff_C'
export { CriticalMelody } from './criticalBuff_D'
export type { DemonCriticalBullet } from './criticalBuff_F'
export { getChallengeSkillCriticalValue } from '~/types/challengeSkill'

/**
 * 会心率関連のバフ設定
 * 会心補正、超会心、裏会心、弱点特攻、連撃、見切り、会心旋律などの設定をまとめた型
 */
export interface CriticalBuffs {
  // 会心補正のグループ
  /** 超会心の有無 */
  hasCriticalBoost?: boolean
  /** 裏会心の有無 */
  hasMadAffinity?: boolean

  // 会心率補正のグループ
  /** 弱点特攻の有無 */
  hasWeaknessExploit?: WeaknessExploit
  /** 連撃の種類 */
  repeatOffensive?: RepeatOffensive
  /** 見切り（会心率）のレベル */
  criticalEye?: CriticalEye
  /** 会心旋律 */
  criticalMelody?: CriticalMelody
  /** 鬼人会心弾の有無 */
  demonCriticalBullet?: DemonCriticalBullet
}

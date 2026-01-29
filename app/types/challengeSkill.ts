/**
 * 挑戦者・フルチャージ・力の解放の型定義
 */

export type ChallengeSkill =
  | 'none'
  | 'challenger1' // 挑戦者+1
  | 'challenger2' // 挑戦者+2
  | 'peakPerformance' // フルチャージ
  | 'latentPower1' // 力の解放+1
  | 'latentPower2' // 力の解放+2

/**
 * 挑戦者・フルチャージ・力の解放の攻撃力補正値を取得
 * @param challengeSkill 挑戦者・フルチャージ・力の解放のスキル
 * @returns 攻撃力補正値
 */
export const getChallengeSkillAttackValue = (challengeSkill: ChallengeSkill): number => {
  switch (challengeSkill) {
    case 'challenger1':
      return 10 // 挑戦者+1: +10
    case 'challenger2':
      return 20 // 挑戦者+2: +20
    case 'peakPerformance':
      return 20 // フルチャージ: +20
    case 'none':
    default:
      return 0
  }
}

/**
 * 挑戦者・フルチャージ・力の解放の会心率補正値を取得
 * @param challengeSkill 挑戦者・フルチャージ・力の解放のスキル
 * @returns 会心率補正値（%）
 */
export const getChallengeSkillCriticalValue = (challengeSkill: ChallengeSkill | string): number => {
  switch (challengeSkill) {
    case 'challenger1':
      return 10 // 挑戦者+1: 会心率+10%
    case 'challenger2':
      return 15 // 挑戦者+2: 会心率+15%
    case 'latentPower1':
      return 30 // 力の解放+1: 会心率+30%
    case 'latentPower2':
      return 50 // 力の解放+2: 会心率+50%
    case 'peakPerformance':
    case 'none':
    default:
      return 0
  }
}

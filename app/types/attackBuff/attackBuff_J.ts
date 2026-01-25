/**
 * グループJ: 挑戦者・フルチャージ・力の解放
 */
import { attackBuff } from './attackBuff'

export class attackBuffJ extends attackBuff {
  private challengeSkillValue: number = 0

  constructor(challengeSkill?: ChallengeSkill) {
    super('weapon_multiplier_add', 'J')
    if (challengeSkill) {
      this.challengeSkillValue = getChallengeSkillValue(challengeSkill)
    }
  }

  override apply(attack: number): number {
    this.value = this.challengeSkillValue
    return super.apply(attack)
  }
}

export type ChallengeSkill =
  | 'none'
  | 'challenger1' // 挑戦者+1
  | 'challenger2' // 挑戦者+2
  | 'peakPerformance' // フルチャージ
  | 'latentPower1' // 力の解放+1
  | 'latentPower2' // 力の解放+2

export const getChallengeSkillValue = (challengeSkill: ChallengeSkill): number => {
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

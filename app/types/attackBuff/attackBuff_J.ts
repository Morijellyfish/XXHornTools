/**
 * グループJ: 挑戦者・フルチャージ・力の解放
 */
import { attackBuff } from './attackBuff'
import type { ChallengeSkill } from '~/types/challengeSkill'
import { getChallengeSkillAttackValue } from '~/types/challengeSkill'

export class attackBuffJ extends attackBuff {
  private challengeSkillValue: number = 0

  constructor(challengeSkill?: ChallengeSkill) {
    super('weapon_multiplier_add', 'J')
    if (challengeSkill) {
      this.challengeSkillValue = getChallengeSkillAttackValue(challengeSkill)
    }
  }

  override apply(attack: number): number {
    this.value = this.challengeSkillValue
    return super.apply(attack)
  }
}

/**
 * グループE: 挑戦者・フルチャージ・力の解放（会心率補正）
 */
import { criticalBuff } from './criticalBuff'
import type { ChallengeSkill } from '~/types/challengeSkill'
import { getChallengeSkillCriticalValue } from '~/types/challengeSkill'

export class criticalBuffE extends criticalBuff {
  constructor(challengeSkill: ChallengeSkill) {
    super('E')
    // 挑戦者・フルチャージ・力の解放の会心率補正値
    this.value = getChallengeSkillCriticalValue(challengeSkill)
  }
}

export { getChallengeSkillCriticalValue } from '~/types/challengeSkill'

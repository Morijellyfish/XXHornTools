import type { PowerCharm } from './attackBuff_A'
import type { PowerTalon } from './attackBuff_B'
import type { AttackSkill } from './attackBuff_F'
import type { AttackMelody } from './attackBuff_H'

export type { PowerCharm } from './attackBuff_A'
export type { PowerTalon } from './attackBuff_B'
export type { AttackSkill } from './attackBuff_F'
export { getAttackSkillValue } from './attackBuff_F'
export type { AttackMelody } from './attackBuff_H'

export interface AttackBuffs {
  powerCharm?: PowerCharm
  powerTalon?: PowerTalon
  attackSkill?: AttackSkill
  attackMelody?: AttackMelody
  attackMelodyMultiplier?: number
  [key: string]: unknown
}

/**
 * @deprecated AttackBuffsを使用してください
 */
export type AttackBuffModifiers = AttackBuffs

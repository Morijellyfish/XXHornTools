import type { PowerCharm } from './attackBuff_A'
import type { PowerTalon } from './attackBuff_B'
import type { PreparedBuff } from './attackBuff_C'
import type { AttackSkill } from './attackBuff_F'
import type { AttackMelody } from './attackBuff_H'
import type { HunterSkill } from './attackBuff_K'

export type { PowerCharm } from './attackBuff_A'
export type { PowerTalon } from './attackBuff_B'
export type { PreparedBuff } from './attackBuff_C'
export { getPreparedBuffValue } from './attackBuff_C'
export type { AttackSkill } from './attackBuff_F'
export { getAttackSkillValue } from './attackBuff_F'
export type { AttackMelody } from './attackBuff_H'
export type { HunterSkill } from './attackBuff_K'
export { getHunterSkillValue } from './attackBuff_K'

export interface AttackBuffs {
  powerCharm?: PowerCharm
  powerTalon?: PowerTalon
  preparedBuff?: PreparedBuff
  attackSkill?: AttackSkill
  hunterSkill?: HunterSkill
  attackMelody?: AttackMelody
  attackMelodyMultiplier?: number
  [key: string]: unknown
}

/**
 * @deprecated AttackBuffsを使用してください
 */
export type AttackBuffModifiers = AttackBuffs

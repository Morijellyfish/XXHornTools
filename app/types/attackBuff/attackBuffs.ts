import type { PowerCharm } from './attackBuff_A'
import type { PowerTalon } from './attackBuff_B'
import type { PreparedBuff } from './attackBuff_C'
import type { ShortTermBuff } from './attackBuff_D'
import type { AttackSkill } from './attackBuff_F'
import type { Adrenaline } from './attackBuff_G'
import type { AttackMelody } from './attackBuff_H'
import type { Fortify } from './attackBuff_I'
import type { ChallengeSkill } from '~/types/challengeSkill'
import type { HunterSkill } from './attackBuff_K'
import type { Bludgeoner } from './attackBuff_L'
import type { Resuscitate } from './attackBuff_M'
import type { Resentment } from './attackBuff_N'
import type { DragonInstinct } from './attackBuff_O'
import type { ShortHypnosis } from './attackBuff_E'

export type { PowerCharm } from './attackBuff_A'
export type { PowerTalon } from './attackBuff_B'
export type { PreparedBuff } from './attackBuff_C'
export { getPreparedBuffValue } from './attackBuff_C'
export type { ShortTermBuff } from './attackBuff_D'
export { getShortTermBuffValue } from './attackBuff_D'
export type { ShortHypnosis } from './attackBuff_E'
export type { AttackSkill } from './attackBuff_F'
export { getAttackSkillValue } from './attackBuff_F'
export type { Adrenaline } from './attackBuff_G'
export { getAdrenalineMultiplier } from './attackBuff_G'
export { AttackMelody } from './attackBuff_H'
export type { Fortify } from './attackBuff_I'
export { getFortifyMultiplier } from './attackBuff_I'
export type { ChallengeSkill } from '~/types/challengeSkill'
export type { HunterSkill } from './attackBuff_K'
export { getHunterSkillValue } from './attackBuff_K'
export type { Bludgeoner } from './attackBuff_L'
export { getBludgeonerMultiplier } from './attackBuff_L'
export type { Resuscitate } from './attackBuff_M'
export type { Resentment } from './attackBuff_N'
export type { DragonInstinct } from './attackBuff_O'

export interface AttackBuffs {
  powerCharm?: PowerCharm
  powerTalon?: PowerTalon
  preparedBuff?: PreparedBuff
  shortTermBuff?: ShortTermBuff
  shortHypnosis?: ShortHypnosis
  attackSkill?: AttackSkill
  adrenaline?: Adrenaline
  challengeSkill?: ChallengeSkill
  hunterSkill?: HunterSkill
  bludgeoner?: Bludgeoner
  resuscitate?: Resuscitate
  resentment?: Resentment
  fortify?: Fortify
  dragonInstinct?: DragonInstinct
  attackMelody?: AttackMelody
  attackMelodyMultiplier?: number
  [key: string]: unknown
}

/**
 * @deprecated AttackBuffsを使用してください
 */
export type AttackBuffModifiers = AttackBuffs

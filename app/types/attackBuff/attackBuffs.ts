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

interface AttackBuffs {
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
}

export type { AttackBuffs }

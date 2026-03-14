import { swordAndShieldsR1 } from './swordAndShield-r1'
import { swordAndShieldsR2 } from './swordAndShield-r2'
import { swordAndShieldsR3 } from './swordAndShield-r3'
import { swordAndShieldsR4 } from './swordAndShield-r4'
import { swordAndShieldsR5 } from './swordAndShield-r5'
import { swordAndShieldsR6 } from './swordAndShield-r6'
import { swordAndShieldsR7 } from './swordAndShield-r7'
import { swordAndShieldsR8 } from './swordAndShield-r8'
import { swordAndShieldsR9 } from './swordAndShield-r9'
import { swordAndShieldsR10 } from './swordAndShield-r10'
import { swordAndShieldsRX } from './swordAndShield-rx'
import type { SwordAndShield } from '~/types/weapons'

// 全レア度の片手剣データを統合
export const allSwordAndShields: SwordAndShield[] = [
  ...swordAndShieldsR1,
  ...swordAndShieldsR2,
  ...swordAndShieldsR3,
  ...swordAndShieldsR4,
  ...swordAndShieldsR5,
  ...swordAndShieldsR6,
  ...swordAndShieldsR7,
  ...swordAndShieldsR8,
  ...swordAndShieldsR9,
  ...swordAndShieldsR10,
  ...swordAndShieldsRX,
]

// レア度別にエクスポート
export {
  swordAndShieldsR1,
  swordAndShieldsR2,
  swordAndShieldsR3,
  swordAndShieldsR4,
  swordAndShieldsR5,
  swordAndShieldsR6,
  swordAndShieldsR7,
  swordAndShieldsR8,
  swordAndShieldsR9,
  swordAndShieldsR10,
  swordAndShieldsRX,
}

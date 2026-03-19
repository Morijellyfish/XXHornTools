import { dualBladesR1 } from './dualBlade-r1'
import { dualBladesR2 } from './dualBlade-r2'
import { dualBladesR3 } from './dualBlade-r3'
import { dualBladesR4 } from './dualBlade-r4'
import { dualBladesR5 } from './dualBlade-r5'
import { dualBladesR6 } from './dualBlade-r6'
import { dualBladesR7 } from './dualBlade-r7'
import { dualBladesR8 } from './dualBlade-r8'
import { dualBladesR9 } from './dualBlade-r9'
import { dualBladesR10 } from './dualBlade-r10'
import { dualBladesRX } from './dualBlade-rx'
import type { DualBlade } from '~/types/weapons'

// 全レア度の双剣データを統合
export const allDualBlades: DualBlade[] = [
  ...dualBladesR1,
  ...dualBladesR2,
  ...dualBladesR3,
  ...dualBladesR4,
  ...dualBladesR5,
  ...dualBladesR6,
  ...dualBladesR7,
  ...dualBladesR8,
  ...dualBladesR9,
  ...dualBladesR10,
  ...dualBladesRX,
]

// レア度別にエクスポート
export {
  dualBladesR1,
  dualBladesR2,
  dualBladesR3,
  dualBladesR4,
  dualBladesR5,
  dualBladesR6,
  dualBladesR7,
  dualBladesR8,
  dualBladesR9,
  dualBladesR10,
  dualBladesRX,
}

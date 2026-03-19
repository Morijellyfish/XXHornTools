import { chargeBladesR1 } from './chargeBlade-r1'
import { chargeBladesR2 } from './chargeBlade-r2'
import { chargeBladesR3 } from './chargeBlade-r3'
import { chargeBladesR4 } from './chargeBlade-r4'
import { chargeBladesR5 } from './chargeBlade-r5'
import { chargeBladesR6 } from './chargeBlade-r6'
import { chargeBladesR7 } from './chargeBlade-r7'
import { chargeBladesR8 } from './chargeBlade-r8'
import { chargeBladesR10 } from './chargeBlade-r10'
import { chargeBladesRX } from './chargeBlade-rx'
import type { ChargeBlade } from '~/types/weapons'

// 全レア度のチャージアックスデータを統合
export const allChargeBlades: ChargeBlade[] = [
  ...chargeBladesR1,
  ...chargeBladesR2,
  ...chargeBladesR3,
  ...chargeBladesR4,
  ...chargeBladesR5,
  ...chargeBladesR6,
  ...chargeBladesR7,
  ...chargeBladesR8,
  ...chargeBladesR10,
  ...chargeBladesRX,
]

// レア度別にエクスポート
export {
  chargeBladesR1,
  chargeBladesR2,
  chargeBladesR3,
  chargeBladesR4,
  chargeBladesR5,
  chargeBladesR6,
  chargeBladesR7,
  chargeBladesR8,
  chargeBladesR10,
  chargeBladesRX,
}

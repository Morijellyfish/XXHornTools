import { lancesR1 } from './lance-r1'
import { lancesR2 } from './lance-r2'
import { lancesR3 } from './lance-r3'
import { lancesR4 } from './lance-r4'
import { lancesR5 } from './lance-r5'
import { lancesR6 } from './lance-r6'
import { lancesR7 } from './lance-r7'
import { lancesR8 } from './lance-r8'
import { lancesR9 } from './lance-r9'
import { lancesR10 } from './lance-r10'
import { lancesRX } from './lance-rx'
import type { Lance } from '~/types/weapons'

// 全レア度のランスデータを統合
export const allLances: Lance[] = [
  ...lancesR1,
  ...lancesR2,
  ...lancesR3,
  ...lancesR4,
  ...lancesR5,
  ...lancesR6,
  ...lancesR7,
  ...lancesR8,
  ...lancesR9,
  ...lancesR10,
  ...lancesRX,
]

// レア度別にエクスポート
export {
  lancesR1,
  lancesR2,
  lancesR3,
  lancesR4,
  lancesR5,
  lancesR6,
  lancesR7,
  lancesR8,
  lancesR9,
  lancesR10,
  lancesRX,
}

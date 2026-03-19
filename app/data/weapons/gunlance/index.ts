import { gunlancesR1 } from './gunlance-r1'
import { gunlancesR2 } from './gunlance-r2'
import { gunlancesR3 } from './gunlance-r3'
import { gunlancesR4 } from './gunlance-r4'
import { gunlancesR5 } from './gunlance-r5'
import { gunlancesR6 } from './gunlance-r6'
import { gunlancesR7 } from './gunlance-r7'
import { gunlancesR8 } from './gunlance-r8'
import { gunlancesR9 } from './gunlance-r9'
import { gunlancesR10 } from './gunlance-r10'
import { gunlancesRX } from './gunlance-rx'
import type { Gunlance } from '~/types/weapons'

// 全レア度のガンランスデータを統合
export const allGunlances: Gunlance[] = [
  ...gunlancesR1,
  ...gunlancesR2,
  ...gunlancesR3,
  ...gunlancesR4,
  ...gunlancesR5,
  ...gunlancesR6,
  ...gunlancesR7,
  ...gunlancesR8,
  ...gunlancesR9,
  ...gunlancesR10,
  ...gunlancesRX,
]

// レア度別にエクスポート
export {
  gunlancesR1,
  gunlancesR2,
  gunlancesR3,
  gunlancesR4,
  gunlancesR5,
  gunlancesR6,
  gunlancesR7,
  gunlancesR8,
  gunlancesR9,
  gunlancesR10,
  gunlancesRX,
}

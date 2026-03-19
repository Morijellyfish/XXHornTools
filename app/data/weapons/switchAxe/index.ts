import { switchAxesR1 } from './switchAxe-r1'
import { switchAxesR2 } from './switchAxe-r2'
import { switchAxesR3 } from './switchAxe-r3'
import { switchAxesR4 } from './switchAxe-r4'
import { switchAxesR5 } from './switchAxe-r5'
import { switchAxesR6 } from './switchAxe-r6'
import { switchAxesR7 } from './switchAxe-r7'
import { switchAxesR8 } from './switchAxe-r8'
import { switchAxesR9 } from './switchAxe-r9'
import { switchAxesR10 } from './switchAxe-r10'
import { switchAxesRX } from './switchAxe-rx'
import type { SwitchAxe } from '~/types/weapons'

// 全レア度のスラッシュアックスデータを統合
export const allSwitchAxes: SwitchAxe[] = [
  ...switchAxesR1,
  ...switchAxesR2,
  ...switchAxesR3,
  ...switchAxesR4,
  ...switchAxesR5,
  ...switchAxesR6,
  ...switchAxesR7,
  ...switchAxesR8,
  ...switchAxesR9,
  ...switchAxesR10,
  ...switchAxesRX,
]

// レア度別にエクスポート
export {
  switchAxesR1,
  switchAxesR2,
  switchAxesR3,
  switchAxesR4,
  switchAxesR5,
  switchAxesR6,
  switchAxesR7,
  switchAxesR8,
  switchAxesR9,
  switchAxesR10,
  switchAxesRX,
}

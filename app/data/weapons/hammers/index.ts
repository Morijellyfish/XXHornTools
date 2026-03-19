import { hammersR1 } from './hammer-r1'
import { hammersR2 } from './hammer-r2'
import { hammersR3 } from './hammer-r3'
import { hammersR4 } from './hammer-r4'
import { hammersR5 } from './hammer-r5'
import { hammersR6 } from './hammer-r6'
import { hammersR7 } from './hammer-r7'
import { hammersR8 } from './hammer-r8'
import { hammersR9 } from './hammer-r9'
import { hammersR10 } from './hammer-r10'
import { hammersRX } from './hammer-rx'
import type { Hammer } from '~/types/weapons'

// 全レア度のハンマーデータを統合
export const allHammers: Hammer[] = [
  ...hammersR1,
  ...hammersR2,
  ...hammersR3,
  ...hammersR4,
  ...hammersR5,
  ...hammersR6,
  ...hammersR7,
  ...hammersR8,
  ...hammersR9,
  ...hammersR10,
  ...hammersRX,
]

// レア度別にエクスポート
export {
  hammersR1,
  hammersR2,
  hammersR3,
  hammersR4,
  hammersR5,
  hammersR6,
  hammersR7,
  hammersR8,
  hammersR9,
  hammersR10,
  hammersRX,
}

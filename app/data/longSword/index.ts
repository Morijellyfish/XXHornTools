import { longSwordsR1 } from './longSword-r1'
import { longSwordsR2 } from './longSword-r2'
import { longSwordsR3 } from './longSword-r3'
import { longSwordsR4 } from './longSword-r4'
import { longSwordsR5 } from './longSword-r5'
import { longSwordsR6 } from './longSword-r6'
import { longSwordsR7 } from './longSword-r7'
import { longSwordsR8 } from './longSword-r8'
import { longSwordsR9 } from './longSword-r9'
import { longSwordsR10 } from './longSword-r10'
import { longSwordsRX } from './longSword-rx'
import type { LongSword } from '~/types/weapons'

// 全レア度の太刀データを統合
export const allLongSwords: LongSword[] = [
  ...longSwordsR1,
  ...longSwordsR2,
  ...longSwordsR3,
  ...longSwordsR4,
  ...longSwordsR5,
  ...longSwordsR6,
  ...longSwordsR7,
  ...longSwordsR8,
  ...longSwordsR9,
  ...longSwordsR10,
  ...longSwordsRX,
]

// レア度別にエクスポート
export {
  longSwordsR1,
  longSwordsR2,
  longSwordsR3,
  longSwordsR4,
  longSwordsR5,
  longSwordsR6,
  longSwordsR7,
  longSwordsR8,
  longSwordsR9,
  longSwordsR10,
  longSwordsRX,
}

import { greatSwordsR1 } from './greatSword-r1'
import { greatSwordsR2 } from './greatSword-r2'
import { greatSwordsR3 } from './greatSword-r3'
import { greatSwordsR4 } from './greatSword-r4'
import { greatSwordsR5 } from './greatSword-r5'
import { greatSwordsR6 } from './greatSword-r6'
import { greatSwordsR7 } from './greatSword-r7'
import { greatSwordsR8 } from './greatSword-r8'
import { greatSwordsR9 } from './greatSword-r9'
import { greatSwordsR10 } from './greatSword-r10'
import { greatSwordsRX } from './greatSword-rx'
import type { GreatSword } from '~/types/weapons'

// 全レア度の大剣データを統合
export const allGreatSwords: GreatSword[] = [
  ...greatSwordsR1,
  ...greatSwordsR2,
  ...greatSwordsR3,
  ...greatSwordsR4,
  ...greatSwordsR5,
  ...greatSwordsR6,
  ...greatSwordsR7,
  ...greatSwordsR8,
  ...greatSwordsR9,
  ...greatSwordsR10,
  ...greatSwordsRX,
]

// レア度別にエクスポート
export {
  greatSwordsR1,
  greatSwordsR2,
  greatSwordsR3,
  greatSwordsR4,
  greatSwordsR5,
  greatSwordsR6,
  greatSwordsR7,
  greatSwordsR8,
  greatSwordsR9,
  greatSwordsR10,
  greatSwordsRX,
}

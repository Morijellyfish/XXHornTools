import { hornsR1 } from './horns-r1'
import { hornsR2 } from './horns-r2'
import { hornsR3 } from './horns-r3'
import { hornsR4 } from './horns-r4'
import { hornsR5 } from './horns-r5'
import { hornsR6 } from './horns-r6'
import { hornsR7 } from './horns-r7'
import { hornsR8 } from './horns-r8'
import { hornsR10 } from './horns-r10'
import { hornsRX } from './horns-rx'
import type { Horn } from '~/types/horn'

// 全レア度の狩猟笛データを統合
export const allHorns: Horn[] = [
  ...hornsR1,
  ...hornsR2,
  ...hornsR3,
  ...hornsR4,
  ...hornsR5,
  ...hornsR6,
  ...hornsR7,
  ...hornsR8,
  ...hornsR10,
  ...hornsRX,
]

// レア度別にエクスポート
export { hornsR1, hornsR2, hornsR3, hornsR4, hornsR5, hornsR6, hornsR7, hornsR8, hornsR10, hornsRX }

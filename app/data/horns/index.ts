import { hornsR1 } from './horns-r1'
import { hornsR2 } from './horns-r2'
import { hornsR3 } from './horns-r3'
import { hornsR4 } from './horns-r4'
import { hornsR5 } from './horns-r5'
import type { Horn } from '~/types/horn'

// 全レア度の狩猟笛データを統合
export const allHorns: Horn[] = [...hornsR1, ...hornsR2, ...hornsR3, ...hornsR4, ...hornsR5]

// レア度別にエクスポート
export { hornsR1, hornsR2, hornsR3, hornsR4, hornsR5 }

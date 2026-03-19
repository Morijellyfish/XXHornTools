import { insectGlaivesR1 } from './insectGlaive-r1'
import { insectGlaivesR2 } from './insectGlaive-r2'
import { insectGlaivesR3 } from './insectGlaive-r3'
import { insectGlaivesR4 } from './insectGlaive-r4'
import { insectGlaivesR5 } from './insectGlaive-r5'
import { insectGlaivesR6 } from './insectGlaive-r6'
import { insectGlaivesR7 } from './insectGlaive-r7'
import { insectGlaivesR8 } from './insectGlaive-r8'
import { insectGlaivesR9 } from './insectGlaive-r9'
import { insectGlaivesR10 } from './insectGlaive-r10'
import { insectGlaivesRX } from './insectGlaive-rx'
import type { InsectGlaive } from '~/types/weapons'

// 全レア度の操虫棍データを統合
export const allInsectGlaives: InsectGlaive[] = [
  ...insectGlaivesR1,
  ...insectGlaivesR2,
  ...insectGlaivesR3,
  ...insectGlaivesR4,
  ...insectGlaivesR5,
  ...insectGlaivesR6,
  ...insectGlaivesR7,
  ...insectGlaivesR8,
  ...insectGlaivesR9,
  ...insectGlaivesR10,
  ...insectGlaivesRX,
]

// レア度別にエクスポート
export {
  insectGlaivesR1,
  insectGlaivesR2,
  insectGlaivesR3,
  insectGlaivesR4,
  insectGlaivesR5,
  insectGlaivesR6,
  insectGlaivesR7,
  insectGlaivesR8,
  insectGlaivesR9,
  insectGlaivesR10,
  insectGlaivesRX,
}

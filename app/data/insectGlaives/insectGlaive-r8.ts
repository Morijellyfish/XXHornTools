import type { InsectGlaive } from '~/types/weapons'
import { SharpnessColor } from '~/types/sharpness'

export const insectGlaivesR8: InsectGlaive[] = [
  {
    name: 'ネルストルケル3',
    attack: 270,
    defense: 0,
    slots: 2,
    affinity: 15,
    insectType: 'slash',
    elementStatus: { type: '睡眠', value: 25 },
    sharpness: {
      normal: { color: SharpnessColor.Purple, length: 10 },
      plus1: { color: SharpnessColor.Purple, length: 35 },
      plus2: { color: SharpnessColor.Purple, length: 60 },
    },
  },
  {
    name: 'フィロゾフロッド3',
    attack: 320,
    defense: 0,
    slots: 0,
    affinity: 0,
    insectType: 'slash',
    sharpness: {
      normal: { color: SharpnessColor.White, length: 70 },
      plus1: { color: SharpnessColor.White, length: 70 },
      plus2: { color: SharpnessColor.White, length: 70 },
    },
  },
]

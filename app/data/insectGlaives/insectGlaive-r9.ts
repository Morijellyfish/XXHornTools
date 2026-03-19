import type { InsectGlaive } from '~/types/weapons'
import { SharpnessColor } from '~/types/sharpness'

export const insectGlaivesR9: InsectGlaive[] = [
  {
    name: '天雷宝棍【麒麟帝】3',
    attack: 290,
    defense: 0,
    slots: 2,
    affinity: 0,
    insectType: 'slash',
    element: { type: '雷', value: 52 },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 110 },
      plus1: { color: SharpnessColor.White, length: 135 },
      plus2: { color: SharpnessColor.Purple, length: 10 },
    },
  },
]

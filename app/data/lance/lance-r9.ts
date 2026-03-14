import type { Lance } from '~/types/weapons'
import { SharpnessColor } from '~/types/sharpness'

export const lancesR9: Lance[] = [
  {
    name: 'ザ・ランサー3',
    attack: 270,
    defense: 0,
    slots: 3,
    affinity: 15,
    element: { type: '龍', value: 30 },
    sharpness: {
      normal: { color: SharpnessColor.Red, length: 10 },
      plus1: { color: SharpnessColor.Red, length: 10 },
      plus2: { color: SharpnessColor.Red, length: 10 },
    },
  },
]

import type { Lance } from '~/types/weapons'
import { SharpnessColor } from '~/types/sharpness'

export const lancesR9: Lance[] = [
  {
    name: 'ザ・ランサー3',
    attack: 270,
    defense: 0,
    slots: 3,
    affinity: 15,
    elementStatus: { type: '龍', value: 30 },
    sharpness: {
      normal: { color: SharpnessColor.Purple, length: 30 },
      plus1: { color: SharpnessColor.Purple, length: 30 },
      plus2: { color: SharpnessColor.Purple, length: 30 },
    },
  },
]

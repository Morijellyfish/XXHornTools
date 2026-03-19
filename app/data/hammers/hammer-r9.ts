import type { Hammer } from '~/types/weapons'
import { SharpnessColor } from '~/types/sharpness'

export const hammersR9: Hammer[] = [
  {
    name: '大剛槌ドボルゴンドー3',
    attack: 320,
    defense: 15,
    slots: 2,
    affinity: 0,
    sharpness: {
      normal: { color: SharpnessColor.White, length: 30 },
      plus1: { color: SharpnessColor.Purple, length: 5 },
      plus2: { color: SharpnessColor.Purple, length: 30 },
    },
  },
]

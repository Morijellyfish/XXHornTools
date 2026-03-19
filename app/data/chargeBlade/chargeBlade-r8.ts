import type { ChargeBlade } from '~/types/weapons'
import { SharpnessColor } from '~/types/sharpness'

export const chargeBladesR8: ChargeBlade[] = [
  {
    name: '完熟激辛ペニョックス3',
    attack: 290,
    defense: 0,
    slots: 1,
    affinity: 0,
    chargeBladePhialType: 'impact',
    elementStatus: { type: '麻痺', value: 8 },
    sharpness: {
      normal: { color: SharpnessColor.Purple, length: 30 },
      plus1: { color: SharpnessColor.Purple, length: 30 },
      plus2: { color: SharpnessColor.Purple, length: 30 },
    },
  },
  {
    name: 'フィロゾフアームズ3',
    attack: 320,
    defense: 0,
    slots: 0,
    affinity: 0,
    chargeBladePhialType: 'impact',
    sharpness: {
      normal: { color: SharpnessColor.White, length: 70 },
      plus1: { color: SharpnessColor.White, length: 70 },
      plus2: { color: SharpnessColor.White, length: 70 },
    },
  },
]

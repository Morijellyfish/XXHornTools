import type { DualBlade } from '~/types/weapons'
import { SharpnessColor } from '~/types/sharpness'

export const dualBladesR8: DualBlade[] = [
  {
    name: 'フィロゾフダガー3',
    attack: 320,
    defense: 0,
    slots: 0,
    affinity: 0,
    sharpness: {
      normal: { color: SharpnessColor.White, length: 70 },
      plus1: { color: SharpnessColor.White, length: 70 },
      plus2: { color: SharpnessColor.White, length: 70 },
    },
  },
  {
    name: '瀑睡刃ガルヴェルデン3',
    attack: 290,
    defense: 0,
    slots: 1,
    affinity: 0,
    element: { type: '水', value: 32 },
    subElement: { type: '睡眠', value: 22 },
    sharpness: {
      normal: { color: SharpnessColor.Blue, length: 110 },
      plus1: { color: SharpnessColor.White, length: 5 },
      plus2: { color: SharpnessColor.Purple, length: 10 },
    },
  },
]

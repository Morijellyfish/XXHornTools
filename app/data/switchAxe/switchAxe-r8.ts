import type { SwitchAxe } from '~/types/weapons'
import { SharpnessColor } from '~/types/sharpness'

export const switchAxesR8: SwitchAxe[] = [
  {
    name: '満身ぴりぴりのゾーラ3',
    attack: 280,
    defense: 0,
    slots: 1,
    affinity: 0,
    statusAilment: { type: '麻痺', value: 5 },
    switchAxePhialType: 'power',
    sharpness: {
      normal: { color: SharpnessColor.Purple, length: 50 },
      plus1: { color: SharpnessColor.Purple, length: 50 },
      plus2: { color: SharpnessColor.Purple, length: 50 },
    },
  },
  {
    name: 'フィロゾフアックス3',
    attack: 310,
    defense: 0,
    slots: 0,
    affinity: 0,
    switchAxePhialType: 'power',
    sharpness: {
      normal: { color: SharpnessColor.White, length: 70 },
      plus1: { color: SharpnessColor.White, length: 70 },
      plus2: { color: SharpnessColor.White, length: 70 },
    },
  },
]

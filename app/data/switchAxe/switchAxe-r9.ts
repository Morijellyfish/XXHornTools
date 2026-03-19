import type { SwitchAxe } from '~/types/weapons'
import { SharpnessColor } from '~/types/sharpness'

export const switchAxesR9: SwitchAxe[] = [
  {
    name: '琥牙剣斧ラヴィーナ3',
    attack: 320,
    defense: 0,
    slots: 1,
    affinity: 20,
    element: { type: '氷', value: 20 },
    switchAxePhialType: 'element',
    sharpness: {
      normal: { color: SharpnessColor.White, length: 40 },
      plus1: { color: SharpnessColor.White, length: 65 },
      plus2: { color: SharpnessColor.White, length: 90 },
    },
  },
  {
    name: '海王斧ナバルディード3',
    attack: 330,
    defense: 0,
    slots: 0,
    affinity: 0,
    element: { type: '水', value: 18 },
    switchAxePhialType: 'power',
    sharpness: {
      normal: { color: SharpnessColor.White, length: 30 },
      plus1: { color: SharpnessColor.Purple, length: 5 },
      plus2: { color: SharpnessColor.Purple, length: 30 },
    },
  },
]

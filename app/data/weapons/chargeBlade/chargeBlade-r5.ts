import type { ChargeBlade } from '~/types/weapons'
import { SharpnessColor } from '~/types/sharpness'

export const chargeBladesR5: ChargeBlade[] = [
  {
    name: 'トリスタンイゾルデ5',
    attack: 280,
    defense: 0,
    slots: 3,
    affinity: 15,
    chargeBladePhialType: 'element',
    elementStatus: { type: '雷', value: 40 },
    sharpness: {
      normal: { color: SharpnessColor.Purple, length: 10 },
      plus1: { color: SharpnessColor.Purple, length: 10 },
      plus2: { color: SharpnessColor.Purple, length: 10 },
    },
  },
  {
    name: 'ザ・ボア・テドミア5',
    attack: 290,
    defense: 0,
    slots: 3,
    affinity: -10,
    chargeBladePhialType: 'element',
    elementStatus: { type: '氷', value: 42 },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 30 },
      plus1: { color: SharpnessColor.Purple, length: 25 },
      plus2: { color: SharpnessColor.Purple, length: 50 },
    },
  },
  {
    name: '灼滅斧ヴォルクラテロ5',
    attack: 340,
    defense: 0,
    slots: 2,
    affinity: -10,
    chargeBladePhialType: 'impact',
    elementStatus: { type: '火', value: 20 },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 20 },
      plus1: { color: SharpnessColor.White, length: 45 },
      plus2: { color: SharpnessColor.Purple, length: 20 },
    },
  },
]

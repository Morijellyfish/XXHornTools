import type { ChargeBlade } from '~/types/weapons'
import { SharpnessColor } from '~/types/sharpness'

export const chargeBladesR1: ChargeBlade[] = [
  {
    name: '縛盾斧デスヴースタ9',
    attack: 290,
    defense: 0,
    slots: 1,
    affinity: 0,
    chargeBladePhialType: 'impact',
    statusAilment: { type: '麻痺', value: 22 },
    sharpness: {
      normal: { color: SharpnessColor.Blue, length: 80 },
      plus1: { color: SharpnessColor.White, length: 25 },
      plus2: { color: SharpnessColor.White, length: 50 },
    },
  },
  {
    name: 'ソフォスアームズ11',
    attack: 320,
    defense: 0,
    slots: 3,
    affinity: 0,
    chargeBladePhialType: 'impact',
    sharpness: {
      normal: { color: SharpnessColor.White, length: 40 },
      plus1: { color: SharpnessColor.White, length: 65 },
      plus2: { color: SharpnessColor.White, length: 90 },
    },
  },
  {
    name: 'サリーレバンディット10',
    attack: 330,
    defense: 0,
    slots: 2,
    affinity: 0,
    chargeBladePhialType: 'impact',
    sharpness: {
      normal: { color: SharpnessColor.White, length: 30 },
      plus1: { color: SharpnessColor.White, length: 55 },
      plus2: { color: SharpnessColor.Purple, length: 20 },
    },
  },
  {
    name: 'ウンシュルトベイル8',
    attack: 330,
    defense: 0,
    slots: 0,
    affinity: 0,
    chargeBladePhialType: 'impact',
    element: { type: '氷', value: 29 },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 10 },
      plus1: { color: SharpnessColor.Purple, length: 5 },
      plus2: { color: SharpnessColor.Purple, length: 30 },
    },
  },
  {
    name: 'カイゼルコマダント11',
    attack: 340,
    defense: 0,
    slots: 1,
    affinity: 0,
    chargeBladePhialType: 'impact',
    sharpness: {
      normal: { color: SharpnessColor.White, length: 20 },
      plus1: { color: SharpnessColor.White, length: 45 },
      plus2: { color: SharpnessColor.White, length: 70 },
    },
  },
  {
    name: '断骨盾斧シルトベイル11',
    attack: 350,
    defense: 0,
    slots: 2,
    affinity: 0,
    chargeBladePhialType: 'impact',
    sharpness: {
      normal: { color: SharpnessColor.Blue, length: 50 },
      plus1: { color: SharpnessColor.White, length: 5 },
      plus2: { color: SharpnessColor.Purple, length: 20 },
    },
  },
]

import type { ChargeBlade } from '~/types/weapons'
import { SharpnessColor } from '~/types/sharpness'

export const chargeBladesR4: ChargeBlade[] = [
  {
    name: 'ベロボーグサイズ6',
    attack: 280,
    defense: 0,
    slots: 1,
    affinity: 25,
    chargeBladePhialType: 'impact',
    statusAilment: { type: '毒', value: 28 },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 120 },
      plus1: { color: SharpnessColor.Purple, length: 5 },
      plus2: { color: SharpnessColor.Purple, length: 30 },
    },
  },
  {
    name: 'ビクトーリアノブレス6',
    attack: 310,
    defense: 0,
    slots: 1,
    affinity: 10,
    chargeBladePhialType: 'element',
    element: { type: '雷', value: 34 },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 30 },
      plus1: { color: SharpnessColor.Purple, length: 5 },
      plus2: { color: SharpnessColor.Purple, length: 30 },
    },
  },
  {
    name: 'エクサルシス7',
    attack: 330,
    defense: 25,
    slots: 1,
    affinity: 0,
    chargeBladePhialType: 'element',
    element: { type: '水', value: 31 },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 10 },
      plus1: { color: SharpnessColor.White, length: 35 },
      plus2: { color: SharpnessColor.White, length: 60 },
    },
  },
  {
    name: 'スクアリーアルマード6',
    attack: 340,
    defense: 0,
    slots: 1,
    affinity: -15,
    chargeBladePhialType: 'element',
    element: { type: '氷', value: 37 },
    sharpness: {
      normal: { color: SharpnessColor.Blue, length: 60 },
      plus1: { color: SharpnessColor.White, length: 15 },
      plus2: { color: SharpnessColor.White, length: 40 },
    },
  },
  {
    name: 'ボルボロコンプレート6',
    attack: 360,
    defense: 20,
    slots: 2,
    affinity: -15,
    chargeBladePhialType: 'impact',
    sharpness: {
      normal: { color: SharpnessColor.Blue, length: 80 },
      plus1: { color: SharpnessColor.White, length: 25 },
      plus2: { color: SharpnessColor.White, length: 50 },
    },
  },
  {
    name: '少し風化した盾斧7',
    attack: 380,
    defense: 0,
    slots: 0,
    affinity: -70,
    chargeBladePhialType: 'impact',
    sharpness: {
      normal: { color: SharpnessColor.Yellow, length: 190 },
      plus1: { color: SharpnessColor.Blue, length: 5 },
      plus2: { color: SharpnessColor.White, length: 10 },
    },
  },
]

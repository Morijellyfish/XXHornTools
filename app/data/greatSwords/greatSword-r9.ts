import type { GreatSword } from '~/types/weapons'
import { SharpnessColor } from '~/types/sharpness'

export const greatSwordsR9: GreatSword[] = [
  {
    name: 'オーリオ3',
    attack: 310,
    defense: 0,
    slots: 3,
    affinity: 25,
    sharpness: {
      normal: { color: SharpnessColor.White, length: 40 },
      plus1: { color: SharpnessColor.Purple, length: 25 },
      plus2: { color: SharpnessColor.Purple, length: 50 },
    },
  },
  {
    name: '海帝剣エクスカリウス3',
    attack: 310,
    defense: 0,
    slots: 0,
    affinity: 0,
    element: { type: '水', value: 58 },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 40 },
      plus1: { color: SharpnessColor.Purple, length: 5 },
      plus2: { color: SharpnessColor.Purple, length: 30 },
    },
  },
  {
    name: '極・牙狼剣3',
    attack: 320,
    defense: 20,
    slots: 0,
    affinity: 0,
    element: { type: '火', value: 24 },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 40 },
      plus1: { color: SharpnessColor.Purple, length: 5 },
      plus2: { color: SharpnessColor.Purple, length: 30 },
    },
  },
  {
    name: '島津豊久の刀3',
    attack: 360,
    defense: 0,
    slots: 0,
    affinity: 0,
    sharpness: {
      normal: { color: SharpnessColor.Blue, length: 120 },
      plus1: { color: SharpnessColor.White, length: 25 },
      plus2: { color: SharpnessColor.Purple, length: 10 },
    },
  },
]

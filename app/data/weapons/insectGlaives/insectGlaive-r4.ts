import type { InsectGlaive } from '~/types/weapons'
import { SharpnessColor } from '~/types/sharpness'

export const insectGlaivesR4: InsectGlaive[] = [
  {
    name: '最高の棍ガリア5',
    attack: 280,
    defense: 0,
    slots: 3,
    affinity: 0,
    insectType: 'impact',
    elementStatus: { type: '火', value: 16 },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 10 },
      plus1: { color: SharpnessColor.White, length: 35 },
      plus2: { color: SharpnessColor.White, length: 60 },
    },
  },
  {
    name: '如意棒【岩猿】7',
    attack: 300,
    defense: 0,
    slots: 3,
    affinity: 0,
    insectType: 'impact',
    elementStatus: { type: '水', value: 39 },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 40 },
      plus1: { color: SharpnessColor.White, length: 65 },
      plus2: { color: SharpnessColor.White, length: 90 },
    },
  },
  {
    name: 'シャドウウォーカー6',
    attack: 300,
    defense: 0,
    slots: 1,
    affinity: 20,
    insectType: 'impact',
    elementStatus: { type: '毒', value: 29 },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 60 },
      plus1: { color: SharpnessColor.Purple, length: 5 },
      plus2: { color: SharpnessColor.Purple, length: 30 },
    },
  },
  {
    name: 'フィンブルヴェトル7',
    attack: 310,
    defense: 0,
    slots: 2,
    affinity: 0,
    insectType: 'slash',
    elementStatus: { type: '氷', value: 30 },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 30 },
      plus1: { color: SharpnessColor.Purple, length: 5 },
      plus2: { color: SharpnessColor.Purple, length: 30 },
    },
  },
  {
    name: 'ヴィリズモベルセクト6',
    attack: 330,
    defense: 35,
    slots: 0,
    affinity: 0,
    insectType: 'slash',
    elementStatus: { type: '水', value: 17 },
    sharpness: {
      normal: { color: SharpnessColor.Blue, length: 80 },
      plus1: { color: SharpnessColor.White, length: 25 },
      plus2: { color: SharpnessColor.White, length: 50 },
    },
  },
]

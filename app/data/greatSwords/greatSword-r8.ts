import type { GreatSword } from '~/types/weapons'
import { SharpnessColor } from '~/types/sharpness'

export const greatSwordsR8: GreatSword[] = [
  {
    name: 'スキュラミアシゾー3',
    attack: 270,
    defense: 0,
    slots: 1,
    affinity: 25,
    statusAilment: { type: '睡眠', value: 35 },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 120 },
      plus1: { color: SharpnessColor.Purple, length: 5 },
      plus2: { color: SharpnessColor.Purple, length: 30 },
    },
  },
  {
    name: 'フィロゾフブレイド3',
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
    name: 'マゼコゼータ・ピリリ3',
    attack: 330,
    defense: 0,
    slots: 3,
    affinity: 0,
    statusAilment: { type: '麻痺', value: 8 },
    sharpness: {
      normal: { color: SharpnessColor.Blue, length: 40 },
      plus1: { color: SharpnessColor.White, length: 25 },
      plus2: { color: SharpnessColor.White, length: 50 },
    },
  },
]

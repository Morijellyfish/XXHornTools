import type { LongSword } from '~/types/weapons'
import { SharpnessColor } from '~/types/sharpness'

export const longSwordsR9: LongSword[] = [
  {
    name: 'ガオウ・バルグリオ3',
    attack: 290,
    defense: 0,
    slots: 2,
    affinity: 0,
    element: {
      type: '雷',
      value: 51,
    },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 50 },
      plus1: { color: SharpnessColor.White, length: 75 },
      plus2: { color: SharpnessColor.White, length: 100 },
    },
  },
  {
    name: '星霊刀ウラノメトリア3',
    attack: 290,
    defense: 0,
    slots: 2,
    affinity: 15,
    statusAilment: {
      type: '爆破',
      value: 18,
    },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 60 },
      plus1: { color: SharpnessColor.White, length: 85 },
      plus2: { color: SharpnessColor.Purple, length: 20 },
    },
  },
]

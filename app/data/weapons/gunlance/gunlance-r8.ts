import type { Gunlance } from '~/types/weapons'
import { SharpnessColor } from '~/types/sharpness'

export const gunlancesR8: Gunlance[] = [
  {
    name: 'ロイヤルガンバード3',
    attack: 290,
    defense: 0,
    slots: 2,
    affinity: 40,
    elementStatus: { type: '毒', value: 34 },
    gunlanceShelling: { type: 'wide', level: 4 },
    sharpness: {
      normal: { color: SharpnessColor.Purple, length: 10 },
      plus1: { color: SharpnessColor.Purple, length: 35 },
      plus2: { color: SharpnessColor.Purple, length: 60 },
    },
  },
  {
    name: 'フィロゾフガンランス3',
    attack: 320,
    defense: 0,
    slots: 0,
    affinity: 0,
    gunlanceShelling: { type: 'wide', level: 4 },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 70 },
      plus1: { color: SharpnessColor.White, length: 70 },
      plus2: { color: SharpnessColor.White, length: 70 },
    },
  },
  {
    name: '大撃銃槍ロスカザタン3',
    attack: 360,
    defense: 0,
    slots: 2,
    affinity: -25,
    gunlanceShelling: { type: 'long', level: 4 },
    sharpness: {
      normal: { color: SharpnessColor.Blue, length: 70 },
      plus1: { color: SharpnessColor.White, length: 25 },
      plus2: { color: SharpnessColor.White, length: 50 },
    },
  },
]

import type { Gunlance } from '~/types/weapons'
import { SharpnessColor } from '~/types/sharpness'

export const gunlancesR9: Gunlance[] = [
  {
    name: 'ケオ・アグナクホヌア3',
    attack: 310,
    defense: 0,
    slots: 2,
    affinity: 15,
    elementStatus: { type: '火', value: 45 },
    gunlanceShelling: { type: 'long', level: 4 },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 30 },
      plus1: { color: SharpnessColor.Purple, length: 5 },
      plus2: { color: SharpnessColor.Purple, length: 30 },
    },
  },
  {
    name: '至高のジューシー銃槍3',
    attack: 310,
    defense: 0,
    slots: 3,
    affinity: -10,
    elementStatus: { type: '火', value: 25 },
    gunlanceShelling: { type: 'wide', level: 4 },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 30 },
      plus1: { color: SharpnessColor.White, length: 55 },
      plus2: { color: SharpnessColor.Purple, length: 20 },
    },
  },
]

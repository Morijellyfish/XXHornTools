import type { Gunlance } from '~/types/weapons'
import { SharpnessColor } from '~/types/sharpness'

export const gunlancesR10: Gunlance[] = [
  {
    name: '真名ウアスアンク3',
    attack: 330,
    defense: 60,
    slots: 3,
    affinity: 0,
    gunlanceShelling: { type: 'wide', level: 4 },
    sharpness: {
      normal: { color: SharpnessColor.Purple, length: 20 },
      plus1: { color: SharpnessColor.Purple, length: 45 },
      plus2: { color: SharpnessColor.Purple, length: 70 },
    },
  },
  {
    name: 'エントグルティガス3',
    attack: 320,
    defense: 0,
    slots: 1,
    affinity: 0,
    elementStatus: { type: '火', value: 44 },
    gunlanceShelling: { type: 'long', level: 5 },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 40 },
      plus1: { color: SharpnessColor.Purple, length: 25 },
      plus2: { color: SharpnessColor.Purple, length: 50 },
    },
  },
  {
    name: 'ウォールorウォー3',
    attack: 320,
    defense: 0,
    slots: 2,
    affinity: -40,
    elementStatus: { type: '龍', value: 14 },
    gunlanceShelling: { type: 'wide', level: 4 },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 50 },
      plus1: { color: SharpnessColor.White, length: 75 },
      plus2: { color: SharpnessColor.Purple, length: 20 },
    },
  },
  {
    name: '真・黒滅龍銃槍【晨】3',
    attack: 270,
    defense: 0,
    slots: 3,
    affinity: 30,
    elementStatus: { type: '爆破', value: 50 },
    gunlanceShelling: { type: 'wide', level: 5 },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 10 },
      plus1: { color: SharpnessColor.Purple, length: 25 },
      plus2: { color: SharpnessColor.Purple, length: 50 },
    },
  },
  {
    name: '砕光耀銃槍バォブラク3',
    attack: 290,
    defense: 0,
    slots: 2,
    affinity: 0,
    elementStatus: { type: '爆破', value: 46 },
    gunlanceShelling: { type: 'long', level: 5 },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 30 },
      plus1: { color: SharpnessColor.Purple, length: 5 },
      plus2: { color: SharpnessColor.Purple, length: 30 },
    },
  },
  {
    name: '真・祖龍霊銃槍【殄】3',
    attack: 280,
    defense: 0,
    slots: 3,
    affinity: 0,
    elementStatus: { type: '龍', value: 64 },
    gunlanceShelling: { type: 'long', level: 5 },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 10 },
      plus1: { color: SharpnessColor.Purple, length: 25 },
      plus2: { color: SharpnessColor.Purple, length: 50 },
    },
  },
]

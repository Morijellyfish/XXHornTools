import type { Gunlance } from '~/types/weapons'
import { SharpnessColor } from '~/types/sharpness'

export const gunlancesR1: Gunlance[] = [
  {
    name: 'フィオレドス9',
    attack: 330,
    defense: 0,
    slots: 2,
    affinity: 0,
    gunlanceShelling: { type: 'normal', level: 3 },
    sharpness: {
      normal: { color: SharpnessColor.Purple, length: 30 },
      plus1: { color: SharpnessColor.Purple, length: 30 },
      plus2: { color: SharpnessColor.Purple, length: 30 },
    },
  },
  {
    name: 'カルチャバンディット10',
    attack: 340,
    defense: 0,
    slots: 2,
    affinity: 0,
    gunlanceShelling: { type: 'wide', level: 3 },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 30 },
      plus1: { color: SharpnessColor.White, length: 55 },
      plus2: { color: SharpnessColor.Purple, length: 20 },
    },
  },
  {
    name: 'ソルバイトバースト11',
    attack: 360,
    defense: 0,
    slots: 0,
    affinity: 0,
    gunlanceShelling: { type: 'normal', level: 4 },
    sharpness: {
      normal: { color: SharpnessColor.Blue, length: 60 },
      plus1: { color: SharpnessColor.White, length: 15 },
      plus2: { color: SharpnessColor.White, length: 40 },
    },
  },
  {
    name: '歴伝竜骨銃槍11',
    attack: 360,
    defense: 0,
    slots: 0,
    affinity: 0,
    gunlanceShelling: { type: 'normal', level: 4 },
    sharpness: {
      normal: { color: SharpnessColor.Blue, length: 50 },
      plus1: { color: SharpnessColor.White, length: 5 },
      plus2: { color: SharpnessColor.Purple, length: 20 },
    },
  },
  {
    name: 'ソフォスガンランス11',
    attack: 320,
    defense: 0,
    slots: 3,
    affinity: 0,
    gunlanceShelling: { type: 'normal', level: 4 },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 40 },
      plus1: { color: SharpnessColor.White, length: 65 },
      plus2: { color: SharpnessColor.White, length: 90 },
    },
  },
  {
    name: 'ユアガリバースト8',
    attack: 350,
    defense: 0,
    slots: 2,
    affinity: 0,
    gunlanceShelling: { type: 'normal', level: 4 },
    sharpness: {
      normal: { color: SharpnessColor.Green, length: 180 },
      plus1: { color: SharpnessColor.Blue, length: 25 },
      plus2: { color: SharpnessColor.White, length: 20 },
    },
  },
  {
    name: 'Ｖガルランド9',
    attack: 280,
    defense: 0,
    slots: 2,
    affinity: 0,
    elementStatus: { type: '麻痺', value: 42 },
    gunlanceShelling: { type: 'normal', level: 4 },
    sharpness: {
      normal: { color: SharpnessColor.Blue, length: 70 },
      plus1: { color: SharpnessColor.White, length: 25 },
      plus2: { color: SharpnessColor.Purple, length: 10 },
    },
  },
]

import type { SwitchAxe } from '~/types/weapons'
import { SharpnessColor } from '~/types/sharpness'

export const switchAxesR4: SwitchAxe[] = [
  {
    name: '豪嘴剣斧ビークックス6',
    attack: 300,
    defense: 0,
    slots: 3,
    affinity: 10,
    element: { type: '火', value: 30 },
    switchAxePhialType: 'power',
    sharpness: {
      normal: { color: SharpnessColor.White, length: 20 },
      plus1: { color: SharpnessColor.White, length: 45 },
      plus2: { color: SharpnessColor.Purple, length: 20 },
    },
  },
  {
    name: 'リ＝コンクエスタ5',
    attack: 330,
    defense: 20,
    slots: 2,
    affinity: 0,
    switchAxePhialType: 'exhaust',
    sharpness: {
      normal: { color: SharpnessColor.White, length: 30 },
      plus1: { color: SharpnessColor.Purple, length: 15 },
      plus2: { color: SharpnessColor.Purple, length: 40 },
    },
  },
  {
    name: 'ヴァーヴンペダンカパ7',
    attack: 340,
    defense: 0,
    slots: 0,
    affinity: 0,
    element: { type: '水', value: 30 },
    switchAxePhialType: 'element',
    sharpness: {
      normal: { color: SharpnessColor.White, length: 10 },
      plus1: { color: SharpnessColor.White, length: 35 },
      plus2: { color: SharpnessColor.White, length: 60 },
    },
  },
  {
    name: 'ノッチスダンコーノ6',
    attack: 350,
    defense: 0,
    slots: 0,
    affinity: -15,
    element: { type: '氷', value: 22 },
    switchAxePhialType: 'element',
    sharpness: {
      normal: { color: SharpnessColor.Blue, length: 50 },
      plus1: { color: SharpnessColor.White, length: 25 },
      plus2: { color: SharpnessColor.White, length: 50 },
    },
  },
  {
    name: 'バスチオンバスター6',
    attack: 350,
    defense: 0,
    slots: 1,
    affinity: -15,
    switchAxePhialType: 'paralysis',
    sharpness: {
      normal: { color: SharpnessColor.Blue, length: 70 },
      plus1: { color: SharpnessColor.White, length: 25 },
      plus2: { color: SharpnessColor.White, length: 50 },
    },
  },
  {
    name: '少し風化した剣斧7',
    attack: 380,
    defense: 0,
    slots: 0,
    affinity: -70,
    switchAxePhialType: 'dragon',
    sharpness: {
      normal: { color: SharpnessColor.Yellow, length: 190 },
      plus1: { color: SharpnessColor.Blue, length: 5 },
      plus2: { color: SharpnessColor.White, length: 10 },
    },
  },
]

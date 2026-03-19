import type { SwitchAxe } from '~/types/weapons'
import { SharpnessColor } from '~/types/sharpness'

export const switchAxesR5: SwitchAxe[] = [
  {
    name: 'ギガフロストアンバー4',
    attack: 290,
    defense: 0,
    slots: 2,
    affinity: 10,
    element: { type: '氷', value: 40 },
    switchAxePhialType: 'element',
    sharpness: {
      normal: { color: SharpnessColor.Purple, length: 20 },
      plus1: { color: SharpnessColor.Purple, length: 20 },
      plus2: { color: SharpnessColor.Purple, length: 20 },
    },
  },
  {
    name: 'パラクラックアックス5',
    attack: 290,
    defense: 15,
    slots: 3,
    affinity: 0,
    switchAxePhialType: 'paralysis',
    sharpness: {
      normal: { color: SharpnessColor.White, length: 30 },
      plus1: { color: SharpnessColor.Purple, length: 5 },
      plus2: { color: SharpnessColor.Purple, length: 30 },
    },
  },
  {
    name: '奇猿斧ワチャルナッカ5',
    attack: 300,
    defense: 0,
    slots: 3,
    affinity: 0,
    element: { type: '水', value: 45 },
    switchAxePhialType: 'element',
    sharpness: {
      normal: { color: SharpnessColor.White, length: 30 },
      plus1: { color: SharpnessColor.Purple, length: 15 },
      plus2: { color: SharpnessColor.Purple, length: 40 },
    },
  },
  {
    name: '氷鋸刃斧モルスノチス5',
    attack: 310,
    defense: 0,
    slots: 0,
    affinity: -10,
    element: { type: '氷', value: 38 },
    switchAxePhialType: 'element',
    sharpness: {
      normal: { color: SharpnessColor.White, length: 20 },
      plus1: { color: SharpnessColor.Purple, length: 25 },
      plus2: { color: SharpnessColor.Purple, length: 50 },
    },
  },
  {
    name: '瀑剣斧メギスプテギオ6',
    attack: 310,
    defense: 0,
    slots: 1,
    affinity: 0,
    statusAilment: { type: '睡眠', value: 28 },
    switchAxePhialType: 'power',
    sharpness: {
      normal: { color: SharpnessColor.White, length: 10 },
      plus1: { color: SharpnessColor.White, length: 35 },
      plus2: { color: SharpnessColor.Purple, length: 20 },
    },
  },
  {
    name: 'グンダ＝サングラム6',
    attack: 320,
    defense: 0,
    slots: 1,
    affinity: 0,
    switchAxePhialType: 'power',
    sharpness: {
      normal: { color: SharpnessColor.White, length: 10 },
      plus1: { color: SharpnessColor.Purple, length: 5 },
      plus2: { color: SharpnessColor.Purple, length: 30 },
    },
  },
]

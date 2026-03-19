import type { Lance } from '~/types/weapons'
import { SharpnessColor } from '~/types/sharpness'

export const lancesR8: Lance[] = [
  {
    name: '痺れる旨さのゴルゴン3',
    attack: 270,
    defense: 0,
    slots: 3,
    affinity: 0,
    elementStatus: { type: '麻痺', value: 7 },
    sharpness: {
      normal: { color: SharpnessColor.Purple, length: 40 },
      plus1: { color: SharpnessColor.Purple, length: 40 },
      plus2: { color: SharpnessColor.Purple, length: 40 },
    },
  },
  {
    name: 'ダークルード3',
    attack: 280,
    defense: 0,
    slots: 2,
    affinity: 0,
    elementStatus: { type: '睡眠', value: 16 },
    sharpness: {
      normal: { color: SharpnessColor.Purple, length: 40 },
      plus1: { color: SharpnessColor.Purple, length: 40 },
      plus2: { color: SharpnessColor.Purple, length: 40 },
    },
  },
  {
    name: '快航槍ツェッペリクス3',
    attack: 300,
    defense: 20,
    slots: 0,
    affinity: 0,
    elementStatus: { type: '睡眠', value: 22 },
    sharpness: {
      normal: { color: SharpnessColor.Blue, length: 70 },
      plus1: { color: SharpnessColor.White, length: 25 },
      plus2: { color: SharpnessColor.White, length: 50 },
    },
  },
  {
    name: 'フィロゾフランス3',
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
    name: 'プレシャストレランス3',
    attack: 340,
    defense: 0,
    slots: 3,
    affinity: 0,
    sharpness: {
      normal: { color: SharpnessColor.Green, length: 160 },
      plus1: { color: SharpnessColor.Blue, length: 25 },
      plus2: { color: SharpnessColor.White, length: 20 },
    },
  },
]

import type { Lance } from '~/types/weapons'
import { SharpnessColor } from '~/types/sharpness'

export const lancesR8: Lance[] = [
  {
    name: '痺れる旨さのゴルゴン3',
    attack: 270,
    defense: 0,
    slots: 3,
    affinity: 0,
    statusAilment: { type: '麻痺', value: 7 },
    sharpness: {
      normal: { color: SharpnessColor.Red, length: 10 },
      plus1: { color: SharpnessColor.Red, length: 10 },
      plus2: { color: SharpnessColor.Red, length: 10 },
    },
  },
  {
    name: 'ダークルード3',
    attack: 280,
    defense: 0,
    slots: 2,
    affinity: 0,
    statusAilment: { type: '睡眠', value: 16 },
    sharpness: {
      normal: { color: SharpnessColor.Red, length: 10 },
      plus1: { color: SharpnessColor.Red, length: 10 },
      plus2: { color: SharpnessColor.Red, length: 10 },
    },
  },
  {
    name: '快航槍ツェッペリクス3',
    attack: 300,
    defense: 20,
    slots: 0,
    affinity: 0,
    statusAilment: { type: '睡眠', value: 22 },
    sharpness: {
      normal: { color: SharpnessColor.Red, length: 10 },
      plus1: { color: SharpnessColor.Red, length: 10 },
      plus2: { color: SharpnessColor.Red, length: 10 },
    },
  },
  {
    name: 'フィロゾフランス3',
    attack: 320,
    defense: 0,
    slots: 0,
    affinity: 0,
    sharpness: {
      normal: { color: SharpnessColor.Red, length: 10 },
      plus1: { color: SharpnessColor.Red, length: 10 },
      plus2: { color: SharpnessColor.Red, length: 10 },
    },
  },
  {
    name: 'プレシャストレランス3',
    attack: 340,
    defense: 0,
    slots: 3,
    affinity: 0,
    sharpness: {
      normal: { color: SharpnessColor.Red, length: 10 },
      plus1: { color: SharpnessColor.Red, length: 10 },
      plus2: { color: SharpnessColor.Red, length: 10 },
    },
  },
]

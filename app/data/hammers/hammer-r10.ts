import type { Hammer } from '~/types/weapons'
import { SharpnessColor } from '~/types/sharpness'

export const hammersR10: Hammer[] = [
  {
    name: 'ミラアンセスルイン3',
    attack: 290,
    defense: 12,
    slots: 0,
    affinity: 0,
    element: { type: '龍', value: 75 },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 10 },
      plus1: { color: SharpnessColor.Purple, length: 25 },
      plus2: { color: SharpnessColor.Purple, length: 50 },
    },
  },
  {
    name: '砕光滅尽鎚スィブラク3',
    attack: 300,
    defense: 0,
    slots: 2,
    affinity: 0,
    statusAilment: { type: '爆破', value: 45 },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 30 },
      plus1: { color: SharpnessColor.Purple, length: 5 },
      plus2: { color: SharpnessColor.Purple, length: 30 },
    },
  },
  {
    name: 'ダークバニッシャー3',
    attack: 300,
    defense: 0,
    slots: 0,
    affinity: 0,
    element: { type: '龍', value: 45 },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 30 },
      plus1: { color: SharpnessColor.Purple, length: 5 },
      plus2: { color: SharpnessColor.Purple, length: 30 },
    },
  },
  {
    name: 'バースorデス3',
    attack: 310,
    defense: 0,
    slots: 2,
    affinity: -40,
    element: { type: '龍', value: 20 },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 50 },
      plus1: { color: SharpnessColor.White, length: 75 },
      plus2: { color: SharpnessColor.Purple, length: 20 },
    },
  },
  {
    name: '真名バアラトゲバル3',
    attack: 330,
    defense: 60,
    slots: 3,
    affinity: 0,
    sharpness: {
      normal: { color: SharpnessColor.Purple, length: 20 },
      plus1: { color: SharpnessColor.Purple, length: 45 },
      plus2: { color: SharpnessColor.Purple, length: 70 },
    },
  },
  {
    name: 'ミラバルカンルイン3',
    attack: 330,
    defense: 0,
    slots: 3,
    affinity: 0,
    statusAilment: { type: '爆破', value: 30 },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 10 },
      plus1: { color: SharpnessColor.Purple, length: 25 },
      plus2: { color: SharpnessColor.Purple, length: 50 },
    },
  },
]

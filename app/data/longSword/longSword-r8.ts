import type { LongSword } from '~/types/weapons'
import { SharpnessColor } from '~/types/sharpness'

export const longSwordsR8: LongSword[] = [
  {
    name: 'ハイオプティマス3',
    attack: 220,
    defense: 0,
    slots: 3,
    affinity: 0,
    statusAilment: {
      type: '睡眠',
      value: 34,
    },
    sharpness: {
      normal: { color: SharpnessColor.Purple, length: 10 },
      plus1: { color: SharpnessColor.Purple, length: 35 },
      plus2: { color: SharpnessColor.Purple, length: 60 },
    },
  },
  {
    name: 'ボレアース3',
    attack: 260,
    defense: 0,
    slots: 3,
    affinity: 0,
    element: {
      type: '火',
      value: 55,
    },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 10 },
      plus1: { color: SharpnessColor.White, length: 35 },
      plus2: { color: SharpnessColor.White, length: 60 },
    },
  },
  {
    name: 'パラミニャイフ・凝縮3',
    attack: 280,
    defense: 0,
    slots: 2,
    affinity: 0,
    statusAilment: {
      type: '麻痺',
      value: 5,
    },
    sharpness: {
      normal: { color: SharpnessColor.Purple, length: 50 },
      plus1: { color: SharpnessColor.Purple, length: 50 },
      plus2: { color: SharpnessColor.Purple, length: 50 },
    },
  },
  {
    name: 'フィロゾフサーベル3',
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
    name: 'ボスオブボスズ3',
    attack: 330,
    defense: 0,
    slots: 1,
    affinity: 0,
    sharpness: {
      normal: { color: SharpnessColor.White, length: 60 },
      plus1: { color: SharpnessColor.Purple, length: 15 },
      plus2: { color: SharpnessColor.Purple, length: 40 },
    },
  },
]

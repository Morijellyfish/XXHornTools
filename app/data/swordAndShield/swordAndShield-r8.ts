import type { SwordAndShield } from '~/types/weapons'
import { SharpnessColor } from '~/types/sharpness'

export const swordAndShieldsR8: SwordAndShield[] = [
  {
    name: 'ブラッディスローター3',
    attack: 300,
    defense: 0,
    slots: 0,
    affinity: 25,
    elementStatus: { type: '毒', value: 23 },
    sharpness: {
      normal: { color: SharpnessColor.Purple, length: 10 },
      plus1: { color: SharpnessColor.Purple, length: 35 },
      plus2: { color: SharpnessColor.Purple, length: 60 },
    },
  },
  {
    name: 'フィロゾフソード3',
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
    name: '蒼蛇剣ドストライク3',
    attack: 330,
    defense: 0,
    slots: 2,
    affinity: 10,
    sharpness: {
      normal: { color: SharpnessColor.White, length: 20 },
      plus1: { color: SharpnessColor.White, length: 45 },
      plus2: { color: SharpnessColor.Purple, length: 20 },
    },
  },
  {
    name: 'ブラッドサッカー3',
    attack: 350,
    defense: 0,
    slots: 1,
    affinity: -15,
    sharpness: {
      normal: { color: SharpnessColor.White, length: 40 },
      plus1: { color: SharpnessColor.Purple, length: 15 },
      plus2: { color: SharpnessColor.Purple, length: 40 },
    },
  },
]

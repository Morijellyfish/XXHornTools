import type { Hammer } from '~/types/weapons'
import { SharpnessColor } from '~/types/sharpness'

export const hammersR8: Hammer[] = [
  {
    name: 'マクディコル3',
    attack: 260,
    defense: 0,
    slots: 0,
    affinity: 10,
    elementStatus: { type: '睡眠', value: 30 },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 120 },
      plus1: { color: SharpnessColor.Purple, length: 5 },
      plus2: { color: SharpnessColor.Purple, length: 30 },
    },
  },
  {
    name: '快航鎚バルディボーレ3',
    attack: 300,
    defense: 0,
    slots: 2,
    affinity: 0,
    elementStatus: { type: '睡眠', value: 25 },
    sharpness: {
      normal: { color: SharpnessColor.Blue, length: 70 },
      plus1: { color: SharpnessColor.White, length: 25 },
      plus2: { color: SharpnessColor.White, length: 50 },
    },
  },
  {
    name: '大撃鎚ボルボダンガー3',
    attack: 310,
    defense: 25,
    slots: 0,
    affinity: -10,
    sharpness: {
      normal: { color: SharpnessColor.Blue, length: 70 },
      plus1: { color: SharpnessColor.White, length: 25 },
      plus2: { color: SharpnessColor.White, length: 50 },
    },
  },
  {
    name: 'フィロゾフハンマー3',
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
    name: '極黒鎚マーダヴァ3',
    attack: 340,
    defense: 0,
    slots: 0,
    affinity: 0,
    sharpness: {
      normal: { color: SharpnessColor.White, length: 50 },
      plus1: { color: SharpnessColor.White, length: 75 },
      plus2: { color: SharpnessColor.Purple, length: 20 },
    },
  },
]

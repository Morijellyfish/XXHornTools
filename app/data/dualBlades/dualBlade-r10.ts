import type { DualBlade } from '~/types/weapons'
import { SharpnessColor } from '~/types/sharpness'

export const dualBladesR10: DualBlade[] = [
  {
    name: '真名マアトガナフ3',
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
    name: '紅蓮双刃【久遠】3',
    attack: 310,
    defense: 30,
    slots: 0,
    affinity: 15,
    element: { type: '龍', value: 21 },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 40 },
      plus1: { color: SharpnessColor.Purple, length: 5 },
      plus2: { color: SharpnessColor.Purple, length: 30 },
    },
  },
  {
    name: 'シャングリラorハデス3',
    attack: 330,
    defense: 0,
    slots: 2,
    affinity: -25,
    element: { type: '龍', value: 6 },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 50 },
      plus1: { color: SharpnessColor.White, length: 75 },
      plus2: { color: SharpnessColor.Purple, length: 20 },
    },
  },
  {
    name: '砕光双燦閃ヴーブラク3',
    attack: 320,
    defense: 0,
    slots: 1,
    affinity: 0,
    statusAilment: { type: '爆破', value: 22 },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 50 },
      plus1: { color: SharpnessColor.Purple, length: 5 },
      plus2: { color: SharpnessColor.Purple, length: 30 },
    },
  },
  {
    name: '双龍神【黒天白夜】3',
    attack: 290,
    defense: 0,
    slots: 0,
    affinity: 0,
    element: { type: '龍', value: 36 },
    subElement: { type: '雷', value: 41 },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 10 },
      plus1: { color: SharpnessColor.Purple, length: 25 },
      plus2: { color: SharpnessColor.Purple, length: 50 },
    },
  },
  {
    name: '真・双滅龍刃【黄昏】3',
    attack: 300,
    defense: 0,
    slots: 3,
    affinity: 0,
    element: { type: '龍', value: 31 },
    subElement: { type: '爆破', value: 37 },
    sharpness: {
      normal: { color: SharpnessColor.Blue, length: 30 },
      plus1: { color: SharpnessColor.Purple, length: 5 },
      plus2: { color: SharpnessColor.Purple, length: 30 },
    },
  },
]

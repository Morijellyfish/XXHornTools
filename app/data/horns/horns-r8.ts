import type { HuntingHorn } from '~/types/weapons'
import { SharpnessColor } from '~/types/sharpness'
import { Notes } from '~/types/notes'

export const hornsR8: HuntingHorn[] = [
  {
    name: '快航笛モスカスイート3',
    attack: 270,
    defense: 0,
    slots: 1,
    affinity: 0,
    statusAilment: {
      type: '睡眠',
      value: 26,
    },
    notes: new Notes('紫', '緑', '橙'),
    sharpness: {
      normal: { color: SharpnessColor.Blue, length: 70 },
      plus1: { color: SharpnessColor.White, length: 25 },
      plus2: { color: SharpnessColor.White, length: 50 },
    },
  },
  {
    name: '女王笛ランゴスタⅡ世3',
    attack: 280,
    defense: 0,
    slots: 0,
    affinity: 0,
    statusAilment: {
      type: '麻痺',
      value: 30,
    },
    notes: new Notes('紫', '緑', '空'),
    sharpness: {
      normal: { color: SharpnessColor.Purple, length: 20 },
      plus1: { color: SharpnessColor.Purple, length: 20 },
      plus2: { color: SharpnessColor.Purple, length: 20 },
    },
  },
  {
    name: 'インフレイム＝ギグ3',
    attack: 300,
    defense: 25,
    slots: 2,
    affinity: 0,
    element: {
      type: '火',
      value: 35,
    },
    notes: new Notes('紫', '黄', '空'),
    sharpness: {
      normal: { color: SharpnessColor.White, length: 20 },
      plus1: { color: SharpnessColor.Purple, length: 5 },
      plus2: { color: SharpnessColor.Purple, length: 30 },
    },
  },
  {
    name: 'フィロゾフホルン3',
    attack: 320,
    defense: 0,
    slots: 0,
    affinity: 0,
    notes: new Notes('紫', '青', '緑'),
    sharpness: {
      normal: { color: SharpnessColor.White, length: 70 },
      plus1: { color: SharpnessColor.White, length: 70 },
      plus2: { color: SharpnessColor.White, length: 70 },
    },
  },
  {
    name: '岩石笙【美ノ音】3',
    attack: 320,
    defense: 0,
    slots: 1,
    affinity: -15,
    notes: new Notes('紫', '赤', '橙'),
    sharpness: {
      normal: { color: SharpnessColor.White, length: 40 },
      plus1: { color: SharpnessColor.White, length: 65 },
      plus2: { color: SharpnessColor.Purple, length: 10 },
    },
  },
]

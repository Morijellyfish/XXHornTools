import type { HuntingHorn } from '~/types/weapons'
import { SharpnessColor } from '~/types/sharpness'
import { Notes } from '~/types/notes'

export const hornsR4: HuntingHorn[] = [
  {
    name: '大蒼蛇笛ドスランポス6',
    attack: 300,
    defense: 0,
    slots: 3,
    affinity: 0,
    notes: new Notes('紫', '黄', '赤'),
    sharpness: {
      normal: { color: SharpnessColor.White, length: 20 },
      plus1: { color: SharpnessColor.White, length: 45 },
      plus2: { color: SharpnessColor.White, length: 70 },
    },
  },
  {
    name: 'ビクトリードラム5',
    attack: 310,
    defense: 0,
    slots: 1,
    affinity: 0,
    notes: new Notes('紫', '黄', '赤'),
    sharpness: {
      normal: { color: SharpnessColor.Blue, length: 40 },
      plus1: { color: SharpnessColor.Blue, length: 65 },
      plus2: { color: SharpnessColor.White, length: 20 },
    },
  },
  {
    name: 'リンフォルツァンド7',
    attack: 320,
    defense: 32,
    slots: 1,
    affinity: -5,
    notes: new Notes('紫', '青', '赤'),
    sharpness: {
      normal: { color: SharpnessColor.White, length: 10 },
      plus1: { color: SharpnessColor.Purple, length: 5 },
      plus2: { color: SharpnessColor.Purple, length: 30 },
    },
  },
  {
    name: 'タイタンズ＝ロック5',
    attack: 320,
    defense: 15,
    slots: 0,
    affinity: 10,
    element: {
      type: '火',
      value: 25,
    },
    notes: new Notes('紫', '青', '空'),
    sharpness: {
      normal: { color: SharpnessColor.White, length: 20 },
      plus1: { color: SharpnessColor.White, length: 45 },
      plus2: { color: SharpnessColor.Purple, length: 10 },
    },
  },
  {
    name: 'ケチャルファニワッパ6',
    attack: 330,
    defense: 0,
    slots: 1,
    affinity: 0,
    element: {
      type: '水',
      value: 35,
    },
    notes: new Notes('白', '緑', '空'),
    sharpness: {
      normal: { color: SharpnessColor.White, length: 10 },
      plus1: { color: SharpnessColor.Purple, length: 25 },
      plus2: { color: SharpnessColor.Purple, length: 50 },
    },
  },
  {
    name: '土砂笙【厳ノ音】5',
    attack: 340,
    defense: 0,
    slots: 2,
    affinity: -25,
    notes: new Notes('紫', '赤', '緑'),
    sharpness: {
      normal: { color: SharpnessColor.White, length: 10 },
      plus1: { color: SharpnessColor.White, length: 35 },
      plus2: { color: SharpnessColor.White, length: 60 },
    },
  },
  {
    name: '少し風化した狩猟笛7',
    attack: 380,
    defense: 0,
    slots: 0,
    affinity: -70,
    notes: new Notes('白', '青', '赤'),
    sharpness: {
      normal: { color: SharpnessColor.Yellow, length: 190 },
      plus1: { color: SharpnessColor.Blue, length: 5 },
      plus2: { color: SharpnessColor.White, length: 10 },
    },
  },
]

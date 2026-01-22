import type { Horn } from '~/types/horn'
import { SharpnessColor } from '~/types/sharpness'
import { Notes } from '~/types/notes'

export const hornsR5: Horn[] = [
  {
    name: 'パラミティコール6',
    attack: 280,
    defense: 10,
    slots: 2,
    affinity: 0,
    statusAilment: {
      type: '麻痺',
      value: 25,
    },
    notes: new Notes('紫', '赤', '空'),
    sharpness: {
      normal: { color: SharpnessColor.White, length: 30 },
      plus1: { color: SharpnessColor.White, length: 55 },
      plus2: { color: SharpnessColor.Purple, length: 20 },
    },
  },
  {
    name: 'グィロ＝フリギドゥス5',
    attack: 290,
    defense: 0,
    slots: 0,
    affinity: 25,
    element: {
      type: '氷',
      value: 40,
    },
    notes: new Notes('紫', '空', '青'),
    sharpness: {
      normal: { color: SharpnessColor.White, length: 50 },
      plus1: { color: SharpnessColor.Purple, length: 5 },
      plus2: { color: SharpnessColor.Purple, length: 30 },
    },
  },
  {
    name: 'ケチャ・ウル・ハーラ6',
    attack: 290,
    defense: 0,
    slots: 3,
    affinity: 0,
    element: {
      type: '水',
      value: 52,
    },
    notes: new Notes('紫', '緑', '空'),
    sharpness: {
      normal: { color: SharpnessColor.White, length: 40 },
      plus1: { color: SharpnessColor.White, length: 65 },
      plus2: { color: SharpnessColor.Purple, length: 10 },
    },
  },
  {
    name: '真氷鮫笛フェノミナル6',
    attack: 330,
    defense: 0,
    slots: 0,
    affinity: -10,
    element: {
      type: '氷',
      value: 35,
    },
    notes: new Notes('紫', '赤', '黄'),
    sharpness: {
      normal: { color: SharpnessColor.White, length: 20 },
      plus1: { color: SharpnessColor.White, length: 45 },
      plus2: { color: SharpnessColor.Purple, length: 10 },
    },
  },
  {
    name: 'ヴォルガノアルピスタ5',
    attack: 330,
    defense: 0,
    slots: 1,
    affinity: -10,
    element: {
      type: '火',
      value: 28,
    },
    notes: new Notes('紫', '黄', '赤'),
    sharpness: {
      normal: { color: SharpnessColor.White, length: 20 },
      plus1: { color: SharpnessColor.White, length: 45 },
      plus2: { color: SharpnessColor.Purple, length: 20 },
    },
  },
  {
    name: 'コンガコンガ6',
    attack: 340,
    defense: 0,
    slots: 2,
    affinity: 0,
    notes: new Notes('紫', '青', '緑'),
    sharpness: {
      normal: { color: SharpnessColor.White, length: 10 },
      plus1: { color: SharpnessColor.Purple, length: 5 },
      plus2: { color: SharpnessColor.Purple, length: 30 },
    },
  },
]

import type { Horn } from '~/types/horn'
import { SharpnessColor } from '~/types/sharpness'
import { Notes } from '~/types/notes'

export const hornsR10: Horn[] = [
  {
    name: '砕光陽顕鈴ホンブラク3',
    attack: 290,
    defense: 0,
    slots: 2,
    affinity: 0,
    statusAilment: {
      type: '爆破',
      value: 49,
    },
    notes: new Notes('紫', '橙', '空'),
    sharpness: {
      normal: { color: SharpnessColor.White, length: 30 },
      plus1: { color: SharpnessColor.Purple, length: 5 },
      plus2: { color: SharpnessColor.Purple, length: 30 },
    },
  },
  {
    name: 'ミラアンセスアリスト3',
    attack: 310,
    defense: 0,
    slots: 0,
    affinity: 0,
    element: {
      type: '龍',
      value: 60,
    },
    notes: new Notes('紫', '緑', '赤'),
    sharpness: {
      normal: { color: SharpnessColor.White, length: 10 },
      plus1: { color: SharpnessColor.Purple, length: 25 },
      plus2: { color: SharpnessColor.Purple, length: 50 },
    },
  },
  {
    name: 'グリーorテラー3',
    attack: 320,
    defense: 0,
    slots: 2,
    affinity: -35,
    element: {
      type: '龍',
      value: 25,
    },
    notes: new Notes('紫', '橙', '緑'),
    sharpness: {
      normal: { color: SharpnessColor.White, length: 30 },
      plus1: { color: SharpnessColor.White, length: 55 },
      plus2: { color: SharpnessColor.Purple, length: 20 },
    },
  },
  {
    name: '真名シストルムメナト3',
    attack: 330,
    defense: 60,
    slots: 3,
    affinity: 0,
    notes: new Notes('紫', '橙', '空'),
    sharpness: {
      normal: { color: SharpnessColor.Purple, length: 20 },
      plus1: { color: SharpnessColor.Purple, length: 45 },
      plus2: { color: SharpnessColor.Purple, length: 70 },
    },
  },
  {
    name: 'ミラバルカンアリスト3',
    attack: 330,
    defense: 0,
    slots: 3,
    affinity: 0,
    statusAilment: {
      type: '爆破',
      value: 55,
    },
    notes: new Notes('紫', '橙', '黄'),
    sharpness: {
      normal: { color: SharpnessColor.White, length: 10 },
      plus1: { color: SharpnessColor.Purple, length: 25 },
      plus2: { color: SharpnessColor.Purple, length: 50 },
    },
  },
]

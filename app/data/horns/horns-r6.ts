import type { Horn } from '~/types/horn'
import { SharpnessColor } from '~/types/sharpness'
import { Notes } from '~/types/notes'

export const hornsR6: Horn[] = [
  {
    name: 'フィアロ・グリーナ6',
    attack: 280,
    defense: 0,
    slots: 1,
    affinity: 40,
    element: {
      type: '火',
      value: 50,
    },
    notes: new Notes('紫', '赤', '黄'),
    sharpness: {
      normal: { color: SharpnessColor.White, length: 30 },
      plus1: { color: SharpnessColor.Purple, length: 5 },
      plus2: { color: SharpnessColor.Purple, length: 30 },
    },
  },
  {
    name: '極・電撃鍵盤5',
    attack: 290,
    defense: 0,
    slots: 1,
    affinity: 0,
    element: {
      type: '雷',
      value: 45,
    },
    notes: new Notes('紫', '緑', '赤'),
    sharpness: {
      normal: { color: SharpnessColor.White, length: 30 },
      plus1: { color: SharpnessColor.White, length: 55 },
      plus2: { color: SharpnessColor.White, length: 80 },
    },
  },
  {
    name: '応援団笛【テラホン】5',
    attack: 290,
    defense: 40,
    slots: 2,
    affinity: 15,
    notes: new Notes('紫', '空', '緑'),
    sharpness: {
      normal: { color: SharpnessColor.Blue, length: 80 },
      plus1: { color: SharpnessColor.White, length: 5 },
      plus2: { color: SharpnessColor.White, length: 30 },
    },
  },
  {
    name: '黒狼三味線【玄】5',
    attack: 290,
    defense: 0,
    slots: 0,
    affinity: 25,
    statusAilment: {
      type: '毒',
      value: 30,
    },
    notes: new Notes('紫', '赤', '黄'),
    sharpness: {
      normal: { color: SharpnessColor.White, length: 50 },
      plus1: { color: SharpnessColor.Purple, length: 5 },
      plus2: { color: SharpnessColor.Purple, length: 30 },
    },
  },
  {
    name: '龍識究響スピールア5',
    attack: 300,
    defense: 0,
    slots: 3,
    affinity: 25,
    notes: new Notes('紫', '空', '黄'),
    sharpness: {
      normal: { color: SharpnessColor.Purple, length: 30 },
      plus1: { color: SharpnessColor.Purple, length: 30 },
      plus2: { color: SharpnessColor.Purple, length: 30 },
    },
  },
  {
    name: '叛断ノ覇笛レギオン6',
    attack: 300,
    defense: 0,
    slots: 2,
    affinity: 25,
    notes: new Notes('紫', '青', '黄'),
    sharpness: {
      normal: { color: SharpnessColor.Purple, length: 20 },
      plus1: { color: SharpnessColor.Purple, length: 20 },
      plus2: { color: SharpnessColor.Purple, length: 20 },
    },
  },
  {
    name: 'パーペチュアルムジカ5',
    attack: 310,
    defense: 20,
    slots: 0,
    affinity: 0,
    element: {
      type: '龍',
      value: 40,
    },
    notes: new Notes('紫', '橙', '青'),
    sharpness: {
      normal: { color: SharpnessColor.White, length: 50 },
      plus1: { color: SharpnessColor.White, length: 75 },
      plus2: { color: SharpnessColor.White, length: 100 },
    },
  },
  {
    name: '砕巌鈴イエログラフ6',
    attack: 310,
    defense: 0,
    slots: 1,
    affinity: 0,
    statusAilment: {
      type: '爆破',
      value: 44,
    },
    notes: new Notes('紫', '黄', '空'),
    sharpness: {
      normal: { color: SharpnessColor.White, length: 50 },
      plus1: { color: SharpnessColor.Purple, length: 15 },
      plus2: { color: SharpnessColor.Purple, length: 40 },
    },
  },
  {
    name: '電電大太鼓【雷神】6',
    attack: 320,
    defense: 0,
    slots: 2,
    affinity: -10,
    element: {
      type: '雷',
      value: 32,
    },
    notes: new Notes('紫', '赤', '橙'),
    sharpness: {
      normal: { color: SharpnessColor.White, length: 30 },
      plus1: { color: SharpnessColor.White, length: 55 },
      plus2: { color: SharpnessColor.Purple, length: 20 },
    },
  },
  {
    name: '嶺響シュヴィンゲルク5',
    attack: 340,
    defense: 0,
    slots: 1,
    affinity: 0,
    notes: new Notes('紫', '青', '緑'),
    sharpness: {
      normal: { color: SharpnessColor.White, length: 40 },
      plus1: { color: SharpnessColor.White, length: 65 },
      plus2: { color: SharpnessColor.Purple, length: 20 },
    },
  },
]

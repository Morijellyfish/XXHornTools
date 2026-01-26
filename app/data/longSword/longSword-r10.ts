import type { LongSword } from '~/types/weapons'
import { SharpnessColor } from '~/types/sharpness'

export const longSwordsR10: LongSword[] = [
  {
    name: 'ミラバルカンフォリア3',
    attack: 260,
    defense: 0,
    slots: 3,
    affinity: 30,
    statusAilment: {
      type: '爆破',
      value: 55,
    },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 10 },
      plus1: { color: SharpnessColor.Purple, length: 25 },
      plus2: { color: SharpnessColor.Purple, length: 50 },
    },
  },
  {
    name: '砕光暁眩刀ジャブラク3',
    attack: 300,
    defense: 0,
    slots: 2,
    affinity: 0,
    statusAilment: {
      type: '爆破',
      value: 40,
    },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 30 },
      plus1: { color: SharpnessColor.Purple, length: 5 },
      plus2: { color: SharpnessColor.Purple, length: 30 },
    },
  },
  {
    name: '龍刀【火焔】3',
    attack: 300,
    defense: 0,
    slots: 1,
    affinity: 0,
    element: {
      type: '龍',
      value: 50,
    },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 60 },
      plus1: { color: SharpnessColor.Purple, length: 5 },
      plus2: { color: SharpnessColor.Purple, length: 30 },
    },
  },
  {
    name: 'ミラアンセスフォリア3',
    attack: 300,
    defense: 0,
    slots: 0,
    affinity: 0,
    element: {
      type: '雷',
      value: 68,
    },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 10 },
      plus1: { color: SharpnessColor.Purple, length: 25 },
      plus2: { color: SharpnessColor.Purple, length: 50 },
    },
  },
  {
    name: 'カオスorロウ3',
    attack: 320,
    defense: 0,
    slots: 2,
    affinity: 10,
    element: {
      type: '龍',
      value: 10,
    },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 50 },
      plus1: { color: SharpnessColor.White, length: 75 },
      plus2: { color: SharpnessColor.Purple, length: 20 },
    },
  },
  {
    name: '真名メルセゲル3',
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
]

import type { Hammer } from '~/types/weapons'
import { SharpnessColor } from '~/types/sharpness'

export const hammersR1: Hammer[] = [
  {
    name: 'さびた鎚3',
    attack: 100,
    defense: 0,
    slots: 0,
    affinity: -70,
    sharpness: {
      normal: { color: SharpnessColor.Yellow, length: 30 },
      plus1: { color: SharpnessColor.Yellow, length: 55 },
      plus2: { color: SharpnessColor.Yellow, length: 80 },
    },
  },
  {
    name: '沫砕ドロスレッジ8',
    attack: 310,
    defense: 0,
    slots: 2,
    affinity: 0,
    sharpness: {
      normal: { color: SharpnessColor.White, length: 30 },
      plus1: { color: SharpnessColor.White, length: 55 },
      plus2: { color: SharpnessColor.Purple, length: 10 },
    },
  },
  {
    name: 'エプルシモーヴェ8',
    attack: 310,
    defense: 40,
    slots: 3,
    affinity: 0,
    sharpness: {
      normal: { color: SharpnessColor.Blue, length: 70 },
      plus1: { color: SharpnessColor.White, length: 25 },
      plus2: { color: SharpnessColor.White, length: 50 },
    },
  },
  {
    name: 'ソフォスハンマー11',
    attack: 320,
    defense: 0,
    slots: 3,
    affinity: 0,
    sharpness: {
      normal: { color: SharpnessColor.White, length: 40 },
      plus1: { color: SharpnessColor.White, length: 65 },
      plus2: { color: SharpnessColor.White, length: 90 },
    },
  },
  {
    name: 'マッシヴロックボーン9',
    attack: 330,
    defense: 20,
    slots: 2,
    affinity: 0,
    sharpness: {
      normal: { color: SharpnessColor.Blue, length: 30 },
      plus1: { color: SharpnessColor.Blue, length: 55 },
      plus2: { color: SharpnessColor.White, length: 20 },
    },
  },
  {
    name: 'カングレンハーン8',
    attack: 330,
    defense: 0,
    slots: 2,
    affinity: 0,
    sharpness: {
      normal: { color: SharpnessColor.White, length: 30 },
      plus1: { color: SharpnessColor.White, length: 55 },
      plus2: { color: SharpnessColor.Purple, length: 20 },
    },
  },
  {
    name: '猛槌ブルクラッシャー9',
    attack: 340,
    defense: 0,
    slots: 2,
    affinity: 0,
    sharpness: {
      normal: { color: SharpnessColor.Blue, length: 80 },
      plus1: { color: SharpnessColor.White, length: 5 },
      plus2: { color: SharpnessColor.White, length: 30 },
    },
  },
  {
    name: 'ユアガリインパクト8',
    attack: 340,
    defense: 0,
    slots: 3,
    affinity: 0,
    sharpness: {
      normal: { color: SharpnessColor.Green, length: 180 },
      plus1: { color: SharpnessColor.Blue, length: 25 },
      plus2: { color: SharpnessColor.White, length: 20 },
    },
  },
  {
    name: 'ギガントスパイク10',
    attack: 340,
    defense: 0,
    slots: 0,
    affinity: 20,
    sharpness: {
      normal: { color: SharpnessColor.Blue, length: 70 },
      plus1: { color: SharpnessColor.White, length: 25 },
      plus2: { color: SharpnessColor.White, length: 50 },
    },
  },
  {
    name: '堅骨戦槌ケミキ11',
    attack: 350,
    defense: 0,
    slots: 2,
    affinity: 0,
    sharpness: {
      normal: { color: SharpnessColor.Blue, length: 50 },
      plus1: { color: SharpnessColor.White, length: 5 },
      plus2: { color: SharpnessColor.Purple, length: 20 },
    },
  },
  {
    name: '大鬼鉄11',
    attack: 350,
    defense: 0,
    slots: 2,
    affinity: 0,
    sharpness: {
      normal: { color: SharpnessColor.Blue, length: 60 },
      plus1: { color: SharpnessColor.White, length: 15 },
      plus2: { color: SharpnessColor.White, length: 40 },
    },
  },
]

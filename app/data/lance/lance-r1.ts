import type { Lance } from '~/types/weapons'
import { SharpnessColor } from '~/types/sharpness'

export const lancesR1: Lance[] = [
  {
    name: 'さびた槍3',
    attack: 100,
    defense: 0,
    slots: 0,
    affinity: -70,
    sharpness: {
      normal: { color: SharpnessColor.Yellow, length: 20 },
      plus1: { color: SharpnessColor.Yellow, length: 45 },
      plus2: { color: SharpnessColor.Green, length: 20 },
    },
  },
  {
    name: 'ソフォスランス11',
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
    name: '沫衝ドロスペイル7',
    attack: 330,
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
    name: '牙槍ラルガ8',
    attack: 340,
    defense: 0,
    slots: 1,
    affinity: 0,
    sharpness: {
      normal: { color: SharpnessColor.White, length: 20 },
      plus1: { color: SharpnessColor.White, length: 45 },
      plus2: { color: SharpnessColor.White, length: 70 },
    },
  },
  {
    name: '猛追牙槍ドスファンゴ9',
    attack: 340,
    defense: 0,
    slots: 2,
    affinity: 0,
    sharpness: {
      normal: { color: SharpnessColor.Blue, length: 10 },
      plus1: { color: SharpnessColor.White, length: 15 },
      plus2: { color: SharpnessColor.White, length: 40 },
    },
  },
  {
    name: 'エクィテスランス10',
    attack: 340,
    defense: 0,
    slots: 2,
    affinity: 0,
    sharpness: {
      normal: { color: SharpnessColor.White, length: 10 },
      plus1: { color: SharpnessColor.White, length: 35 },
      plus2: { color: SharpnessColor.Purple, length: 10 },
    },
  },
  {
    name: 'マーシレススパイク8',
    attack: 350,
    defense: 0,
    slots: 0,
    affinity: 0,
    sharpness: {
      normal: { color: SharpnessColor.Blue, length: 20 },
      plus1: { color: SharpnessColor.White, length: 15 },
      plus2: { color: SharpnessColor.White, length: 40 },
    },
  },
  {
    name: '突槍リノプロス9',
    attack: 350,
    defense: 0,
    slots: 0,
    affinity: -15,
    sharpness: {
      normal: { color: SharpnessColor.White, length: 10 },
      plus1: { color: SharpnessColor.Purple, length: 5 },
      plus2: { color: SharpnessColor.Purple, length: 30 },
    },
  },
  {
    name: 'ユアガリスティンガー8',
    attack: 350,
    defense: 0,
    slots: 2,
    affinity: 0,
    sharpness: {
      normal: { color: SharpnessColor.Green, length: 180 },
      plus1: { color: SharpnessColor.Blue, length: 25 },
      plus2: { color: SharpnessColor.White, length: 20 },
    },
  },
  {
    name: 'ヘビィボーンランス11',
    attack: 360,
    defense: 0,
    slots: 0,
    affinity: 0,
    sharpness: {
      normal: { color: SharpnessColor.Blue, length: 50 },
      plus1: { color: SharpnessColor.White, length: 5 },
      plus2: { color: SharpnessColor.Purple, length: 20 },
    },
  },
  {
    name: 'ニューミレニアム11',
    attack: 360,
    defense: 0,
    slots: 0,
    affinity: 0,
    sharpness: {
      normal: { color: SharpnessColor.Blue, length: 60 },
      plus1: { color: SharpnessColor.White, length: 15 },
      plus2: { color: SharpnessColor.White, length: 40 },
    },
  },
]

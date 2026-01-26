import type { LongSword } from '~/types/weapons'
import { SharpnessColor } from '~/types/sharpness'

export const longSwordsR1: LongSword[] = [
  {
    name: '白猿大薙【武乱豪】8',
    attack: 320,
    defense: 0,
    slots: 2,
    affinity: 0,
    element: {
      type: '氷',
      value: 33,
    },
    sharpness: {
      normal: { color: SharpnessColor.Blue, length: 10 },
      plus1: { color: SharpnessColor.White, length: 15 },
      plus2: { color: SharpnessColor.White, length: 40 },
    },
  },
  {
    name: 'ソフォスサーベル11',
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
    name: 'アルマバンディット10',
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
    name: '大ガウシ刀【鹿鳴】7',
    attack: 340,
    defense: 30,
    slots: 0,
    affinity: 0,
    sharpness: {
      normal: { color: SharpnessColor.White, length: 10 },
      plus1: { color: SharpnessColor.White, length: 35 },
      plus2: { color: SharpnessColor.Purple, length: 10 },
    },
  },
  {
    name: '大顎刃バイティン11',
    attack: 340,
    defense: 0,
    slots: 1,
    affinity: 0,
    sharpness: {
      normal: { color: SharpnessColor.White, length: 20 },
      plus1: { color: SharpnessColor.White, length: 45 },
      plus2: { color: SharpnessColor.Purple, length: 20 },
    },
  },
  {
    name: '青熊長筆【鮭獣戯画】8',
    attack: 350,
    defense: 0,
    slots: 0,
    affinity: 0,
    sharpness: {
      normal: { color: SharpnessColor.White, length: 20 },
      plus1: { color: SharpnessColor.White, length: 45 },
      plus2: { color: SharpnessColor.Purple, length: 10 },
    },
  },
  {
    name: 'ユアガリノダチ8',
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
    name: 'ダークインザダーク9',
    attack: 360,
    defense: 0,
    slots: 0,
    affinity: -10,
    sharpness: {
      normal: { color: SharpnessColor.Blue, length: 60 },
      plus1: { color: SharpnessColor.Purple, length: 5 },
      plus2: { color: SharpnessColor.Purple, length: 30 },
    },
  },
  {
    name: '鉄刀【禊祓】11',
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
  {
    name: '巨大骨9',
    attack: 370,
    defense: 0,
    slots: 0,
    affinity: -15,
    sharpness: {
      normal: { color: SharpnessColor.Green, length: 80 },
      plus1: { color: SharpnessColor.Blue, length: 25 },
      plus2: { color: SharpnessColor.Blue, length: 50 },
    },
  },
]

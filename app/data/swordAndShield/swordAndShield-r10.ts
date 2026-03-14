import type { SwordAndShield } from '~/types/weapons'
import { SharpnessColor } from '~/types/sharpness'

export const swordAndShieldsR10: SwordAndShield[] = [
  {
    name: '真・祖龍霊剣【不還】3',
    attack: 300,
    defense: 0,
    slots: 0,
    affinity: 0,
    element: { type: '龍', value: 44 },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 30 },
      plus1: { color: SharpnessColor.Purple, length: 15 },
      plus2: { color: SharpnessColor.Purple, length: 40 },
    },
  },
  {
    name: '砕光恒鋭剣チェブラク3',
    attack: 300,
    defense: 0,
    slots: 2,
    affinity: 0,
    statusAilment: { type: '爆破', value: 44 },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 30 },
      plus1: { color: SharpnessColor.Purple, length: 5 },
      plus2: { color: SharpnessColor.Purple, length: 30 },
    },
  },
  {
    name: '夜明けのソルナ3',
    attack: 300,
    defense: 0,
    slots: 1,
    affinity: 0,
    element: { type: '火', value: 35 },
    sharpness: {
      normal: { color: SharpnessColor.Purple, length: 30 },
      plus1: { color: SharpnessColor.Purple, length: 55 },
      plus2: { color: SharpnessColor.Purple, length: 80 },
    },
  },
  {
    name: 'ライズorトゥルー3',
    attack: 330,
    defense: 0,
    slots: 2,
    affinity: -25,
    element: { type: '龍', value: 8 },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 60 },
      plus1: { color: SharpnessColor.White, length: 85 },
      plus2: { color: SharpnessColor.Purple, length: 20 },
    },
  },
  {
    name: '真名ウンネフェル3',
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
    name: '真・黒滅龍剣【大禍】3',
    attack: 330,
    defense: 0,
    slots: 3,
    affinity: 0,
    statusAilment: { type: '爆破', value: 34 },
    sharpness: {
      normal: { color: SharpnessColor.Blue, length: 30 },
      plus1: { color: SharpnessColor.Purple, length: 5 },
      plus2: { color: SharpnessColor.Purple, length: 30 },
    },
  },
]

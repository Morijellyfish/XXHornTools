import type { DualBlade } from '~/types/weapons'
import { SharpnessColor } from '~/types/sharpness'

export const dualBladesR7: DualBlade[] = [
  {
    name: '太虚ノ扇【昊天】5',
    attack: 360,
    defense: 0,
    slots: 0,
    affinity: -20,
    elementStatus: { type: '水', value: 8 },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 20 },
      plus1: { color: SharpnessColor.White, length: 45 },
      plus2: { color: SharpnessColor.White, length: 70 },
    },
  },
  {
    name: 'テンリュウノツガイ5',
    attack: 330,
    defense: 0,
    slots: 1,
    affinity: 0,
    elementStatus: { type: '火', value: 32 },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 30 },
      plus1: { color: SharpnessColor.Purple, length: 5 },
      plus2: { color: SharpnessColor.Purple, length: 30 },
    },
  },
  {
    name: '極星狂双剣ニドガロア5',
    attack: 310,
    defense: 0,
    slots: 2,
    affinity: 0,
    elementStatus: { type: '龍', value: 10 },
    sharpness: {
      normal: { color: SharpnessColor.Purple, length: 10 },
      plus1: { color: SharpnessColor.Purple, length: 10 },
      plus2: { color: SharpnessColor.Purple, length: 10 },
    },
  },
  {
    name: '咎双刃アビルブリング5',
    attack: 300,
    defense: 0,
    slots: 1,
    affinity: 10,
    elementStatus: { type: '龍', value: 32 },
    sharpness: {
      normal: { color: SharpnessColor.Purple, length: 20 },
      plus1: { color: SharpnessColor.Purple, length: 45 },
      plus2: { color: SharpnessColor.Purple, length: 70 },
    },
  },
  {
    name: '覇尖爪イクセアムカム5',
    attack: 370,
    defense: 0,
    slots: 0,
    affinity: 30,
    sharpness: {
      normal: { color: SharpnessColor.Green, length: 60 },
      plus1: { color: SharpnessColor.Blue, length: 5 },
      plus2: { color: SharpnessColor.Blue, length: 30 },
    },
  },
  {
    name: '崩界刃ヤッカカムノミ5',
    attack: 360,
    defense: 20,
    slots: 0,
    affinity: -20,
    elementStatus: { type: '氷', value: 12 },
    sharpness: {
      normal: { color: SharpnessColor.Blue, length: 30 },
      plus1: { color: SharpnessColor.Blue, length: 55 },
      plus2: { color: SharpnessColor.White, length: 20 },
    },
  },
  {
    name: '赫醒刃リクヘスト6',
    attack: 300,
    defense: 0,
    slots: 2,
    affinity: 0,
    elementStatus: { type: '龍', value: 30 },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 250 },
      plus1: { color: SharpnessColor.White, length: 250 },
      plus2: { color: SharpnessColor.White, length: 250 },
    },
  },
]

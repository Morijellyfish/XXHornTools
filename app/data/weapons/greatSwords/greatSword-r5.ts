import type { GreatSword } from '~/types/weapons'
import { SharpnessColor } from '~/types/sharpness'

export const greatSwordsR5: GreatSword[] = [
  {
    name: 'ジャラーブレイド6',
    attack: 280,
    defense: 0,
    slots: 3,
    affinity: 0,
    elementStatus: { type: '水', value: 74 },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 50 },
      plus1: { color: SharpnessColor.White, length: 75 },
      plus2: { color: SharpnessColor.Purple, length: 20 },
    },
  },
  {
    name: '暴雪剣グレツァタギオ5',
    attack: 280,
    defense: 0,
    slots: 1,
    affinity: 35,
    elementStatus: { type: '氷', value: 55 },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 50 },
      plus1: { color: SharpnessColor.Purple, length: 5 },
      plus2: { color: SharpnessColor.Purple, length: 30 },
    },
  },
  {
    name: '火砕断絶刃5',
    attack: 310,
    defense: 0,
    slots: 3,
    affinity: 20,
    elementStatus: { type: '火', value: 28 },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 20 },
      plus1: { color: SharpnessColor.White, length: 45 },
      plus2: { color: SharpnessColor.Purple, length: 20 },
    },
  },
  {
    name: 'テンリュウノアギト6',
    attack: 340,
    defense: 0,
    slots: 1,
    affinity: 0,
    sharpness: {
      normal: { color: SharpnessColor.White, length: 20 },
      plus1: { color: SharpnessColor.Purple, length: 25 },
      plus2: { color: SharpnessColor.Purple, length: 50 },
    },
  },
  {
    name: 'マーティアー6',
    attack: 350,
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
    name: '蝦蟇の大包丁【荒肝】6',
    attack: 360,
    defense: 0,
    slots: 0,
    affinity: -25,
    sharpness: {
      normal: { color: SharpnessColor.White, length: 20 },
      plus1: { color: SharpnessColor.Purple, length: 15 },
      plus2: { color: SharpnessColor.Purple, length: 40 },
    },
  },
]

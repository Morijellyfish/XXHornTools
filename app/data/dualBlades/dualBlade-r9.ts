import type { DualBlade } from '~/types/weapons'
import { SharpnessColor } from '~/types/sharpness'

export const dualBladesR9: DualBlade[] = [
  {
    name: '炎焔舞刀イグナクダン3',
    attack: 320,
    defense: 0,
    slots: 0,
    affinity: 15,
    elementStatus: { type: '火', value: 34 },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 30 },
      plus1: { color: SharpnessColor.Purple, length: 5 },
      plus2: { color: SharpnessColor.Purple, length: 30 },
    },
  },
  {
    name: 'イスタビリ＝カリギー3',
    attack: 300,
    defense: 0,
    slots: 1,
    affinity: 0,
    elementStatus: { type: '水', value: 16 },
    sharpness: {
      normal: { color: SharpnessColor.Purple, length: 20 },
      plus1: { color: SharpnessColor.Purple, length: 20 },
      plus2: { color: SharpnessColor.Purple, length: 20 },
    },
  },
  {
    name: 'シェルシェウルティモ3',
    attack: 300,
    defense: 0,
    slots: 0,
    affinity: 10,
    elementStatus: { type: '睡眠', value: 9 },
    subElement: { type: '毒', value: 26 },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 80 },
      plus1: { color: SharpnessColor.Purple, length: 5 },
      plus2: { color: SharpnessColor.Purple, length: 30 },
    },
  },
  {
    name: 'ザ・リーダー3',
    attack: 270,
    defense: 0,
    slots: 3,
    affinity: 15,
    elementStatus: { type: '龍', value: 15 },
    sharpness: {
      normal: { color: SharpnessColor.Purple, length: 30 },
      plus1: { color: SharpnessColor.Purple, length: 30 },
      plus2: { color: SharpnessColor.Purple, length: 30 },
    },
  },
  {
    name: '極・電撃双剣3',
    attack: 280,
    defense: 0,
    slots: 1,
    affinity: 0,
    elementStatus: { type: '雷', value: 40 },
    sharpness: {
      normal: { color: SharpnessColor.Purple, length: 20 },
      plus1: { color: SharpnessColor.Purple, length: 20 },
      plus2: { color: SharpnessColor.Purple, length: 20 },
    },
  },
]

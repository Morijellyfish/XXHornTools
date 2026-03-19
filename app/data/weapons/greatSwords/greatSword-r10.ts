import type { GreatSword } from '~/types/weapons'
import { SharpnessColor } from '~/types/sharpness'

export const greatSwordsR10: GreatSword[] = [
  {
    name: 'ミラバルカンシア3',
    attack: 260,
    defense: 0,
    slots: 3,
    affinity: 30,
    elementStatus: { type: '爆破', value: 65 },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 10 },
      plus1: { color: SharpnessColor.Purple, length: 25 },
      plus2: { color: SharpnessColor.Purple, length: 50 },
    },
  },
  {
    name: '封龍剣【滅一門】3',
    attack: 270,
    defense: 30,
    slots: 1,
    affinity: 0,
    elementStatus: { type: '龍', value: 86 },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 30 },
      plus1: { color: SharpnessColor.Purple, length: 5 },
      plus2: { color: SharpnessColor.Purple, length: 30 },
    },
  },
  {
    name: '砕光撃重剣ジェブラク3',
    attack: 290,
    defense: 0,
    slots: 2,
    affinity: 0,
    elementStatus: { type: '爆破', value: 44 },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 30 },
      plus1: { color: SharpnessColor.Purple, length: 5 },
      plus2: { color: SharpnessColor.Purple, length: 30 },
    },
  },
  {
    name: 'ミラアンセスシア3',
    attack: 300,
    defense: 0,
    slots: 0,
    affinity: 0,
    elementStatus: { type: '龍', value: 75 },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 10 },
      plus1: { color: SharpnessColor.Purple, length: 25 },
      plus2: { color: SharpnessColor.Purple, length: 50 },
    },
  },
  {
    name: 'オリジンorエンド3',
    attack: 330,
    defense: 0,
    slots: 2,
    affinity: -45,
    elementStatus: { type: '龍', value: 12 },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 50 },
      plus1: { color: SharpnessColor.White, length: 75 },
      plus2: { color: SharpnessColor.Purple, length: 20 },
    },
  },
  {
    name: '真名ネブタジェセル3',
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

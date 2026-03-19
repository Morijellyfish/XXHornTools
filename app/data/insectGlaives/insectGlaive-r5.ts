import type { InsectGlaive } from '~/types/weapons'
import { SharpnessColor } from '~/types/sharpness'

export const insectGlaivesR5: InsectGlaive[] = [
  {
    name: 'ハイアーザントップ5',
    attack: 280,
    defense: 0,
    slots: 3,
    affinity: 0,
    insectType: 'impact',
    elementStatus: { type: '麻痺', value: 30 },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 10 },
      plus1: { color: SharpnessColor.Purple, length: 25 },
      plus2: { color: SharpnessColor.Purple, length: 50 },
    },
  },
  {
    name: '至宝杖アガルタ5',
    attack: 290,
    defense: 0,
    slots: 2,
    affinity: 0,
    insectType: 'impact',
    sharpness: {
      normal: { color: SharpnessColor.Purple, length: 80 },
      plus1: { color: SharpnessColor.Purple, length: 80 },
      plus2: { color: SharpnessColor.Purple, length: 80 },
    },
  },
  {
    name: 'ハイガノスハープーン5',
    attack: 300,
    defense: 0,
    slots: 1,
    affinity: 0,
    insectType: 'slash',
    elementStatus: { type: '睡眠', value: 22 },
    sharpness: {
      normal: { color: SharpnessColor.Blue, length: 110 },
      plus1: { color: SharpnessColor.White, length: 5 },
      plus2: { color: SharpnessColor.Purple, length: 10 },
    },
  },
  {
    name: 'ミッドナイトグレイブ6',
    attack: 310,
    defense: 0,
    slots: 2,
    affinity: 0,
    insectType: 'impact',
    elementStatus: { type: '水', value: 27 },
    sharpness: {
      normal: { color: SharpnessColor.Purple, length: 20 },
      plus1: { color: SharpnessColor.Purple, length: 45 },
      plus2: { color: SharpnessColor.Purple, length: 70 },
    },
  },
  {
    name: '激重棍グランビールタ5',
    attack: 330,
    defense: 30,
    slots: 2,
    affinity: 0,
    insectType: 'slash',
    elementStatus: { type: '火', value: 30 },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 20 },
      plus1: { color: SharpnessColor.White, length: 45 },
      plus2: { color: SharpnessColor.Purple, length: 10 },
    },
  },
]

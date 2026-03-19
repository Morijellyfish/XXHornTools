import type { SwitchAxe } from '~/types/weapons'
import { SharpnessColor } from '~/types/sharpness'

export const switchAxesR10: SwitchAxe[] = [
  {
    name: '真・黒滅龍剣斧【晁】3',
    attack: 250,
    defense: 0,
    slots: 3,
    affinity: 30,
    statusAilment: { type: '爆破', value: 50 },
    switchAxePhialType: 'element',
    sharpness: {
      normal: { color: SharpnessColor.White, length: 10 },
      plus1: { color: SharpnessColor.Purple, length: 25 },
      plus2: { color: SharpnessColor.Purple, length: 50 },
    },
  },
  {
    name: '砕光晃剣斧リェブラク3',
    attack: 290,
    defense: 0,
    slots: 2,
    affinity: 0,
    statusAilment: { type: '爆破', value: 45 },
    switchAxePhialType: 'power',
    sharpness: {
      normal: { color: SharpnessColor.White, length: 30 },
      plus1: { color: SharpnessColor.Purple, length: 5 },
      plus2: { color: SharpnessColor.Purple, length: 30 },
    },
  },
  {
    name: 'クライムorグラント3',
    attack: 300,
    defense: 0,
    slots: 0,
    affinity: -30,
    element: { type: '龍', value: 22 },
    switchAxePhialType: 'power',
    sharpness: {
      normal: { color: SharpnessColor.White, length: 60 },
      plus1: { color: SharpnessColor.White, length: 85 },
      plus2: { color: SharpnessColor.Purple, length: 20 },
    },
  },
  {
    name: '龍焔剣斧【竜喰】3',
    attack: 300,
    defense: 0,
    slots: 0,
    affinity: 0,
    element: { type: '龍', value: 50 },
    switchAxePhialType: 'power',
    sharpness: {
      normal: { color: SharpnessColor.White, length: 40 },
      plus1: { color: SharpnessColor.Purple, length: 5 },
      plus2: { color: SharpnessColor.Purple, length: 30 },
    },
  },
  {
    name: 'ミラアンセスヴェンデ3',
    attack: 300,
    defense: 0,
    slots: 0,
    affinity: 0,
    element: { type: '雷', value: 52 },
    switchAxePhialType: 'power',
    sharpness: {
      normal: { color: SharpnessColor.White, length: 30 },
      plus1: { color: SharpnessColor.Purple, length: 15 },
      plus2: { color: SharpnessColor.Purple, length: 40 },
    },
  },
  {
    name: '真名アナトカルナイム3',
    attack: 330,
    defense: 60,
    slots: 3,
    affinity: 0,
    switchAxePhialType: 'power',
    sharpness: {
      normal: { color: SharpnessColor.Purple, length: 20 },
      plus1: { color: SharpnessColor.Purple, length: 45 },
      plus2: { color: SharpnessColor.Purple, length: 70 },
    },
  },
]

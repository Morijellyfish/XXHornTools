import type { Lance } from '~/types/weapons'
import { SharpnessColor } from '~/types/sharpness'

export const lancesR10: Lance[] = [
  {
    name: '真・黒滅龍槍【残映】3',
    attack: 260,
    defense: 0,
    slots: 3,
    affinity: 30,
    statusAilment: { type: '爆破', value: 60 },
    sharpness: {
      normal: { color: SharpnessColor.Red, length: 10 },
      plus1: { color: SharpnessColor.Red, length: 10 },
      plus2: { color: SharpnessColor.Red, length: 10 },
    },
  },
  {
    name: '砕光噴凄槍ツァブラク3',
    attack: 290,
    defense: 0,
    slots: 2,
    affinity: 0,
    statusAilment: { type: '爆破', value: 40 },
    sharpness: {
      normal: { color: SharpnessColor.Red, length: 10 },
      plus1: { color: SharpnessColor.Red, length: 10 },
      plus2: { color: SharpnessColor.Red, length: 10 },
    },
  },
  {
    name: '真・祖龍霊槍【無始】3',
    attack: 300,
    defense: 0,
    slots: 0,
    affinity: 0,
    element: { type: '龍', value: 64 },
    sharpness: {
      normal: { color: SharpnessColor.Red, length: 10 },
      plus1: { color: SharpnessColor.Red, length: 10 },
      plus2: { color: SharpnessColor.Red, length: 10 },
    },
  },
  {
    name: 'セージorデビル3',
    attack: 320,
    defense: 0,
    slots: 2,
    affinity: -30,
    element: { type: '龍', value: 11 },
    sharpness: {
      normal: { color: SharpnessColor.Red, length: 10 },
      plus1: { color: SharpnessColor.Red, length: 10 },
      plus2: { color: SharpnessColor.Red, length: 10 },
    },
  },
  {
    name: '封龍槍【刹那】3',
    attack: 320,
    defense: 30,
    slots: 0,
    affinity: 15,
    element: { type: '龍', value: 33 },
    sharpness: {
      normal: { color: SharpnessColor.Red, length: 10 },
      plus1: { color: SharpnessColor.Red, length: 10 },
      plus2: { color: SharpnessColor.Red, length: 10 },
    },
  },
  {
    name: '真名セルケトヘティト3',
    attack: 330,
    defense: 60,
    slots: 3,
    affinity: 0,
    sharpness: {
      normal: { color: SharpnessColor.Red, length: 10 },
      plus1: { color: SharpnessColor.Red, length: 10 },
      plus2: { color: SharpnessColor.Red, length: 10 },
    },
  },
]

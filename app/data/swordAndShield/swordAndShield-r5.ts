import type { SwordAndShield } from '~/types/weapons'
import { SharpnessColor } from '~/types/sharpness'

export const swordAndShieldsR5: SwordAndShield[] = [
  {
    name: 'ハイガノスショテル6',
    attack: 250,
    defense: 0,
    slots: 2,
    affinity: 0,
    statusAilment: { type: '睡眠', value: 33 },
    sharpness: {
      normal: { color: SharpnessColor.Blue, length: 90 },
      plus1: { color: SharpnessColor.White, length: 5 },
      plus2: { color: SharpnessColor.Purple, length: 20 },
    },
  },
  {
    name: 'マスターオブメラルー5',
    attack: 250,
    defense: 0,
    slots: 1,
    affinity: 0,
    statusAilment: { type: '麻痺', value: 40 },
    sharpness: {
      normal: { color: SharpnessColor.Green, length: 80 },
      plus1: { color: SharpnessColor.Green, length: 105 },
      plus2: { color: SharpnessColor.Blue, length: 20 },
    },
  },
  {
    name: 'ネヴァイヴェント4',
    attack: 290,
    defense: 0,
    slots: 1,
    affinity: 30,
    element: { type: '氷', value: 38 },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 50 },
      plus1: { color: SharpnessColor.Purple, length: 5 },
      plus2: { color: SharpnessColor.Purple, length: 30 },
    },
  },
  {
    name: '炎神剣アグニ5',
    attack: 330,
    defense: 20,
    slots: 0,
    affinity: -15,
    element: { type: '火', value: 30 },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 40 },
      plus1: { color: SharpnessColor.White, length: 65 },
      plus2: { color: SharpnessColor.Purple, length: 20 },
    },
  },
  {
    name: 'ジェロアクザル5',
    attack: 330,
    defense: 0,
    slots: 1,
    affinity: -10,
    element: { type: '氷', value: 33 },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 30 },
      plus1: { color: SharpnessColor.Purple, length: 25 },
      plus2: { color: SharpnessColor.Purple, length: 50 },
    },
  },
  {
    name: '極・煌竜剣6',
    attack: 360,
    defense: 0,
    slots: 0,
    affinity: 0,
    sharpness: {
      normal: { color: SharpnessColor.White, length: 10 },
      plus1: { color: SharpnessColor.White, length: 35 },
      plus2: { color: SharpnessColor.Purple, length: 10 },
    },
  },
]

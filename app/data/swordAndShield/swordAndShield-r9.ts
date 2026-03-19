import type { SwordAndShield } from '~/types/weapons'
import { SharpnessColor } from '~/types/sharpness'

export const swordAndShieldsR9: SwordAndShield[] = [
  {
    name: 'ラヴィリインシニア3',
    attack: 300,
    defense: 20,
    slots: 1,
    affinity: 0,
    elementStatus: { type: '爆破', value: 14 },
    sharpness: {
      normal: { color: SharpnessColor.Purple, length: 10 },
      plus1: { color: SharpnessColor.Purple, length: 10 },
      plus2: { color: SharpnessColor.Purple, length: 10 },
    },
  },
  {
    name: '信の天稟剣3',
    attack: 320,
    defense: 30,
    slots: 0,
    affinity: 25,
    sharpness: {
      normal: { color: SharpnessColor.White, length: 10 },
      plus1: { color: SharpnessColor.Purple, length: 25 },
      plus2: { color: SharpnessColor.Purple, length: 50 },
    },
  },
  {
    name: '琥牙剣グラキエス3',
    attack: 350,
    defense: 0,
    slots: 0,
    affinity: 15,
    elementStatus: { type: '氷', value: 19 },
    sharpness: {
      normal: { color: SharpnessColor.Blue, length: 110 },
      plus1: { color: SharpnessColor.White, length: 5 },
      plus2: { color: SharpnessColor.Purple, length: 10 },
    },
  },
]

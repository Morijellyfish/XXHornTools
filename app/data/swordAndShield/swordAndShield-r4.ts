import type { SwordAndShield } from '~/types/weapons'
import { SharpnessColor } from '~/types/sharpness'

export const swordAndShieldsR4: SwordAndShield[] = [
  {
    name: '影刻ネル＝ナクシュ6',
    attack: 270,
    defense: 0,
    slots: 0,
    affinity: 30,
    elementStatus: { type: '睡眠', value: 22 },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 120 },
      plus1: { color: SharpnessColor.Purple, length: 5 },
      plus2: { color: SharpnessColor.Purple, length: 30 },
    },
  },
  {
    name: 'アガメムノン6',
    attack: 330,
    defense: 0,
    slots: 1,
    affinity: 0,
    elementStatus: { type: '水', value: 34 },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 30 },
      plus1: { color: SharpnessColor.Purple, length: 5 },
      plus2: { color: SharpnessColor.Purple, length: 30 },
    },
  },
  {
    name: 'シャードグラブリエ6',
    attack: 350,
    defense: 0,
    slots: 0,
    affinity: -15,
    elementStatus: { type: '氷', value: 17 },
    sharpness: {
      normal: { color: SharpnessColor.Blue, length: 50 },
      plus1: { color: SharpnessColor.White, length: 25 },
      plus2: { color: SharpnessColor.White, length: 50 },
    },
  },
  {
    name: 'シャイングラディウス6',
    attack: 350,
    defense: 15,
    slots: 0,
    affinity: 0,
    elementStatus: { type: '水', value: 17 },
    sharpness: {
      normal: { color: SharpnessColor.Green, length: 160 },
      plus1: { color: SharpnessColor.Blue, length: 25 },
      plus2: { color: SharpnessColor.White, length: 20 },
    },
  },
  {
    name: '削岩剣ボルボルボ6',
    attack: 360,
    defense: 0,
    slots: 2,
    affinity: -40,
    sharpness: {
      normal: { color: SharpnessColor.White, length: 20 },
      plus1: { color: SharpnessColor.White, length: 45 },
      plus2: { color: SharpnessColor.White, length: 70 },
    },
  },
  {
    name: '少し風化した片手剣7',
    attack: 380,
    defense: 0,
    slots: 0,
    affinity: -70,
    sharpness: {
      normal: { color: SharpnessColor.Yellow, length: 190 },
      plus1: { color: SharpnessColor.Blue, length: 5 },
      plus2: { color: SharpnessColor.White, length: 10 },
    },
  },
]

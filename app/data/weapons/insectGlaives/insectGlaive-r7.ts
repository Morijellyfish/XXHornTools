import type { InsectGlaive } from '~/types/weapons'
import { SharpnessColor } from '~/types/sharpness'

export const insectGlaivesR7: InsectGlaive[] = [
  {
    name: '赫醒棍レヴィアナ6',
    attack: 280,
    defense: 0,
    slots: 2,
    affinity: 0,
    insectType: 'slash',
    elementStatus: { type: '龍', value: 45 },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 250 },
      plus1: { color: SharpnessColor.White, length: 250 },
      plus2: { color: SharpnessColor.White, length: 250 },
    },
  },
  {
    name: '神滅龍棍アル・イニア5',
    attack: 290,
    defense: 0,
    slots: 2,
    affinity: 0,
    insectType: 'impact',
    elementStatus: { type: '龍', value: 33 },
    sharpness: {
      normal: { color: SharpnessColor.Purple, length: 60 },
      plus1: { color: SharpnessColor.Purple, length: 60 },
      plus2: { color: SharpnessColor.Purple, length: 60 },
    },
  },
  {
    name: '絢爛の閃竜戟5',
    attack: 310,
    defense: 0,
    slots: 1,
    affinity: 20,
    insectType: 'slash',
    elementStatus: { type: '火', value: 35 },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 30 },
      plus1: { color: SharpnessColor.Purple, length: 5 },
      plus2: { color: SharpnessColor.Purple, length: 30 },
    },
  },
  {
    name: '鬼神大棍【怒猿魔王】5',
    attack: 310,
    defense: 0,
    slots: 0,
    affinity: -20,
    insectType: 'impact',
    elementStatus: { type: '雷', value: 50 },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 40 },
      plus1: { color: SharpnessColor.White, length: 65 },
      plus2: { color: SharpnessColor.Purple, length: 10 },
    },
  },
  {
    name: '極星傲棍ズィムガロア5',
    attack: 320,
    defense: 0,
    slots: 2,
    affinity: 0,
    insectType: 'impact',
    elementStatus: { type: '龍', value: 13 },
    sharpness: {
      normal: { color: SharpnessColor.Purple, length: 10 },
      plus1: { color: SharpnessColor.Purple, length: 10 },
      plus2: { color: SharpnessColor.Purple, length: 10 },
    },
  },
  {
    name: '崩界杖キキリカムノミ5',
    attack: 380,
    defense: 25,
    slots: 0,
    affinity: -30,
    insectType: 'impact',
    elementStatus: { type: '氷', value: 15 },
    sharpness: {
      normal: { color: SharpnessColor.Blue, length: 20 },
      plus1: { color: SharpnessColor.White, length: 5 },
      plus2: { color: SharpnessColor.White, length: 30 },
    },
  },
]

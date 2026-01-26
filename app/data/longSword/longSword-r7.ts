import type { LongSword } from '~/types/weapons'
import { SharpnessColor } from '~/types/sharpness'

export const longSwordsR7: LongSword[] = [
  {
    name: '神滅爪アル・ファリア5',
    attack: 290,
    defense: 0,
    slots: 2,
    affinity: 0,
    element: {
      type: '龍',
      value: 38,
    },
    sharpness: {
      normal: { color: SharpnessColor.Purple, length: 50 },
      plus1: { color: SharpnessColor.Purple, length: 50 },
      plus2: { color: SharpnessColor.Purple, length: 50 },
    },
  },
  {
    name: '咎刀デリトスレイヴ5',
    attack: 300,
    defense: 0,
    slots: 1,
    affinity: 0,
    element: {
      type: '龍',
      value: 54,
    },
    sharpness: {
      normal: { color: SharpnessColor.Blue, length: 110 },
      plus1: { color: SharpnessColor.White, length: 25 },
      plus2: { color: SharpnessColor.Purple, length: 10 },
    },
  },
  {
    name: '赫醒刀【閃武】6',
    attack: 300,
    defense: 0,
    slots: 2,
    affinity: 0,
    element: {
      type: '龍',
      value: 36,
    },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 250 },
      plus1: { color: SharpnessColor.White, length: 250 },
      plus2: { color: SharpnessColor.White, length: 250 },
    },
  },
  {
    name: '極星戦刀リグガロア5',
    attack: 310,
    defense: 0,
    slots: 2,
    affinity: 0,
    element: {
      type: '龍',
      value: 10,
    },
    sharpness: {
      normal: { color: SharpnessColor.Purple, length: 10 },
      plus1: { color: SharpnessColor.Purple, length: 10 },
      plus2: { color: SharpnessColor.Purple, length: 10 },
    },
  },
  {
    name: 'ダオラ＝ストーム5',
    attack: 310,
    defense: 0,
    slots: 1,
    affinity: 0,
    element: {
      type: '氷',
      value: 40,
    },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 80 },
      plus1: { color: SharpnessColor.Purple, length: 5 },
      plus2: { color: SharpnessColor.Purple, length: 30 },
    },
  },
  {
    name: '真飛竜刀【純銀】5',
    attack: 320,
    defense: 0,
    slots: 2,
    affinity: 0,
    element: {
      type: '火',
      value: 28,
    },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 30 },
      plus1: { color: SharpnessColor.Purple, length: 5 },
      plus2: { color: SharpnessColor.Purple, length: 30 },
    },
  },
  {
    name: '鬼神大薙刀【怒修羅】5',
    attack: 320,
    defense: 0,
    slots: 2,
    affinity: -5,
    element: {
      type: '雷',
      value: 46,
    },
    sharpness: {
      normal: { color: SharpnessColor.Blue, length: 90 },
      plus1: { color: SharpnessColor.White, length: 5 },
      plus2: { color: SharpnessColor.Purple, length: 20 },
    },
  },
  {
    name: '太虚ノ刀【九天】5',
    attack: 340,
    defense: 0,
    slots: 0,
    affinity: -20,
    element: {
      type: '水',
      value: 15,
    },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 20 },
      plus1: { color: SharpnessColor.White, length: 45 },
      plus2: { color: SharpnessColor.White, length: 70 },
    },
  },
  {
    name: '崩界刀ウコトカムノミ5',
    attack: 360,
    defense: 20,
    slots: 0,
    affinity: -20,
    element: {
      type: '氷',
      value: 16,
    },
    sharpness: {
      normal: { color: SharpnessColor.Blue, length: 30 },
      plus1: { color: SharpnessColor.Blue, length: 55 },
      plus2: { color: SharpnessColor.White, length: 20 },
    },
  },
  {
    name: '覇威刀イクセタンカム5',
    attack: 370,
    defense: 0,
    slots: 1,
    affinity: 30,
    sharpness: {
      normal: { color: SharpnessColor.Green, length: 60 },
      plus1: { color: SharpnessColor.Blue, length: 5 },
      plus2: { color: SharpnessColor.Blue, length: 30 },
    },
  },
]

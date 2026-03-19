import type { Hammer } from '~/types/weapons'
import { SharpnessColor } from '~/types/sharpness'

export const hammersR4: Hammer[] = [
  {
    name: '影潰ネル＝ダラバ5',
    attack: 280,
    defense: 0,
    slots: 1,
    affinity: 20,
    statusAilment: { type: '睡眠', value: 23 },
    sharpness: {
      normal: { color: SharpnessColor.Purple, length: 30 },
      plus1: { color: SharpnessColor.Purple, length: 30 },
      plus2: { color: SharpnessColor.Purple, length: 30 },
    },
  },
  {
    name: 'バインドキューブ6',
    attack: 290,
    defense: 0,
    slots: 1,
    affinity: 0,
    statusAilment: { type: '麻痺', value: 25 },
    sharpness: {
      normal: { color: SharpnessColor.Blue, length: 80 },
      plus1: { color: SharpnessColor.Purple, length: 5 },
      plus2: { color: SharpnessColor.Purple, length: 30 },
    },
  },
  {
    name: 'グレートタイタン5',
    attack: 320,
    defense: 20,
    slots: 0,
    affinity: 0,
    sharpness: {
      normal: { color: SharpnessColor.Blue, length: 30 },
      plus1: { color: SharpnessColor.White, length: 15 },
      plus2: { color: SharpnessColor.White, length: 40 },
    },
  },
  {
    name: 'アブガトーゾハンマー7',
    attack: 330,
    defense: 0,
    slots: 1,
    affinity: -5,
    element: { type: '水', value: 15 },
    sharpness: {
      normal: { color: SharpnessColor.Blue, length: 50 },
      plus1: { color: SharpnessColor.White, length: 25 },
      plus2: { color: SharpnessColor.White, length: 50 },
    },
  },
  {
    name: 'ボルボモメンタム5',
    attack: 340,
    defense: 15,
    slots: 2,
    affinity: -5,
    sharpness: {
      normal: { color: SharpnessColor.Green, length: 160 },
      plus1: { color: SharpnessColor.Blue, length: 25 },
      plus2: { color: SharpnessColor.White, length: 20 },
    },
  },
  {
    name: 'ファッティデモリシュ6',
    attack: 340,
    defense: 0,
    slots: 1,
    affinity: 0,
    element: { type: '氷', value: 25 },
    sharpness: {
      normal: { color: SharpnessColor.Blue, length: 50 },
      plus1: { color: SharpnessColor.White, length: 25 },
      plus2: { color: SharpnessColor.White, length: 50 },
    },
  },
  {
    name: 'アイアンリジェクト6',
    attack: 340,
    defense: 0,
    slots: 3,
    affinity: 0,
    sharpness: {
      normal: { color: SharpnessColor.Blue, length: 50 },
      plus1: { color: SharpnessColor.White, length: 5 },
      plus2: { color: SharpnessColor.White, length: 30 },
    },
  },
  {
    name: '石拳【愚】6',
    attack: 370,
    defense: 0,
    slots: 3,
    affinity: -20,
    sharpness: {
      normal: { color: SharpnessColor.Blue, length: 30 },
      plus1: { color: SharpnessColor.Blue, length: 55 },
      plus2: { color: SharpnessColor.White, length: 20 },
    },
  },
  {
    name: '少し風化した鎚7',
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

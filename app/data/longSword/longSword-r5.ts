import type { LongSword } from '~/types/weapons'
import { SharpnessColor } from '~/types/sharpness'

export const longSwordsR5: LongSword[] = [
  {
    name: 'パラコイルドエッジ5',
    attack: 260,
    defense: 20,
    slots: 3,
    affinity: 0,
    statusAilment: {
      type: '麻痺',
      value: 34,
    },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 40 },
      plus1: { color: SharpnessColor.White, length: 65 },
      plus2: { color: SharpnessColor.Purple, length: 20 },
    },
  },
  {
    name: '琥牙刃ジャリドファル5',
    attack: 290,
    defense: 0,
    slots: 2,
    affinity: 30,
    element: {
      type: '氷',
      value: 40,
    },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 50 },
      plus1: { color: SharpnessColor.Purple, length: 5 },
      plus2: { color: SharpnessColor.Purple, length: 30 },
    },
  },
  {
    name: '深雪一文字【幻日】5',
    attack: 290,
    defense: 0,
    slots: 3,
    affinity: 15,
    element: {
      type: '氷',
      value: 48,
    },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 20 },
      plus1: { color: SharpnessColor.White, length: 45 },
      plus2: { color: SharpnessColor.Purple, length: 10 },
    },
  },
  {
    name: '真飛竜刀【双獄炎】6',
    attack: 300,
    defense: 0,
    slots: 1,
    affinity: 10,
    element: {
      type: '火',
      value: 44,
    },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 50 },
      plus1: { color: SharpnessColor.Purple, length: 25 },
      plus2: { color: SharpnessColor.Purple, length: 50 },
    },
  },
  {
    name: '双奇薙シャルバラル6',
    attack: 300,
    defense: 0,
    slots: 1,
    affinity: 0,
    element: {
      type: '水',
      value: 53,
    },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 40 },
      plus1: { color: SharpnessColor.White, length: 65 },
      plus2: { color: SharpnessColor.Purple, length: 10 },
    },
  },
  {
    name: 'アルズオブマーレ5',
    attack: 300,
    defense: 0,
    slots: 3,
    affinity: 0,
    element: {
      type: '水',
      value: 34,
    },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 30 },
      plus1: { color: SharpnessColor.Purple, length: 15 },
      plus2: { color: SharpnessColor.Purple, length: 40 },
    },
  },
  {
    name: '妖刀・鬼怨斬首刀5',
    attack: 320,
    defense: 0,
    slots: 1,
    affinity: 0,
    element: {
      type: '雷',
      value: 27,
    },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 40 },
      plus1: { color: SharpnessColor.Purple, length: 15 },
      plus2: { color: SharpnessColor.Purple, length: 40 },
    },
  },
  {
    name: 'エグリヒキサキマクリ6',
    attack: 330,
    defense: 0,
    slots: 0,
    affinity: 0,
    sharpness: {
      normal: { color: SharpnessColor.Purple, length: 20 },
      plus1: { color: SharpnessColor.Purple, length: 45 },
      plus2: { color: SharpnessColor.Purple, length: 70 },
    },
  },
  {
    name: '鬼蝦蟇の懐刀【最上】6',
    attack: 360,
    defense: 0,
    slots: 0,
    affinity: -25,
    sharpness: {
      normal: { color: SharpnessColor.White, length: 20 },
      plus1: { color: SharpnessColor.Purple, length: 15 },
      plus2: { color: SharpnessColor.Purple, length: 40 },
    },
  },
]

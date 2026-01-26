import type { LongSword } from '~/types/weapons'
import { SharpnessColor } from '~/types/sharpness'

export const longSwordsR4: LongSword[] = [
  {
    name: '影斬ネル＝ジーズ6',
    attack: 240,
    defense: 0,
    slots: 1,
    affinity: 40,
    statusAilment: {
      type: '睡眠',
      value: 27,
    },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 60 },
      plus1: { color: SharpnessColor.Purple, length: 5 },
      plus2: { color: SharpnessColor.Purple, length: 30 },
    },
  },
  {
    name: 'シャルトゥリス6',
    attack: 330,
    defense: 0,
    slots: 0,
    affinity: 0,
    element: {
      type: '水',
      value: 32,
    },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 20 },
      plus1: { color: SharpnessColor.Purple, length: 5 },
      plus2: { color: SharpnessColor.Purple, length: 30 },
    },
  },
  {
    name: '瀑水鎌ガノスハケティ6',
    attack: 330,
    defense: 0,
    slots: 1,
    affinity: 0,
    element: {
      type: '水',
      value: 20,
    },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 40 },
      plus1: { color: SharpnessColor.Purple, length: 5 },
      plus2: { color: SharpnessColor.Purple, length: 30 },
    },
  },
  {
    name: 'マカル＝バサル6',
    attack: 330,
    defense: 25,
    slots: 1,
    affinity: 0,
    element: {
      type: '火',
      value: 27,
    },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 20 },
      plus1: { color: SharpnessColor.White, length: 45 },
      plus2: { color: SharpnessColor.Purple, length: 20 },
    },
  },
  {
    name: '骨断刀【カゲタチ】6',
    attack: 330,
    defense: 0,
    slots: 2,
    affinity: 0,
    sharpness: {
      normal: { color: SharpnessColor.White, length: 20 },
      plus1: { color: SharpnessColor.Purple, length: 15 },
      plus2: { color: SharpnessColor.Purple, length: 40 },
    },
  },
  {
    name: '刀鋸【雷斬】6',
    attack: 340,
    defense: 0,
    slots: 1,
    affinity: 0,
    element: {
      type: '雷',
      value: 18,
    },
    sharpness: {
      normal: { color: SharpnessColor.Blue, length: 60 },
      plus1: { color: SharpnessColor.White, length: 15 },
      plus2: { color: SharpnessColor.White, length: 40 },
    },
  },
  {
    name: 'ヴォルガ熔炎斬5',
    attack: 340,
    defense: 0,
    slots: 1,
    affinity: -10,
    element: {
      type: '火',
      value: 22,
    },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 10 },
      plus1: { color: SharpnessColor.Purple, length: 25 },
      plus2: { color: SharpnessColor.Purple, length: 50 },
    },
  },
  {
    name: '少し風化した太刀7',
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

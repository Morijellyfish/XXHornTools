import type { LongSword } from '~/types/weapons'
import { SharpnessColor } from '~/types/sharpness'

export const longSwordsR6: LongSword[] = [
  {
    name: '黒狼大刀【玄】5',
    attack: 290,
    defense: 0,
    slots: 3,
    affinity: 25,
    statusAilment: {
      type: '毒',
      value: 42,
    },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 50 },
      plus1: { color: SharpnessColor.Purple, length: 5 },
      plus2: { color: SharpnessColor.Purple, length: 30 },
    },
  },
  {
    name: '業物・九十九牙丸5',
    attack: 290,
    defense: 0,
    slots: 1,
    affinity: 25,
    element: {
      type: '水',
      value: 30,
    },
    sharpness: {
      normal: { color: SharpnessColor.Purple, length: 20 },
      plus1: { color: SharpnessColor.Purple, length: 20 },
      plus2: { color: SharpnessColor.Purple, length: 20 },
    },
  },
  {
    name: 'アニマメモリア5',
    attack: 290,
    defense: 0,
    slots: 2,
    affinity: 0,
    element: {
      type: '龍',
      value: 56,
    },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 30 },
      plus1: { color: SharpnessColor.White, length: 55 },
      plus2: { color: SharpnessColor.White, length: 80 },
    },
  },
  {
    name: '審判の翼ＸＸ5',
    attack: 290,
    defense: 0,
    slots: 2,
    affinity: 55,
    element: {
      type: '龍',
      value: 10,
    },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 30 },
      plus1: { color: SharpnessColor.White, length: 55 },
      plus2: { color: SharpnessColor.White, length: 80 },
    },
  },
  {
    name: '叛断ノ覇刃レギオン6',
    attack: 290,
    defense: 0,
    slots: 2,
    affinity: 20,
    sharpness: {
      normal: { color: SharpnessColor.Purple, length: 20 },
      plus1: { color: SharpnessColor.Purple, length: 20 },
      plus2: { color: SharpnessColor.Purple, length: 20 },
    },
  },
  {
    name: 'フラムプリンシパル6',
    attack: 290,
    defense: 0,
    slots: 0,
    affinity: 25,
    element: {
      type: '火',
      value: 40,
    },
    sharpness: {
      normal: { color: SharpnessColor.Purple, length: 10 },
      plus1: { color: SharpnessColor.Purple, length: 35 },
      plus2: { color: SharpnessColor.Purple, length: 60 },
    },
  },
  {
    name: '龍識究刀ノニアス5',
    attack: 300,
    defense: 0,
    slots: 3,
    affinity: 25,
    sharpness: {
      normal: { color: SharpnessColor.Purple, length: 30 },
      plus1: { color: SharpnessColor.Purple, length: 30 },
      plus2: { color: SharpnessColor.Purple, length: 30 },
    },
  },
  {
    name: '真・空狐刀5',
    attack: 300,
    defense: 25,
    slots: 1,
    affinity: -5,
    statusAilment: {
      type: '爆破',
      value: 36,
    },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 20 },
      plus1: { color: SharpnessColor.White, length: 45 },
      plus2: { color: SharpnessColor.White, length: 70 },
    },
  },
  {
    name: '極・電撃刀5',
    attack: 300,
    defense: 0,
    slots: 2,
    affinity: 0,
    element: {
      type: '雷',
      value: 40,
    },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 40 },
      plus1: { color: SharpnessColor.White, length: 65 },
      plus2: { color: SharpnessColor.White, length: 90 },
    },
  },
  {
    name: 'ネロ＝カラミティ5',
    attack: 310,
    defense: 0,
    slots: 0,
    affinity: 15,
    element: {
      type: '龍',
      value: 26,
    },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 50 },
      plus1: { color: SharpnessColor.Purple, length: 15 },
      plus2: { color: SharpnessColor.Purple, length: 40 },
    },
  },
  {
    name: 'インフィニティゲート5',
    attack: 310,
    defense: 0,
    slots: 3,
    affinity: 0,
    sharpness: {
      normal: { color: SharpnessColor.White, length: 40 },
      plus1: { color: SharpnessColor.White, length: 65 },
      plus2: { color: SharpnessColor.White, length: 90 },
    },
  },
  {
    name: '砕巌刀ホムラ6',
    attack: 320,
    defense: 0,
    slots: 1,
    affinity: 0,
    statusAilment: {
      type: '爆破',
      value: 32,
    },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 50 },
      plus1: { color: SharpnessColor.Purple, length: 15 },
      plus2: { color: SharpnessColor.Purple, length: 40 },
    },
  },
  {
    name: '斬老刀【カンヤライ】5',
    attack: 320,
    defense: 0,
    slots: 1,
    affinity: 10,
    element: {
      type: '火',
      value: 23,
    },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 50 },
      plus1: { color: SharpnessColor.Purple, length: 25 },
      plus2: { color: SharpnessColor.Purple, length: 50 },
    },
  },
  {
    name: '海賊王Ｊソード5',
    attack: 320,
    defense: 0,
    slots: 1,
    affinity: 0,
    sharpness: {
      normal: { color: SharpnessColor.White, length: 50 },
      plus1: { color: SharpnessColor.White, length: 75 },
      plus2: { color: SharpnessColor.White, length: 100 },
    },
  },
  {
    name: '大鬼薙刀【羅刹】6',
    attack: 330,
    defense: 0,
    slots: 1,
    affinity: 10,
    element: {
      type: '雷',
      value: 26,
    },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 20 },
      plus1: { color: SharpnessColor.Purple, length: 5 },
      plus2: { color: SharpnessColor.Purple, length: 30 },
    },
  },
  {
    name: 'MH部激熱血指導竹刀5',
    attack: 330,
    defense: 50,
    slots: 0,
    affinity: -30,
    sharpness: {
      normal: { color: SharpnessColor.Blue, length: 20 },
      plus1: { color: SharpnessColor.White, length: 15 },
      plus2: { color: SharpnessColor.White, length: 40 },
    },
  },
  {
    name: '嶺薙ワイルドグロウト5',
    attack: 340,
    defense: 0,
    slots: 1,
    affinity: 0,
    sharpness: {
      normal: { color: SharpnessColor.White, length: 40 },
      plus1: { color: SharpnessColor.White, length: 65 },
      plus2: { color: SharpnessColor.Purple, length: 20 },
    },
  },
]

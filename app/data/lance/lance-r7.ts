import type { Lance } from '~/types/weapons'
import { SharpnessColor } from '~/types/sharpness'

export const lancesR7: Lance[] = [
  {
    name: '神滅槍アル・トリア5',
    attack: 290,
    defense: 0,
    slots: 2,
    affinity: 0,
    element: { type: '龍', value: 32 },
    sharpness: {
      normal: { color: SharpnessColor.Purple, length: 50 },
      plus1: { color: SharpnessColor.Purple, length: 50 },
      plus2: { color: SharpnessColor.Purple, length: 50 },
    },
  },
  {
    name: '赫醒槍エールエンケ6',
    attack: 300,
    defense: 0,
    slots: 2,
    affinity: 0,
    element: { type: '龍', value: 30 },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 250 },
      plus1: { color: SharpnessColor.White, length: 250 },
      plus2: { color: SharpnessColor.White, length: 250 },
    },
  },
  {
    name: 'テオ＝エクシス5',
    attack: 300,
    defense: 0,
    slots: 1,
    affinity: 0,
    statusAilment: { type: '爆破', value: 44 },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 60 },
      plus1: { color: SharpnessColor.White, length: 85 },
      plus2: { color: SharpnessColor.Purple, length: 20 },
    },
  },
  {
    name: 'ディバイン＝ソル5',
    attack: 310,
    defense: 0,
    slots: 1,
    affinity: 0,
    element: { type: '火', value: 34 },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 40 },
      plus1: { color: SharpnessColor.Purple, length: 15 },
      plus2: { color: SharpnessColor.Purple, length: 40 },
    },
  },
  {
    name: '極星怨槍ガズィガロア5',
    attack: 310,
    defense: 0,
    slots: 2,
    affinity: 0,
    element: { type: '龍', value: 10 },
    sharpness: {
      normal: { color: SharpnessColor.Purple, length: 10 },
      plus1: { color: SharpnessColor.Purple, length: 10 },
      plus2: { color: SharpnessColor.Purple, length: 10 },
    },
  },
  {
    name: '鬼神大天槍ラージャン5',
    attack: 320,
    defense: 0,
    slots: 1,
    affinity: 0,
    element: { type: '雷', value: 32 },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 30 },
      plus1: { color: SharpnessColor.Purple, length: 5 },
      plus2: { color: SharpnessColor.Purple, length: 30 },
    },
  },
  {
    name: '太虚ノ矛【衝天】5',
    attack: 350,
    defense: 0,
    slots: 0,
    affinity: -20,
    element: { type: '水', value: 18 },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 20 },
      plus1: { color: SharpnessColor.White, length: 45 },
      plus2: { color: SharpnessColor.White, length: 70 },
    },
  },
  {
    name: '崩界槍ケルケカムノミ5',
    attack: 360,
    defense: 20,
    slots: 0,
    affinity: -20,
    element: { type: '氷', value: 18 },
    sharpness: {
      normal: { color: SharpnessColor.Blue, length: 30 },
      plus1: { color: SharpnessColor.Blue, length: 55 },
      plus2: { color: SharpnessColor.White, length: 20 },
    },
  },
]

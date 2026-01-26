import type { LongSword } from '~/types/weapons'
import { SharpnessColor } from '~/types/sharpness'

export const longSwordsRX: LongSword[] = [
  {
    name: '真飛竜刀【アルミナ】5',
    attack: 280,
    defense: 0,
    slots: 0,
    affinity: 40,
    element: {
      type: '雷',
      value: 18,
    },
    sharpness: {
      normal: { color: SharpnessColor.Purple, length: 20 },
      plus1: { color: SharpnessColor.Purple, length: 45 },
      plus2: { color: SharpnessColor.Purple, length: 70 },
    },
  },
  {
    name: '隻眼大刀【災】15',
    attack: 290,
    defense: 0,
    slots: 0,
    affinity: 20,
    statusAilment: {
      type: '毒',
      value: 40,
    },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 80 },
      plus1: { color: SharpnessColor.Purple, length: 5 },
      plus2: { color: SharpnessColor.Purple, length: 30 },
    },
  },
  {
    name: '真滅刀ヴァンダノヴァ15',
    attack: 300,
    defense: 0,
    slots: 0,
    affinity: 5,
    statusAilment: {
      type: '爆破',
      value: 30,
    },
    sharpness: {
      normal: { color: SharpnessColor.Purple, length: 30 },
      plus1: { color: SharpnessColor.Purple, length: 30 },
      plus2: { color: SharpnessColor.Purple, length: 30 },
    },
  },
  {
    name: '曙光刀【業風】15',
    attack: 300,
    defense: 0,
    slots: 0,
    affinity: 20,
    sharpness: {
      normal: { color: SharpnessColor.Purple, length: 50 },
      plus1: { color: SharpnessColor.Purple, length: 50 },
      plus2: { color: SharpnessColor.Purple, length: 50 },
    },
  },
  {
    name: '極・金狼牙刀【奔】15',
    attack: 300,
    defense: 0,
    slots: 0,
    affinity: 10,
    element: {
      type: '雷',
      value: 45,
    },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 50 },
      plus1: { color: SharpnessColor.Purple, length: 5 },
      plus2: { color: SharpnessColor.Purple, length: 30 },
    },
  },
  {
    name: '荒鉤爪刀ＧＵＬＰ15',
    attack: 310,
    defense: 0,
    slots: 0,
    affinity: 10,
    sharpness: {
      normal: { color: SharpnessColor.Purple, length: 30 },
      plus1: { color: SharpnessColor.Purple, length: 30 },
      plus2: { color: SharpnessColor.Purple, length: 30 },
    },
  },
  {
    name: 'たまきはる露命滅斬刀5',
    attack: 310,
    defense: 0,
    slots: 0,
    affinity: 20,
    element: {
      type: '水',
      value: 30,
    },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 30 },
      plus1: { color: SharpnessColor.Purple, length: 15 },
      plus2: { color: SharpnessColor.Purple, length: 40 },
    },
  },
  {
    name: '黒兎棘刃ヘフナー15',
    attack: 310,
    defense: 0,
    slots: 0,
    affinity: 15,
    element: {
      type: '氷',
      value: 25,
    },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 40 },
      plus1: { color: SharpnessColor.Purple, length: 5 },
      plus2: { color: SharpnessColor.Purple, length: 30 },
    },
  },
  {
    name: '真飛竜刀【玄冥】15',
    attack: 310,
    defense: 0,
    slots: 0,
    affinity: 5,
    element: {
      type: '火',
      value: 34,
    },
    sharpness: {
      normal: { color: SharpnessColor.White, length: 50 },
      plus1: { color: SharpnessColor.Purple, length: 25 },
      plus2: { color: SharpnessColor.Purple, length: 50 },
    },
  },
  {
    name: '朧翔大侯ゲンタヒルン5',
    attack: 330,
    defense: 0,
    slots: 0,
    affinity: 10,
    statusAilment: {
      type: '睡眠',
      value: 16,
    },
    sharpness: {
      normal: { color: SharpnessColor.Blue, length: 100 },
      plus1: { color: SharpnessColor.White, length: 25 },
      plus2: { color: SharpnessColor.White, length: 50 },
    },
  },
  {
    name: '鎧裂鎌ドヒキサキ5',
    attack: 330,
    defense: 0,
    slots: 0,
    affinity: 5,
    sharpness: {
      normal: { color: SharpnessColor.White, length: 120 },
      plus1: { color: SharpnessColor.Purple, length: 5 },
      plus2: { color: SharpnessColor.Purple, length: 30 },
    },
  },
  {
    name: 'ウィルギガンカッター15',
    attack: 340,
    defense: 20,
    slots: 0,
    affinity: 10,
    element: {
      type: '水',
      value: 26,
    },
    sharpness: {
      normal: { color: SharpnessColor.Blue, length: 120 },
      plus1: { color: SharpnessColor.White, length: 25 },
      plus2: { color: SharpnessColor.Purple, length: 10 },
    },
  },
  {
    name: '渦紋鬼懐刀【下剋上】15',
    attack: 340,
    defense: 15,
    slots: 0,
    affinity: 5,
    sharpness: {
      normal: { color: SharpnessColor.White, length: 40 },
      plus1: { color: SharpnessColor.Purple, length: 25 },
      plus2: { color: SharpnessColor.Purple, length: 50 },
    },
  },
  {
    name: '紅熊長筆【百蜜夜行】15',
    attack: 350,
    defense: 0,
    slots: 0,
    affinity: 10,
    sharpness: {
      normal: { color: SharpnessColor.Blue, length: 120 },
      plus1: { color: SharpnessColor.White, length: 25 },
      plus2: { color: SharpnessColor.Purple, length: 10 },
    },
  },
  {
    name: '肢ュ刃王の大上段5',
    attack: 370,
    defense: 10,
    slots: 0,
    affinity: 5,
    element: {
      type: '氷',
      value: 16,
    },
    sharpness: {
      normal: { color: SharpnessColor.Green, length: 120 },
      plus1: { color: SharpnessColor.Blue, length: 25 },
      plus2: { color: SharpnessColor.White, length: 20 },
    },
  },
  {
    name: 'フォークデアマンテ15',
    attack: 380,
    defense: 25,
    slots: 0,
    affinity: 10,
    sharpness: {
      normal: { color: SharpnessColor.Green, length: 210 },
      plus1: { color: SharpnessColor.Blue, length: 25 },
      plus2: { color: SharpnessColor.Blue, length: 50 },
    },
  },
]

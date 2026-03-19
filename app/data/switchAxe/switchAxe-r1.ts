import type { SwitchAxe } from '~/types/weapons'
import { SharpnessColor } from '~/types/sharpness'

export const switchAxesR1: SwitchAxe[] = [
  {
    name: '甲翅刃カンタゴスタ7',
    attack: 260,
    defense: 0,
    slots: 3,
    affinity: 0,
    statusAilment: { type: '麻痺', value: 26 },
    switchAxePhialType: 'power',
    sharpness: {
      normal: { color: SharpnessColor.Purple, length: 20 },
      plus1: { color: SharpnessColor.Purple, length: 45 },
      plus2: { color: SharpnessColor.Purple, length: 70 },
    },
  },
  {
    name: '青熊豪斧【御神輿】8',
    attack: 310,
    defense: 0,
    slots: 0,
    affinity: 0,
    switchAxePhialType: 'poison',
    sharpness: {
      normal: { color: SharpnessColor.White, length: 20 },
      plus1: { color: SharpnessColor.White, length: 45 },
      plus2: { color: SharpnessColor.Purple, length: 10 },
    },
  },
  {
    name: 'ソフォスアックス11',
    attack: 320,
    defense: 0,
    slots: 3,
    affinity: 0,
    switchAxePhialType: 'power',
    sharpness: {
      normal: { color: SharpnessColor.White, length: 40 },
      plus1: { color: SharpnessColor.White, length: 65 },
      plus2: { color: SharpnessColor.White, length: 90 },
    },
  },
  {
    name: 'アルターアラクシス11',
    attack: 340,
    defense: 0,
    slots: 0,
    affinity: 0,
    switchAxePhialType: 'paralysis',
    sharpness: {
      normal: { color: SharpnessColor.Blue, length: 60 },
      plus1: { color: SharpnessColor.White, length: 15 },
      plus2: { color: SharpnessColor.White, length: 40 },
    },
  },
  {
    name: 'アイカラス11',
    attack: 350,
    defense: 0,
    slots: 0,
    affinity: 0,
    switchAxePhialType: 'power',
    sharpness: {
      normal: { color: SharpnessColor.Blue, length: 50 },
      plus1: { color: SharpnessColor.White, length: 5 },
      plus2: { color: SharpnessColor.Purple, length: 20 },
    },
  },
  {
    name: 'ユアガリアックス8',
    attack: 350,
    defense: 0,
    slots: 2,
    affinity: 0,
    switchAxePhialType: 'power',
    sharpness: {
      normal: { color: SharpnessColor.Green, length: 180 },
      plus1: { color: SharpnessColor.Blue, length: 25 },
      plus2: { color: SharpnessColor.White, length: 20 },
    },
  },
  {
    name: 'ギガントダッシャー8',
    attack: 360,
    defense: 0,
    slots: 3,
    affinity: 0,
    switchAxePhialType: 'exhaust',
    sharpness: {
      normal: { color: SharpnessColor.Green, length: 120 },
      plus1: { color: SharpnessColor.Blue, length: 25 },
      plus2: { color: SharpnessColor.Blue, length: 50 },
    },
  },
]

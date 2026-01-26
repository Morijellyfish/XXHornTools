import type { HuntingHorn } from '~/types/weapons'
import { SharpnessColor } from '~/types/sharpness'
import { Notes } from '~/types/notes'

export const hornsR7: HuntingHorn[] = [
  {
    name: '赫醒笛エディウス6',
    attack: 280,
    defense: 0,
    slots: 2,
    affinity: 0,
    element: {
      type: '龍',
      value: 55,
    },
    notes: new Notes('紫', '赤', '青'),
    sharpness: {
      normal: { color: SharpnessColor.White, length: 250 },
      plus1: { color: SharpnessColor.White, length: 250 },
      plus2: { color: SharpnessColor.White, length: 250 },
    },
  },
  {
    name: 'ディアブムル＝ダオラ5',
    attack: 300,
    defense: 0,
    slots: 1,
    affinity: 10,
    element: {
      type: '氷',
      value: 45,
    },
    notes: new Notes('紫', '青', '橙'),
    sharpness: {
      normal: { color: SharpnessColor.White, length: 50 },
      plus1: { color: SharpnessColor.Purple, length: 5 },
      plus2: { color: SharpnessColor.Purple, length: 30 },
    },
  },
  {
    name: '極星憂笛ディエガロア5',
    attack: 310,
    defense: 0,
    slots: 2,
    affinity: 0,
    element: {
      type: '龍',
      value: 17,
    },
    notes: new Notes('紫', '橙', '黄'),
    sharpness: {
      normal: { color: SharpnessColor.Purple, length: 10 },
      plus1: { color: SharpnessColor.Purple, length: 10 },
      plus2: { color: SharpnessColor.Purple, length: 10 },
    },
  },
  {
    name: 'アマスリコーダー5',
    attack: 330,
    defense: 0,
    slots: 1,
    affinity: 0,
    element: {
      type: '龍',
      value: 30,
    },
    notes: new Notes('紫', '青', '黄'),
    sharpness: {
      normal: { color: SharpnessColor.White, length: 30 },
      plus1: { color: SharpnessColor.Purple, length: 5 },
      plus2: { color: SharpnessColor.Purple, length: 30 },
    },
  },
  {
    name: '太虚ノ琴【玄天】5',
    attack: 360,
    defense: 0,
    slots: 0,
    affinity: -20,
    element: {
      type: '水',
      value: 20,
    },
    notes: new Notes('紫', '黄', '橙'),
    sharpness: {
      normal: { color: SharpnessColor.White, length: 10 },
      plus1: { color: SharpnessColor.White, length: 35 },
      plus2: { color: SharpnessColor.White, length: 60 },
    },
  },
  {
    name: '覇巌笛イクセハウカム5',
    attack: 370,
    defense: 0,
    slots: 0,
    affinity: 40,
    notes: new Notes('紫', '青', '橙'),
    sharpness: {
      normal: { color: SharpnessColor.Green, length: 50 },
      plus1: { color: SharpnessColor.Green, length: 75 },
      plus2: { color: SharpnessColor.Blue, length: 10 },
    },
  },
  {
    name: '崩界笛イコカカムノミ5',
    attack: 370,
    defense: 20,
    slots: 0,
    affinity: -20,
    element: {
      type: '氷',
      value: 20,
    },
    notes: new Notes('紫', '黄', '橙'),
    sharpness: {
      normal: { color: SharpnessColor.Blue, length: 30 },
      plus1: { color: SharpnessColor.Blue, length: 55 },
      plus2: { color: SharpnessColor.White, length: 20 },
    },
  },
]

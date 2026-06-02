import type { Monster } from '~/types/monster/monster'

import { PartDurability } from '~/types/monster/partDurability'

import { shredclawCeanataurQuests } from '../quest/shredclawCeanataur'

export const shredclawCeanataur: Monster = {
  name: '鎧裂ショウグンギザミ',
  species: '甲殻種',
  roar: { has: false },
  windPressure: { has: true, strength: '小' },
  tremor: false,
  hitZoneVariants: [
    {
      name: '通常時',

      hitZones: [
        {
          name: '頭',
          mellee: { slash: 50, impact: 45, shot: 45 },
          element: { 火: 10, 水: 10, 雷: 20, 氷: 20, 龍: 0 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '胴体',
          mellee: { slash: 35, impact: 35, shot: 25 },
          element: { 火: 15, 水: 5, 雷: 20, 氷: 10, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: 'ヤド',
          mellee: { slash: 20, impact: 30, shot: 15 },
          element: { 火: 15, 水: 0, 雷: 20, 氷: 10, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: 'ヤド内',
          mellee: { slash: 35, impact: 40, shot: 30 },
          element: { 火: 10, 水: 5, 雷: 20, 氷: 10, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '腕',
          mellee: { slash: 25, impact: 35, shot: 25 },
          element: { 火: 15, 水: 5, 雷: 15, 氷: 10, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '爪',
          mellee: { slash: 20, impact: 20, shot: 10 },
          element: { 火: 10, 水: 5, 雷: 20, 氷: 10, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '前脚',
          mellee: { slash: 25, impact: 25, shot: 25 },
          element: { 火: 15, 水: 5, 雷: 15, 氷: 10, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '後脚',
          mellee: { slash: 35, impact: 30, shot: 35 },
          element: { 火: 10, 水: 5, 雷: 10, 氷: 10, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
    {
      name: '部位破壊後',

      hitZones: [
        {
          name: 'ヤド',
          mellee: { slash: 30, impact: 30, shot: 20 },
          element: { 火: 0, 水: 15, 雷: 20, 氷: 10, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: 'ヤド内',
          mellee: { slash: 50, impact: 55, shot: 40 },
          element: { 火: 10, 水: 10, 雷: 20, 氷: 15, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '爪',
          mellee: { slash: 45, impact: 45, shot: 35 },
          element: { 火: 10, 水: 5, 雷: 20, 氷: 10, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '前脚',
          mellee: { slash: 30, impact: 30, shot: 30 },
          element: { 火: 10, 水: 5, 雷: 10, 氷: 10, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '後脚',
          mellee: { slash: 25, impact: 25, shot: 25 },
          element: { 火: 15, 水: 5, 雷: 15, 氷: 10, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
  ],
  partDurabilities: [
    new PartDurability('頭', 200),
    new PartDurability('胴', 200),
    new PartDurability('腕', 150),
    new PartDurability('左爪', 240, 480),
    new PartDurability('右爪', 240, 480),
    new PartDurability('左脚', 220),
    new PartDurability('右脚', 220),
    new PartDurability('ヤド', 300),
  ],
  quests: shredclawCeanataurQuests,
}

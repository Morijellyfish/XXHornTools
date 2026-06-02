import type { Monster } from '~/types/monster/monster'

import { PartDurability } from '~/types/monster/partDurability'

import { nerscyllaQuests } from '../quest/nerscylla'

export const nerscylla: Monster = {
  name: 'ネルスキュラ',
  species: '鋏角種',
  roar: { has: false },
  windPressure: { has: false },
  tremor: true,
  hitZoneVariants: [
    {
      name: '通常時',

      hitZones: [
        {
          name: '頭',
          mellee: { slash: 50, impact: 65, shot: 50 },
          element: { 火: 15, 水: 0, 雷: 0, 氷: 5, 龍: 0 },
          stun: 100,
          exhaust: 150,
        },
        {
          name: '胸',
          mellee: { slash: 36, impact: 36, shot: 40 },
          element: { 火: 25, 水: 0, 雷: 0, 氷: 5, 龍: 0 },
          stun: 0,
          exhaust: 120,
        },
        {
          name: '腹',
          mellee: { slash: 60, impact: 45, shot: 45 },
          element: { 火: 15, 水: 0, 雷: 20, 氷: 5, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '毒トゲ',
          mellee: { slash: 28, impact: 35, shot: 65 },
          element: { 火: 25, 水: 0, 雷: 0, 氷: 5, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '爪先端',
          mellee: { slash: 20, impact: 30, shot: 20 },
          element: { 火: 5, 水: 0, 雷: 10, 氷: 0, 龍: 0 },
          stun: 0,
          exhaust: 200,
        },
        {
          name: '脚',
          mellee: { slash: 35, impact: 30, shot: 25 },
          element: { 火: 20, 水: 0, 雷: 0, 氷: 5, 龍: 0 },
          stun: 0,
          exhaust: 120,
        },
        {
          name: '脚先端',
          mellee: { slash: 28, impact: 30, shot: 20 },
          element: { 火: 10, 水: 0, 雷: 0, 氷: 0, 龍: 0 },
          stun: 0,
          exhaust: 120,
        },
      ],
    },
    {
      name: '皮破壊後',

      hitZones: [
        {
          name: '頭',
          mellee: { slash: 50, impact: 65, shot: 50 },
          element: { 火: 5, 水: 0, 雷: 10, 氷: 5, 龍: 0 },
          stun: 100,
          exhaust: 130,
        },
        {
          name: '胸',
          mellee: { slash: 36, impact: 36, shot: 40 },
          element: { 火: 5, 水: 0, 雷: 25, 氷: 5, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '腹',
          mellee: { slash: 60, impact: 45, shot: 45 },
          element: { 火: 5, 水: 0, 雷: 20, 氷: 5, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '毒トゲ',
          mellee: { slash: 28, impact: 42, shot: 35 },
          element: { 火: 5, 水: 0, 雷: 35, 氷: 5, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '脚',
          mellee: { slash: 35, impact: 30, shot: 25 },
          element: { 火: 5, 水: 0, 雷: 15, 氷: 5, 龍: 0 },
          stun: 0,
          exhaust: 120,
        },
        {
          name: '脚先端',
          mellee: { slash: 28, impact: 30, shot: 20 },
          element: { 火: 5, 水: 0, 雷: 5, 氷: 0, 龍: 0 },
          stun: 0,
          exhaust: 120,
        },
      ],
    },
  ],
  partDurabilities: [
    new PartDurability('頭', 100, undefined, 150, 150),
    new PartDurability('毒トゲ', 100, undefined, 150, 150),
    new PartDurability('胸', 100, undefined, 150),
    new PartDurability('腹', 200, undefined, 300, 300),
    new PartDurability('爪', 100, undefined, 150),
    new PartDurability('左脚', 120, undefined, 180),
    new PartDurability('右脚', 120, undefined, 180),
  ],
  quests: nerscyllaQuests,
}

import type { Monster } from '~/types/monster/monster'

import { PartDurability } from '~/types/monster/partDurability'

import { shogunCeanataurQuests } from '../quest/shogunCeanataur'

export const shogunCeanataur: Monster = {
  name: 'ショウグンギザミ',
  species: '甲殻種',
  hitZoneVariants: [
    {
      name: '通常時',

      hitZones: [
        {
          name: '頭',
          mellee: { slash: 50, impact: 45, shot: 45 },
          element: { 火: 10, 水: 10, 雷: 35, 氷: 20, 龍: 0 },
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
          mellee: { slash: 25, impact: 45, shot: 25 },
          element: { 火: 20, 水: 5, 雷: 25, 氷: 10, 龍: 0 },
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
          mellee: { slash: 25, impact: 30, shot: 15 },
          element: { 火: 35, 水: 5, 雷: 20, 氷: 10, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '脚',
          mellee: { slash: 35, impact: 30, shot: 30 },
          element: { 火: 15, 水: 5, 雷: 15, 氷: 10, 龍: 0 },
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
      ],
    },
    {
      name: '部位破壊後',

      hitZones: [
        {
          name: 'ヤド',
          mellee: { slash: 20, impact: 30, shot: 15 },
          element: { 火: 15, 水: 5, 雷: 20, 氷: 10, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: 'ヤド内',
          mellee: { slash: 45, impact: 50, shot: 45 },
          element: { 火: 10, 水: 10, 雷: 20, 氷: 15, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
    {
      name: '獰猛化時',

      hitZones: [
        {
          name: '爪',
          mellee: { slash: 30, impact: 36, shot: 18 },
          element: { 火: 42, 水: 6, 雷: 24, 氷: 12, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
  ],
  partDurabilities: [
    new PartDurability('頭', 170, undefined, 255),
    new PartDurability('胴', 170, undefined, 255),
    new PartDurability('腕', 100, undefined, 150),
    new PartDurability('左爪', 200, undefined, 300, 300),
    new PartDurability('右爪', 200, undefined, 300, 300),
    new PartDurability('左脚', 180, undefined, 270),
    new PartDurability('右脚', 180, undefined, 270, 180),
    new PartDurability('ヤド', 260, undefined, 390),
  ],
  quests: shogunCeanataurQuests,
}

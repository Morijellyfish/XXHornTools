import type { Monster } from '~/types/monster/monster'

import { PartDurability } from '~/types/monster/partDurability'

import { yianGarugaQuests } from '../quest/yianGaruga'

export const yianGaruga: Monster = {
  name: 'イャンガルルガ',
  species: '鳥竜種',
  roar: { has: true, strength: '小' },
  windPressure: { has: true, strength: '大' },
  tremor: false,
  hitZoneVariants: [
    {
      name: '通常時',

      hitZones: [
        {
          name: '頭',
          mellee: { slash: 65, impact: 60, shot: 50 },
          element: { 火: 0, 水: 20, 雷: 0, 氷: 10, 龍: 5 },
          stun: 150,
          exhaust: 100,
        },
        {
          name: '首',
          mellee: { slash: 42, impact: 42, shot: 25 },
          element: { 火: 0, 水: 15, 雷: 0, 氷: 10, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '腹',
          mellee: { slash: 29, impact: 25, shot: 35 },
          element: { 火: 15, 水: 20, 雷: 10, 氷: 15, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '背',
          mellee: { slash: 15, impact: 15, shot: 10 },
          element: { 火: 5, 水: 50, 雷: 10, 氷: 20, 龍: 30 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '翼',
          mellee: { slash: 32, impact: 45, shot: 20 },
          element: { 火: 0, 水: 15, 雷: 0, 氷: 10, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '脚',
          mellee: { slash: 32, impact: 32, shot: 10 },
          element: { 火: 0, 水: 10, 雷: 5, 氷: 10, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尾下',
          mellee: { slash: 50, impact: 30, shot: 15 },
          element: { 火: 5, 水: 15, 雷: 0, 氷: 10, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
    {
      name: '獰猛化時',

      hitZones: [
        {
          name: '尾下',
          mellee: { slash: 60, impact: 36, shot: 18 },
          element: { 火: 6, 水: 18, 雷: 0, 氷: 12, 龍: 6 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
  ],
  partDurabilities: [
    new PartDurability('頭', 160, undefined, 160, 160),
    new PartDurability('首', 150, undefined, 150),
    new PartDurability('胴', 130, undefined, 130),
    new PartDurability('左翼', 150, undefined, 150),
    new PartDurability('右翼', 150, undefined, 150),
    new PartDurability('左脚', 200, undefined, 200, 200),
    new PartDurability('右脚', 200, undefined, 200, 200),
    new PartDurability('尻尾', 100, 250, 100, 100),
  ],
  quests: yianGarugaQuests,
}

import type { Monster } from '~/types/monster/monster'

import { PartDurability } from '~/types/monster/partDurability'

import { plesiothQuests } from '../quest/plesioth'

export const plesioth: Monster = {
  name: 'ガノトトス',
  species: '魚竜種',
  roar: { has: false },
  windPressure: { has: true, strength: '小' },
  tremor: false,
  hitZoneVariants: [
    {
      name: '通常時',

      hitZones: [
        {
          name: '頭',
          mellee: { slash: 38, impact: 50, shot: 30 },
          element: { 火: 15, 水: 0, 雷: 20, 氷: 5, 龍: 5 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '首',
          mellee: { slash: 45, impact: 38, shot: 35 },
          element: { 火: 15, 水: 0, 雷: 25, 氷: 5, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '胴',
          mellee: { slash: 50, impact: 45, shot: 50 },
          element: { 火: 20, 水: 0, 雷: 20, 氷: 5, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '背',
          mellee: { slash: 20, impact: 20, shot: 20 },
          element: { 火: 20, 水: 0, 雷: 25, 氷: 5, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '翼',
          mellee: { slash: 25, impact: 25, shot: 30 },
          element: { 火: 25, 水: 0, 雷: 25, 氷: 5, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '脚',
          mellee: { slash: 35, impact: 38, shot: 30 },
          element: { 火: 15, 水: 0, 雷: 15, 氷: 5, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻尾',
          mellee: { slash: 35, impact: 25, shot: 45 },
          element: { 火: 20, 水: 0, 雷: 25, 氷: 5, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
    {
      name: '獰猛化時',

      hitZones: [
        {
          name: '頭',
          mellee: { slash: 45, impact: 60, shot: 36 },
          element: { 火: 18, 水: 0, 雷: 24, 氷: 6, 龍: 6 },
          stun: 120,
          exhaust: 100,
        },
      ],
    },
  ],
  partDurabilities: [
    new PartDurability('頭', 200, undefined, 300, 300),
    new PartDurability('首', 180, undefined, 270),
    new PartDurability('胴', 250, undefined, 375),
    new PartDurability('左翼', 180, undefined, 270),
    new PartDurability('右翼', 180, undefined, 270),
    new PartDurability('左脚', 300, undefined, 450),
    new PartDurability('右脚', 300, undefined, 450, 300),
    new PartDurability('尻尾', 200, undefined, 300, 200),
  ],
  quests: plesiothQuests,
}

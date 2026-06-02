import type { Monster } from '~/types/monster/monster'

import { PartDurability } from '~/types/monster/partDurability'

import { malfestioQuests } from '../quest/malfestio'

export const malfestio: Monster = {
  name: 'ホロロホルル',
  species: '鳥竜種',
  roar: { has: true, strength: '小' },
  windPressure: { has: true, strength: '小' },
  tremor: false,
  hitZoneVariants: [
    {
      name: '通常時',

      hitZones: [
        {
          name: '頭',
          mellee: { slash: 55, impact: 50, shot: 55 },
          element: { 火: 10, 水: 15, 雷: 5, 氷: 5, 龍: 5 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '胴',
          mellee: { slash: 40, impact: 40, shot: 40 },
          element: { 火: 5, 水: 10, 雷: 5, 氷: 5, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '翼',
          mellee: { slash: 35, impact: 35, shot: 30 },
          element: { 火: 5, 水: 10, 雷: 5, 氷: 5, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '翼爪',
          mellee: { slash: 20, impact: 20, shot: 20 },
          element: { 火: 10, 水: 20, 雷: 10, 氷: 5, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '脚',
          mellee: { slash: 35, impact: 30, shot: 30 },
          element: { 火: 5, 水: 10, 雷: 5, 氷: 5, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻尾',
          mellee: { slash: 50, impact: 45, shot: 35 },
          element: { 火: 10, 水: 15, 雷: 5, 氷: 5, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
    {
      name: '獰猛化時',

      hitZones: [
        {
          name: '翼',
          mellee: { slash: 42, impact: 42, shot: 36 },
          element: { 火: 6, 水: 12, 雷: 6, 氷: 6, 龍: 6 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '脚',
          mellee: { slash: 42, impact: 36, shot: 36 },
          element: { 火: 6, 水: 12, 雷: 6, 氷: 6, 龍: 6 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
  ],
  partDurabilities: [
    new PartDurability('頭', 180, undefined, 270),
    new PartDurability('胴', 200, undefined, 300),
    new PartDurability('左翼', 150, undefined, 225, 225),
    new PartDurability('右翼', 150, undefined, 225),
    new PartDurability('脚', 140, undefined, 210, 210),
    new PartDurability('尻尾', 120, undefined, 180),
  ],
  quests: malfestioQuests,
}

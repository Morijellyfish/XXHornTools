import type { Monster } from '~/types/monster/monster'

import { PartDurability } from '~/types/monster/partDurability'

import { basariosQuests } from '../quest/basarios'

export const basarios: Monster = {
  name: 'バサルモス',
  species: '飛竜種',
  roar: { has: true, strength: '大' },
  windPressure: { has: true, strength: '大' },
  tremor: false,
  hitZoneVariants: [
    {
      name: '通常時',

      hitZones: [
        {
          name: '頭',
          mellee: { slash: 20, impact: 20, shot: 20 },
          element: { 火: 10, 水: 15, 雷: 10, 氷: 10, 龍: 18 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '首下',
          mellee: { slash: 15, impact: 20, shot: 20 },
          element: { 火: 10, 水: 15, 雷: 10, 氷: 10, 龍: 18 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '背',
          mellee: { slash: 15, impact: 20, shot: 20 },
          element: { 火: 10, 水: 15, 雷: 10, 氷: 10, 龍: 18 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '腹',
          mellee: { slash: 24, impact: 25, shot: 30 },
          element: { 火: 10, 水: 20, 雷: 10, 氷: 10, 龍: 18 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '翼',
          mellee: { slash: 20, impact: 20, shot: 20 },
          element: { 火: 10, 水: 15, 雷: 10, 氷: 10, 龍: 18 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '脚',
          mellee: { slash: 25, impact: 26, shot: 30 },
          element: { 火: 10, 水: 10, 雷: 10, 氷: 10, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尾下',
          mellee: { slash: 15, impact: 15, shot: 15 },
          element: { 火: 10, 水: 15, 雷: 10, 氷: 10, 龍: 18 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尾先',
          mellee: { slash: 28, impact: 15, shot: 15 },
          element: { 火: 10, 水: 10, 雷: 10, 氷: 10, 龍: 15 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
    {
      name: '腹破壊後',

      hitZones: [
        {
          name: '腹',
          mellee: { slash: 50, impact: 50, shot: 55 },
          element: { 火: 25, 水: 35, 雷: 10, 氷: 10, 龍: 33 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
  ],
  partDurabilities: [
    new PartDurability('頭', 100),
    new PartDurability('胴', 200),
    new PartDurability('左翼', 130),
    new PartDurability('右翼', 130),
    new PartDurability('左脚', 100),
    new PartDurability('右脚', 100),
    new PartDurability('腹', 350),
    new PartDurability('尻尾', 140, 140),
  ],
  quests: basariosQuests,
}

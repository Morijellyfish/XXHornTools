import type { Monster } from '~/types/monster/monster'

import { PartDurability } from '~/types/monster/partDurability'

import { graviosQuests } from '../quest/gravios'

export const gravios: Monster = {
  name: 'グラビモス',
  species: '飛竜種',
  hitZoneVariants: [
    {
      name: '通常時',

      hitZones: [
        {
          name: '頭',
          mellee: { slash: 21, impact: 28, shot: 20 },
          element: { 火: 0, 水: 15, 雷: 5, 氷: 5, 龍: 25 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '首下・尾下',
          mellee: { slash: 25, impact: 30, shot: 20 },
          element: { 火: 0, 水: 30, 雷: 5, 氷: 10, 龍: 20 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '腹',
          mellee: { slash: 26, impact: 30, shot: 30 },
          element: { 火: 0, 水: 35, 雷: 5, 氷: 15, 龍: 30 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '背中',
          mellee: { slash: 24, impact: 30, shot: 25 },
          element: { 火: 0, 水: 25, 雷: 5, 氷: 10, 龍: 15 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '翼',
          mellee: { slash: 24, impact: 25, shot: 23 },
          element: { 火: 0, 水: 20, 雷: 5, 氷: 5, 龍: 15 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '脚',
          mellee: { slash: 21, impact: 20, shot: 20 },
          element: { 火: 0, 水: 30, 雷: 5, 氷: 5, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
    {
      name: '部位破壊後',

      hitZones: [
        {
          name: '頭',
          mellee: { slash: 25, impact: 35, shot: 25 },
          element: { 火: 0, 水: 15, 雷: 5, 氷: 5, 龍: 30 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '腹',
          mellee: { slash: 70, impact: 70, shot: 60 },
          element: { 火: 15, 水: 45, 雷: 5, 氷: 15, 龍: 40 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '背中',
          mellee: { slash: 45, impact: 45, shot: 40 },
          element: { 火: 5, 水: 35, 雷: 5, 氷: 10, 龍: 15 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '翼',
          mellee: { slash: 26, impact: 26, shot: 26 },
          element: { 火: 0, 水: 20, 雷: 5, 氷: 0, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '脚',
          mellee: { slash: 24, impact: 30, shot: 25 },
          element: { 火: 0, 水: 30, 雷: 5, 氷: 5, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
  ],
  partDurabilities: [
    new PartDurability('頭', 150),
    new PartDurability('胴', 600),
    new PartDurability('背中', 200),
    new PartDurability('左翼', 140),
    new PartDurability('右翼', 140),
    new PartDurability('左脚', 150),
    new PartDurability('右脚', 150),
    new PartDurability('尻尾', 240, 240),
  ],
  quests: graviosQuests,
}

import type { Monster } from '~/types/monster/monster'

import { PartDurability } from '~/types/monster/partDurability'

import { khezuQuests } from '../quest/khezu'

export const khezu: Monster = {
  name: 'フルフル',
  species: '飛竜種',
  hitZoneVariants: [
    {
      name: '通常時',

      hitZones: [
        {
          name: '頭',
          mellee: { slash: 63, impact: 70, shot: 80 },
          element: { 火: 30, 水: 5, 雷: 0, 氷: 5, 龍: 5 },
          stun: 150,
          exhaust: 100,
        },
        {
          name: '首',
          mellee: { slash: 75, impact: 50, shot: 50 },
          element: { 火: 25, 水: 5, 雷: 0, 氷: 5, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '胴',
          mellee: { slash: 45, impact: 45, shot: 25 },
          element: { 火: 25, 水: 5, 雷: 0, 氷: 5, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '翼',
          mellee: { slash: 25, impact: 25, shot: 25 },
          element: { 火: 20, 水: 5, 雷: 0, 氷: 5, 龍: 5 },
          stun: 0,
          exhaust: 200,
        },
        {
          name: '脚',
          mellee: { slash: 25, impact: 20, shot: 35 },
          element: { 火: 15, 水: 5, 雷: 0, 氷: 5, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻尾',
          mellee: { slash: 20, impact: 20, shot: 30 },
          element: { 火: 20, 水: 5, 雷: 0, 氷: 5, 龍: 5 },
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
          mellee: { slash: 75, impact: 84, shot: 96 },
          element: { 火: 36, 水: 6, 雷: 0, 氷: 6, 龍: 6 },
          stun: 180,
          exhaust: 100,
        },
      ],
    },
  ],
  partDurabilities: [
    new PartDurability('頭', 200, undefined, 300, 300),
    new PartDurability('首', 90, undefined, 135),
    new PartDurability('胴', 240, undefined, 360),
    new PartDurability('左翼', 120, undefined, 180),
    new PartDurability('右翼', 120, undefined, 180),
    new PartDurability('左脚', 130, undefined, 195, 130),
    new PartDurability('右脚', 130, undefined, 195, 130),
    new PartDurability('尻尾', 90, undefined, 135),
  ],
  quests: khezuQuests,
}

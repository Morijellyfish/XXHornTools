import type { Monster } from '~/types/monster/monster'

import { PartDurability } from '~/types/monster/partDurability'

import { bariothQuests } from '../quest/barioth'

export const barioth: Monster = {
  name: 'ベリオロス',
  species: '飛竜種',
  hitZoneVariants: [
    {
      name: '通常時',

      hitZones: [
        {
          name: '頭',
          mellee: { slash: 55, impact: 60, shot: 60 },
          element: { 火: 30, 水: 10, 雷: 25, 氷: 0, 龍: 15 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '首',
          mellee: { slash: 30, impact: 25, shot: 30 },
          element: { 火: 5, 水: 5, 雷: 5, 氷: 0, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '腹',
          mellee: { slash: 45, impact: 25, shot: 40 },
          element: { 火: 10, 水: 0, 雷: 5, 氷: 0, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '翼',
          mellee: { slash: 25, impact: 30, shot: 25 },
          element: { 火: 30, 水: 5, 雷: 25, 氷: 0, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '爪',
          mellee: { slash: 30, impact: 30, shot: 30 },
          element: { 火: 15, 水: 0, 雷: 10, 氷: 0, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '後脚',
          mellee: { slash: 35, impact: 35, shot: 35 },
          element: { 火: 10, 水: 5, 雷: 5, 氷: 0, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻尾',
          mellee: { slash: 40, impact: 40, shot: 30 },
          element: { 火: 15, 水: 0, 雷: 10, 氷: 0, 龍: 5 },
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
          mellee: { slash: 27, impact: 33, shot: 27 },
          element: { 火: 33, 水: 5, 雷: 27, 氷: 0, 龍: 11 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
  ],
  partDurabilities: [
    new PartDurability('頭', 180, undefined, 270, 234),
    new PartDurability('首と胴体', 200, undefined, 300),
    new PartDurability('左翼', 200, undefined, 300, 240),
    new PartDurability('右翼', 200, undefined, 300, 240),
    new PartDurability('前脚', 210, undefined, 315),
    new PartDurability('左後脚', 180, undefined, 270),
    new PartDurability('右後脚', 180, undefined, 270),
    new PartDurability('尻尾', 200, 380, 300, 240),
  ],
  quests: bariothQuests,
}

import type { Monster } from '~/types/monster/monster'

import { PartDurability } from '~/types/monster/partDurability'

import { atlalThroneQuests } from '../quest/atlalThrone'

export const atlalThrone: Monster = {
  name: 'アトラル・ネセト',
  species: '甲虫種',
  hitZoneVariants: [
    {
      name: '通常時',

      hitZones: [
        {
          name: '駆動部',
          mellee: { slash: 41, impact: 41, shot: 25 },
          element: { 火: 0, 水: 20, 雷: 0, 氷: 5, 龍: 0 },
          stun: 0,
          exhaust: 0,
        },
        {
          name: '爪',
          mellee: { slash: 26, impact: 26, shot: 20 },
          element: { 火: 0, 水: 15, 雷: 0, 氷: 5, 龍: 0 },
          stun: 0,
          exhaust: 0,
        },
        {
          name: '爪弱点',
          mellee: { slash: 55, impact: 55, shot: 55 },
          element: { 火: 10, 水: 15, 雷: 10, 氷: 5, 龍: 0 },
          stun: 0,
          exhaust: 0,
        },
        {
          name: '糸壁',
          mellee: { slash: 75, impact: 75, shot: 100 },
          element: { 火: 10, 水: 20, 雷: 10, 氷: 10, 龍: 0 },
          stun: 0,
          exhaust: 0,
        },
        {
          name: '繭玉',
          mellee: { slash: 120, impact: 120, shot: 150 },
          element: { 火: 15, 水: 25, 雷: 10, 氷: 10, 龍: 0 },
          stun: 0,
          exhaust: 0,
        },
        {
          name: '巨大繭',
          mellee: { slash: 75, impact: 75, shot: 35 },
          element: { 火: 15, 水: 0, 雷: 20, 氷: 0, 龍: 0 },
          stun: 0,
          exhaust: 0,
        },
        {
          name: '脆い瓦礫',
          mellee: { slash: 26, impact: 26, shot: 10 },
          element: { 火: 0, 水: 5, 雷: 0, 氷: 0, 龍: 0 },
          stun: 0,
          exhaust: 0,
        },
        {
          name: '固い瓦礫',
          mellee: { slash: 5, impact: 5, shot: 5 },
          element: { 火: 0, 水: 0, 雷: 0, 氷: 0, 龍: 0 },
          stun: 0,
          exhaust: 0,
        },
      ],
    },
    {
      name: 'ダウン時',

      hitZones: [
        {
          name: '巨大繭',
          mellee: { slash: 250, impact: 250, shot: 200 },
          element: { 火: 15, 水: 0, 雷: 30, 氷: 0, 龍: 0 },
          stun: 0,
          exhaust: 0,
        },
      ],
    },
  ],
  partDurabilities: [
    new PartDurability('頭', 200),
    new PartDurability('胴', 300),
    new PartDurability('駆動部', 200),
    new PartDurability('左前脚', 250),
    new PartDurability('右前脚', 250),
    new PartDurability('尻尾', 300),
    new PartDurability('巨大繭', 500),
    new PartDurability('繭玉', 1000),
    new PartDurability('糸壁', 200),
  ],
  quests: atlalThroneQuests,
}

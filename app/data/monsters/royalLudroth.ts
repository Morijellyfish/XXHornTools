import type { Monster } from '~/types/monster/monster'

import { PartDurability } from '~/types/monster/partDurability'

import { royalLudrothQuests } from '../quest/royalLudroth'

export const royalLudroth: Monster = {
  name: 'ロアルドロス',
  species: '海竜種',
  roar: { has: false },
  windPressure: { has: false },
  tremor: false,
  hitZoneVariants: [
    {
      name: '通常時',

      hitZones: [
        {
          name: '頭',
          mellee: { slash: 40, impact: 45, shot: 65 },
          element: { 火: 30, 水: 0, 雷: 5, 氷: 5, 龍: 5 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: 'タテガミ',
          mellee: { slash: 65, impact: 50, shot: 35 },
          element: { 火: 40, 水: 0, 雷: 15, 氷: 10, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '腹',
          mellee: { slash: 50, impact: 40, shot: 35 },
          element: { 火: 35, 水: 0, 雷: 10, 氷: 10, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '背中',
          mellee: { slash: 30, impact: 45, shot: 35 },
          element: { 火: 30, 水: 0, 雷: 10, 氷: 5, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '前脚',
          mellee: { slash: 24, impact: 40, shot: 25 },
          element: { 火: 20, 水: 0, 雷: 10, 氷: 10, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '後脚',
          mellee: { slash: 30, impact: 24, shot: 30 },
          element: { 火: 20, 水: 0, 雷: 10, 氷: 5, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻尾',
          mellee: { slash: 40, impact: 30, shot: 40 },
          element: { 火: 25, 水: 0, 雷: 5, 氷: 5, 龍: 0 },
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
          mellee: { slash: 96, impact: 72, shot: 96 },
          element: { 火: 36, 水: 0, 雷: 18, 氷: 30, 龍: 0 },
          stun: 120,
          exhaust: 100,
        },
      ],
    },
  ],
  partDurabilities: [
    new PartDurability('頭', 130, undefined, 169, 156),
    new PartDurability('タテガミ', 200, undefined, 260),
    new PartDurability('胴', 150, undefined, 195),
    new PartDurability('左脚', 140, undefined, 182, 168),
    new PartDurability('右脚', 140, undefined, 182, 168),
    new PartDurability('尻尾', 150, 300, 195, 180),
  ],
  quests: royalLudrothQuests,
}

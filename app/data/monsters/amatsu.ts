import type { Monster } from '~/types/monster/monster'

import { PartDurability } from '~/types/monster/partDurability'

import { amatsuQuests } from '../quest/amatsu'

export const amatsu: Monster = {
  name: 'アマツマガツチ',
  species: '古龍種',
  hitZoneVariants: [
    {
      name: '通常時',

      hitZones: [
        {
          name: '頭',
          mellee: { slash: 60, impact: 70, shot: 65 },
          element: { 火: 20, 水: 0, 雷: 15, 氷: 10, 龍: 25 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '首',
          mellee: { slash: 35, impact: 30, shot: 15 },
          element: { 火: 15, 水: 0, 雷: 0, 氷: 5, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '背',
          mellee: { slash: 30, impact: 25, shot: 15 },
          element: { 火: 15, 水: 0, 雷: 0, 氷: 5, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '腹',
          mellee: { slash: 44, impact: 44, shot: 30 },
          element: { 火: 20, 水: 0, 雷: 10, 氷: 5, 龍: 20 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '前脚',
          mellee: { slash: 40, impact: 40, shot: 35 },
          element: { 火: 20, 水: 0, 雷: 10, 氷: 5, 龍: 20 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '後脚',
          mellee: { slash: 25, impact: 30, shot: 10 },
          element: { 火: 15, 水: 0, 雷: 0, 氷: 5, 龍: 20 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻尾',
          mellee: { slash: 35, impact: 30, shot: 15 },
          element: { 火: 20, 水: 0, 雷: 0, 氷: 5, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
    {
      name: '体力60%以下',

      hitZones: [
        {
          name: '頭',
          mellee: { slash: 70, impact: 80, shot: 75 },
          element: { 火: 20, 水: 0, 雷: 15, 氷: 10, 龍: 25 },
          stun: 100,
          exhaust: 100,
        },
      ],
    },
  ],
  partDurabilities: [
    new PartDurability('頭', 380),
    new PartDurability('首・背', 230),
    new PartDurability('腹', 200),
    new PartDurability('左前脚', 280),
    new PartDurability('右前脚', 280),
    new PartDurability('左後脚', 200),
    new PartDurability('右後脚', 200),
    new PartDurability('尻尾', 400, 400),
  ],
  quests: amatsuQuests,
}

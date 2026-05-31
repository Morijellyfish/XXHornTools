import type { Monster } from '~/types/monster/monster'

import { PartDurability } from '~/types/monster/partDurability'

import { laoShanLungQuests } from '../quest/laoShanLung'

export const laoShanLung: Monster = {
  name: 'ラオシャンロン',
  species: '古龍種',
  hitZoneVariants: [
    {
      name: '通常時',

      hitZones: [
        {
          name: '頭',
          mellee: { slash: 28, impact: 21, shot: 30 },
          element: { 火: 20, 水: 5, 雷: 15, 氷: 5, 龍: 20 },
          stun: 0,
          exhaust: 0,
        },
        {
          name: '口内',
          mellee: { slash: 80, impact: 80, shot: 80 },
          element: { 火: 30, 水: 10, 雷: 20, 氷: 10, 龍: 40 },
          stun: 0,
          exhaust: 0,
        },
        {
          name: '首',
          mellee: { slash: 20, impact: 20, shot: 20 },
          element: { 火: 20, 水: 5, 雷: 15, 氷: 5, 龍: 20 },
          stun: 0,
          exhaust: 0,
        },
        {
          name: '腹',
          mellee: { slash: 38, impact: 35, shot: 35 },
          element: { 火: 20, 水: 5, 雷: 15, 氷: 5, 龍: 30 },
          stun: 0,
          exhaust: 0,
        },
        {
          name: '背',
          mellee: { slash: 50, impact: 50, shot: 45 },
          element: { 火: 30, 水: 5, 雷: 15, 氷: 5, 龍: 30 },
          stun: 0,
          exhaust: 0,
        },
        {
          name: '脚',
          mellee: { slash: 20, impact: 20, shot: 20 },
          element: { 火: 20, 水: 5, 雷: 15, 氷: 5, 龍: 20 },
          stun: 0,
          exhaust: 0,
        },
        {
          name: '脚先',
          mellee: { slash: 32, impact: 37, shot: 25 },
          element: { 火: 20, 水: 5, 雷: 15, 氷: 5, 龍: 20 },
          stun: 0,
          exhaust: 0,
        },
        {
          name: '背ビレ・尾',
          mellee: { slash: 10, impact: 20, shot: 20 },
          element: { 火: 25, 水: 5, 雷: 15, 氷: 5, 龍: 20 },
          stun: 0,
          exhaust: 0,
        },
      ],
    },
    {
      name: '背破壊後',

      hitZones: [
        {
          name: '背',
          mellee: { slash: 50, impact: 50, shot: 40 },
          element: { 火: 25, 水: 5, 雷: 15, 氷: 5, 龍: 25 },
          stun: 0,
          exhaust: 0,
        },
      ],
    },
  ],
  partDurabilities: [
    new PartDurability('頭', 800),
    new PartDurability('首・腹', 1600),
    new PartDurability('背', 1400),
    new PartDurability('左肩', 900),
    new PartDurability('右肩', 900),
    new PartDurability('前脚', 800),
    new PartDurability('後脚', 900),
    new PartDurability('尻尾', 1300),
  ],
  quests: laoShanLungQuests,
}

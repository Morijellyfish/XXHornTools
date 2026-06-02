import type { Monster } from '~/types/monster/monster'

import { PartDurability } from '~/types/monster/partDurability'

import { crystalbeardUragaanQuests } from '../quest/crystalbeardUragaan'

export const crystalbeardUragaan: Monster = {
  name: '宝纏ウラガンキン',
  species: '獣竜種',
  roar: { has: true, strength: '小' },
  windPressure: { has: false },
  tremor: true,
  hitZoneVariants: [
    {
      name: '通常時',

      hitZones: [
        {
          name: '頭',
          mellee: { slash: 19, impact: 20, shot: 19 },
          element: { 火: 0, 水: 20, 雷: 10, 氷: 0, 龍: 15 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '首',
          mellee: { slash: 24, impact: 24, shot: 30 },
          element: { 火: 0, 水: 15, 雷: 0, 氷: 10, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '背',
          mellee: { slash: 21, impact: 35, shot: 19 },
          element: { 火: 0, 水: 20, 雷: 10, 氷: 0, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '腹',
          mellee: { slash: 30, impact: 24, shot: 30 },
          element: { 火: 0, 水: 20, 雷: 5, 氷: 15, 龍: 15 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '前脚',
          mellee: { slash: 42, impact: 45, shot: 38 },
          element: { 火: 0, 水: 15, 雷: 0, 氷: 5, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '後脚',
          mellee: { slash: 24, impact: 30, shot: 24 },
          element: { 火: 0, 水: 15, 雷: 0, 氷: 5, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻尾',
          mellee: { slash: 30, impact: 24, shot: 30 },
          element: { 火: 0, 水: 20, 雷: 0, 氷: 0, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尾先',
          mellee: { slash: 20, impact: 20, shot: 19 },
          element: { 火: 0, 水: 20, 雷: 10, 氷: 0, 龍: 15 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
    {
      name: '顎破壊',

      hitZones: [
        {
          name: '頭',
          mellee: { slash: 55, impact: 50, shot: 40 },
          element: { 火: 0, 水: 10, 雷: 15, 氷: 30, 龍: 20 },
          stun: 100,
          exhaust: 100,
        },
      ],
    },
  ],
  partDurabilities: [
    new PartDurability('頭', 400),
    new PartDurability('首', 300),
    new PartDurability('胴', 300),
    new PartDurability('前脚', 500),
    new PartDurability('左後脚', 250),
    new PartDurability('右後脚', 250),
    new PartDurability('尻尾', 350),
  ],
  quests: crystalbeardUragaanQuests,
}

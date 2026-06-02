import type { Monster } from '~/types/monster/monster'

import { PartDurability } from '~/types/monster/partDurability'

import { tigrexQuests } from '../quest/tigrex'

export const tigrex: Monster = {
  name: 'ティガレックス',
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
          mellee: { slash: 65, impact: 55, shot: 55 },
          element: { 火: 0, 水: 10, 雷: 20, 氷: 5, 龍: 15 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '首',
          mellee: { slash: 44, impact: 44, shot: 25 },
          element: { 火: 0, 水: 10, 雷: 20, 氷: 5, 龍: 15 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '腹',
          mellee: { slash: 25, impact: 30, shot: 20 },
          element: { 火: 15, 水: 15, 雷: 15, 氷: 10, 龍: 15 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '背',
          mellee: { slash: 44, impact: 40, shot: 30 },
          element: { 火: 0, 水: 15, 雷: 25, 氷: 10, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '前脚',
          mellee: { slash: 25, impact: 25, shot: 25 },
          element: { 火: 0, 水: 10, 雷: 20, 氷: 10, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '後脚',
          mellee: { slash: 40, impact: 40, shot: 40 },
          element: { 火: 0, 水: 5, 雷: 10, 氷: 0, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻尾',
          mellee: { slash: 35, impact: 30, shot: 20 },
          element: { 火: 0, 水: 5, 雷: 15, 氷: 0, 龍: 15 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
    {
      name: '怒り時',

      hitZones: [
        {
          name: '頭',
          mellee: { slash: 70, impact: 65, shot: 60 },
          element: { 火: 0, 水: 10, 雷: 20, 氷: 5, 龍: 15 },
          stun: 130,
          exhaust: 100,
        },
        {
          name: '首',
          mellee: { slash: 44, impact: 44, shot: 30 },
          element: { 火: 0, 水: 10, 雷: 20, 氷: 5, 龍: 15 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '腹',
          mellee: { slash: 30, impact: 35, shot: 20 },
          element: { 火: 15, 水: 15, 雷: 15, 氷: 10, 龍: 15 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '背',
          mellee: { slash: 40, impact: 35, shot: 35 },
          element: { 火: 0, 水: 15, 雷: 25, 氷: 10, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '前脚',
          mellee: { slash: 30, impact: 30, shot: 25 },
          element: { 火: 0, 水: 10, 雷: 15, 氷: 10, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
  ],
  partDurabilities: [
    new PartDurability('頭', 220),
    new PartDurability('腹', 180),
    new PartDurability('背中', 180),
    new PartDurability('左前脚', 200),
    new PartDurability('右前脚', 220),
    new PartDurability('左後脚', 200),
    new PartDurability('右後脚', 220),
    new PartDurability('尻尾', 240, 240),
  ],
  quests: tigrexQuests,
}

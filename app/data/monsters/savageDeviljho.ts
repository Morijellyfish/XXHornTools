import type { Monster } from '~/types/monster/monster'

import { PartDurability } from '~/types/monster/partDurability'

import { savageDeviljhoQuests } from '../quest/savageDeviljho'

export const savageDeviljho: Monster = {
  name: '怒り喰らうイビルジョー',
  species: '獣竜種',
  roar: { has: true, strength: '大' },
  windPressure: { has: false },
  tremor: true,
  hitZoneVariants: [
    {
      name: '通常時',

      hitZones: [
        {
          name: '頭',
          mellee: { slash: 28, impact: 31, shot: 25 },
          element: { 火: 20, 水: 20, 雷: 30, 氷: 20, 龍: 20 },
          stun: 120,
          exhaust: 100,
        },
        {
          name: '胸',
          mellee: { slash: 69, impact: 69, shot: 55 },
          element: { 火: 15, 水: 15, 雷: 25, 氷: 15, 龍: 15 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '胴体',
          mellee: { slash: 21, impact: 21, shot: 21 },
          element: { 火: 20, 水: 20, 雷: 30, 氷: 20, 龍: 20 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '前脚',
          mellee: { slash: 25, impact: 25, shot: 30 },
          element: { 火: 15, 水: 15, 雷: 25, 氷: 15, 龍: 15 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '後脚',
          mellee: { slash: 28, impact: 28, shot: 20 },
          element: { 火: 20, 水: 20, 雷: 30, 氷: 20, 龍: 20 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻尾',
          mellee: { slash: 26, impact: 22, shot: 25 },
          element: { 火: 20, 水: 20, 雷: 35, 氷: 20, 龍: 20 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
    {
      name: '激昂時',

      hitZones: [
        {
          name: '頭',
          mellee: { slash: 69, impact: 76, shot: 55 },
          element: { 火: 0, 水: 0, 雷: 0, 氷: 0, 龍: 0 },
          stun: 120,
          exhaust: 100,
        },
        {
          name: '胸',
          mellee: { slash: 48, impact: 45, shot: 45 },
          element: { 火: 15, 水: 15, 雷: 25, 氷: 15, 龍: 15 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '胴体',
          mellee: { slash: 20, impact: 20, shot: 15 },
          element: { 火: 20, 水: 20, 雷: 30, 氷: 20, 龍: 20 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '後脚',
          mellee: { slash: 27, impact: 27, shot: 20 },
          element: { 火: 20, 水: 20, 雷: 30, 氷: 20, 龍: 20 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻尾',
          mellee: { slash: 24, impact: 21, shot: 25 },
          element: { 火: 20, 水: 20, 雷: 35, 氷: 20, 龍: 20 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
  ],
  partDurabilities: [
    new PartDurability('頭', 450),
    new PartDurability('胸', 360),
    new PartDurability('胴', 200),
    new PartDurability('前脚', 150),
    new PartDurability('左後脚', 300),
    new PartDurability('右後脚', 300),
    new PartDurability('尻尾', 180, 360),
  ],
  quests: savageDeviljhoQuests,
}

import type { Monster } from '~/types/monster/monster'

import { PartDurability } from '~/types/monster/partDurability'

import { shagaruMagalaQuests } from '../quest/shagaruMagala'

export const shagaruMagala: Monster = {
  name: 'シャガルマガラ',
  species: '古龍種',
  hitZoneVariants: [
    {
      name: '通常時',

      hitZones: [
        {
          name: '頭',
          mellee: { slash: 65, impact: 60, shot: 60 },
          element: { 火: 25, 水: 0, 雷: 15, 氷: 5, 龍: 30 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '首',
          mellee: { slash: 50, impact: 40, shot: 45 },
          element: { 火: 15, 水: 0, 雷: 10, 氷: 5, 龍: 20 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '胴',
          mellee: { slash: 25, impact: 25, shot: 25 },
          element: { 火: 10, 水: 0, 雷: 5, 氷: 5, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '翼',
          mellee: { slash: 26, impact: 26, shot: 20 },
          element: { 火: 15, 水: 0, 雷: 10, 氷: 5, 龍: 20 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '翼脚',
          mellee: { slash: 20, impact: 20, shot: 25 },
          element: { 火: 30, 水: 0, 雷: 15, 氷: 5, 龍: 30 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '前脚',
          mellee: { slash: 40, impact: 40, shot: 40 },
          element: { 火: 10, 水: 0, 雷: 5, 氷: 5, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '後脚',
          mellee: { slash: 36, impact: 36, shot: 45 },
          element: { 火: 10, 水: 0, 雷: 5, 氷: 5, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻尾',
          mellee: { slash: 36, impact: 36, shot: 35 },
          element: { 火: 10, 水: 0, 雷: 10, 氷: 5, 龍: 15 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
    {
      name: '翼脚破壊後',

      hitZones: [
        {
          name: '翼脚',
          mellee: { slash: 36, impact: 36, shot: 30 },
          element: { 火: 20, 水: 0, 雷: 15, 氷: 5, 龍: 20 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
  ],
  partDurabilities: [
    new PartDurability('頭', 300),
    new PartDurability('胴', 600),
    new PartDurability('翼', 180),
    new PartDurability('翼脚', 140),
    new PartDurability('前脚', 200),
    new PartDurability('後脚', 160),
    new PartDurability('尻尾', 240, 300),
  ],
  quests: shagaruMagalaQuests,
}

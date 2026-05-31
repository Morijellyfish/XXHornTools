import type { Monster } from '~/types/monster/monster'

import { PartDurability } from '~/types/monster/partDurability'

import { kechaWachaQuests } from '../quest/kechaWacha'

export const kechaWacha: Monster = {
  name: 'ケチャワチャ',
  species: '牙獣種',
  hitZoneVariants: [
    {
      name: '通常時',

      hitZones: [
        {
          name: '頭',
          mellee: { slash: 70, impact: 65, shot: 60 },
          element: { 火: 30, 水: 0, 雷: 20, 氷: 10, 龍: 0 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '胴',
          mellee: { slash: 43, impact: 43, shot: 30 },
          element: { 火: 15, 水: 0, 雷: 5, 氷: 5, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '爪',
          mellee: { slash: 24, impact: 30, shot: 20 },
          element: { 火: 20, 水: 0, 雷: 15, 氷: 10, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '前脚',
          mellee: { slash: 45, impact: 45, shot: 30 },
          element: { 火: 10, 水: 0, 雷: 5, 氷: 5, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '後脚',
          mellee: { slash: 45, impact: 45, shot: 30 },
          element: { 火: 10, 水: 0, 雷: 5, 氷: 5, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻尾',
          mellee: { slash: 50, impact: 45, shot: 45 },
          element: { 火: 15, 水: 0, 雷: 5, 氷: 5, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
    {
      name: '爪破壊後',

      hitZones: [
        {
          name: '爪',
          mellee: { slash: 30, impact: 30, shot: 25 },
          element: { 火: 15, 水: 0, 雷: 10, 氷: 5, 龍: 0 },
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
          mellee: { slash: 84, impact: 78, shot: 72 },
          element: { 火: 36, 水: 0, 雷: 24, 氷: 12, 龍: 0 },
          stun: 120,
          exhaust: 100,
        },
        {
          name: '尻尾',
          mellee: { slash: 60, impact: 54, shot: 54 },
          element: { 火: 18, 水: 0, 雷: 6, 氷: 6, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
  ],
  partDurabilities: [
    new PartDurability('頭', 160, undefined, 240, 240),
    new PartDurability('胴', 140, undefined, 210),
    new PartDurability('前脚', 120, undefined, 180),
    new PartDurability('後脚', 110, undefined, 165),
    new PartDurability('尻尾', 100, 150, 150, 150),
  ],
  quests: kechaWachaQuests,
}

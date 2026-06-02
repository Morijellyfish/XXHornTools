import type { Monster } from '~/types/monster/monster'
import { PartDurability } from '~/types/monster/partDurability'
import { kirinQuests } from '../quest/kirin'

export const kirin: Monster = {
  name: 'キリン',
  species: '古龍種',
  roar: { has: false },
  windPressure: { has: false },
  tremor: false,
  hitZoneVariants: [
    {
      name: '通常時',
      hitZones: [
        {
          name: '頭',
          mellee: { slash: 40, impact: 40, shot: 35 },
          element: { 火: 5, 水: 5, 雷: 0, 氷: 5, 龍: 5 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '胴体',
          mellee: { slash: 24, impact: 24, shot: 20 },
          element: { 火: 15, 水: 15, 雷: 0, 氷: 10, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '下半身',
          mellee: { slash: 27, impact: 27, shot: 25 },
          element: { 火: 15, 水: 15, 雷: 0, 氷: 10, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '前脚',
          mellee: { slash: 25, impact: 25, shot: 30 },
          element: { 火: 5, 水: 5, 雷: 0, 氷: 5, 龍: 5 },
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
          mellee: { slash: 50, impact: 50, shot: 45 },
          element: { 火: 5, 水: 5, 雷: 0, 氷: 5, 龍: 5 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '胴体',
          mellee: { slash: 24, impact: 24, shot: 20 },
          element: { 火: 10, 水: 10, 雷: 0, 氷: 10, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '下半身',
          mellee: { slash: 15, impact: 15, shot: 15 },
          element: { 火: 10, 水: 10, 雷: 0, 氷: 10, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '前脚',
          mellee: { slash: 28, impact: 28, shot: 32 },
          element: { 火: 5, 水: 5, 雷: 0, 氷: 5, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
  ],
  partDurabilities: [
    new PartDurability('頭', 250),
    new PartDurability('胴体', 220),
    new PartDurability('下半身', 240),
  ],
  quests: kirinQuests,
}

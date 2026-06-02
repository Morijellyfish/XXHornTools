import type { Monster } from '~/types/monster/monster'
import { PartDurability } from '~/types/monster/partDurability'
import { seltasQuests } from '../quest/seltas'

export const seltas: Monster = {
  name: 'アルセルタス',
  species: '甲虫種',
  roar: { has: false },
  windPressure: { has: false },
  tremor: false,
  hitZoneVariants: [
    {
      name: '通常時',
      hitZones: [
        {
          name: '角',
          mellee: { slash: 35, impact: 35, shot: 35 },
          element: { 火: 15, 水: 5, 雷: 20, 氷: 5, 龍: 0 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '頭',
          mellee: { slash: 50, impact: 55, shot: 70 },
          element: { 火: 20, 水: 10, 雷: 25, 氷: 10, 龍: 0 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '腹',
          mellee: { slash: 65, impact: 55, shot: 80 },
          element: { 火: 25, 水: 15, 雷: 35, 氷: 15, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '爪',
          mellee: { slash: 42, impact: 42, shot: 45 },
          element: { 火: 10, 水: 5, 雷: 15, 氷: 5, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '脚',
          mellee: { slash: 45, impact: 45, shot: 50 },
          element: { 火: 10, 水: 5, 雷: 15, 氷: 5, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
  ],
  partDurabilities: [
    new PartDurability('頭', 180, 1),
    new PartDurability('腹', 100, 1),
    new PartDurability('脚', 60, 1),
  ],
  quests: seltasQuests,
}

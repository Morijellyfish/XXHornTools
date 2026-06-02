import type { Monster } from '~/types/monster/monster'
import { PartDurability } from '~/types/monster/partDurability'
import { giadromeQuests } from '../quest/giadrome'

export const giadrome: Monster = {
  name: 'ドスギアノス',
  species: '魚竜種',
  roar: { has: false },
  windPressure: { has: false },
  tremor: false,
  hitZoneVariants: [
    {
      name: '通常時',
      hitZones: [
        {
          name: '頭',
          mellee: { slash: 80, impact: 80, shot: 75 },
          element: { 火: 40, 水: 20, 雷: 30, 氷: 5, 龍: 10 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '体',
          mellee: { slash: 50, impact: 50, shot: 48 },
          element: { 火: 30, 水: 15, 雷: 25, 氷: 5, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
  ],
  partDurabilities: [new PartDurability('頭', 120), new PartDurability('胴', 160)],
  quests: giadromeQuests,
}

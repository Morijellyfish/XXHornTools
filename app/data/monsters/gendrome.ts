import type { Monster } from '~/types/monster/monster'
import { PartDurability } from '~/types/monster/partDurability'
import { gendromeQuests } from '../quest/gendrome'

export const gendrome: Monster = {
  name: 'ドスゲネポス',
  species: '鳥竜種',
  roar: { has: false },
  windPressure: { has: false },
  tremor: false,
  hitZoneVariants: [
    {
      name: '通常時',
      hitZones: [
        {
          name: '頭',
          mellee: { slash: 75, impact: 80, shot: 70 },
          element: { 火: 20, 水: 20, 雷: 30, 氷: 40, 龍: 10 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '体',
          mellee: { slash: 47, impact: 47, shot: 45 },
          element: { 火: 15, 水: 15, 雷: 25, 氷: 30, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
  ],
  partDurabilities: [new PartDurability('頭', 150), new PartDurability('胴', 200)],
  quests: gendromeQuests,
}

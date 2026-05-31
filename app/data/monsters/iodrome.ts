import type { Monster } from '~/types/monster/monster'
import { PartDurability } from '~/types/monster/partDurability'
import { iodromeQuests } from '../quest/iodrome'

export const iodrome: Monster = {
  name: 'ドスイーオス',
  species: '鳥竜種',
  hitZoneVariants: [
    {
      name: '通常時',
      hitZones: [
        {
          name: '頭',
          mellee: { slash: 38, impact: 38, shot: 45 },
          element: { 火: 20, 水: 30, 雷: 30, 氷: 10, 龍: 10 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '体',
          mellee: { slash: 56, impact: 56, shot: 60 },
          element: { 火: 15, 水: 25, 雷: 25, 氷: 10, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
  ],
  partDurabilities: [new PartDurability('頭', 120), new PartDurability('胴', 150)],
  quests: iodromeQuests,
}

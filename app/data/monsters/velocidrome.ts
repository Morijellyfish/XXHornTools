import type { Monster } from '~/types/monster/monster'
import { PartDurability } from '~/types/monster/partDurability'
import { velocidromeQuests } from '../quest/velocidrome'

export const velocidrome: Monster = {
  name: 'ドスランポス',
  species: '鳥竜種',
  hitZoneVariants: [
    {
      name: '通常時',
      hitZones: [
        {
          name: '頭',
          mellee: { slash: 85, impact: 85, shot: 80 },
          element: { 火: 30, 水: 30, 雷: 30, 氷: 40, 龍: 10 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '体',
          mellee: { slash: 55, impact: 55, shot: 50 },
          element: { 火: 25, 水: 25, 雷: 25, 氷: 30, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
  ],
  partDurabilities: [new PartDurability('頭', 90), new PartDurability('胴', 120)],
  quests: velocidromeQuests,
}

import type { Monster } from '~/types/monster/monster'
import { PartDurability } from '~/types/monster/partDurability'
import { bulldromeQuests } from '../quest/bulldrome'

export const bulldrome: Monster = {
  name: 'ドスファンゴ',
  species: '牙獣種',
  hitZoneVariants: [
    {
      name: '通常時',
      hitZones: [
        {
          name: '頭',
          mellee: { slash: 80, impact: 70, shot: 70 },
          element: { 火: 20, 水: 10, 雷: 30, 氷: 5, 龍: 0 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '胴',
          mellee: { slash: 70, impact: 60, shot: 60 },
          element: { 火: 10, 水: 5, 雷: 20, 氷: 0, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
  ],
  partDurabilities: [new PartDurability('胴', 300)],
  quests: bulldromeQuests,
}

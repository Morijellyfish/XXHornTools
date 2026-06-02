import type { Monster } from '~/types/monster/monster'
import { PartDurability } from '~/types/monster/partDurability'
import { greatMaccaoQuests } from '../quest/greatMaccao'

export const greatMaccao: Monster = {
  name: 'ドスマッカォ',
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
          mellee: { slash: 63, impact: 63, shot: 60 },
          element: { 火: 30, 水: 20, 雷: 10, 氷: 20, 龍: 5 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '胴体',
          mellee: { slash: 42, impact: 42, shot: 35 },
          element: { 火: 20, 水: 10, 雷: 10, 氷: 10, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻尾',
          mellee: { slash: 63, impact: 63, shot: 60 },
          element: { 火: 30, 水: 20, 雷: 10, 氷: 20, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
  ],
  partDurabilities: [
    new PartDurability('頭', 120),
    new PartDurability('胴', 180),
    new PartDurability('尻尾', 130),
  ],
  quests: greatMaccaoQuests,
}

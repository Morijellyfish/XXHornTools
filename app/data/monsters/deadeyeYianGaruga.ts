import type { Monster } from '~/types/monster/monster'
import { PartDurability } from '~/types/monster/partDurability'
import { deadeyeYianGarugaQuests } from '../quest/deadeyeYianGaruga'

export const deadeyeYianGaruga: Monster = {
  name: '隻眼イャンガルルガ',
  species: '鳥竜種',
  roar: { has: true, strength: '小' },
  windPressure: { has: true, strength: '大' },
  tremor: false,
  hitZoneVariants: [
    {
      name: '通常時',
      hitZones: [
        {
          name: '頭',
          mellee: { slash: 65, impact: 60, shot: 50 },
          element: { 火: 0, 水: 20, 雷: 0, 氷: 10, 龍: 5 },
          stun: 150,
          exhaust: 100,
        },
        {
          name: '首下',
          mellee: { slash: 40, impact: 40, shot: 25 },
          element: { 火: 0, 水: 15, 雷: 0, 氷: 10, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '腹',
          mellee: { slash: 24, impact: 20, shot: 35 },
          element: { 火: 15, 水: 20, 雷: 10, 氷: 15, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '背',
          mellee: { slash: 10, impact: 10, shot: 10 },
          element: { 火: 5, 水: 50, 雷: 10, 氷: 20, 龍: 30 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '翼',
          mellee: { slash: 24, impact: 45, shot: 20 },
          element: { 火: 0, 水: 15, 雷: 0, 氷: 10, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '脚',
          mellee: { slash: 24, impact: 24, shot: 10 },
          element: { 火: 0, 水: 10, 雷: 5, 氷: 10, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尾下',
          mellee: { slash: 50, impact: 30, shot: 15 },
          element: { 火: 5, 水: 15, 雷: 0, 氷: 10, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
  ],
  partDurabilities: [
    new PartDurability('頭', 160),
    new PartDurability('首', 150),
    new PartDurability('胴', 130),
    new PartDurability('左翼', 150),
    new PartDurability('右翼', 150),
    new PartDurability('左脚', 200),
    new PartDurability('右脚', 200),
    new PartDurability('尻尾', 100, 250),
  ],
  quests: deadeyeYianGarugaQuests,
}

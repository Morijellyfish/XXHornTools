import type { Monster } from '~/types/monster/monster'
import { PartDurability } from '~/types/monster/partDurability'
import { lavasiothQuests } from '../quest/lavasioth'

export const lavasioth: Monster = {
  name: 'ヴォルガノス',
  species: '魚竜種',
  hitZoneVariants: [
    {
      name: '通常時',
      hitZones: [
        {
          name: '頭',
          mellee: { slash: 63, impact: 63, shot: 45 },
          element: { 火: 0, 水: 10, 雷: 10, 氷: 10, 龍: 5 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '首',
          mellee: { slash: 43, impact: 43, shot: 35 },
          element: { 火: 0, 水: 10, 雷: 5, 氷: 5, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '腹',
          mellee: { slash: 25, impact: 25, shot: 15 },
          element: { 火: 0, 水: 10, 雷: 5, 氷: 5, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '背中',
          mellee: { slash: 35, impact: 35, shot: 20 },
          element: { 火: 0, 水: 30, 雷: 20, 氷: 20, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: 'ヒレ',
          mellee: { slash: 55, impact: 55, shot: 40 },
          element: { 火: 0, 水: 10, 雷: 5, 氷: 5, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '脚',
          mellee: { slash: 25, impact: 25, shot: 10 },
          element: { 火: 0, 水: 10, 雷: 5, 氷: 5, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻尾',
          mellee: { slash: 35, impact: 35, shot: 25 },
          element: { 火: 0, 水: 30, 雷: 20, 氷: 20, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
  ],
  partDurabilities: [
    new PartDurability('頭', 350, undefined, 525, 525),
    new PartDurability('背ビレ', 200, undefined, 300),
    new PartDurability('左翼', 240, undefined, 360),
    new PartDurability('右翼', 240, undefined, 360),
    new PartDurability('胴', 350, undefined, 525),
    new PartDurability('左脚', 200, undefined, 300, 300),
    new PartDurability('右脚', 200, undefined, 300, 300),
    new PartDurability('尻尾', 300, undefined, 450),
  ],
  quests: lavasiothQuests,
}

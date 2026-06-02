import type { Monster } from '~/types/monster/monster'
import { PartDurability } from '~/types/monster/partDurability'
import { hazewingMalfestioQuests } from '../quest/hazewingMalfestio'

export const hazewingMalfestio: Monster = {
  name: '朧隠ホロロホルル',
  species: '鳥竜種',
  roar: { has: true, strength: '小' },
  windPressure: { has: true, strength: '小' },
  tremor: false,
  hitZoneVariants: [
    {
      name: '通常時',
      hitZones: [
        {
          name: '頭',
          mellee: { slash: 50, impact: 50, shot: 50 },
          element: { 火: 10, 水: 15, 雷: 5, 氷: 5, 龍: 5 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '胴',
          mellee: { slash: 30, impact: 30, shot: 40 },
          element: { 火: 5, 水: 10, 雷: 5, 氷: 5, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '翼',
          mellee: { slash: 25, impact: 25, shot: 30 },
          element: { 火: 5, 水: 10, 雷: 5, 氷: 5, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '翼爪',
          mellee: { slash: 20, impact: 20, shot: 20 },
          element: { 火: 10, 水: 20, 雷: 10, 氷: 5, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '脚',
          mellee: { slash: 30, impact: 25, shot: 30 },
          element: { 火: 5, 水: 10, 雷: 5, 氷: 5, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻尾',
          mellee: { slash: 45, impact: 45, shot: 35 },
          element: { 火: 10, 水: 15, 雷: 5, 氷: 5, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
  ],
  partDurabilities: [
    new PartDurability('頭', 350),
    new PartDurability('胴', 280),
    new PartDurability('左翼', 200),
    new PartDurability('右翼', 200),
    new PartDurability('脚', 250),
    new PartDurability('尻尾', 220),
  ],
  quests: hazewingMalfestioQuests,
}

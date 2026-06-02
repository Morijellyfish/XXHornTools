import type { Monster } from '~/types/monster/monster'
import { PartDurability } from '~/types/monster/partDurability'
import { atlalKaQuests } from '../quest/atlalKa'

export const atlalKa: Monster = {
  name: 'アトラル・カ',
  species: '甲虫種',
  roar: { has: true, strength: '小' },
  windPressure: { has: false },
  tremor: false,
  hitZoneVariants: [
    {
      name: '通常時',
      hitZones: [
        {
          name: '頭',
          mellee: { slash: 70, impact: 70, shot: 50 },
          element: { 火: 0, 水: 20, 雷: 25, 氷: 5, 龍: 0 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '胴',
          mellee: { slash: 25, impact: 25, shot: 20 },
          element: { 火: 0, 水: 5, 雷: 10, 氷: 0, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '背中',
          mellee: { slash: 38, impact: 38, shot: 35 },
          element: { 火: 0, 水: 10, 雷: 15, 氷: 0, 龍: 0 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '腕',
          mellee: { slash: 55, impact: 55, shot: 20 },
          element: { 火: 0, 水: 15, 雷: 15, 氷: 5, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '鎌',
          mellee: { slash: 55, impact: 55, shot: 20 },
          element: { 火: 0, 水: 10, 雷: 20, 氷: 5, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '脚',
          mellee: { slash: 45, impact: 45, shot: 20 },
          element: { 火: 0, 水: 5, 雷: 10, 氷: 0, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻尾',
          mellee: { slash: 20, impact: 20, shot: 45 },
          element: { 火: 0, 水: 15, 雷: 20, 氷: 5, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '瓦礫',
          mellee: { slash: 0, impact: 0, shot: 0 },
          element: { 火: 0, 水: 0, 雷: 0, 氷: 0, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
  ],
  partDurabilities: [
    new PartDurability('頭', 350),
    new PartDurability('体', 500),
    new PartDurability('背中', 550),
    new PartDurability('鎌', 400),
    new PartDurability('左脚', 600),
    new PartDurability('右脚', 600),
    new PartDurability('尻尾', 250),
    new PartDurability('瓦礫', 500),
  ],
  quests: atlalKaQuests,
}

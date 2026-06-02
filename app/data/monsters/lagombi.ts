import type { Monster } from '~/types/monster/monster'
import { PartDurability } from '~/types/monster/partDurability'
import { lagombiQuests } from '../quest/lagombi'

export const lagombi: Monster = {
  name: 'ウルクスス',
  species: '牙獣種',
  roar: { has: false },
  windPressure: { has: false },
  tremor: true,
  hitZoneVariants: [
    {
      name: '通常時',
      hitZones: [
        {
          name: '頭',
          mellee: { slash: 45, impact: 63, shot: 50 },
          element: { 火: 30, 水: 0, 雷: 20, 氷: 0, 龍: 0 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '上半身',
          mellee: { slash: 44, impact: 44, shot: 40 },
          element: { 火: 30, 水: 0, 雷: 15, 氷: 0, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '前脚',
          mellee: { slash: 30, impact: 30, shot: 20 },
          element: { 火: 10, 水: 0, 雷: 5, 氷: 0, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '腹・後脚',
          mellee: { slash: 35, impact: 35, shot: 20 },
          element: { 火: 10, 水: 0, 雷: 5, 氷: 0, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻',
          mellee: { slash: 63, impact: 50, shot: 35 },
          element: { 火: 20, 水: 0, 雷: 10, 氷: 0, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
  ],
  partDurabilities: [
    new PartDurability('頭', 170),
    new PartDurability('上半身', 150),
    new PartDurability('前脚', 120),
    new PartDurability('腹・後脚', 150),
    new PartDurability('尻', 200),
  ],
  quests: lagombiQuests,
}

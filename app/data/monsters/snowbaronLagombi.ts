import type { Monster } from '~/types/monster/monster'
import { PartDurability } from '~/types/monster/partDurability'
import { snowbaronLagombiQuests } from '../quest/snowbaronLagombi'

export const snowbaronLagombi: Monster = {
  name: '大雪主ウルクスス',
  species: '牙獣種',
  hitZoneVariants: [
    {
      name: '通常時',
      hitZones: [
        {
          name: '頭部',
          mellee: { slash: 40, impact: 45, shot: 40 },
          element: { 火: 25, 水: 0, 雷: 20, 氷: 0, 龍: 0 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '上半身',
          mellee: { slash: 38, impact: 38, shot: 36 },
          element: { 火: 20, 水: 0, 雷: 15, 氷: 0, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '前脚',
          mellee: { slash: 25, impact: 25, shot: 18 },
          element: { 火: 10, 水: 0, 雷: 5, 氷: 0, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '腹・後脚',
          mellee: { slash: 34, impact: 34, shot: 20 },
          element: { 火: 10, 水: 0, 雷: 5, 氷: 0, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻',
          mellee: { slash: 42, impact: 40, shot: 30 },
          element: { 火: 15, 水: 0, 雷: 10, 氷: 0, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
  ],
  partDurabilities: [
    new PartDurability('頭部', 300),
    new PartDurability('上半身', 400),
    new PartDurability('前脚', 200),
    new PartDurability('腹・後脚', 320),
    new PartDurability('尻', 450),
  ],
  quests: snowbaronLagombiQuests,
}

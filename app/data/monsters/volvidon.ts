import type { Monster } from '~/types/monster/monster'
import { PartDurability } from '~/types/monster/partDurability'
import { volvidonQuests } from '../quest/volvidon'

export const volvidon: Monster = {
  name: 'ラングロトラ',
  species: '牙獣種',
  hitZoneVariants: [
    {
      name: '通常時',
      hitZones: [
        {
          name: '頭',
          mellee: { slash: 55, impact: 50, shot: 45 },
          element: { 火: 0, 水: 30, 雷: 15, 氷: 20, 龍: 0 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '上半身',
          mellee: { slash: 45, impact: 45, shot: 35 },
          element: { 火: 0, 水: 20, 雷: 10, 氷: 15, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '背中',
          mellee: { slash: 45, impact: 45, shot: 40 },
          element: { 火: 0, 水: 20, 雷: 10, 氷: 15, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻',
          mellee: { slash: 30, impact: 30, shot: 25 },
          element: { 火: 0, 水: 15, 雷: 10, 氷: 10, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '前脚',
          mellee: { slash: 38, impact: 30, shot: 30 },
          element: { 火: 0, 水: 10, 雷: 5, 氷: 5, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '腹・後脚',
          mellee: { slash: 36, impact: 36, shot: 20 },
          element: { 火: 0, 水: 10, 雷: 5, 氷: 10, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '回転中',
          mellee: { slash: 75, impact: 75, shot: 10 },
          element: { 火: 0, 水: 0, 雷: 0, 氷: 0, 龍: 0 },
          stun: 0,
          exhaust: 0,
        },
      ],
    },
  ],
  partDurabilities: [
    new PartDurability('上半身', 180),
    new PartDurability('背', 300),
    new PartDurability('前脚', 130),
    new PartDurability('尻', 110),
    new PartDurability('腹・後脚', 130),
    new PartDurability('回転中', 10),
  ],
  quests: volvidonQuests,
}

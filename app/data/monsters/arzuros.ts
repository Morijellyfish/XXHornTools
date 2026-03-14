import type { Monster } from '~/types/monster/monster'
import { PartDurability } from '~/types/monster/partDurability'
import { arzurosQuests } from '../quest/arzuros'

export const arzuros: Monster = {
  name: 'アオアシラ',
  hitZoneVariants: [
    {
      name: '通常時',
      hitZones: [
        {
          name: '頭部',
          mellee: { slash: 55, impact: 55, shot: 55 },
          element: { 火: 20, 水: 5, 雷: 10, 氷: 15, 龍: 0 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '上半身',
          mellee: { slash: 50, impact: 50, shot: 62 },
          element: { 火: 25, 水: 5, 雷: 10, 氷: 15, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '前脚',
          mellee: { slash: 33, impact: 35, shot: 28 },
          element: { 火: 30, 水: 5, 雷: 30, 氷: 20, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '腹・後脚',
          mellee: { slash: 55, impact: 55, shot: 38 },
          element: { 火: 15, 水: 5, 雷: 10, 氷: 20, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻',
          mellee: { slash: 66, impact: 66, shot: 43 },
          element: { 火: 15, 水: 5, 雷: 10, 氷: 20, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
    {
      name: 'G級',
      hitZones: [
        {
          name: '頭部',
          mellee: { slash: 50, impact: 50, shot: 50 },
          element: { 火: 20, 水: 5, 雷: 10, 氷: 15, 龍: 0 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '上半身',
          mellee: { slash: 30, impact: 30, shot: 55 },
          element: { 火: 25, 水: 5, 雷: 10, 氷: 15, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '前脚',
          mellee: { slash: 22, impact: 22, shot: 28 },
          element: { 火: 25, 水: 5, 雷: 25, 氷: 20, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '腹・後脚',
          mellee: { slash: 55, impact: 55, shot: 38 },
          element: { 火: 15, 水: 5, 雷: 10, 氷: 14, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻',
          mellee: { slash: 45, impact: 45, shot: 35 },
          element: { 火: 15, 水: 5, 雷: 10, 氷: 15, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
  ],
  partDurabilities: [
    new PartDurability('頭部', 130),
    new PartDurability('上半身', 180),
    new PartDurability('前脚', 80),
    new PartDurability('腹・後脚', 220),
    new PartDurability('尻', 150),
  ],
  quests: arzurosQuests,
}

import type { Monster } from '~/types/monster/monster'
import { PartDurability } from '~/types/monster/partDurability'
import { redhelmArzurosQuests } from '../quest/redhelmArzuros'

export const redhelmArzuros: Monster = {
  name: '紅兜アオアシラ',
  species: '牙獣種',
  hitZoneVariants: [
    {
      name: '通常時',
      hitZones: [
        {
          name: '頭部',
          mellee: { slash: 45, impact: 40, shot: 38 },
          element: { 火: 5, 水: 0, 雷: 0, 氷: 0, 龍: 0 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '上半身',
          mellee: { slash: 38, impact: 38, shot: 35 },
          element: { 火: 15, 水: 0, 雷: 0, 氷: 5, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '前脚',
          mellee: { slash: 20, impact: 20, shot: 30 },
          element: { 火: 20, 水: 0, 雷: 15, 氷: 10, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '腹・後脚',
          mellee: { slash: 36, impact: 23, shot: 25 },
          element: { 火: 5, 水: 0, 雷: 0, 氷: 15, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻',
          mellee: { slash: 23, impact: 34, shot: 25 },
          element: { 火: 5, 水: 0, 雷: 0, 氷: 15, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
    {
      name: '前脚破壊後',
      hitZones: [
        {
          name: '頭部',
          mellee: { slash: 45, impact: 40, shot: 38 },
          element: { 火: 5, 水: 0, 雷: 0, 氷: 0, 龍: 0 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '上半身',
          mellee: { slash: 38, impact: 38, shot: 35 },
          element: { 火: 15, 水: 0, 雷: 0, 氷: 5, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '前脚',
          mellee: { slash: 45, impact: 36, shot: 30 },
          element: { 火: 25, 水: 0, 雷: 20, 氷: 10, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '腹・後脚',
          mellee: { slash: 36, impact: 23, shot: 25 },
          element: { 火: 5, 水: 0, 雷: 0, 氷: 15, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻',
          mellee: { slash: 23, impact: 34, shot: 25 },
          element: { 火: 5, 水: 0, 雷: 0, 氷: 15, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
  ],
  partDurabilities: [
    new PartDurability('頭部', 300),
    new PartDurability('上半身', 420),
    new PartDurability('前脚', 250),
    new PartDurability('腹・後脚', 500),
    new PartDurability('尻', 350),
  ],
  quests: redhelmArzurosQuests,
}

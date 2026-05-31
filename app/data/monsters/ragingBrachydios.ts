import type { Monster } from '~/types/monster/monster'

import { PartDurability } from '~/types/monster/partDurability'

import { ragingBrachydiosQuests } from '../quest/ragingBrachydios'

export const ragingBrachydios: Monster = {
  name: '猛り爆ぜるブラキディオス',
  species: '獣竜種',
  hitZoneVariants: [
    {
      name: '通常時',

      hitZones: [
        {
          name: '角',
          mellee: { slash: 22, impact: 24, shot: 18 },
          element: { 火: 0, 水: 20, 雷: 5, 氷: 25, 龍: 5 },
          stun: 120,
          exhaust: 100,
        },
        {
          name: '頭',
          mellee: { slash: 65, impact: 60, shot: 46 },
          element: { 火: 0, 水: 15, 雷: 10, 氷: 20, 龍: 5 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '胴',
          mellee: { slash: 34, impact: 34, shot: 20 },
          element: { 火: 0, 水: 10, 雷: 0, 氷: 15, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '前脚',
          mellee: { slash: 38, impact: 45, shot: 25 },
          element: { 火: 0, 水: 5, 雷: 5, 氷: 10, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '後脚',
          mellee: { slash: 25, impact: 30, shot: 30 },
          element: { 火: 0, 水: 5, 雷: 5, 氷: 10, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻尾',
          mellee: { slash: 40, impact: 30, shot: 50 },
          element: { 火: 0, 水: 10, 雷: 5, 氷: 15, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尾先',
          mellee: { slash: 24, impact: 14, shot: 14 },
          element: { 火: 0, 水: 5, 雷: 0, 氷: 5, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
    {
      name: '粘菌赤色時',

      hitZones: [
        {
          name: '角',
          mellee: { slash: 17, impact: 20, shot: 13 },
          element: { 火: 0, 水: 20, 雷: 5, 氷: 25, 龍: 5 },
          stun: 120,
          exhaust: 100,
        },
        {
          name: '頭',
          mellee: { slash: 55, impact: 50, shot: 36 },
          element: { 火: 0, 水: 15, 雷: 10, 氷: 20, 龍: 5 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '前脚',
          mellee: { slash: 28, impact: 35, shot: 15 },
          element: { 火: 0, 水: 5, 雷: 5, 氷: 10, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻尾',
          mellee: { slash: 30, impact: 20, shot: 45 },
          element: { 火: 0, 水: 10, 雷: 5, 氷: 15, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尾先',
          mellee: { slash: 20, impact: 9, shot: 9 },
          element: { 火: 0, 水: 5, 雷: 0, 氷: 5, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
  ],
  partDurabilities: [
    new PartDurability('頭', 260),
    new PartDurability('胴', 220),
    new PartDurability('左前脚', 250),
    new PartDurability('右前脚', 250),
    new PartDurability('左後脚', 160),
    new PartDurability('右後脚', 160),
    new PartDurability('尻尾', 170, 280),
  ],
  quests: ragingBrachydiosQuests,
}

import type { Monster } from '~/types/monster/monster'

import { PartDurability } from '~/types/monster/partDurability'

import { thunderlordZinogreQuests } from '../quest/thunderlordZinogre'

export const thunderlordZinogre: Monster = {
  name: '金雷公ジンオウガ',
  species: '牙竜種',
  hitZoneVariants: [
    {
      name: '通常時',

      hitZones: [
        {
          name: '頭',
          mellee: { slash: 55, impact: 55, shot: 45 },
          element: { 火: 10, 水: 10, 雷: 0, 氷: 15, 龍: 5 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '胴',
          mellee: { slash: 25, impact: 25, shot: 10 },
          element: { 火: 5, 水: 5, 雷: 0, 氷: 5, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '背',
          mellee: { slash: 45, impact: 40, shot: 40 },
          element: { 火: 10, 水: 15, 雷: 0, 氷: 20, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '前脚',
          mellee: { slash: 25, impact: 30, shot: 20 },
          element: { 火: 5, 水: 5, 雷: 0, 氷: 15, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '後脚',
          mellee: { slash: 45, impact: 45, shot: 35 },
          element: { 火: 5, 水: 5, 雷: 0, 氷: 10, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '脚根元',
          mellee: { slash: 44, impact: 44, shot: 25 },
          element: { 火: 5, 水: 5, 雷: 0, 氷: 10, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻尾',
          mellee: { slash: 30, impact: 25, shot: 25 },
          element: { 火: 5, 水: 5, 雷: 0, 氷: 5, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尾先',
          mellee: { slash: 21, impact: 20, shot: 10 },
          element: { 火: 10, 水: 15, 雷: 0, 氷: 25, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
    {
      name: '真帯電時',

      hitZones: [
        {
          name: '頭',
          mellee: { slash: 65, impact: 65, shot: 45 },
          element: { 火: 10, 水: 10, 雷: 0, 氷: 15, 龍: 10 },
          stun: 120,
          exhaust: 100,
        },
        {
          name: '胴',
          mellee: { slash: 30, impact: 30, shot: 10 },
          element: { 火: 5, 水: 10, 雷: 0, 氷: 10, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '背',
          mellee: { slash: 45, impact: 40, shot: 40 },
          element: { 火: 15, 水: 20, 雷: 0, 氷: 25, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '前脚',
          mellee: { slash: 21, impact: 21, shot: 10 },
          element: { 火: 5, 水: 5, 雷: 0, 氷: 25, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '後脚',
          mellee: { slash: 50, impact: 50, shot: 35 },
          element: { 火: 10, 水: 10, 雷: 0, 氷: 15, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '脚根元',
          mellee: { slash: 45, impact: 45, shot: 25 },
          element: { 火: 10, 水: 10, 雷: 0, 氷: 15, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
  ],
  partDurabilities: [
    new PartDurability('頭', 380),
    new PartDurability('胴', 300),
    new PartDurability('背中', 160),
    new PartDurability('左前脚', 180),
    new PartDurability('右前脚', 180),
    new PartDurability('左後脚', 250),
    new PartDurability('右後脚', 250),
    new PartDurability('尻尾', 130, 280),
  ],
  quests: thunderlordZinogreQuests,
}

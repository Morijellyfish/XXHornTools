import type { Monster } from '~/types/monster/monster'

import { PartDurability } from '~/types/monster/partDurability'

import { chaoticGoreMagalaQuests } from '../quest/chaoticGoreMagala'

export const chaoticGoreMagala: Monster = {
  name: '渾沌に呻くゴア・マガラ',
  species: '未確認',
  hitZoneVariants: [
    {
      name: '通常時',

      hitZones: [
        {
          name: '頭',
          mellee: { slash: 65, impact: 55, shot: 55 },
          element: { 火: 25, 水: 0, 雷: 15, 氷: 5, 龍: 30 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '胴',
          mellee: { slash: 25, impact: 25, shot: 35 },
          element: { 火: 10, 水: 0, 雷: 5, 氷: 5, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '翼',
          mellee: { slash: 26, impact: 26, shot: 20 },
          element: { 火: 15, 水: 0, 雷: 10, 氷: 0, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '左翼脚',
          mellee: { slash: 30, impact: 30, shot: 30 },
          element: { 火: 25, 水: 0, 雷: 15, 氷: 5, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '右翼脚',
          mellee: { slash: 20, impact: 20, shot: 25 },
          element: { 火: 30, 水: 0, 雷: 15, 氷: 5, 龍: 30 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '前脚',
          mellee: { slash: 40, impact: 40, shot: 40 },
          element: { 火: 10, 水: 0, 雷: 5, 氷: 5, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '後脚',
          mellee: { slash: 36, impact: 36, shot: 45 },
          element: { 火: 10, 水: 0, 雷: 5, 氷: 5, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻尾',
          mellee: { slash: 45, impact: 45, shot: 40 },
          element: { 火: 10, 水: 0, 雷: 10, 氷: 5, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
    {
      name: '天候変化時',

      hitZones: [
        {
          name: '頭',
          mellee: { slash: 55, impact: 42, shot: 42 },
          element: { 火: 25, 水: 0, 雷: 15, 氷: 5, 龍: 30 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '左翼脚',
          mellee: { slash: 35, impact: 35, shot: 35 },
          element: { 火: 25, 水: 0, 雷: 15, 氷: 5, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '右翼脚',
          mellee: { slash: 16, impact: 16, shot: 20 },
          element: { 火: 30, 水: 0, 雷: 15, 氷: 5, 龍: 30 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '前脚',
          mellee: { slash: 45, impact: 45, shot: 40 },
          element: { 火: 10, 水: 0, 雷: 5, 氷: 5, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '後脚',
          mellee: { slash: 42, impact: 42, shot: 50 },
          element: { 火: 10, 水: 0, 雷: 5, 氷: 5, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
  ],
  partDurabilities: [
    new PartDurability('頭', 300),
    new PartDurability('胴', 500),
    new PartDurability('翼', 140),
    new PartDurability('左翼脚', 120),
    new PartDurability('右翼脚', 200),
    new PartDurability('前脚', 200),
    new PartDurability('後脚', 160),
    new PartDurability('尻尾', 150, 300),
  ],
  quests: chaoticGoreMagalaQuests,
}

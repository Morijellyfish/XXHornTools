import type { Monster } from '~/types/monster/monster'

import { PartDurability } from '~/types/monster/partDurability'

import { goreMagalaQuests } from '../quest/goreMagala'

export const goreMagala: Monster = {
  name: 'ゴア・マガラ',
  species: '未確認',
  hitZoneVariants: [
    {
      name: '通常時',

      hitZones: [
        {
          name: '頭',
          mellee: { slash: 65, impact: 55, shot: 55 },
          element: { 火: 15, 水: 0, 雷: 15, 氷: 5, 龍: 15 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '首',
          mellee: { slash: 50, impact: 50, shot: 50 },
          element: { 火: 15, 水: 0, 雷: 10, 氷: 5, 龍: 5 },
          stun: 0,
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
          name: '翼脚',
          mellee: { slash: 30, impact: 30, shot: 30 },
          element: { 火: 25, 水: 0, 雷: 15, 氷: 5, 龍: 10 },
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
      name: '狂竜化時',

      hitZones: [
        {
          name: '頭',
          mellee: { slash: 75, impact: 70, shot: 65 },
          element: { 火: 25, 水: 0, 雷: 15, 氷: 5, 龍: 30 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '翼脚',
          mellee: { slash: 30, impact: 30, shot: 30 },
          element: { 火: 30, 水: 0, 雷: 15, 氷: 5, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
  ],
  partDurabilities: [
    new PartDurability('触角', 160),
    new PartDurability('頭', 240, undefined, 240, 480),
    new PartDurability('胴', 400),
    new PartDurability('翼', 100),
    new PartDurability('翼脚', 100, undefined, 100, 150),
    new PartDurability('前脚', 200),
    new PartDurability('後脚', 160),
    new PartDurability('尻尾', 150, 300, 150, 195),
  ],
  quests: goreMagalaQuests,
}

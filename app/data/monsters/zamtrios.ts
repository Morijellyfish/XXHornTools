import type { Monster } from '~/types/monster/monster'

import { PartDurability } from '~/types/monster/partDurability'

import { zamtriosQuests } from '../quest/zamtrios'

export const zamtrios: Monster = {
  name: 'ザボアザギル',
  species: '両生種',
  hitZoneVariants: [
    {
      name: '通常時',

      hitZones: [
        {
          name: '頭',
          mellee: { slash: 43, impact: 45, shot: 45 },
          element: { 火: 15, 水: 0, 雷: 20, 氷: 0, 龍: 5 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '胴',
          mellee: { slash: 36, impact: 36, shot: 30 },
          element: { 火: 10, 水: 0, 雷: 15, 氷: 0, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '腹',
          mellee: { slash: 75, impact: 66, shot: 60 },
          element: { 火: 30, 水: 0, 雷: 30, 氷: 0, 龍: 10 },
          stun: 0,
          exhaust: 200,
        },
        {
          name: '背ビレ',
          mellee: { slash: 45, impact: 45, shot: 40 },
          element: { 火: 15, 水: 0, 雷: 15, 氷: 0, 龍: 5 },
          stun: 0,
          exhaust: 200,
        },
        {
          name: '前脚',
          mellee: { slash: 42, impact: 42, shot: 40 },
          element: { 火: 10, 水: 0, 雷: 15, 氷: 0, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '後脚',
          mellee: { slash: 36, impact: 36, shot: 35 },
          element: { 火: 10, 水: 0, 雷: 15, 氷: 0, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻尾',
          mellee: { slash: 45, impact: 43, shot: 40 },
          element: { 火: 10, 水: 0, 雷: 15, 氷: 0, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
    {
      name: '氷まとい状態',

      hitZones: [
        {
          name: '頭',
          mellee: { slash: 24, impact: 24, shot: 20 },
          element: { 火: 20, 水: 0, 雷: 20, 氷: 0, 龍: 5 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '胴',
          mellee: { slash: 33, impact: 33, shot: 28 },
          element: { 火: 15, 水: 0, 雷: 15, 氷: 0, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '背ビレ',
          mellee: { slash: 42, impact: 42, shot: 40 },
          element: { 火: 20, 水: 0, 雷: 15, 氷: 0, 龍: 5 },
          stun: 0,
          exhaust: 200,
        },
        {
          name: '前脚',
          mellee: { slash: 20, impact: 21, shot: 20 },
          element: { 火: 20, 水: 0, 雷: 15, 氷: 0, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '後脚',
          mellee: { slash: 33, impact: 33, shot: 30 },
          element: { 火: 15, 水: 0, 雷: 15, 氷: 0, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻尾',
          mellee: { slash: 24, impact: 24, shot: 25 },
          element: { 火: 20, 水: 0, 雷: 10, 氷: 0, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
    {
      name: '獰猛化時',

      hitZones: [
        {
          name: '前脚',
          mellee: { slash: 50, impact: 50, shot: 48 },
          element: { 火: 12, 水: 0, 雷: 18, 氷: 0, 龍: 6 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
  ],
  partDurabilities: [
    new PartDurability('頭', 240, undefined, 360, 240),
    new PartDurability('胴', 500, undefined, 750),
    new PartDurability('背ビレ', 60, undefined, 90),
    new PartDurability('左前脚', 180, undefined, 270, 216),
    new PartDurability('右前脚', 180, undefined, 270, 216),
    new PartDurability('左後脚', 140, undefined, 210),
    new PartDurability('右後脚', 140, undefined, 210),
    new PartDurability('尻尾', 200, undefined, 300),
  ],
  quests: zamtriosQuests,
}

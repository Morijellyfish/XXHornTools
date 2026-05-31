import type { Monster } from '~/types/monster/monster'

import { PartDurability } from '~/types/monster/partDurability'

import { uragaanQuests } from '../quest/uragaan'

export const uragaan: Monster = {
  name: 'ウラガンキン',
  species: '獣竜種',
  hitZoneVariants: [
    {
      name: '通常時',

      hitZones: [
        {
          name: '頭',
          mellee: { slash: 20, impact: 20, shot: 10 },
          element: { 火: 0, 水: 40, 雷: 5, 氷: 20, 龍: 30 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '首',
          mellee: { slash: 25, impact: 30, shot: 25 },
          element: { 火: 0, 水: 20, 雷: 0, 氷: 10, 龍: 15 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '背',
          mellee: { slash: 22, impact: 24, shot: 10 },
          element: { 火: 0, 水: 15, 雷: 0, 氷: 10, 龍: 15 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '腹',
          mellee: { slash: 55, impact: 45, shot: 45 },
          element: { 火: 0, 水: 30, 雷: 5, 氷: 15, 龍: 30 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '脚',
          mellee: { slash: 25, impact: 30, shot: 20 },
          element: { 火: 0, 水: 15, 雷: 0, 氷: 10, 龍: 15 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻尾',
          mellee: { slash: 35, impact: 30, shot: 25 },
          element: { 火: 0, 水: 25, 雷: 0, 氷: 10, 龍: 20 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尾先',
          mellee: { slash: 22, impact: 24, shot: 10 },
          element: { 火: 0, 水: 35, 雷: 5, 氷: 15, 龍: 25 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
    {
      name: '顎破壊後',

      hitZones: [
        {
          name: '頭',
          mellee: { slash: 55, impact: 50, shot: 40 },
          element: { 火: 0, 水: 20, 雷: 15, 氷: 30, 龍: 35 },
          stun: 100,
          exhaust: 100,
        },
      ],
    },
    {
      name: '獰猛化時',

      hitZones: [
        {
          name: '背',
          mellee: { slash: 33, impact: 36, shot: 15 },
          element: { 火: 0, 水: 22, 雷: 0, 氷: 15, 龍: 22 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
  ],
  partDurabilities: [
    new PartDurability('頭', 250, undefined, 375, 250),
    new PartDurability('首', 200, undefined, 300),
    new PartDurability('胴', 500, 600, 750, 500),
    new PartDurability('前脚', 200, undefined, 300),
    new PartDurability('左後脚', 260, undefined, 390),
    new PartDurability('右後脚', 260, undefined, 390),
    new PartDurability('尻尾', 300, 600, 450, 360),
  ],
  quests: uragaanQuests,
}

import type { Monster } from '~/types/monster/monster'

import { PartDurability } from '~/types/monster/partDurability'

import { tetsucabraQuests } from '../quest/tetsucabra'

export const tetsucabra: Monster = {
  name: 'テツカブラ',
  species: '両生種',
  hitZoneVariants: [
    {
      name: '通常時',

      hitZones: [
        {
          name: '頭',
          mellee: { slash: 56, impact: 56, shot: 60 },
          element: { 火: 0, 水: 30, 雷: 25, 氷: 5, 龍: 5 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '牙',
          mellee: { slash: 42, impact: 45, shot: 40 },
          element: { 火: 0, 水: 25, 雷: 25, 氷: 10, 龍: 5 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '胴',
          mellee: { slash: 25, impact: 25, shot: 25 },
          element: { 火: 0, 水: 20, 雷: 15, 氷: 5, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '前脚',
          mellee: { slash: 45, impact: 42, shot: 40 },
          element: { 火: 0, 水: 20, 雷: 15, 氷: 5, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '後脚',
          mellee: { slash: 42, impact: 42, shot: 40 },
          element: { 火: 0, 水: 15, 雷: 15, 氷: 10, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻尾',
          mellee: { slash: 36, impact: 36, shot: 35 },
          element: { 火: 0, 水: 20, 雷: 15, 氷: 10, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '岩',
          mellee: { slash: 20, impact: 20, shot: 15 },
          element: { 火: 0, 水: 0, 雷: 0, 氷: 0, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
    {
      name: '尻尾膨張時',

      hitZones: [
        {
          name: '尻尾',
          mellee: { slash: 80, impact: 80, shot: 85 },
          element: { 火: 0, 水: 30, 雷: 30, 氷: 15, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
    {
      name: '獰猛化時',

      hitZones: [
        {
          name: '頭',
          mellee: { slash: 67, impact: 67, shot: 72 },
          element: { 火: 0, 水: 36, 雷: 30, 氷: 6, 龍: 6 },
          stun: 120,
          exhaust: 100,
        },
      ],
    },
  ],
  partDurabilities: [
    new PartDurability('頭', 220, undefined, 330, 330),
    new PartDurability('胴', 250, undefined, 375),
    new PartDurability('左前脚', 150, undefined, 225),
    new PartDurability('右前脚', 150, undefined, 225),
    new PartDurability('左後脚', 180, undefined, 270, 180),
    new PartDurability('右後脚', 180, undefined, 270, 180),
    new PartDurability('尻尾', 120, 15, 180),
  ],
  quests: tetsucabraQuests,
}

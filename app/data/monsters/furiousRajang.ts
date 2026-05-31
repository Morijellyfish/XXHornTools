import type { Monster } from '~/types/monster/monster'

import { PartDurability } from '~/types/monster/partDurability'

import { furiousRajangQuests } from '../quest/furiousRajang'

export const furiousRajang: Monster = {
  name: '激昂したラージャン',
  species: '牙獣種',
  hitZoneVariants: [
    {
      name: '通常時',

      hitZones: [
        {
          name: '頭',
          mellee: { slash: 60, impact: 60, shot: 60 },
          element: { 火: 5, 水: 5, 雷: 0, 氷: 30, 龍: 0 },
          stun: 50,
          exhaust: 100,
        },
        {
          name: '胴体',
          mellee: { slash: 45, impact: 50, shot: 45 },
          element: { 火: 0, 水: 5, 雷: 0, 氷: 15, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '前脚',
          mellee: { slash: 45, impact: 40, shot: 40 },
          element: { 火: 0, 水: 5, 雷: 0, 氷: 15, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '後脚',
          mellee: { slash: 45, impact: 40, shot: 40 },
          element: { 火: 0, 水: 5, 雷: 0, 氷: 15, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻尾',
          mellee: { slash: 50, impact: 40, shot: 30 },
          element: { 火: 0, 水: 5, 雷: 0, 氷: 15, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
    {
      name: '闘気硬化時',

      hitZones: [
        {
          name: '前脚',
          mellee: { slash: 10, impact: 10, shot: 10 },
          element: { 火: 0, 水: 5, 雷: 0, 氷: 15, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '後脚',
          mellee: { slash: 55, impact: 48, shot: 48 },
          element: { 火: 0, 水: 5, 雷: 0, 氷: 15, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻尾',
          mellee: { slash: 55, impact: 45, shot: 30 },
          element: { 火: 0, 水: 5, 雷: 0, 氷: 15, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
  ],
  partDurabilities: [
    new PartDurability('頭', 500),
    new PartDurability('胴', 300),
    new PartDurability('左前脚', 300),
    new PartDurability('右前脚', 300),
    new PartDurability('左後足', 300),
    new PartDurability('右後脚', 300),
    new PartDurability('尻尾', 900, 1000),
  ],
  quests: furiousRajangQuests,
}

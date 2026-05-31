import type { Monster } from '~/types/monster/monster'
import { PartDurability } from '~/types/monster/partDurability'
import { lagiacrusQuests } from '../quest/lagiacrus'

export const lagiacrus: Monster = {
  name: 'ラギアクルス',
  species: '海竜種',
  hitZoneVariants: [
    {
      name: '通常時',
      hitZones: [
        {
          name: '頭',
          mellee: { slash: 45, impact: 45, shot: 45 },
          element: { 火: 15, 水: 0, 雷: 0, 氷: 10, 龍: 10 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '胸',
          mellee: { slash: 55, impact: 45, shot: 35 },
          element: { 火: 10, 水: 0, 雷: 0, 氷: 10, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '胴',
          mellee: { slash: 25, impact: 25, shot: 20 },
          element: { 火: 5, 水: 0, 雷: 0, 氷: 5, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '背',
          mellee: { slash: 24, impact: 40, shot: 15 },
          element: { 火: 25, 水: 0, 雷: 0, 氷: 15, 龍: 15 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '前脚',
          mellee: { slash: 25, impact: 25, shot: 10 },
          element: { 火: 10, 水: 0, 雷: 0, 氷: 5, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '後脚',
          mellee: { slash: 38, impact: 38, shot: 30 },
          element: { 火: 10, 水: 0, 雷: 0, 氷: 5, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻尾',
          mellee: { slash: 25, impact: 35, shot: 15 },
          element: { 火: 20, 水: 0, 雷: 0, 氷: 10, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
  ],
  partDurabilities: [
    new PartDurability('頭', 250, undefined, 375, 375),
    new PartDurability('胸', 250, undefined, 375),
    new PartDurability('胴', 150, undefined, 225),
    new PartDurability('背', 100, undefined, 150, 150),
    new PartDurability('前脚', 260, undefined, 390),
    new PartDurability('後脚', 300, undefined, 450),
    new PartDurability('尻尾', 250, 350, 375, 375),
  ],
  quests: lagiacrusQuests,
}

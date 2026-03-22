import type { Monster } from '~/types/monster/monster'
import { PartDurability } from '~/types/monster/partDurability'
import { brachydiosQuests } from '../quest/brachydios'

const normalHitZones = [
  {
    name: '角',
    mellee: { slash: 20, impact: 24, shot: 15 },
    element: { 火: 0, 水: 25, 雷: 5, 氷: 20, 龍: 5 },
    stun: 120,
    exhaust: 100,
  },
  {
    name: '頭部',
    mellee: { slash: 70, impact: 65, shot: 50 },
    element: { 火: 0, 水: 20, 雷: 10, 氷: 15, 龍: 5 },
    stun: 100,
    exhaust: 100,
  },
  {
    name: '上半身',
    mellee: { slash: 40, impact: 35, shot: 20 },
    element: { 火: 0, 水: 15, 雷: 0, 氷: 10, 龍: 5 },
    stun: 0,
    exhaust: 100,
  },
  {
    name: '前脚',
    mellee: { slash: 45, impact: 50, shot: 30 },
    element: { 火: 0, 水: 10, 雷: 5, 氷: 5, 龍: 0 },
    stun: 0,
    exhaust: 100,
  },
  {
    name: '後脚',
    mellee: { slash: 30, impact: 35, shot: 35 },
    element: { 火: 0, 水: 10, 雷: 5, 氷: 5, 龍: 0 },
    stun: 0,
    exhaust: 100,
  },
  {
    name: '尻尾',
    mellee: { slash: 35, impact: 25, shot: 45 },
    element: { 火: 0, 水: 15, 雷: 5, 氷: 10, 龍: 5 },
    stun: 0,
    exhaust: 100,
  },
  {
    name: '尻尾先端',
    mellee: { slash: 20, impact: 10, shot: 10 },
    element: { 火: 0, 水: 5, 雷: 0, 氷: 5, 龍: 0 },
    stun: 0,
    exhaust: 100,
  },
]

export const brachydios: Monster = {
  name: 'ブラキディオス',
  hitZoneVariants: [
    {
      name: '通常時',
      hitZones: normalHitZones,
    },
    {
      name: '獰猛時',
      hitZones: [
        normalHitZones[0]!,
        {
          name: '頭部',
          mellee: { slash: 84, impact: 78, shot: 60 },
          element: { 火: 0, 水: 24, 雷: 12, 氷: 18, 龍: 6 },
          stun: 120,
          exhaust: 100,
        },
        normalHitZones[2]!,
        {
          name: '前脚',
          mellee: { slash: 54, impact: 60, shot: 36 },
          element: { 火: 0, 水: 12, 雷: 6, 氷: 6, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        normalHitZones[4]!,
        normalHitZones[5]!,
        normalHitZones[6]!,
      ],
    },
  ],

  partDurabilities: [
    new PartDurability('頭部', 230, undefined, 345, 345),
    new PartDurability('胴', 190, undefined, 285),
    new PartDurability('左前脚', 220, undefined, 330, 330),
    new PartDurability('右前脚', 220, undefined, 330, 330),
    new PartDurability('左後脚', 130, undefined, 195),
    new PartDurability('右後脚', 130, undefined, 195),
    new PartDurability('尻尾', 140, 280, 210, 140),
  ],
  quests: brachydiosQuests,
}

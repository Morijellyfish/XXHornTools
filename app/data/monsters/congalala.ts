import type { Monster } from '~/types/monster/monster'
import { PartDurability } from '~/types/monster/partDurability'
import { congalalaQuests } from '../quest/congalala'

export const congalala: Monster = {
  name: 'ババコンガ',
  species: '牙獣種',
  roar: { has: true, strength: '小' },
  windPressure: { has: false },
  tremor: true,
  hitZoneVariants: [
    {
      name: '通常時',
      hitZones: [
        {
          name: '頭',
          mellee: { slash: 65, impact: 70, shot: 60 },
          element: { 火: 25, 水: 10, 雷: 10, 氷: 15, 龍: 0 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '胴体',
          mellee: { slash: 30, impact: 30, shot: 40 },
          element: { 火: 10, 水: 5, 雷: 5, 氷: 10, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '前脚',
          mellee: { slash: 45, impact: 40, shot: 35 },
          element: { 火: 15, 水: 10, 雷: 10, 氷: 15, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '後脚',
          mellee: { slash: 36, impact: 36, shot: 35 },
          element: { 火: 15, 水: 10, 雷: 10, 氷: 15, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻尾',
          mellee: { slash: 40, impact: 36, shot: 25 },
          element: { 火: 15, 水: 10, 雷: 10, 氷: 15, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
    {
      name: 'ガード時',
      hitZones: [
        {
          name: '頭',
          mellee: { slash: 65, impact: 75, shot: 60 },
          element: { 火: 25, 水: 10, 雷: 10, 氷: 5, 龍: 0 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '胴体',
          mellee: { slash: 5, impact: 5, shot: 5 },
          element: { 火: 10, 水: 0, 雷: 0, 氷: 0, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '前脚',
          mellee: { slash: 65, impact: 15, shot: 15 },
          element: { 火: 15, 水: 10, 雷: 10, 氷: 5, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '後脚',
          mellee: { slash: 65, impact: 15, shot: 15 },
          element: { 火: 15, 水: 10, 雷: 10, 氷: 5, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻尾',
          mellee: { slash: 25, impact: 25, shot: 25 },
          element: { 火: 10, 水: 5, 雷: 5, 氷: 10, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
  ],
  partDurabilities: [
    new PartDurability('頭', 200, undefined, 300, 300),
    new PartDurability('胴', 200, undefined, 300, 300),
    new PartDurability('左前脚', 150, undefined, 225),
    new PartDurability('右前脚', 150, undefined, 225),
    new PartDurability('左後脚', 130, undefined, 195),
    new PartDurability('右後脚', 130, undefined, 195),
    new PartDurability('尻尾', 140, 210, 210, 210),
  ],
  quests: congalalaQuests,
}

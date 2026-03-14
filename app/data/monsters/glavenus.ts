import type { Monster } from '~/types/monster/monster'
import { PartDurability } from '~/types/monster/partDurability'
import { glavenusQuests } from '../quest/glavenus'

export const glavenus: Monster = {
  name: 'ディノバルド',
  hitZoneVariants: [
    {
      name: '通常時',
      hitZones: [
        {
          name: '頭部',
          mellee: { slash: 65, impact: 65, shot: 50 },
          element: { 火: 0, 水: 25, 雷: 10, 氷: 15, 龍: 15 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '喉',
          mellee: { slash: 70, impact: 70, shot: 30 },
          element: { 火: 0, 水: 30, 雷: 15, 氷: 15, 龍: 15 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '背熱殻',
          mellee: { slash: 36, impact: 36, shot: 45 },
          element: { 火: 0, 水: 20, 雷: 5, 氷: 10, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '上半身',
          mellee: { slash: 25, impact: 25, shot: 20 },
          element: { 火: 0, 水: 20, 雷: 5, 氷: 10, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '前脚',
          mellee: { slash: 41, impact: 41, shot: 20 },
          element: { 火: 0, 水: 15, 雷: 5, 氷: 5, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '後脚',
          mellee: { slash: 25, impact: 25, shot: 20 },
          element: { 火: 0, 水: 15, 雷: 5, 氷: 5, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻尾根本',
          mellee: { slash: 36, impact: 36, shot: 20 },
          element: { 火: 0, 水: 25, 雷: 10, 氷: 15, 龍: 15 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尾刃',
          mellee: { slash: 22, impact: 22, shot: 22 },
          element: { 火: 0, 水: 20, 雷: 5, 氷: 5, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
    {
      name: '赤熱時',
      hitZones: [
        {
          name: '頭部',
          mellee: { slash: 70, impact: 70, shot: 35 },
          element: { 火: 0, 水: 30, 雷: 5, 氷: 15, 龍: 5 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '喉',
          mellee: { slash: 75, impact: 75, shot: 35 },
          element: { 火: 0, 水: 35, 雷: 15, 氷: 15, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '背熱殻',
          mellee: { slash: 36, impact: 36, shot: 45 },
          element: { 火: 0, 水: 20, 雷: 5, 氷: 10, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '上半身',
          mellee: { slash: 25, impact: 25, shot: 20 },
          element: { 火: 0, 水: 20, 雷: 5, 氷: 10, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '前脚',
          mellee: { slash: 41, impact: 41, shot: 20 },
          element: { 火: 0, 水: 15, 雷: 5, 氷: 5, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '後脚',
          mellee: { slash: 25, impact: 25, shot: 20 },
          element: { 火: 0, 水: 15, 雷: 5, 氷: 5, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻尾根本',
          mellee: { slash: 36, impact: 36, shot: 20 },
          element: { 火: 0, 水: 25, 雷: 10, 氷: 15, 龍: 15 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尾刃',
          mellee: { slash: 65, impact: 65, shot: 55 },
          element: { 火: 0, 水: 35, 雷: 15, 氷: 20, 龍: 15 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
  ],
  partDurabilities: [
    new PartDurability('頭部', 350, undefined, 525, 350),
    new PartDurability('背中', 300, undefined, 450),
    new PartDurability('胴', 200, undefined, 300),
    new PartDurability('前脚', 200, undefined, 300),
    new PartDurability('左後脚', 180, undefined, 270, 180),
    new PartDurability('右後脚', 180, undefined, 270),
    new PartDurability('尻尾', 250, 450, 375, 250),
  ],
  quests: glavenusQuests,
}

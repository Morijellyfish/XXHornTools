import type { Monster } from '~/types/monster/monster'
import { PartDurability } from '~/types/monster/partDurability'
import { gammothQuests } from '../quest/gammoth'

export const gammoth: Monster = {
  name: 'ガムート',
  hitZoneVariants: [
    {
      name: '通常時',
      hitZones: [
        {
          name: '頭部',
          mellee: { slash: 55, impact: 60, shot: 40 },
          element: { 火: 10, 水: 0, 雷: 15, 氷: 0, 龍: 0 },
          stun: 100,
          exhaust: 0,
        },
        {
          name: '鼻',
          mellee: { slash: 63, impact: 54, shot: 45 },
          element: { 火: 25, 水: 5, 雷: 10, 氷: 0, 龍: 0 },
          stun: 0,
          exhaust: 0,
        },
        {
          name: '上半身',
          mellee: { slash: 25, impact: 34, shot: 19 },
          element: { 火: 5, 水: 0, 雷: 5, 氷: 0, 龍: 0 },
          stun: 0,
          exhaust: 0,
        },
        {
          name: '左前脚',
          mellee: { slash: 36, impact: 38, shot: 35 },
          element: { 火: 5, 水: 5, 雷: 10, 氷: 0, 龍: 0 },
          stun: 0,
          exhaust: 0,
        },
        {
          name: '右前脚',
          mellee: { slash: 36, impact: 38, shot: 35 },
          element: { 火: 5, 水: 5, 雷: 10, 氷: 0, 龍: 0 },
          stun: 0,
          exhaust: 0,
        },
        {
          name: '左後脚',
          mellee: { slash: 36, impact: 38, shot: 35 },
          element: { 火: 5, 水: 5, 雷: 10, 氷: 0, 龍: 0 },
          stun: 0,
          exhaust: 0,
        },
        {
          name: '右後脚',
          mellee: { slash: 36, impact: 38, shot: 35 },
          element: { 火: 5, 水: 5, 雷: 10, 氷: 0, 龍: 0 },
          stun: 0,
          exhaust: 0,
        },
        {
          name: '尻尾',
          mellee: { slash: 40, impact: 35, shot: 38 },
          element: { 火: 5, 水: 5, 雷: 10, 氷: 0, 龍: 0 },
          stun: 0,
          exhaust: 0,
        },
      ],
    },
    {
      name: '雪装甲時',
      hitZones: [
        {
          name: '頭部',
          mellee: { slash: 55, impact: 60, shot: 40 },
          element: { 火: 10, 水: 0, 雷: 15, 氷: 0, 龍: 0 },
          stun: 100,
          exhaust: 0,
        },
        {
          name: '鼻',
          mellee: { slash: 55, impact: 50, shot: 40 },
          element: { 火: 15, 水: 5, 雷: 5, 氷: 0, 龍: 0 },
          stun: 0,
          exhaust: 0,
        },
        {
          name: '上半身',
          mellee: { slash: 25, impact: 34, shot: 19 },
          element: { 火: 5, 水: 0, 雷: 5, 氷: 0, 龍: 0 },
          stun: 0,
          exhaust: 0,
        },
        {
          name: '左前脚',
          mellee: { slash: 24, impact: 30, shot: 24 },
          element: { 火: 25, 水: 0, 雷: 0, 氷: 0, 龍: 0 },
          stun: 0,
          exhaust: 0,
        },
        {
          name: '右前脚',
          mellee: { slash: 24, impact: 30, shot: 24 },
          element: { 火: 25, 水: 0, 雷: 0, 氷: 0, 龍: 0 },
          stun: 0,
          exhaust: 0,
        },
        {
          name: '左後脚',
          mellee: { slash: 24, impact: 30, shot: 24 },
          element: { 火: 25, 水: 0, 雷: 0, 氷: 0, 龍: 0 },
          stun: 0,
          exhaust: 0,
        },
        {
          name: '右後脚',
          mellee: { slash: 24, impact: 30, shot: 24 },
          element: { 火: 25, 水: 0, 雷: 0, 氷: 0, 龍: 0 },
          stun: 0,
          exhaust: 0,
        },
        {
          name: '尻尾',
          mellee: { slash: 24, impact: 30, shot: 24 },
          element: { 火: 25, 水: 0, 雷: 0, 氷: 0, 龍: 0 },
          stun: 0,
          exhaust: 0,
        },
      ],
    },
  ],
  partDurabilities: [
    new PartDurability('頭部', 240),
    new PartDurability('鼻', 270),
    new PartDurability('胴', 450),
    new PartDurability('左前脚', 300),
    new PartDurability('右前脚', 300),
    new PartDurability('左後脚', 300),
    new PartDurability('右後脚', 300),
    new PartDurability('尻尾', 200),
  ],
  quests: gammothQuests,
}

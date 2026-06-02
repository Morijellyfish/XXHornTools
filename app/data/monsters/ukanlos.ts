import type { Monster } from '~/types/monster/monster'
import { PartDurability } from '~/types/monster/partDurability'
import { ukanlosQuests } from '../quest/ukanlos'

export const ukanlos: Monster = {
  name: 'ウカムルバス',
  species: '飛竜種',
  roar: { has: true, strength: '大' },
  windPressure: { has: false },
  tremor: true,
  hitZoneVariants: [
    {
      name: '通常時',
      hitZones: [
        {
          name: '頭',
          mellee: { slash: 45, impact: 45, shot: 65 },
          element: { 火: 20, 水: 5, 雷: 20, 氷: 0, 龍: 15 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '首',
          mellee: { slash: 20, impact: 30, shot: 20 },
          element: { 火: 15, 水: 5, 雷: 15, 氷: 0, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '上半身',
          mellee: { slash: 35, impact: 40, shot: 25 },
          element: { 火: 15, 水: 5, 雷: 15, 氷: 0, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '前脚',
          mellee: { slash: 20, impact: 25, shot: 15 },
          element: { 火: 20, 水: 5, 雷: 25, 氷: 0, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '後脚',
          mellee: { slash: 30, impact: 35, shot: 15 },
          element: { 火: 15, 水: 5, 雷: 15, 氷: 0, 龍: 15 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '腹部',
          mellee: { slash: 25, impact: 20, shot: 15 },
          element: { 火: 15, 水: 5, 雷: 10, 氷: 0, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻尾',
          mellee: { slash: 30, impact: 25, shot: 30 },
          element: { 火: 25, 水: 5, 雷: 10, 氷: 0, 龍: 15 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
    {
      name: '腹破壊後',
      hitZones: [
        {
          name: '頭',
          mellee: { slash: 50, impact: 45, shot: 70 },
          element: { 火: 25, 水: 5, 雷: 20, 氷: 0, 龍: 20 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '首',
          mellee: { slash: 30, impact: 40, shot: 30 },
          element: { 火: 15, 水: 5, 雷: 15, 氷: 0, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '上半身',
          mellee: { slash: 40, impact: 50, shot: 30 },
          element: { 火: 20, 水: 5, 雷: 15, 氷: 0, 龍: 15 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '前脚',
          mellee: { slash: 25, impact: 30, shot: 20 },
          element: { 火: 20, 水: 5, 雷: 25, 氷: 0, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '後脚',
          mellee: { slash: 30, impact: 35, shot: 20 },
          element: { 火: 15, 水: 5, 雷: 15, 氷: 0, 龍: 20 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '腹部',
          mellee: { slash: 30, impact: 25, shot: 15 },
          element: { 火: 20, 水: 5, 雷: 10, 氷: 0, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻尾',
          mellee: { slash: 30, impact: 30, shot: 40 },
          element: { 火: 25, 水: 5, 雷: 10, 氷: 0, 龍: 15 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
  ],
  partDurabilities: [
    new PartDurability('頭', 270),
    new PartDurability('腹', 120),
    new PartDurability('首・背中', 340),
    new PartDurability('尻尾', 280, 560),
    new PartDurability('左前脚', 200),
    new PartDurability('右前脚', 220),
    new PartDurability('左後脚', 200),
    new PartDurability('右後脚', 220),
  ],
  quests: ukanlosQuests,
}

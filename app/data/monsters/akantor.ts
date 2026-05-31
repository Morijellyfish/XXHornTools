import type { Monster } from '~/types/monster/monster'
import { PartDurability } from '~/types/monster/partDurability'
import { akantorQuests } from '../quest/akantor'

export const akantor: Monster = {
  name: 'アカムトルム',
  species: '飛竜種',
  hitZoneVariants: [
    {
      name: '通常時',
      hitZones: [
        {
          name: '頭',
          mellee: { slash: 50, impact: 50, shot: 60 },
          element: { 火: 0, 水: 5, 雷: 20, 氷: 0, 龍: 20 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '首',
          mellee: { slash: 35, impact: 30, shot: 20 },
          element: { 火: 0, 水: 5, 雷: 15, 氷: 0, 龍: 20 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '腹',
          mellee: { slash: 35, impact: 40, shot: 25 },
          element: { 火: 0, 水: 5, 雷: 15, 氷: 0, 龍: 15 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '背',
          mellee: { slash: 20, impact: 25, shot: 25 },
          element: { 火: 0, 水: 5, 雷: 15, 氷: 0, 龍: 20 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻尾',
          mellee: { slash: 30, impact: 25, shot: 30 },
          element: { 火: 0, 水: 5, 雷: 30, 氷: 0, 龍: 30 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '前脚',
          mellee: { slash: 25, impact: 35, shot: 15 },
          element: { 火: 0, 水: 5, 雷: 15, 氷: 5, 龍: 20 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '後脚',
          mellee: { slash: 30, impact: 30, shot: 15 },
          element: { 火: 0, 水: 5, 雷: 15, 氷: 0, 龍: 20 },
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
          mellee: { slash: 50, impact: 55, shot: 65 },
          element: { 火: 0, 水: 15, 雷: 20, 氷: 5, 龍: 25 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '首',
          mellee: { slash: 35, impact: 40, shot: 25 },
          element: { 火: 0, 水: 10, 雷: 15, 氷: 5, 龍: 20 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '腹',
          mellee: { slash: 45, impact: 50, shot: 30 },
          element: { 火: 10, 水: 25, 雷: 30, 氷: 10, 龍: 20 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '背',
          mellee: { slash: 40, impact: 35, shot: 35 },
          element: { 火: 0, 水: 15, 雷: 15, 氷: 5, 龍: 25 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻尾',
          mellee: { slash: 30, impact: 25, shot: 30 },
          element: { 火: 0, 水: 10, 雷: 30, 氷: 5, 龍: 30 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '前脚',
          mellee: { slash: 25, impact: 35, shot: 20 },
          element: { 火: 0, 水: 10, 雷: 15, 氷: 10, 龍: 25 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '後脚',
          mellee: { slash: 30, impact: 30, shot: 20 },
          element: { 火: 0, 水: 10, 雷: 15, 氷: 5, 龍: 20 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
  ],
  partDurabilities: [
    new PartDurability('頭', 260),
    new PartDurability('腹', 350),
    new PartDurability('首・背中', 180),
    new PartDurability('尻尾', 280, 560),
    new PartDurability('左前脚', 240),
    new PartDurability('右前脚', 220),
    new PartDurability('左後脚', 240),
    new PartDurability('右後脚', 220),
  ],
  quests: akantorQuests,
}

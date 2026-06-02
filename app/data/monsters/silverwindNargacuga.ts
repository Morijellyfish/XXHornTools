import type { Monster } from '~/types/monster/monster'

import { PartDurability } from '~/types/monster/partDurability'

import { silverwindNargacugaQuests } from '../quest/silverwindNargacuga'

export const silverwindNargacuga: Monster = {
  name: '白疾風ナルガクルガ',
  species: '飛竜種',
  roar: { has: true, strength: '小' },
  windPressure: { has: true, strength: '大' },
  tremor: false,
  hitZoneVariants: [
    {
      name: '通常時',

      hitZones: [
        {
          name: '頭',
          mellee: { slash: 40, impact: 45, shot: 40 },
          element: { 火: 20, 水: 10, 雷: 25, 氷: 15, 龍: 15 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '首・背',
          mellee: { slash: 36, impact: 40, shot: 30 },
          element: { 火: 15, 水: 5, 雷: 15, 氷: 5, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '腹',
          mellee: { slash: 25, impact: 25, shot: 25 },
          element: { 火: 5, 水: 0, 雷: 5, 氷: 0, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '刃翼',
          mellee: { slash: 20, impact: 20, shot: 20 },
          element: { 火: 25, 水: 5, 雷: 30, 氷: 10, 龍: 15 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '前脚',
          mellee: { slash: 24, impact: 24, shot: 25 },
          element: { 火: 5, 水: 5, 雷: 30, 氷: 10, 龍: 15 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '後脚',
          mellee: { slash: 30, impact: 30, shot: 25 },
          element: { 火: 10, 水: 5, 雷: 10, 氷: 5, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻尾',
          mellee: { slash: 25, impact: 22, shot: 30 },
          element: { 火: 5, 水: 0, 雷: 10, 氷: 0, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尾先',
          mellee: { slash: 20, impact: 20, shot: 25 },
          element: { 火: 25, 水: 5, 雷: 30, 氷: 10, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
    {
      name: '怒り時',

      hitZones: [
        {
          name: '頭',
          mellee: { slash: 55, impact: 55, shot: 60 },
          element: { 火: 20, 水: 10, 雷: 30, 氷: 15, 龍: 15 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '腹',
          mellee: { slash: 25, impact: 25, shot: 30 },
          element: { 火: 5, 水: 0, 雷: 5, 氷: 0, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '前脚',
          mellee: { slash: 24, impact: 24, shot: 25 },
          element: { 火: 5, 水: 0, 雷: 15, 氷: 0, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '後脚',
          mellee: { slash: 30, impact: 30, shot: 25 },
          element: { 火: 5, 水: 5, 雷: 10, 氷: 5, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻尾',
          mellee: { slash: 22, impact: 22, shot: 30 },
          element: { 火: 10, 水: 0, 雷: 15, 氷: 0, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尾先',
          mellee: { slash: 25, impact: 25, shot: 30 },
          element: { 火: 25, 水: 5, 雷: 30, 氷: 10, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
  ],
  partDurabilities: [
    new PartDurability('頭', 200),
    new PartDurability('胴', 240),
    new PartDurability('左刃翼', 110),
    new PartDurability('右刃翼', 110),
    new PartDurability('前脚', 180),
    new PartDurability('左後脚', 150),
    new PartDurability('右後脚', 150),
    new PartDurability('尻尾', 150, 300),
  ],
  quests: silverwindNargacugaQuests,
}

import type { Monster } from '~/types/monster/monster'

import { PartDurability } from '~/types/monster/partDurability'

import { silverRathalosQuests } from '../quest/silverRathalos'

export const silverRathalos: Monster = {
  name: 'リオレウス希少種',
  species: '飛竜種',
  roar: { has: true, strength: '大' },
  windPressure: { has: true, strength: '大' },
  tremor: false,
  hitZoneVariants: [
    {
      name: '通常時',

      hitZones: [
        {
          name: '頭',
          mellee: { slash: 20, impact: 20, shot: 15 },
          element: { 火: 0, 水: 35, 雷: 30, 氷: 20, 龍: 0 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '首',
          mellee: { slash: 15, impact: 15, shot: 15 },
          element: { 火: 0, 水: 35, 雷: 30, 氷: 20, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '背',
          mellee: { slash: 55, impact: 50, shot: 30 },
          element: { 火: 5, 水: 20, 雷: 15, 氷: 5, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '腹',
          mellee: { slash: 25, impact: 30, shot: 30 },
          element: { 火: 5, 水: 15, 雷: 10, 氷: 10, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '翼',
          mellee: { slash: 44, impact: 44, shot: 25 },
          element: { 火: 0, 水: 25, 雷: 15, 氷: 10, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '脚',
          mellee: { slash: 35, impact: 35, shot: 45 },
          element: { 火: 0, 水: 10, 雷: 10, 氷: 5, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻尾',
          mellee: { slash: 20, impact: 20, shot: 15 },
          element: { 火: 0, 水: 10, 雷: 5, 氷: 5, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尾先',
          mellee: { slash: 35, impact: 35, shot: 24 },
          element: { 火: 0, 水: 10, 雷: 10, 氷: 5, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
    {
      name: '頭部破壊後',

      hitZones: [
        {
          name: '頭',
          mellee: { slash: 45, impact: 45, shot: 30 },
          element: { 火: 0, 水: 15, 雷: 10, 氷: 5, 龍: 0 },
          stun: 100,
          exhaust: 100,
        },
      ],
    },
    {
      name: '獰猛化時',

      hitZones: [
        {
          name: '頭',
          mellee: { slash: 28, impact: 28, shot: 21 },
          element: { 火: 0, 水: 49, 雷: 42, 氷: 28, 龍: 0 },
          stun: 140,
          exhaust: 100,
        },
        {
          name: '尻尾',
          mellee: { slash: 24, impact: 24, shot: 18 },
          element: { 火: 0, 水: 12, 雷: 6, 氷: 6, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
    {
      name: '獰猛化時・頭部破壊後',

      hitZones: [
        {
          name: '頭',
          mellee: { slash: 63, impact: 63, shot: 42 },
          element: { 火: 0, 水: 21, 雷: 14, 氷: 7, 龍: 0 },
          stun: 140,
          exhaust: 100,
        },
        {
          name: '尻尾',
          mellee: { slash: 24, impact: 24, shot: 18 },
          element: { 火: 0, 水: 12, 雷: 6, 氷: 6, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
  ],
  partDurabilities: [
    new PartDurability('頭', 200, undefined, 300, 300),
    new PartDurability('首', 180, undefined, 270),
    new PartDurability('胴', 250, undefined, 375, 375),
    new PartDurability('左翼', 220, undefined, 330),
    new PartDurability('右翼', 220, undefined, 330),
    new PartDurability('左脚', 260, undefined, 390),
    new PartDurability('右脚', 260, undefined, 390, 390),
    new PartDurability('尻尾', 160, 280, 240, 240),
  ],
  quests: silverRathalosQuests,
}

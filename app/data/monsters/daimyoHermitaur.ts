import type { Monster } from '~/types/monster/monster'
import { PartDurability } from '~/types/monster/partDurability'
import { daimyoHermitaurQuests } from '../quest/daimyoHermitaur'

export const daimyoHermitaur: Monster = {
  name: 'ダイミョウザザミ',
  species: '甲殻種',
  hitZoneVariants: [
    {
      name: '通常時',
      hitZones: [
        {
          name: '頭',
          mellee: { slash: 50, impact: 60, shot: 45 },
          element: { 火: 30, 水: 10, 雷: 35, 氷: 20, 龍: 0 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '胴',
          mellee: { slash: 40, impact: 50, shot: 30 },
          element: { 火: 15, 水: 5, 雷: 20, 氷: 10, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: 'ヤド',
          mellee: { slash: 22, impact: 40, shot: 25 },
          element: { 火: 20, 水: 5, 雷: 25, 氷: 10, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '爪',
          mellee: { slash: 25, impact: 30, shot: 15 },
          element: { 火: 35, 水: 5, 雷: 20, 氷: 10, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '腕',
          mellee: { slash: 40, impact: 45, shot: 30 },
          element: { 火: 15, 水: 5, 雷: 15, 氷: 10, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '脚',
          mellee: { slash: 35, impact: 40, shot: 30 },
          element: { 火: 15, 水: 5, 雷: 15, 氷: 10, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
    {
      name: '部位破壊後',
      hitZones: [
        {
          name: '頭',
          mellee: { slash: 50, impact: 60, shot: 45 },
          element: { 火: 30, 水: 10, 雷: 35, 氷: 20, 龍: 0 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '胴',
          mellee: { slash: 40, impact: 50, shot: 30 },
          element: { 火: 15, 水: 5, 雷: 20, 氷: 10, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: 'ヤド',
          mellee: { slash: 30, impact: 40, shot: 25 },
          element: { 火: 35, 水: 5, 雷: 20, 氷: 10, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '爪',
          mellee: { slash: 30, impact: 40, shot: 25 },
          element: { 火: 35, 水: 5, 雷: 20, 氷: 10, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '腕',
          mellee: { slash: 40, impact: 45, shot: 30 },
          element: { 火: 15, 水: 5, 雷: 15, 氷: 10, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '脚',
          mellee: { slash: 35, impact: 40, shot: 30 },
          element: { 火: 15, 水: 5, 雷: 15, 氷: 10, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
  ],
  partDurabilities: [
    new PartDurability('頭', 170),
    new PartDurability('胴', 170),
    new PartDurability('腕', 100),
    new PartDurability('左爪', 120),
    new PartDurability('右爪', 120, undefined, 120, 156),
    new PartDurability('左脚', 180, undefined, 180, 216),
    new PartDurability('右脚', 180),
    new PartDurability('ヤド', 320, undefined, 320, 384),
  ],
  quests: daimyoHermitaurQuests,
}

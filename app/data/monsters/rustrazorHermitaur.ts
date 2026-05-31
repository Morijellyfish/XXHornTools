import type { Monster } from '~/types/monster/monster'
import { PartDurability } from '~/types/monster/partDurability'
import { rustrazorHermitaurQuests } from '../quest/rustrazorHermitaur'

export const rustrazorHermitaur: Monster = {
  name: '矛砕ダイミョウザザミ',
  species: '甲殻種',
  hitZoneVariants: [
    {
      name: '通常時',
      hitZones: [
        {
          name: '頭',
          mellee: { slash: 45, impact: 55, shot: 45 },
          element: { 火: 10, 水: 0, 雷: 20, 氷: 5, 龍: 0 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '胴',
          mellee: { slash: 30, impact: 35, shot: 25 },
          element: { 火: 5, 水: 0, 雷: 10, 氷: 5, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: 'ヤド',
          mellee: { slash: 15, impact: 20, shot: 15 },
          element: { 火: 5, 水: 0, 雷: 10, 氷: 25, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '左爪',
          mellee: { slash: 15, impact: 15, shot: 15 },
          element: { 火: 5, 水: 0, 雷: 20, 氷: 5, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '右爪',
          mellee: { slash: 20, impact: 22, shot: 15 },
          element: { 火: 5, 水: 0, 雷: 20, 氷: 5, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '腕',
          mellee: { slash: 30, impact: 35, shot: 25 },
          element: { 火: 5, 水: 0, 雷: 10, 氷: 5, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '左脚',
          mellee: { slash: 22, impact: 22, shot: 20 },
          element: { 火: 5, 水: 0, 雷: 15, 氷: 5, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '右脚',
          mellee: { slash: 22, impact: 22, shot: 20 },
          element: { 火: 5, 水: 0, 雷: 20, 氷: 5, 龍: 0 },
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
          mellee: { slash: 45, impact: 55, shot: 45 },
          element: { 火: 10, 水: 0, 雷: 20, 氷: 5, 龍: 0 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '胴',
          mellee: { slash: 30, impact: 35, shot: 25 },
          element: { 火: 5, 水: 0, 雷: 10, 氷: 5, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: 'ヤド',
          mellee: { slash: 30, impact: 35, shot: 25 },
          element: { 火: 5, 水: 0, 雷: 0, 氷: 25, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '左爪',
          mellee: { slash: 35, impact: 35, shot: 25 },
          element: { 火: 5, 水: 0, 雷: 15, 氷: 5, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '右爪',
          mellee: { slash: 30, impact: 35, shot: 25 },
          element: { 火: 5, 水: 0, 雷: 20, 氷: 5, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '腕',
          mellee: { slash: 30, impact: 35, shot: 25 },
          element: { 火: 5, 水: 0, 雷: 10, 氷: 5, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '左脚',
          mellee: { slash: 35, impact: 35, shot: 25 },
          element: { 火: 5, 水: 0, 雷: 15, 氷: 5, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '右脚',
          mellee: { slash: 30, impact: 35, shot: 25 },
          element: { 火: 5, 水: 0, 雷: 20, 氷: 5, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
  ],
  partDurabilities: [
    new PartDurability('頭', 170),
    new PartDurability('胴', 170),
    new PartDurability('腕', 150),
    new PartDurability('左爪', 320),
    new PartDurability('右爪', 180),
    new PartDurability('左脚', 250),
    new PartDurability('右脚', 250),
    new PartDurability('ヤド', 320),
  ],
  quests: rustrazorHermitaurQuests,
}

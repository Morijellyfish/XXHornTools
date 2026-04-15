import type { Monster } from '~/types/monster/monster'
import { PartDurability } from '~/types/monster/partDurability'
import { kushalaQuests } from '../quest/kushala'

export const kushala: Monster = {
  name: 'クシャルダオラ',
  species: '古龍種',
  hitZoneVariants: [
    {
      name: '通常時',
      hitZones: [
        {
          name: '頭部',
          mellee: { slash: 50, impact: 45, shot: 40 },
          element: { 火: 10, 水: 5, 雷: 30, 氷: 0, 龍: 35 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '首',
          mellee: { slash: 45, impact: 40, shot: 30 },
          element: { 火: 10, 水: 5, 雷: 20, 氷: 0, 龍: 25 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '腹部',
          mellee: { slash: 35, impact: 50, shot: 25 },
          element: { 火: 10, 水: 5, 雷: 15, 氷: 0, 龍: 20 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '背熱殻',
          mellee: { slash: 20, impact: 25, shot: 30 },
          element: { 火: 10, 水: 5, 雷: 15, 氷: 0, 龍: 20 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '翼',
          mellee: { slash: 20, impact: 15, shot: 20 },
          element: { 火: 10, 水: 5, 雷: 15, 氷: 0, 龍: 20 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '前脚',
          mellee: { slash: 35, impact: 30, shot: 20 },
          element: { 火: 10, 水: 5, 雷: 20, 氷: 0, 龍: 20 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '後脚',
          mellee: { slash: 35, impact: 35, shot: 25 },
          element: { 火: 10, 水: 5, 雷: 15, 氷: 0, 龍: 20 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻尾',
          mellee: { slash: 35, impact: 30, shot: 40 },
          element: { 火: 10, 水: 5, 雷: 30, 氷: 0, 龍: 30 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
    {
      name: '風纏い',
      hitZones: [
        {
          name: '頭部',
          mellee: { slash: 45, impact: 40, shot: 35 },
          element: { 火: 15, 水: 5, 雷: 35, 氷: 0, 龍: 40 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '首',
          mellee: { slash: 40, impact: 40, shot: 30 },
          element: { 火: 10, 水: 5, 雷: 25, 氷: 0, 龍: 35 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '腹部',
          mellee: { slash: 25, impact: 40, shot: 25 },
          element: { 火: 5, 水: 0, 雷: 20, 氷: 0, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '背熱殻',
          mellee: { slash: 20, impact: 25, shot: 20 },
          element: { 火: 5, 水: 0, 雷: 20, 氷: 0, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '翼',
          mellee: { slash: 20, impact: 15, shot: 20 },
          element: { 火: 5, 水: 0, 雷: 20, 氷: 0, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '前脚',
          mellee: { slash: 30, impact: 25, shot: 20 },
          element: { 火: 5, 水: 0, 雷: 25, 氷: 0, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '後脚',
          mellee: { slash: 30, impact: 30, shot: 25 },
          element: { 火: 5, 水: 0, 雷: 20, 氷: 0, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻尾',
          mellee: { slash: 35, impact: 30, shot: 40 },
          element: { 火: 5, 水: 0, 雷: 30, 氷: 0, 龍: 40 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
  ],
  partDurabilities: [
    new PartDurability('頭', 260),
    new PartDurability('胴', 100),
    new PartDurability('翼', 90),
    new PartDurability('左脚', 150),
    new PartDurability('右脚', 150),
    new PartDurability('尻尾', 180, 550),
  ],
  quests: kushalaQuests,
}

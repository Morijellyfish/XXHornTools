import type { Monster } from '~/types/monster/monster'
import { PartDurability } from '~/types/monster/partDurability'
import { teostraQuests } from '../quest/teostra'

export const teostra: Monster = {
  name: 'テオ・テスカトル',
  species: '古龍種',
  hitZoneVariants: [
    {
      name: '通常時',
      hitZones: [
        {
          name: '頭部',
          mellee: { slash: 50, impact: 50, shot: 45 },
          element: { 火: 0, 水: 25, 雷: 10, 氷: 15, 龍: 10 },
          stun: 100,
          exhaust: 0,
        },
        {
          name: '腹部',
          mellee: { slash: 25, impact: 40, shot: 20 },
          element: { 火: 0, 水: 10, 雷: 5, 氷: 10, 龍: 5 },
          stun: 0,
          exhaust: 0,
        },
        {
          name: '背',
          mellee: { slash: 25, impact: 25, shot: 25 },
          element: { 火: 0, 水: 5, 雷: 5, 氷: 5, 龍: 5 },
          stun: 0,
          exhaust: 0,
        },
        {
          name: '翼',
          mellee: { slash: 20, impact: 20, shot: 10 },
          element: { 火: 0, 水: 5, 雷: 5, 氷: 5, 龍: 5 },
          stun: 0,
          exhaust: 0,
        },
        {
          name: '前脚',
          mellee: { slash: 25, impact: 25, shot: 20 },
          element: { 火: 0, 水: 15, 雷: 5, 氷: 10, 龍: 5 },
          stun: 0,
          exhaust: 0,
        },
        {
          name: '後脚',
          mellee: { slash: 45, impact: 45, shot: 30 },
          element: { 火: 0, 水: 10, 雷: 5, 氷: 15, 龍: 5 },
          stun: 0,
          exhaust: 0,
        },
        {
          name: '尻尾',
          mellee: { slash: 45, impact: 25, shot: 60 },
          element: { 火: 0, 水: 10, 雷: 5, 氷: 25, 龍: 15 },
          stun: 0,
          exhaust: 0,
        },
      ],
    },
    {
      name: '怒り時',
      hitZones: [
        {
          name: '頭部',
          mellee: { slash: 60, impact: 55, shot: 50 },
          element: { 火: 0, 水: 15, 雷: 10, 氷: 10, 龍: 25 },
          stun: 120,
          exhaust: 0,
        },
        {
          name: '腹部',
          mellee: { slash: 30, impact: 45, shot: 25 },
          element: { 火: 0, 水: 10, 雷: 5, 氷: 5, 龍: 10 },
          stun: 0,
          exhaust: 0,
        },
        {
          name: '背',
          mellee: { slash: 25, impact: 25, shot: 25 },
          element: { 火: 0, 水: 5, 雷: 5, 氷: 5, 龍: 10 },
          stun: 0,
          exhaust: 0,
        },
        {
          name: '翼',
          mellee: { slash: 20, impact: 20, shot: 10 },
          element: { 火: 0, 水: 5, 雷: 5, 氷: 5, 龍: 10 },
          stun: 0,
          exhaust: 0,
        },
        {
          name: '前脚',
          mellee: { slash: 35, impact: 35, shot: 30 },
          element: { 火: 0, 水: 15, 雷: 5, 氷: 5, 龍: 10 },
          stun: 0,
          exhaust: 0,
        },
        {
          name: '後脚',
          mellee: { slash: 55, impact: 45, shot: 35 },
          element: { 火: 0, 水: 5, 雷: 5, 氷: 15, 龍: 10 },
          stun: 0,
          exhaust: 0,
        },
        {
          name: '尻尾',
          mellee: { slash: 55, impact: 35, shot: 65 },
          element: { 火: 0, 水: 10, 雷: 5, 氷: 20, 龍: 25 },
          stun: 0,
          exhaust: 0,
        },
      ],
    },
  ],
  partDurabilities: [
    new PartDurability('頭', 320),
    new PartDurability('胴', 150),
    new PartDurability('翼', 100),
    new PartDurability('左脚', 260),
    new PartDurability('右脚', 260),
    new PartDurability('尻尾', 160, 550),
  ],
  quests: teostraQuests,
}

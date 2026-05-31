import type { Monster } from '~/types/monster/monster'
import { PartDurability } from '~/types/monster/partDurability'
import { whiteFatalisQuests } from '../quest/whiteFatalis'

export const whiteFatalis: Monster = {
  name: 'ミラルーツ',
  species: '古龍種',
  hitZoneVariants: [
    {
      name: '通常時',
      hitZones: [
        {
          name: '頭',
          mellee: { slash: 55, impact: 50, shot: 40 },
          element: { 火: 15, 水: 5, 雷: 5, 氷: 10, 龍: 30 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '首',
          mellee: { slash: 45, impact: 45, shot: 30 },
          element: { 火: 15, 水: 5, 雷: 5, 氷: 10, 龍: 25 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '胸',
          mellee: { slash: 25, impact: 20, shot: 10 },
          element: { 火: 15, 水: 5, 雷: 5, 氷: 10, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '背中',
          mellee: { slash: 30, impact: 25, shot: 20 },
          element: { 火: 15, 水: 5, 雷: 5, 氷: 10, 龍: 15 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '翼',
          mellee: { slash: 35, impact: 21, shot: 15 },
          element: { 火: 15, 水: 5, 雷: 5, 氷: 10, 龍: 15 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '前脚・後脚先端',
          mellee: { slash: 30, impact: 30, shot: 25 },
          element: { 火: 15, 水: 5, 雷: 5, 氷: 10, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '後脚膝上',
          mellee: { slash: 30, impact: 25, shot: 20 },
          element: { 火: 15, 水: 5, 雷: 5, 氷: 10, 龍: 20 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻尾',
          mellee: { slash: 10, impact: 15, shot: 10 },
          element: { 火: 15, 水: 5, 雷: 5, 氷: 10, 龍: 10 },
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
          mellee: { slash: 85, impact: 80, shot: 70 },
          element: { 火: 10, 水: 5, 雷: 5, 氷: 10, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '首',
          mellee: { slash: 55, impact: 55, shot: 55 },
          element: { 火: 10, 水: 5, 雷: 5, 氷: 10, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '胸',
          mellee: { slash: 55, impact: 50, shot: 40 },
          element: { 火: 10, 水: 5, 雷: 5, 氷: 10, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '背中',
          mellee: { slash: 25, impact: 20, shot: 15 },
          element: { 火: 10, 水: 5, 雷: 5, 氷: 10, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '翼',
          mellee: { slash: 25, impact: 16, shot: 10 },
          element: { 火: 10, 水: 5, 雷: 5, 氷: 10, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '前脚・後脚先端',
          mellee: { slash: 15, impact: 15, shot: 15 },
          element: { 火: 10, 水: 5, 雷: 5, 氷: 10, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '後脚膝上',
          mellee: { slash: 10, impact: 10, shot: 10 },
          element: { 火: 10, 水: 5, 雷: 5, 氷: 10, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻尾',
          mellee: { slash: 10, impact: 10, shot: 10 },
          element: { 火: 10, 水: 5, 雷: 5, 氷: 10, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
  ],
  partDurabilities: [
    new PartDurability('頭', 500, 96),
    new PartDurability('首', 400),
    new PartDurability('翼', 400),
    new PartDurability('胴', 700, 205),
    new PartDurability('背', 200),
    new PartDurability('腕', 450),
    new PartDurability('脚', 400),
    new PartDurability('尻尾', 240),
  ],
  quests: whiteFatalisQuests,
}

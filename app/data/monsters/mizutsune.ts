import type { Monster } from '~/types/monster/monster'
import { PartDurability } from '~/types/monster/partDurability'
import { mizutsuneQuests } from '../quest/mizutsune'

export const mizutsune: Monster = {
  name: 'タマミツネ',
  species: '海竜種',
  hitZoneVariants: [
    {
      name: '通常時',
      hitZones: [
        {
          name: '頭部',
          mellee: { slash: 63, impact: 63, shot: 45 },
          element: { 火: 5, 水: 0, 雷: 10, 氷: 5, 龍: 8 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '首',
          mellee: { slash: 43, impact: 43, shot: 40 },
          element: { 火: 8, 水: 0, 雷: 10, 氷: 5, 龍: 8 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '胴',
          mellee: { slash: 25, impact: 25, shot: 20 },
          element: { 火: 5, 水: 0, 雷: 10, 氷: 5, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '背ビレ',
          mellee: { slash: 43, impact: 43, shot: 45 },
          element: { 火: 8, 水: 0, 雷: 15, 氷: 5, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '前脚',
          mellee: { slash: 21, impact: 21, shot: 10 },
          element: { 火: 5, 水: 0, 雷: 35, 氷: 15, 龍: 30 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '後脚',
          mellee: { slash: 38, impact: 38, shot: 25 },
          element: { 火: 5, 水: 0, 雷: 10, 氷: 5, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻尾',
          mellee: { slash: 43, impact: 33, shot: 40 },
          element: { 火: 5, 水: 0, 雷: 10, 氷: 5, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
    {
      name: '怒り時',
      hitZones: [
        {
          name: '頭部',
          mellee: { slash: 63, impact: 63, shot: 45 },
          element: { 火: 10, 水: 0, 雷: 15, 氷: 5, 龍: 10 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '首',
          mellee: { slash: 43, impact: 43, shot: 40 },
          element: { 火: 10, 水: 0, 雷: 15, 氷: 5, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '胴',
          mellee: { slash: 25, impact: 25, shot: 20 },
          element: { 火: 5, 水: 0, 雷: 15, 氷: 5, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '背ビレ',
          mellee: { slash: 43, impact: 43, shot: 45 },
          element: { 火: 10, 水: 0, 雷: 20, 氷: 5, 龍: 15 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '前脚',
          mellee: { slash: 28, impact: 28, shot: 10 },
          element: { 火: 10, 水: 0, 雷: 15, 氷: 5, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '後脚',
          mellee: { slash: 38, impact: 38, shot: 30 },
          element: { 火: 10, 水: 0, 雷: 15, 氷: 5, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻尾',
          mellee: { slash: 43, impact: 33, shot: 40 },
          element: { 火: 5, 水: 0, 雷: 15, 氷: 5, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
  ],
  partDurabilities: [
    new PartDurability('頭', 270),
    new PartDurability('背ビレ', 250),
    new PartDurability('胴', 280),
    new PartDurability('左前脚', 160),
    new PartDurability('右前脚', 160),
    new PartDurability('左後脚', 250),
    new PartDurability('右後脚', 250),
    new PartDurability('尻尾', 400, 550),
  ],
  quests: mizutsuneQuests,
}

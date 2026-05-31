import type { Monster } from '~/types/monster/monster'
import { PartDurability } from '~/types/monster/partDurability'
import { agnaktorQuests } from '../quest/agnaktor'

export const agnaktor: Monster = {
  name: 'アグナコトル',
  species: '海竜種',
  hitZoneVariants: [
    {
      name: '通常時',
      hitZones: [
        {
          name: '頭',
          mellee: { slash: 20, impact: 20, shot: 15 },
          element: { 火: 10, 水: 30, 雷: 15, 氷: 25, 龍: 0 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '首',
          mellee: { slash: 20, impact: 20, shot: 15 },
          element: { 火: 10, 水: 15, 雷: 0, 氷: 15, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '胸',
          mellee: { slash: 15, impact: 15, shot: 15 },
          element: { 火: 10, 水: 25, 雷: 10, 氷: 20, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '背中',
          mellee: { slash: 15, impact: 15, shot: 15 },
          element: { 火: 10, 水: 20, 雷: 0, 氷: 20, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '背ビレ',
          mellee: { slash: 20, impact: 24, shot: 20 },
          element: { 火: 5, 水: 15, 雷: 10, 氷: 10, 龍: 20 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '脚',
          mellee: { slash: 15, impact: 15, shot: 15 },
          element: { 火: 10, 水: 20, 雷: 0, 氷: 15, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻尾',
          mellee: { slash: 20, impact: 20, shot: 15 },
          element: { 火: 10, 水: 20, 雷: 5, 氷: 15, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
    {
      name: '溶岩まとい時',
      hitZones: [
        {
          name: '頭',
          mellee: { slash: 55, impact: 60, shot: 50 },
          element: { 火: 0, 水: 30, 雷: 25, 氷: 20, 龍: 35 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '首',
          mellee: { slash: 40, impact: 35, shot: 30 },
          element: { 火: 0, 水: 15, 雷: 10, 氷: 15, 龍: 20 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '胸',
          mellee: { slash: 50, impact: 45, shot: 45 },
          element: { 火: 0, 水: 25, 雷: 20, 氷: 20, 龍: 30 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '背中',
          mellee: { slash: 40, impact: 44, shot: 35 },
          element: { 火: 0, 水: 20, 雷: 10, 氷: 15, 龍: 30 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '背ビレ',
          mellee: { slash: 35, impact: 24, shot: 20 },
          element: { 火: 5, 水: 15, 雷: 10, 氷: 10, 龍: 20 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '脚',
          mellee: { slash: 35, impact: 35, shot: 25 },
          element: { 火: 0, 水: 20, 雷: 10, 氷: 15, 龍: 25 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻尾',
          mellee: { slash: 35, impact: 30, shot: 25 },
          element: { 火: 0, 水: 20, 雷: 15, 氷: 15, 龍: 25 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
  ],
  partDurabilities: [
    new PartDurability('頭', 200, 400),
    new PartDurability('胸', 250),
    new PartDurability('体・背', 300, 360),
    new PartDurability('左前脚', 200, 400),
    new PartDurability('右前脚', 200, 400),
    new PartDurability('左後脚', 200),
    new PartDurability('右後脚', 200),
    new PartDurability('尻尾', 160, 350),
  ],
  quests: agnaktorQuests,
}

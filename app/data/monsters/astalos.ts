import type { Monster } from '~/types/monster/monster'
import { PartDurability } from '~/types/monster/partDurability'
import { astalosQuests } from '../quest/astalos'

export const astalos: Monster = {
  name: 'ライゼクス',
  hitZoneVariants: [
    {
      name: '通常時',
      hitZones: [
        {
          name: '頭部',
          mellee: { slash: 55, impact: 55, shot: 30 },
          element: { 火: 5, 水: 5, 雷: 0, 氷: 5, 龍: 5 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '腹部',
          mellee: { slash: 24, impact: 24, shot: 15 },
          element: { 火: 10, 水: 10, 雷: 0, 氷: 20, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '背熱殻',
          mellee: { slash: 25, impact: 25, shot: 20 },
          element: { 火: 5, 水: 5, 雷: 0, 氷: 5, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '翼',
          mellee: { slash: 25, impact: 25, shot: 20 },
          element: { 火: 5, 水: 5, 雷: 0, 氷: 5, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '脚',
          mellee: { slash: 25, impact: 25, shot: 15 },
          element: { 火: 10, 水: 10, 雷: 0, 氷: 15, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻尾',
          mellee: { slash: 35, impact: 35, shot: 20 },
          element: { 火: 10, 水: 10, 雷: 0, 氷: 20, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻尾先端',
          mellee: { slash: 43, impact: 43, shot: 25 },
          element: { 火: 10, 水: 12, 雷: 0, 氷: 20, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
    {
      name: '電荷時',
      hitZones: [
        {
          name: '頭部',
          mellee: { slash: 63, impact: 63, shot: 50 },
          element: { 火: 10, 水: 10, 雷: 0, 氷: 15, 龍: 5 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '腹部',
          mellee: { slash: 24, impact: 24, shot: 15 },
          element: { 火: 10, 水: 10, 雷: 0, 氷: 20, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '背熱殻',
          mellee: { slash: 25, impact: 25, shot: 20 },
          element: { 火: 5, 水: 5, 雷: 0, 氷: 5, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '翼',
          mellee: { slash: 55, impact: 55, shot: 40 },
          element: { 火: 10, 水: 12, 雷: 0, 氷: 15, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '脚',
          mellee: { slash: 25, impact: 25, shot: 15 },
          element: { 火: 10, 水: 10, 雷: 0, 氷: 15, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻尾',
          mellee: { slash: 35, impact: 35, shot: 20 },
          element: { 火: 10, 水: 10, 雷: 0, 氷: 20, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻尾先端',
          mellee: { slash: 55, impact: 55, shot: 45 },
          element: { 火: 10, 水: 20, 雷: 0, 氷: 25, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
  ],
  partDurabilities: [
    new PartDurability('頭部', 200),
    new PartDurability('左翼', 180),
    new PartDurability('右翼', 360),
    new PartDurability('胴', 360),
    new PartDurability('左脚', 210),
    new PartDurability('右脚', 210),
    new PartDurability('尻尾根本', 150),
    new PartDurability('尻尾', 200, 450),
  ],
  quests: astalosQuests,
}

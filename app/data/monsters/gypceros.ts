import type { Monster } from '~/types/monster/monster'
import { PartDurability } from '~/types/monster/partDurability'
import { gypcerosQuests } from '../quest/gypceros'

export const gypceros: Monster = {
  name: 'ゲリョス',
  species: '鳥竜種',
  hitZoneVariants: [
    {
      name: '通常時',
      hitZones: [
        {
          name: '頭',
          mellee: { slash: 45, impact: 65, shot: 70 },
          element: { 火: 30, 水: 10, 雷: 0, 氷: 20, 龍: 10 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '首',
          mellee: { slash: 50, impact: 25, shot: 40 },
          element: { 火: 20, 水: 5, 雷: 0, 氷: 10, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '腹',
          mellee: { slash: 45, impact: 30, shot: 20 },
          element: { 火: 20, 水: 5, 雷: 0, 氷: 10, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '背中',
          mellee: { slash: 45, impact: 30, shot: 20 },
          element: { 火: 10, 水: 5, 雷: 0, 氷: 10, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '翼',
          mellee: { slash: 42, impact: 30, shot: 30 },
          element: { 火: 20, 水: 10, 雷: 0, 氷: 20, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '脚',
          mellee: { slash: 36, impact: 36, shot: 30 },
          element: { 火: 10, 水: 5, 雷: 0, 氷: 10, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻尾',
          mellee: { slash: 70, impact: 40, shot: 80 },
          element: { 火: 20, 水: 5, 雷: 0, 氷: 10, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
    {
      name: '上位・G級時',
      hitZones: [
        {
          name: '頭',
          mellee: { slash: 42, impact: 55, shot: 45 },
          element: { 火: 30, 水: 10, 雷: 0, 氷: 20, 龍: 10 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '首',
          mellee: { slash: 50, impact: 25, shot: 40 },
          element: { 火: 20, 水: 5, 雷: 0, 氷: 10, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '腹',
          mellee: { slash: 45, impact: 30, shot: 20 },
          element: { 火: 20, 水: 5, 雷: 0, 氷: 10, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '背中',
          mellee: { slash: 45, impact: 30, shot: 20 },
          element: { 火: 10, 水: 5, 雷: 0, 氷: 10, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '翼',
          mellee: { slash: 42, impact: 30, shot: 30 },
          element: { 火: 20, 水: 10, 雷: 0, 氷: 20, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '脚',
          mellee: { slash: 25, impact: 25, shot: 30 },
          element: { 火: 10, 水: 5, 雷: 0, 氷: 10, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻尾',
          mellee: { slash: 70, impact: 40, shot: 80 },
          element: { 火: 20, 水: 5, 雷: 0, 氷: 10, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
  ],
  partDurabilities: [
    new PartDurability('頭', 220, undefined, 330, 330),
    new PartDurability('首', 100, undefined, 150),
    new PartDurability('胴', 170, undefined, 255),
    new PartDurability('左翼', 120, undefined, 180),
    new PartDurability('右翼', 120, undefined, 180),
    new PartDurability('左脚', 130, undefined, 195, 156),
    new PartDurability('右脚', 130, undefined, 195, 156),
    new PartDurability('尻尾', 130, undefined, 195),
  ],
  quests: gypcerosQuests,
}

import type { Monster } from '~/types/monster/monster'
import { PartDurability } from '~/types/monster/partDurability'
import { rathalosQuests } from '../quest/rathalos'

export const rathalos: Monster = {
  name: 'リオレウス',
  species: '飛竜種',
  hitZoneVariants: [
    {
      name: '通常時',
      hitZones: [
        {
          name: '頭',
          mellee: { slash: 65, impact: 65, shot: 55 },
          element: { 火: 0, 水: 10, 雷: 15, 氷: 10, 龍: 20 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '首',
          mellee: { slash: 30, impact: 30, shot: 20 },
          element: { 火: 0, 水: 10, 雷: 10, 氷: 10, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '背',
          mellee: { slash: 25, impact: 30, shot: 20 },
          element: { 火: 15, 水: 10, 雷: 20, 氷: 10, 龍: 25 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '腹',
          mellee: { slash: 40, impact: 50, shot: 15 },
          element: { 火: 0, 水: 5, 雷: 20, 氷: 5, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻尾',
          mellee: { slash: 45, impact: 40, shot: 25 },
          element: { 火: 0, 水: 5, 雷: 10, 氷: 5, 龍: 20 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '翼',
          mellee: { slash: 25, impact: 20, shot: 25 },
          element: { 火: 0, 水: 10, 雷: 25, 氷: 10, 龍: 35 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '脚',
          mellee: { slash: 30, impact: 25, shot: 45 },
          element: { 火: 0, 水: 5, 雷: 10, 氷: 5, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
    {
      name: '獰猛化時',
      hitZones: [
        {
          name: '頭',
          mellee: { slash: 65, impact: 65, shot: 55 },
          element: { 火: 0, 水: 10, 雷: 15, 氷: 10, 龍: 20 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '首',
          mellee: { slash: 30, impact: 30, shot: 20 },
          element: { 火: 0, 水: 10, 雷: 10, 氷: 10, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '背',
          mellee: { slash: 25, impact: 30, shot: 20 },
          element: { 火: 15, 水: 10, 雷: 20, 氷: 10, 龍: 25 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '腹',
          mellee: { slash: 40, impact: 50, shot: 15 },
          element: { 火: 0, 水: 5, 雷: 20, 氷: 5, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻尾',
          mellee: { slash: 45, impact: 40, shot: 25 },
          element: { 火: 0, 水: 5, 雷: 10, 氷: 5, 龍: 20 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '翼',
          mellee: { slash: 25, impact: 20, shot: 25 },
          element: { 火: 0, 水: 10, 雷: 25, 氷: 10, 龍: 35 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '脚',
          mellee: { slash: 30, impact: 25, shot: 45 },
          element: { 火: 0, 水: 5, 雷: 10, 氷: 5, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
  ],
  partDurabilities: [
    new PartDurability('頭', 230, undefined, 345, 345),
    new PartDurability('首', 90, undefined, 135),
    new PartDurability('胴', 150, undefined, 225, 225),
    new PartDurability('左翼', 100, undefined, 150),
    new PartDurability('右翼', 100, undefined, 150),
    new PartDurability('左脚', 190, undefined, 285, 285),
    new PartDurability('右脚', 190, undefined, 285, 285),
    new PartDurability('尻尾', 120, 320, 180, 180),
  ],
  quests: rathalosQuests,
}

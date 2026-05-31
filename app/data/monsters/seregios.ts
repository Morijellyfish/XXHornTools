import type { Monster } from '~/types/monster/monster'

import { PartDurability } from '~/types/monster/partDurability'

import { seregiosQuests } from '../quest/seregios'

export const seregios: Monster = {
  name: 'セルレギオス',
  species: '飛竜種',
  hitZoneVariants: [
    {
      name: '通常時',

      hitZones: [
        {
          name: '頭',
          mellee: { slash: 42, impact: 45, shot: 45 },
          element: { 火: 0, 水: 10, 雷: 25, 氷: 15, 龍: 5 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '首',
          mellee: { slash: 45, impact: 45, shot: 50 },
          element: { 火: 0, 水: 10, 雷: 15, 氷: 10, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '背',
          mellee: { slash: 35, impact: 30, shot: 25 },
          element: { 火: 15, 水: 10, 雷: 15, 氷: 10, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '腹',
          mellee: { slash: 60, impact: 55, shot: 55 },
          element: { 火: 0, 水: 5, 雷: 10, 氷: 5, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '翼',
          mellee: { slash: 31, impact: 31, shot: 31 },
          element: { 火: 0, 水: 10, 雷: 25, 氷: 10, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '前脚',
          mellee: { slash: 22, impact: 22, shot: 15 },
          element: { 火: 0, 水: 10, 雷: 25, 氷: 10, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '後脚',
          mellee: { slash: 45, impact: 40, shot: 40 },
          element: { 火: 0, 水: 5, 雷: 10, 氷: 10, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻尾',
          mellee: { slash: 35, impact: 35, shot: 35 },
          element: { 火: 0, 水: 5, 雷: 10, 氷: 5, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
    {
      name: '部位破壊後',

      hitZones: [
        {
          name: '前脚',
          mellee: { slash: 24, impact: 24, shot: 20 },
          element: { 火: 0, 水: 10, 雷: 25, 氷: 10, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
    {
      name: '獰猛化時',

      hitZones: [
        {
          name: '後脚',
          mellee: { slash: 49, impact: 44, shot: 44 },
          element: { 火: 0, 水: 5, 雷: 11, 氷: 11, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
    {
      name: '獰猛化時・部位破壊後',

      hitZones: [
        {
          name: '前脚',
          mellee: { slash: 24, impact: 24, shot: 20 },
          element: { 火: 0, 水: 10, 雷: 25, 氷: 10, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '後脚',
          mellee: { slash: 49, impact: 44, shot: 44 },
          element: { 火: 0, 水: 5, 雷: 11, 氷: 11, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
  ],
  partDurabilities: [
    new PartDurability('頭', 200, undefined, 320, 200),
    new PartDurability('首', 200, undefined, 240),
    new PartDurability('胴', 190, undefined, 304),
    new PartDurability('左翼', 200, undefined, 320),
    new PartDurability('右翼', 250, undefined, 320),
    new PartDurability('左脚', 250, undefined, 400, 550),
    new PartDurability('右脚', 150, undefined, 400, 550),
    new PartDurability('尻尾', 150, 300, 240),
  ],
  quests: seregiosQuests,
}

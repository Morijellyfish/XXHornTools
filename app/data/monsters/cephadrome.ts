import type { Monster } from '~/types/monster/monster'
import { PartDurability } from '~/types/monster/partDurability'
import { cephadromeQuests } from '../quest/cephadrome'

export const cephadrome: Monster = {
  name: 'ドスガレオス',
  species: '魚竜種',
  roar: { has: false },
  windPressure: { has: false },
  tremor: false,
  hitZoneVariants: [
    {
      name: '通常時',
      hitZones: [
        {
          name: '頭',
          mellee: { slash: 35, impact: 40, shot: 50 },
          element: { 火: 0, 水: 10, 雷: 15, 氷: 30, 龍: 5 },
          stun: 80,
          exhaust: 100,
        },
        {
          name: '首',
          mellee: { slash: 65, impact: 60, shot: 80 },
          element: { 火: 5, 水: 10, 雷: 15, 氷: 15, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '腹',
          mellee: { slash: 50, impact: 55, shot: 50 },
          element: { 火: 0, 水: 15, 雷: 15, 氷: 20, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '背',
          mellee: { slash: 60, impact: 50, shot: 80 },
          element: { 火: 0, 水: 12, 雷: 20, 氷: 17, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '翼膜',
          mellee: { slash: 45, impact: 42, shot: 50 },
          element: { 火: 0, 水: 10, 雷: 10, 氷: 15, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '脚',
          mellee: { slash: 42, impact: 44, shot: 40 },
          element: { 火: 0, 水: 10, 雷: 10, 氷: 15, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻尾',
          mellee: { slash: 35, impact: 35, shot: 35 },
          element: { 火: 0, 水: 15, 雷: 10, 氷: 20, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
  ],
  partDurabilities: [
    new PartDurability('頭', 130),
    new PartDurability('首', 100),
    new PartDurability('胴', 200),
    new PartDurability('左翼', 110),
    new PartDurability('右翼', 110),
    new PartDurability('左脚', 170),
    new PartDurability('右脚', 170),
    new PartDurability('尻尾', 100),
  ],
  quests: cephadromeQuests,
}

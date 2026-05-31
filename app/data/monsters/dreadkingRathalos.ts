import type { Monster } from '~/types/monster/monster'
import { PartDurability } from '~/types/monster/partDurability'
import { dreadkingRathalosQuests } from '../quest/dreadkingRathalos'

export const dreadkingRathalos: Monster = {
  name: '黒炎王リオレウス',
  species: '飛竜種',
  hitZoneVariants: [
    {
      name: '通常時',
      hitZones: [
        {
          name: '頭',
          mellee: { slash: 45, impact: 40, shot: 30 },
          element: { 火: 0, 水: 5, 雷: 10, 氷: 5, 龍: 20 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '首',
          mellee: { slash: 38, impact: 38, shot: 30 },
          element: { 火: 5, 水: 10, 雷: 15, 氷: 10, 龍: 15 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '背',
          mellee: { slash: 21, impact: 21, shot: 15 },
          element: { 火: 5, 水: 5, 雷: 20, 氷: 5, 龍: 25 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '腹',
          mellee: { slash: 24, impact: 24, shot: 18 },
          element: { 火: 0, 水: 5, 雷: 15, 氷: 5, 龍: 15 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '翼',
          mellee: { slash: 24, impact: 21, shot: 25 },
          element: { 火: 0, 水: 10, 雷: 20, 氷: 10, 龍: 25 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '脚',
          mellee: { slash: 24, impact: 21, shot: 20 },
          element: { 火: 0, 水: 5, 雷: 10, 氷: 5, 龍: 15 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻尾',
          mellee: { slash: 40, impact: 35, shot: 30 },
          element: { 火: 5, 水: 5, 雷: 10, 氷: 5, 龍: 15 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尾先',
          mellee: { slash: 20, impact: 20, shot: 15 },
          element: { 火: 0, 水: 5, 雷: 10, 氷: 5, 龍: 15 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
    {
      name: '部位破壊後',
      hitZones: [
        {
          name: '頭',
          mellee: { slash: 55, impact: 50, shot: 35 },
          element: { 火: 0, 水: 10, 雷: 10, 氷: 10, 龍: 20 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '首',
          mellee: { slash: 40, impact: 40, shot: 30 },
          element: { 火: 5, 水: 10, 雷: 15, 氷: 10, 龍: 15 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '背',
          mellee: { slash: 38, impact: 38, shot: 45 },
          element: { 火: 5, 水: 10, 雷: 20, 氷: 10, 龍: 25 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '腹',
          mellee: { slash: 24, impact: 24, shot: 18 },
          element: { 火: 0, 水: 5, 雷: 15, 氷: 5, 龍: 15 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '翼',
          mellee: { slash: 24, impact: 21, shot: 25 },
          element: { 火: 0, 水: 10, 雷: 20, 氷: 10, 龍: 25 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '脚',
          mellee: { slash: 24, impact: 24, shot: 20 },
          element: { 火: 0, 水: 5, 雷: 10, 氷: 5, 龍: 15 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻尾',
          mellee: { slash: 40, impact: 35, shot: 25 },
          element: { 火: 5, 水: 5, 雷: 10, 氷: 5, 龍: 15 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尾先',
          mellee: { slash: 24, impact: 24, shot: 25 },
          element: { 火: 0, 水: 5, 雷: 10, 氷: 5, 龍: 20 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
  ],
  partDurabilities: [
    new PartDurability('頭', 230),
    new PartDurability('首', 180),
    new PartDurability('胴', 220),
    new PartDurability('左翼', 200),
    new PartDurability('右翼', 200),
    new PartDurability('左脚', 250),
    new PartDurability('右脚', 250),
    new PartDurability('尻尾', 180, 420),
  ],
  quests: dreadkingRathalosQuests,
}

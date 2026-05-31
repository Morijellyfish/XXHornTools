import type { Monster } from '~/types/monster/monster'

import { PartDurability } from '~/types/monster/partDurability'

import { bloodlustDiablosQuests } from '../quest/bloodlustDiablos'

export const bloodlustDiablos: Monster = {
  name: '鏖魔ディアブロス',
  species: '飛竜種',
  hitZoneVariants: [
    {
      name: '通常時',

      hitZones: [
        {
          name: '角',
          mellee: { slash: 20, impact: 15, shot: 20 },
          element: { 火: 0, 水: 20, 雷: 15, 氷: 15, 龍: 15 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '頭・首',
          mellee: { slash: 45, impact: 15, shot: 30 },
          element: { 火: 0, 水: 15, 雷: 10, 氷: 10, 龍: 10 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '背・翼',
          mellee: { slash: 23, impact: 42, shot: 20 },
          element: { 火: 0, 水: 25, 雷: 15, 氷: 15, 龍: 15 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '腹',
          mellee: { slash: 42, impact: 42, shot: 35 },
          element: { 火: 0, 水: 10, 雷: 10, 氷: 10, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '翼膜',
          mellee: { slash: 35, impact: 30, shot: 40 },
          element: { 火: 0, 水: 20, 雷: 10, 氷: 10, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '脚',
          mellee: { slash: 30, impact: 35, shot: 35 },
          element: { 火: 0, 水: 8, 雷: 5, 氷: 5, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻尾',
          mellee: { slash: 55, impact: 24, shot: 50 },
          element: { 火: 0, 水: 15, 雷: 10, 氷: 10, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尾先',
          mellee: { slash: 22, impact: 35, shot: 10 },
          element: { 火: 0, 水: 30, 雷: 15, 氷: 15, 龍: 15 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
    {
      name: '暴走時',

      hitZones: [
        {
          name: '頭・首',
          mellee: { slash: 52, impact: 20, shot: 32 },
          element: { 火: 0, 水: 15, 雷: 10, 氷: 10, 龍: 10 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '腹',
          mellee: { slash: 42, impact: 42, shot: 40 },
          element: { 火: 0, 水: 10, 雷: 10, 氷: 10, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '翼膜',
          mellee: { slash: 35, impact: 30, shot: 30 },
          element: { 火: 0, 水: 20, 雷: 10, 氷: 10, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻尾',
          mellee: { slash: 55, impact: 24, shot: 40 },
          element: { 火: 0, 水: 15, 雷: 10, 氷: 10, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
    {
      name: '狂暴走時',

      hitZones: [
        {
          name: '角',
          mellee: { slash: 57, impact: 21, shot: 35 },
          element: { 火: 0, 水: 15, 雷: 10, 氷: 10, 龍: 10 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '頭・首',
          mellee: { slash: 57, impact: 21, shot: 35 },
          element: { 火: 0, 水: 15, 雷: 10, 氷: 10, 龍: 10 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '腹',
          mellee: { slash: 42, impact: 42, shot: 40 },
          element: { 火: 0, 水: 10, 雷: 10, 氷: 10, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '翼膜',
          mellee: { slash: 35, impact: 30, shot: 30 },
          element: { 火: 0, 水: 20, 雷: 10, 氷: 10, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻尾',
          mellee: { slash: 55, impact: 24, shot: 40 },
          element: { 火: 0, 水: 15, 雷: 10, 氷: 10, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
  ],
  partDurabilities: [
    new PartDurability('角', 150, 300),
    new PartDurability('頭', 230),
    new PartDurability('胴体', 380),
    new PartDurability('左翼', 180),
    new PartDurability('右翼', 180),
    new PartDurability('左脚', 250),
    new PartDurability('右脚', 250),
    new PartDurability('尻尾', 250, 800),
  ],
  quests: bloodlustDiablosQuests,
}

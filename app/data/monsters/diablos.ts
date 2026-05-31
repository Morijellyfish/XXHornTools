import type { Monster } from '~/types/monster/monster'
import { PartDurability } from '~/types/monster/partDurability'
import { diablosQuests } from '../quest/diablos'

export const diablos: Monster = {
  name: 'ディアブロス',
  species: '飛竜種',
  hitZoneVariants: [
    {
      name: '通常時',
      hitZones: [
        {
          name: '頭',
          mellee: { slash: 24, impact: 15, shot: 20 },
          element: { 火: 0, 水: 15, 雷: 15, 氷: 20, 龍: 15 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '首',
          mellee: { slash: 45, impact: 45, shot: 30 },
          element: { 火: 0, 水: 10, 雷: 10, 氷: 15, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '背',
          mellee: { slash: 23, impact: 42, shot: 20 },
          element: { 火: 10, 水: 15, 雷: 15, 氷: 25, 龍: 15 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '腹',
          mellee: { slash: 68, impact: 75, shot: 40 },
          element: { 火: 0, 水: 10, 雷: 10, 氷: 10, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '翼膜',
          mellee: { slash: 40, impact: 30, shot: 45 },
          element: { 火: 0, 水: 10, 雷: 10, 氷: 20, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '脚',
          mellee: { slash: 35, impact: 35, shot: 35 },
          element: { 火: 0, 水: 5, 雷: 5, 氷: 8, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻尾',
          mellee: { slash: 50, impact: 24, shot: 60 },
          element: { 火: 0, 水: 10, 雷: 10, 氷: 15, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尾先',
          mellee: { slash: 22, impact: 35, shot: 10 },
          element: { 火: 10, 水: 15, 雷: 15, 氷: 30, 龍: 15 },
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
          mellee: { slash: 28, impact: 18, shot: 24 },
          element: { 火: 0, 水: 18, 雷: 18, 氷: 24, 龍: 18 },
          stun: 120,
          exhaust: 100,
        },
        {
          name: '首',
          mellee: { slash: 45, impact: 45, shot: 30 },
          element: { 火: 0, 水: 10, 雷: 10, 氷: 15, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '背',
          mellee: { slash: 23, impact: 42, shot: 20 },
          element: { 火: 10, 水: 15, 雷: 15, 氷: 25, 龍: 15 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '腹',
          mellee: { slash: 68, impact: 75, shot: 40 },
          element: { 火: 0, 水: 10, 雷: 10, 氷: 10, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '翼膜',
          mellee: { slash: 40, impact: 30, shot: 45 },
          element: { 火: 0, 水: 10, 雷: 10, 氷: 20, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '脚',
          mellee: { slash: 35, impact: 35, shot: 35 },
          element: { 火: 0, 水: 5, 雷: 5, 氷: 8, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻尾',
          mellee: { slash: 50, impact: 24, shot: 60 },
          element: { 火: 0, 水: 10, 雷: 10, 氷: 15, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尾先',
          mellee: { slash: 22, impact: 35, shot: 10 },
          element: { 火: 10, 水: 15, 雷: 15, 氷: 30, 龍: 15 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
  ],
  partDurabilities: [
    new PartDurability('角', 250, undefined, 250, 325),
    new PartDurability('頭', 150),
    new PartDurability('胴体', 350),
    new PartDurability('左翼', 150),
    new PartDurability('右翼', 150),
    new PartDurability('左脚', 250, undefined, 250, 300),
    new PartDurability('右脚', 250, undefined, 250, 300),
    new PartDurability('尻尾', 250, 500, 250, 300),
  ],
  quests: diablosQuests,
}

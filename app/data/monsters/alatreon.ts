import type { Monster } from '~/types/monster/monster'
import { PartDurability } from '~/types/monster/partDurability'
import { alatreonQuests } from '../quest/alatreon'

export const alatreon: Monster = {
  name: 'アルバトリオン',
  species: '古龍種',
  hitZoneVariants: [
    {
      name: '赤黒時',
      hitZones: [
        {
          name: '頭',
          mellee: { slash: 60, impact: 65, shot: 55 },
          element: { 火: 0, 水: 15, 雷: 5, 氷: 20, 龍: 5 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '首',
          mellee: { slash: 40, impact: 35, shot: 35 },
          element: { 火: 0, 水: 10, 雷: 5, 氷: 15, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '胴',
          mellee: { slash: 35, impact: 30, shot: 20 },
          element: { 火: 0, 水: 10, 雷: 5, 氷: 15, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '翼',
          mellee: { slash: 21, impact: 21, shot: 10 },
          element: { 火: 0, 水: 5, 雷: 5, 氷: 10, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '脚',
          mellee: { slash: 25, impact: 25, shot: 20 },
          element: { 火: 0, 水: 10, 雷: 5, 氷: 15, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻尾',
          mellee: { slash: 30, impact: 25, shot: 40 },
          element: { 火: 0, 水: 5, 雷: 5, 氷: 10, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
    {
      name: '青白時',
      hitZones: [
        {
          name: '頭',
          mellee: { slash: 60, impact: 65, shot: 55 },
          element: { 火: 20, 水: 15, 雷: 0, 氷: 0, 龍: 30 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '首',
          mellee: { slash: 40, impact: 35, shot: 40 },
          element: { 火: 15, 水: 10, 雷: 0, 氷: 0, 龍: 20 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '胴',
          mellee: { slash: 35, impact: 30, shot: 20 },
          element: { 火: 15, 水: 10, 雷: 0, 氷: 0, 龍: 20 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '翼',
          mellee: { slash: 25, impact: 25, shot: 15 },
          element: { 火: 15, 水: 5, 雷: 0, 氷: 0, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '脚',
          mellee: { slash: 38, impact: 35, shot: 35 },
          element: { 火: 15, 水: 10, 雷: 0, 氷: 0, 龍: 20 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻尾',
          mellee: { slash: 30, impact: 30, shot: 40 },
          element: { 火: 15, 水: 10, 雷: 0, 氷: 0, 龍: 20 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
  ],
  partDurabilities: [
    new PartDurability('頭', 400),
    new PartDurability('首', 350),
    new PartDurability('胴', 350),
    new PartDurability('左翼', 300),
    new PartDurability('右翼', 300),
    new PartDurability('前脚', 250),
    new PartDurability('後脚', 250),
    new PartDurability('尻尾', 400, 300),
  ],
  quests: alatreonQuests,
}

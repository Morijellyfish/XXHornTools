import type { Monster } from '~/types/monster/monster'
import { PartDurability } from '~/types/monster/partDurability'
import { deviljhoQuests } from '../quest/deviljho'

export const deviljho: Monster = {
  name: 'イビルジョー',
  species: '獣竜種',
  hitZoneVariants: [
    {
      name: '通常時',
      hitZones: [
        {
          name: '頭',
          mellee: { slash: 65, impact: 65, shot: 60 },
          element: { 火: 10, 水: 10, 雷: 15, 氷: 5, 龍: 15 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '胸',
          mellee: { slash: 37, impact: 37, shot: 35 },
          element: { 火: 15, 水: 15, 雷: 20, 氷: 10, 龍: 20 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '胴体',
          mellee: { slash: 25, impact: 25, shot: 25 },
          element: { 火: 5, 水: 5, 雷: 20, 氷: 5, 龍: 20 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '前脚',
          mellee: { slash: 30, impact: 30, shot: 30 },
          element: { 火: 10, 水: 10, 雷: 15, 氷: 5, 龍: 15 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '後脚',
          mellee: { slash: 43, impact: 38, shot: 35 },
          element: { 火: 5, 水: 5, 雷: 10, 氷: 5, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻尾',
          mellee: { slash: 35, impact: 32, shot: 30 },
          element: { 火: 5, 水: 5, 雷: 20, 氷: 5, 龍: 20 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
    {
      name: '怒り時',
      hitZones: [
        {
          name: '頭',
          mellee: { slash: 30, impact: 34, shot: 30 },
          element: { 火: 15, 水: 15, 雷: 20, 氷: 10, 龍: 20 },
          stun: 120,
          exhaust: 100,
        },
        {
          name: '胸',
          mellee: { slash: 76, impact: 76, shot: 60 },
          element: { 火: 10, 水: 10, 雷: 15, 氷: 15, 龍: 15 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '胴体',
          mellee: { slash: 22, impact: 22, shot: 20 },
          element: { 火: 5, 水: 5, 雷: 25, 氷: 5, 龍: 25 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '前脚',
          mellee: { slash: 27, impact: 27, shot: 30 },
          element: { 火: 15, 水: 15, 雷: 20, 氷: 10, 龍: 20 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '後脚',
          mellee: { slash: 35, impact: 32, shot: 25 },
          element: { 火: 10, 水: 10, 雷: 15, 氷: 5, 龍: 15 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻尾',
          mellee: { slash: 38, impact: 35, shot: 30 },
          element: { 火: 5, 水: 5, 雷: 20, 氷: 5, 龍: 20 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
  ],
  partDurabilities: [
    new PartDurability('頭', 350, undefined, 525, 700),
    new PartDurability('胸', 300, undefined, 450),
    new PartDurability('胴', 200, undefined, 300),
    new PartDurability('前脚', 150, undefined, 225),
    new PartDurability('左後脚', 220, 440, 330),
    new PartDurability('右後脚', 220, 440, 330),
    new PartDurability('尻尾', 180, 360, 270),
  ],
  quests: deviljhoQuests,
}

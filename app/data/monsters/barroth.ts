import type { Monster } from '~/types/monster/monster'
import { PartDurability } from '~/types/monster/partDurability'
import { barrothQuests } from '../quest/barroth'

export const barroth: Monster = {
  name: 'ボルボロス',
  species: '獣竜種',
  hitZoneVariants: [
    {
      name: '通常時',
      hitZones: [
        {
          name: '頭',
          mellee: { slash: 22, impact: 25, shot: 15 },
          element: { 火: 40, 水: 0, 雷: 0, 氷: 20, 龍: 10 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '胸',
          mellee: { slash: 36, impact: 45, shot: 35 },
          element: { 火: 25, 水: 0, 雷: 0, 氷: 10, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '前脚',
          mellee: { slash: 50, impact: 55, shot: 50 },
          element: { 火: 20, 水: 0, 雷: 0, 氷: 10, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '後脚',
          mellee: { slash: 36, impact: 30, shot: 25 },
          element: { 火: 20, 水: 0, 雷: 0, 氷: 15, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻尾',
          mellee: { slash: 47, impact: 47, shot: 50 },
          element: { 火: 25, 水: 0, 雷: 0, 氷: 20, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
    {
      name: '泥纏い状態',
      hitZones: [
        {
          name: '頭',
          mellee: { slash: 22, impact: 25, shot: 15 },
          element: { 火: 0, 水: 50, 雷: 0, 氷: 20, 龍: 0 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '胸',
          mellee: { slash: 36, impact: 45, shot: 35 },
          element: { 火: 0, 水: 30, 雷: 0, 氷: 10, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '前脚',
          mellee: { slash: 45, impact: 50, shot: 45 },
          element: { 火: 0, 水: 25, 雷: 0, 氷: 10, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '後脚',
          mellee: { slash: 36, impact: 30, shot: 25 },
          element: { 火: 0, 水: 25, 雷: 0, 氷: 15, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻尾',
          mellee: { slash: 42, impact: 42, shot: 45 },
          element: { 火: 0, 水: 30, 雷: 0, 氷: 20, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
  ],
  partDurabilities: [
    new PartDurability('頭', 150, 200, 225, 195),
    new PartDurability('胴', 200, undefined, 300),
    new PartDurability('前脚', 100, undefined, 150),
    new PartDurability('左後脚', 100, 120, 150),
    new PartDurability('右後脚', 100, undefined, 150),
    new PartDurability('尻尾', 150, 300, 225, 180),
  ],
  quests: barrothQuests,
}

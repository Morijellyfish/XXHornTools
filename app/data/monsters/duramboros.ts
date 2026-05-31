import type { Monster } from '~/types/monster/monster'
import { PartDurability } from '~/types/monster/partDurability'
import { duramborosQuests } from '../quest/duramboros'

export const duramboros: Monster = {
  name: 'ドボルベルク',
  species: '獣竜種',
  hitZoneVariants: [
    {
      name: '通常時',
      hitZones: [
        {
          name: '角',
          mellee: { slash: 23, impact: 21, shot: 20 },
          element: { 火: 35, 水: 10, 雷: 35, 氷: 20, 龍: 0 },
          stun: 150,
          exhaust: 100,
        },
        {
          name: '頭',
          mellee: { slash: 43, impact: 24, shot: 35 },
          element: { 火: 10, 水: 5, 雷: 15, 氷: 5, 龍: 5 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '胴体',
          mellee: { slash: 25, impact: 35, shot: 25 },
          element: { 火: 15, 水: 5, 雷: 10, 氷: 15, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: 'コブ',
          mellee: { slash: 60, impact: 60, shot: 35 },
          element: { 火: 20, 水: 5, 雷: 0, 氷: 15, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '前脚',
          mellee: { slash: 32, impact: 30, shot: 25 },
          element: { 火: 15, 水: 0, 雷: 10, 氷: 10, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '後脚',
          mellee: { slash: 44, impact: 44, shot: 35 },
          element: { 火: 10, 水: 0, 雷: 5, 氷: 10, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻尾',
          mellee: { slash: 32, impact: 40, shot: 50 },
          element: { 火: 10, 水: 5, 雷: 5, 氷: 5, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尾先',
          mellee: { slash: 24, impact: 43, shot: 40 },
          element: { 火: 20, 水: 5, 雷: 5, 氷: 15, 龍: 20 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
    {
      name: 'コブ破壊後',
      hitZones: [
        {
          name: '角',
          mellee: { slash: 23, impact: 21, shot: 20 },
          element: { 火: 35, 水: 10, 雷: 35, 氷: 20, 龍: 0 },
          stun: 150,
          exhaust: 100,
        },
        {
          name: '頭',
          mellee: { slash: 43, impact: 24, shot: 35 },
          element: { 火: 10, 水: 5, 雷: 15, 氷: 5, 龍: 5 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '胴体',
          mellee: { slash: 25, impact: 35, shot: 25 },
          element: { 火: 15, 水: 5, 雷: 10, 氷: 15, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: 'コブ',
          mellee: { slash: 70, impact: 70, shot: 60 },
          element: { 火: 30, 水: 10, 雷: 5, 氷: 20, 龍: 20 },
          stun: 120,
          exhaust: 100,
        },
        {
          name: '前脚',
          mellee: { slash: 32, impact: 30, shot: 25 },
          element: { 火: 15, 水: 0, 雷: 10, 氷: 10, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '後脚',
          mellee: { slash: 44, impact: 44, shot: 35 },
          element: { 火: 10, 水: 0, 雷: 5, 氷: 10, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻尾',
          mellee: { slash: 32, impact: 40, shot: 50 },
          element: { 火: 10, 水: 5, 雷: 5, 氷: 5, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尾先',
          mellee: { slash: 24, impact: 43, shot: 40 },
          element: { 火: 20, 水: 5, 雷: 5, 氷: 15, 龍: 20 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
  ],
  partDurabilities: [
    new PartDurability('頭', 280, undefined, 280, 336),
    new PartDurability('胴', 400, undefined, 400),
    new PartDurability('コブ', 380, undefined, 380),
    new PartDurability('前脚', 250, undefined, 250),
    new PartDurability('左後脚', 200, 240, 200, 240),
    new PartDurability('右後脚', 200, 240, 200, 240),
    new PartDurability('尻尾', 250, undefined, 250),
    new PartDurability('尾先', 170, undefined, 170, 204),
  ],
  quests: duramborosQuests,
}

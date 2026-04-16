import type { Monster } from '~/types/monster/monster'
import { PartDurability } from '~/types/monster/partDurability'
import { frostpeakGammothQuests } from '../quest/frostpeakGammoth'

export const frostpeakGammoth: Monster = {
  name: '銀嶺ガムート',
  species: '牙獣種',
  hitZoneVariants: [
    {
      name: '通常時',
      hitZones: [
        {
          name: '頭部',
          mellee: { slash: 55, impact: 60, shot: 40 },
          element: { 火: 10, 水: 0, 雷: 15, 氷: 0, 龍: 0 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '鼻',
          mellee: { slash: 63, impact: 54, shot: 45 },
          element: { 火: 25, 水: 5, 雷: 10, 氷: 0, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '左前脚',
          mellee: { slash: 40, impact: 38, shot: 35 },
          element: { 火: 5, 水: 5, 雷: 10, 氷: 0, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '右前脚',
          mellee: { slash: 40, impact: 38, shot: 35 },
          element: { 火: 5, 水: 5, 雷: 10, 氷: 0, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '左後脚',
          mellee: { slash: 24, impact: 25, shot: 25 },
          element: { 火: 5, 水: 5, 雷: 10, 氷: 0, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '右後脚',
          mellee: { slash: 24, impact: 25, shot: 25 },
          element: { 火: 5, 水: 5, 雷: 10, 氷: 0, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻尾',
          mellee: { slash: 30, impact: 35, shot: 38 },
          element: { 火: 5, 水: 5, 雷: 10, 氷: 0, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '胴',
          mellee: { slash: 26, impact: 34, shot: 19 },
          element: { 火: 5, 水: 0, 雷: 5, 氷: 0, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
    {
      name: '雪纏い',
      hitZones: [
        {
          name: '頭部',
          mellee: { slash: 55, impact: 60, shot: 40 },
          element: { 火: 10, 水: 0, 雷: 15, 氷: 0, 龍: 0 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '鼻',
          mellee: { slash: 55, impact: 45, shot: 35 },
          element: { 火: 25, 水: 0, 雷: 0, 氷: 0, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '左前脚',
          mellee: { slash: 25, impact: 30, shot: 24 },
          element: { 火: 25, 水: 0, 雷: 0, 氷: 0, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '右前脚',
          mellee: { slash: 25, impact: 30, shot: 24 },
          element: { 火: 25, 水: 0, 雷: 0, 氷: 0, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '左後脚',
          mellee: { slash: 24, impact: 25, shot: 25 },
          element: { 火: 5, 水: 5, 雷: 10, 氷: 0, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '右後脚',
          mellee: { slash: 24, impact: 25, shot: 25 },
          element: { 火: 5, 水: 5, 雷: 10, 氷: 0, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻尾',
          mellee: { slash: 30, impact: 35, shot: 38 },
          element: { 火: 5, 水: 5, 雷: 10, 氷: 0, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '胴',
          mellee: { slash: 26, impact: 34, shot: 19 },
          element: { 火: 5, 水: 0, 雷: 5, 氷: 0, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
  ],
  partDurabilities: [
    new PartDurability('頭部', 320, 100),
    new PartDurability('鼻', 340, 180),
    new PartDurability('胴', 450),
    new PartDurability('左前脚', 350, 180),
    new PartDurability('右前脚', 350, 180),
    new PartDurability('左後脚', 500),
    new PartDurability('右後脚', 500),
    new PartDurability('尻尾', 250),
  ],
  quests: frostpeakGammothQuests,
}

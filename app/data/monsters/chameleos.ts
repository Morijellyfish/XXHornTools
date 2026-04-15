import type { Monster } from '~/types/monster/monster'
import { PartDurability } from '~/types/monster/partDurability'
import { chameleosQuests } from '../quest/chameleos'

export const chameleos: Monster = {
  name: 'オオナズチ',
  species: '古龍種',
  hitZoneVariants: [
    {
      name: '通常時',
      hitZones: [
        {
          name: '頭部',
          mellee: { slash: 45, impact: 50, shot: 45 },
          element: { 火: 35, 水: 0, 雷: 20, 氷: 0, 龍: 35 },
          stun: 100,
          exhaust: 0,
        },
        {
          name: '腹部',
          mellee: { slash: 25, impact: 30, shot: 22 },
          element: { 火: 35, 水: 0, 雷: 15, 氷: 5, 龍: 20 },
          stun: 0,
          exhaust: 0,
        },
        {
          name: '背熱殻',
          mellee: { slash: 25, impact: 22, shot: 25 },
          element: { 火: 25, 水: 0, 雷: 15, 氷: 0, 龍: 25 },
          stun: 0,
          exhaust: 0,
        },
        {
          name: '翼',
          mellee: { slash: 22, impact: 22, shot: 30 },
          element: { 火: 10, 水: 0, 雷: 15, 氷: 0, 龍: 15 },
          stun: 0,
          exhaust: 0,
        },
        {
          name: '前脚',
          mellee: { slash: 22, impact: 25, shot: 20 },
          element: { 火: 15, 水: 0, 雷: 20, 氷: 0, 龍: 10 },
          stun: 0,
          exhaust: 0,
        },
        {
          name: '後脚',
          mellee: { slash: 30, impact: 25, shot: 20 },
          element: { 火: 25, 水: 0, 雷: 10, 氷: 0, 龍: 25 },
          stun: 0,
          exhaust: 0,
        },
        {
          name: '尻尾',
          mellee: { slash: 25, impact: 22, shot: 20 },
          element: { 火: 10, 水: 0, 雷: 10, 氷: 0, 龍: 5 },
          stun: 0,
          exhaust: 0,
        },
      ],
    },
    {
      name: '透明時',
      hitZones: [
        {
          name: '頭部',
          mellee: { slash: 40, impact: 45, shot: 35 },
          element: { 火: 40, 水: 0, 雷: 20, 氷: 0, 龍: 35 },
          stun: 100,
          exhaust: 0,
        },
        {
          name: '腹部',
          mellee: { slash: 22, impact: 25, shot: 20 },
          element: { 火: 40, 水: 0, 雷: 15, 氷: 5, 龍: 20 },
          stun: 0,
          exhaust: 0,
        },
        {
          name: '背熱殻',
          mellee: { slash: 22, impact: 20, shot: 22 },
          element: { 火: 30, 水: 0, 雷: 15, 氷: 0, 龍: 25 },
          stun: 0,
          exhaust: 0,
        },
        {
          name: '翼',
          mellee: { slash: 20, impact: 20, shot: 25 },
          element: { 火: 15, 水: 0, 雷: 15, 氷: 0, 龍: 15 },
          stun: 0,
          exhaust: 0,
        },
        {
          name: '前脚',
          mellee: { slash: 20, impact: 22, shot: 15 },
          element: { 火: 20, 水: 0, 雷: 10, 氷: 0, 龍: 10 },
          stun: 0,
          exhaust: 0,
        },
        {
          name: '後脚',
          mellee: { slash: 25, impact: 22, shot: 15 },
          element: { 火: 30, 水: 0, 雷: 15, 氷: 0, 龍: 25 },
          stun: 0,
          exhaust: 0,
        },
        {
          name: '尻尾',
          mellee: { slash: 22, impact: 20, shot: 20 },
          element: { 火: 15, 水: 0, 雷: 10, 氷: 0, 龍: 5 },
          stun: 0,
          exhaust: 0,
        },
      ],
    },
  ],
  partDurabilities: [
    new PartDurability('頭', 360),
    new PartDurability('腹', 210),
    new PartDurability('背・翼', 380),
    new PartDurability('左前脚', 300),
    new PartDurability('右前脚', 300),
    new PartDurability('左後脚', 380),
    new PartDurability('右後脚', 380),
    new PartDurability('尻尾', 500, 1500),
  ],
  quests: chameleosQuests,
}

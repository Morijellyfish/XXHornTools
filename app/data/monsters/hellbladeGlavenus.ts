import type { Monster } from '~/types/monster/monster'
import { PartDurability } from '~/types/monster/partDurability'
import { hellbladeGlavenusQuests } from '../quest/hellbladeGlavenus'

const zeroMellee = { slash: 0, impact: 0, shot: 0 }

export const hellbladeGlavenus: Monster = {
  name: '燼滅刃ディノバルド',
  species: '獣竜種',
  hitZoneVariants: [
    {
      name: '通常時',
      hitZones: [
        {
          name: '頭部',
          mellee: { slash: 55, impact: 55, shot: 40 },
          element: { 火: 0, 水: 20, 雷: 10, 氷: 10, 龍: 10 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '喉',
          mellee: { slash: 63, impact: 63, shot: 45 },
          element: { 火: 0, 水: 25, 雷: 15, 氷: 15, 龍: 15 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '背',
          mellee: { slash: 36, impact: 36, shot: 50 },
          element: { 火: 0, 水: 20, 雷: 5, 氷: 10, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '胴',
          mellee: { slash: 25, impact: 25, shot: 20 },
          element: { 火: 0, 水: 15, 雷: 5, 氷: 10, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '前脚',
          mellee: { slash: 41, impact: 41, shot: 20 },
          element: { 火: 0, 水: 15, 雷: 5, 氷: 5, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '後脚',
          mellee: { slash: 25, impact: 25, shot: 20 },
          element: { 火: 0, 水: 10, 雷: 5, 氷: 5, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尾元',
          mellee: { slash: 36, impact: 36, shot: 20 },
          element: { 火: 0, 水: 15, 雷: 10, 氷: 10, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻尾',
          mellee: { slash: 55, impact: 55, shot: 40 },
          element: { 火: 0, 水: 30, 雷: 10, 氷: 10, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
    {
      name: '赤熱時',
      hitZones: [
        {
          name: '頭部',
          mellee: { slash: 63, impact: 63, shot: 40 },
          element: { 火: 0, 水: 10, 雷: 5, 氷: 25, 龍: 5 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '喉',
          mellee: { slash: 70, impact: 70, shot: 50 },
          element: { 火: 0, 水: 15, 雷: 10, 氷: 25, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '背',
          mellee: zeroMellee,
          element: { 火: 0, 水: 5, 雷: 20, 氷: 5, 龍: 20 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '胴',
          mellee: zeroMellee,
          element: { 火: 0, 水: 5, 雷: 20, 氷: 5, 龍: 20 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '前脚',
          mellee: zeroMellee,
          element: { 火: 0, 水: 5, 雷: 20, 氷: 5, 龍: 20 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '後脚',
          mellee: zeroMellee,
          element: { 火: 0, 水: 5, 雷: 20, 氷: 5, 龍: 20 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尾元',
          mellee: { slash: 36, impact: 36, shot: 20 },
          element: { 火: 0, 水: 10, 雷: 5, 氷: 15, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻尾',
          mellee: { slash: 63, impact: 63, shot: 40 },
          element: { 火: 0, 水: 10, 雷: 10, 氷: 30, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
  ],
  partDurabilities: [
    new PartDurability('頭部', 350, 220),
    new PartDurability('背中', 300),
    new PartDurability('胴', 200),
    new PartDurability('前脚', 200),
    new PartDurability('左後脚', 180),
    new PartDurability('右後脚', 180),
    new PartDurability('尻尾', 300, 1200),
  ],
  quests: hellbladeGlavenusQuests,
}

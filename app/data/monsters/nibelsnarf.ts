import type { Monster } from '~/types/monster/monster'
import { PartDurability } from '~/types/monster/partDurability'
import { nibelsnarfQuests } from '../quest/nibelsnarf'

export const nibelsnarf: Monster = {
  name: 'ハプルボッカ',
  species: '海竜種',
  hitZoneVariants: [
    {
      name: '通常時',
      hitZones: [
        {
          name: '頭',
          mellee: { slash: 25, impact: 26, shot: 22 },
          element: { 火: 0, 水: 15, 雷: 10, 氷: 15, 龍: 5 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '怒り鼻',
          mellee: { slash: 55, impact: 55, shot: 60 },
          element: { 火: 0, 水: 10, 雷: 15, 氷: 30, 龍: 5 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: 'エラ',
          mellee: { slash: 60, impact: 60, shot: 65 },
          element: { 火: 0, 水: 10, 雷: 15, 氷: 15, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '口内',
          mellee: { slash: 70, impact: 70, shot: 70 },
          element: { 火: 0, 水: 10, 雷: 10, 氷: 10, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '胴・尾',
          mellee: { slash: 26, impact: 25, shot: 25 },
          element: { 火: 0, 水: 10, 雷: 15, 氷: 15, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '腹',
          mellee: { slash: 36, impact: 30, shot: 30 },
          element: { 火: 0, 水: 10, 雷: 25, 氷: 20, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '背中',
          mellee: { slash: 36, impact: 30, shot: 40 },
          element: { 火: 0, 水: 15, 雷: 15, 氷: 20, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '脚',
          mellee: { slash: 35, impact: 35, shot: 35 },
          element: { 火: 0, 水: 5, 雷: 10, 氷: 10, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
    {
      name: '釣り上げ時',
      hitZones: [
        {
          name: '頭',
          mellee: { slash: 35, impact: 36, shot: 32 },
          element: { 火: 0, 水: 15, 雷: 10, 氷: 15, 龍: 5 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '怒り鼻',
          mellee: { slash: 55, impact: 55, shot: 60 },
          element: { 火: 0, 水: 10, 雷: 15, 氷: 30, 龍: 5 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: 'エラ',
          mellee: { slash: 60, impact: 60, shot: 65 },
          element: { 火: 0, 水: 10, 雷: 15, 氷: 15, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '口内',
          mellee: { slash: 70, impact: 70, shot: 70 },
          element: { 火: 0, 水: 10, 雷: 10, 氷: 10, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '胴・尾',
          mellee: { slash: 36, impact: 35, shot: 35 },
          element: { 火: 0, 水: 10, 雷: 15, 氷: 15, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '腹',
          mellee: { slash: 60, impact: 60, shot: 50 },
          element: { 火: 0, 水: 10, 雷: 25, 氷: 20, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '背中',
          mellee: { slash: 46, impact: 40, shot: 50 },
          element: { 火: 0, 水: 15, 雷: 15, 氷: 20, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '脚',
          mellee: { slash: 45, impact: 45, shot: 50 },
          element: { 火: 0, 水: 5, 雷: 10, 氷: 10, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
  ],
  partDurabilities: [
    new PartDurability('頭', 200, 400),
    new PartDurability('口内', 150, 150),
    new PartDurability('エラ', 120, undefined, 180),
    new PartDurability('胴', 240, undefined, 360),
    new PartDurability('左前脚', 160, 240, 240),
    new PartDurability('右前脚', 160, 240, 240),
    new PartDurability('左後脚', 140, undefined, 210),
    new PartDurability('右後脚', 140, undefined, 210),
  ],
  quests: nibelsnarfQuests,
}

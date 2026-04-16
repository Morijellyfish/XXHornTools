import type { Monster } from '~/types/monster/monster'
import { PartDurability } from '~/types/monster/partDurability'
import { drilltuskTetsucabraQuests } from '../quest/drilltuskTetsucabra'

const rockHitZone = {
  name: '岩',
  mellee: { slash: 20, impact: 20, shot: 15 },
  element: { 火: 0, 水: 0, 雷: 0, 氷: 10, 龍: 0 },
  stun: 0,
  exhaust: 100,
} as const

export const drilltuskTetsucabra: Monster = {
  name: '岩穿テツカブラ',
  species: '両生種',
  hitZoneVariants: [
    {
      name: '通常時',
      hitZones: [
        {
          name: '頭部',
          mellee: { slash: 52, impact: 52, shot: 55 },
          element: { 火: 0, 水: 25, 雷: 20, 氷: 5, 龍: 5 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '牙',
          mellee: { slash: 20, impact: 21, shot: 20 },
          element: { 火: 0, 水: 25, 雷: 25, 氷: 10, 龍: 5 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '胴',
          mellee: { slash: 25, impact: 25, shot: 25 },
          element: { 火: 0, 水: 10, 雷: 5, 氷: 0, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '前脚',
          mellee: { slash: 38, impact: 35, shot: 37 },
          element: { 火: 0, 水: 10, 雷: 10, 氷: 0, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '後脚',
          mellee: { slash: 37, impact: 34, shot: 37 },
          element: { 火: 0, 水: 5, 雷: 5, 氷: 10, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻尾',
          mellee: { slash: 20, impact: 21, shot: 20 },
          element: { 火: 0, 水: 20, 雷: 15, 氷: 10, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        { ...rockHitZone },
      ],
    },
    {
      name: '尻尾膨張時',
      hitZones: [
        {
          name: '頭部',
          mellee: { slash: 52, impact: 52, shot: 55 },
          element: { 火: 0, 水: 25, 雷: 20, 氷: 5, 龍: 5 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '牙',
          mellee: { slash: 20, impact: 21, shot: 20 },
          element: { 火: 0, 水: 25, 雷: 25, 氷: 10, 龍: 5 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '胴',
          mellee: { slash: 25, impact: 25, shot: 25 },
          element: { 火: 0, 水: 10, 雷: 5, 氷: 0, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '前脚',
          mellee: { slash: 38, impact: 35, shot: 37 },
          element: { 火: 0, 水: 10, 雷: 10, 氷: 0, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '後脚',
          mellee: { slash: 37, impact: 34, shot: 37 },
          element: { 火: 0, 水: 5, 雷: 5, 氷: 10, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻尾',
          mellee: { slash: 55, impact: 55, shot: 40 },
          element: { 火: 0, 水: 0, 雷: 0, 氷: 0, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        { ...rockHitZone },
      ],
    },
  ],
  partDurabilities: [
    new PartDurability('頭部', 300),
    new PartDurability('胴', 270),
    new PartDurability('左前脚', 220),
    new PartDurability('右前脚', 220),
    new PartDurability('左後脚', 250),
    new PartDurability('右後脚', 250),
    new PartDurability('尻尾', 200, 100),
  ],
  quests: drilltuskTetsucabraQuests,
}

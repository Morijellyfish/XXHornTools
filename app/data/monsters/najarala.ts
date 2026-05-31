import type { Monster } from '~/types/monster/monster'
import { PartDurability } from '~/types/monster/partDurability'
import { najaralaQuests } from '../quest/najarala'

export const najarala: Monster = {
  name: 'ガララアジャラ',
  species: '蛇竜種',
  hitZoneVariants: [
    {
      name: '通常時',
      hitZones: [
        {
          name: '頭',
          mellee: { slash: 85, impact: 80, shot: 75 },
          element: { 火: 0, 水: 5, 雷: 10, 氷: 15, 龍: 5 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '首',
          mellee: { slash: 40, impact: 40, shot: 45 },
          element: { 火: 0, 水: 5, 雷: 0, 氷: 5, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '胴体',
          mellee: { slash: 30, impact: 30, shot: 30 },
          element: { 火: 10, 水: 20, 雷: 10, 氷: 25, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '共鳴器官',
          mellee: { slash: 15, impact: 20, shot: 10 },
          element: { 火: 10, 水: 25, 雷: 5, 氷: 30, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '前脚',
          mellee: { slash: 25, impact: 35, shot: 40 },
          element: { 火: 10, 水: 5, 雷: 5, 氷: 35, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '後脚',
          mellee: { slash: 60, impact: 60, shot: 65 },
          element: { 火: 0, 水: 5, 雷: 10, 氷: 15, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻尾',
          mellee: { slash: 50, impact: 45, shot: 45 },
          element: { 火: 0, 水: 10, 雷: 5, 氷: 10, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
    {
      name: '疲れ時',
      hitZones: [
        {
          name: '頭',
          mellee: { slash: 85, impact: 80, shot: 75 },
          element: { 火: 0, 水: 5, 雷: 10, 氷: 15, 龍: 5 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '首',
          mellee: { slash: 40, impact: 40, shot: 45 },
          element: { 火: 0, 水: 5, 雷: 0, 氷: 5, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '胴体',
          mellee: { slash: 30, impact: 30, shot: 30 },
          element: { 火: 10, 水: 20, 雷: 10, 氷: 25, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '共鳴器官',
          mellee: { slash: 45, impact: 50, shot: 25 },
          element: { 火: 10, 水: 25, 雷: 5, 氷: 30, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '前脚',
          mellee: { slash: 25, impact: 35, shot: 40 },
          element: { 火: 10, 水: 5, 雷: 5, 氷: 35, 龍: 5 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '後脚',
          mellee: { slash: 65, impact: 65, shot: 70 },
          element: { 火: 0, 水: 5, 雷: 10, 氷: 15, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻尾',
          mellee: { slash: 50, impact: 50, shot: 45 },
          element: { 火: 0, 水: 10, 雷: 5, 氷: 10, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
  ],
  partDurabilities: [
    new PartDurability('頭', 120, undefined, 180),
    new PartDurability('共鳴器官', 140, undefined, 210),
    new PartDurability('胴', 170, undefined, 255),
    new PartDurability('左前脚', 180, undefined, 270),
    new PartDurability('右前脚', 180, undefined, 270, 270),
    new PartDurability('左後脚', 100, undefined, 150, 150),
    new PartDurability('右後脚', 100, undefined, 150),
    new PartDurability('尻尾', 150, undefined, 225, 225),
  ],
  quests: najaralaQuests,
}

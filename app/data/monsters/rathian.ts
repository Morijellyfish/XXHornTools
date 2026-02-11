import type { Monster } from '~/types/monster/monster'
import { PartDurability } from '~/types/monster/partDurability'

export const rathian: Monster = {
  name: 'リオレイア',
  hitZoneVariants: [
    {
      name: '通常時',
      hitZones: [
        {
          name: '頭部',
          mellee: { slash: 90, impact: 80, shot: 70 },
          element: { 火: 0, 水: 15, 雷: 20, 氷: 15, 龍: 35 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '首',
          mellee: { slash: 40, impact: 40, shot: 40 },
          element: { 火: 0, 水: 10, 雷: 15, 氷: 10, 龍: 20 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '背熱殻',
          mellee: { slash: 25, impact: 30, shot: 30 },
          element: { 火: 15, 水: 10, 雷: 15, 氷: 10, 龍: 25 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '腹部',
          mellee: { slash: 60, impact: 55, shot: 45 },
          element: { 火: 0, 水: 5, 雷: 20, 氷: 5, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻尾',
          mellee: { slash: 30, impact: 30, shot: 25 },
          element: { 火: 0, 水: 5, 雷: 10, 氷: 5, 龍: 25 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '翼',
          mellee: { slash: 25, impact: 20, shot: 25 },
          element: { 火: 0, 水: 10, 雷: 15, 氷: 10, 龍: 20 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '脚',
          mellee: { slash: 44, impact: 40, shot: 45 },
          element: { 火: 0, 水: 5, 雷: 10, 氷: 5, 龍: 10 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
  ],

  partDurabilities: [
    // 獰猛化 285 [285]
    new PartDurability('頭', 190, undefined, 285, 285),
    new PartDurability('首', 90, undefined, 135),
    new PartDurability('胴', 140, undefined, 210, 210),
    new PartDurability('左翼', 100, undefined, 150, 150),
    new PartDurability('右翼', 100, undefined, 150),
    new PartDurability('左脚', 180, undefined, 270),
    new PartDurability('右脚', 180, undefined, 270),
    new PartDurability('尻尾', 150, 230, 225, 225),
  ],
}

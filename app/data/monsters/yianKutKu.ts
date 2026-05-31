import type { Monster } from '~/types/monster/monster'
import { PartDurability } from '~/types/monster/partDurability'
import { yianKutKuQuests } from '../quest/yianKutKu'

export const yianKutKu: Monster = {
  name: 'イャンクック',
  species: '鳥竜種',
  hitZoneVariants: [
    {
      name: '通常時',
      hitZones: [
        {
          name: '頭',
          mellee: { slash: 56, impact: 75, shot: 80 },
          element: { 火: 10, 水: 15, 雷: 20, 氷: 30, 龍: 0 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '首',
          mellee: { slash: 42, impact: 42, shot: 45 },
          element: { 火: 10, 水: 25, 雷: 30, 氷: 40, 龍: 20 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '腹',
          mellee: { slash: 66, impact: 63, shot: 60 },
          element: { 火: 5, 水: 15, 雷: 15, 氷: 20, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '背中',
          mellee: { slash: 33, impact: 42, shot: 40 },
          element: { 火: 5, 水: 15, 雷: 15, 氷: 20, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '翼',
          mellee: { slash: 80, impact: 42, shot: 70 },
          element: { 火: 5, 水: 10, 雷: 25, 氷: 15, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '脚',
          mellee: { slash: 28, impact: 28, shot: 30 },
          element: { 火: 5, 水: 5, 雷: 5, 氷: 5, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻尾',
          mellee: { slash: 60, impact: 56, shot: 50 },
          element: { 火: 5, 水: 15, 雷: 15, 氷: 20, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
  ],
  partDurabilities: [
    new PartDurability('頭', 160, undefined, 240, 320),
    new PartDurability('首', 100, undefined, 150),
    new PartDurability('胴', 130, undefined, 195),
    new PartDurability('左翼', 110, undefined, 165),
    new PartDurability('右翼', 110, undefined, 165),
    new PartDurability('左脚', 130, undefined, 195, 260),
    new PartDurability('右脚', 130, undefined, 195, 260),
    new PartDurability('尻尾', 100, undefined, 150),
  ],
  quests: yianKutKuQuests,
}

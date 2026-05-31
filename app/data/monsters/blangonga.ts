import type { Monster } from '~/types/monster/monster'
import { PartDurability } from '~/types/monster/partDurability'
import { blangongaQuests } from '../quest/blangonga'

export const blangonga: Monster = {
  name: 'ドドブランゴ',
  species: '牙獣種',
  hitZoneVariants: [
    {
      name: '通常時',
      hitZones: [
        {
          name: '頭',
          mellee: { slash: 60, impact: 60, shot: 60 },
          element: { 火: 30, 水: 5, 雷: 15, 氷: 0, 龍: 0 },
          stun: 100,
          exhaust: 100,
        },
        {
          name: '胴体',
          mellee: { slash: 45, impact: 50, shot: 40 },
          element: { 火: 20, 水: 5, 雷: 15, 氷: 0, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '前脚',
          mellee: { slash: 45, impact: 40, shot: 30 },
          element: { 火: 15, 水: 5, 雷: 15, 氷: 0, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '後脚',
          mellee: { slash: 45, impact: 40, shot: 30 },
          element: { 火: 15, 水: 5, 雷: 15, 氷: 0, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        {
          name: '尻尾',
          mellee: { slash: 50, impact: 40, shot: 25 },
          element: { 火: 15, 水: 5, 雷: 15, 氷: 0, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
      ],
    },
  ],
  partDurabilities: [
    new PartDurability('頭', 300, undefined, 300),
    new PartDurability('胴', 200, undefined, 200),
    new PartDurability('左前脚', 160, 192, 160, 192),
    new PartDurability('右前脚', 160, 192, 160, 192),
    new PartDurability('左後脚', 130, undefined, 130),
    new PartDurability('右後脚', 130, undefined, 130),
    new PartDurability('尻尾', 300, undefined, 300),
  ],
  quests: blangongaQuests,
}

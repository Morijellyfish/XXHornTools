import type { Monster } from '~/types/monster/monster'
import { PartDurability } from '~/types/monster/partDurability'
import { seltasQueenQuests } from '../quest/seltasQueen'

const torsoHitZone = {
  name: '胴',
  mellee: { slash: 24, impact: 30, shot: 30 },
  element: { 火: 15, 水: 0, 雷: 5, 氷: 15, 龍: 0 },
  stun: 0,
  exhaust: 100,
}

const tailHitZone = {
  name: '尻尾',
  mellee: { slash: 24, impact: 30, shot: 30 },
  element: { 火: 15, 水: 0, 雷: 5, 氷: 15, 龍: 0 },
  stun: 0,
  exhaust: 100,
}

const headHitZone = {
  name: '頭',
  mellee: { slash: 80, impact: 60, shot: 80 },
  element: { 火: 30, 水: 0, 雷: 15, 氷: 25, 龍: 0 },
  stun: 100,
  exhaust: 100,
}

const bellyLegsHitZone = {
  name: '腹・脚',
  mellee: { slash: 36, impact: 30, shot: 45 },
  element: { 火: 25, 水: 0, 雷: 10, 氷: 5, 龍: 0 },
  stun: 0,
  exhaust: 100,
}

const clawTipHitZone = {
  name: '爪・尾先',
  mellee: { slash: 15, impact: 20, shot: 15 },
  element: { 火: 15, 水: 0, 雷: 0, 氷: 20, 龍: 0 },
  stun: 0,
  exhaust: 100,
}

const legShellHitZone = {
  name: '脚甲殻',
  mellee: { slash: 24, impact: 36, shot: 20 },
  element: { 火: 5, 水: 0, 雷: 0, 氷: 15, 龍: 0 },
  stun: 0,
  exhaust: 100,
}

const legShellBrokenHitZone = {
  name: '脚甲殻',
  mellee: { slash: 40, impact: 40, shot: 35 },
  element: { 火: 10, 水: 0, 雷: 10, 氷: 5, 龍: 0 },
  stun: 0,
  exhaust: 100,
}

const normalBodyHitZones = [
  headHitZone,
  torsoHitZone,
  tailHitZone,
  bellyLegsHitZone,
  clawTipHitZone,
  legShellHitZone,
]

export const seltasQueen: Monster = {
  name: 'ゲネル・セルタス',
  species: '甲虫種',
  hitZoneVariants: [
    {
      name: '通常時',
      hitZones: normalBodyHitZones,
    },
    {
      name: '脚破壊後',
      hitZones: [
        headHitZone,
        torsoHitZone,
        tailHitZone,
        bellyLegsHitZone,
        clawTipHitZone,
        legShellBrokenHitZone,
      ],
    },
    {
      name: '獰猛化時',
      hitZones: [
        {
          name: '頭',
          mellee: { slash: 96, impact: 72, shot: 96 },
          element: { 火: 36, 水: 0, 雷: 18, 氷: 30, 龍: 0 },
          stun: 120,
          exhaust: 100,
        },
        torsoHitZone,
        {
          name: '尻尾',
          mellee: { slash: 28, impact: 36, shot: 36 },
          element: { 火: 18, 水: 0, 雷: 6, 氷: 18, 龍: 0 },
          stun: 0,
          exhaust: 100,
        },
        bellyLegsHitZone,
        clawTipHitZone,
        legShellHitZone,
      ],
    },
  ],
  partDurabilities: [
    new PartDurability('頭', 180, undefined, 270, 180),
    new PartDurability('胴', 500, undefined, 750),
    new PartDurability('爪', 100, undefined, 150),
    new PartDurability('左前脚', 250, undefined, 375, 375),
    new PartDurability('右前脚', 250, undefined, 375, 375),
    new PartDurability('左後脚', 250, undefined, 375),
    new PartDurability('右後脚', 250, undefined, 375),
    new PartDurability('尻尾', 160, undefined, 240, 160),
  ],
  quests: seltasQueenQuests,
}

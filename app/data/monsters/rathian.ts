import type { Monster } from '~/types/monster/monster'
import { PartDurability } from '~/types/monster/partDurability'

// リオレイアのモンスターデータ
// 怒り時の肉質変化はありません

export const rathian: Monster = {
  name: 'リオレイア',
  hitZones: [
    // 頭
    {
      name: '頭',
      mellee: {
        slash: 90,
        impact: 80,
        shot: 70,
      },
      element: {
        火: 0,
        水: 15,
        雷: 20,
        氷: 15,
        龍: 35,
      },
      stun: 100,
      partDurabilityNames: ['頭'],
    },
    // 首
    {
      name: '首',
      mellee: {
        slash: 40,
        impact: 40,
        shot: 40,
      },
      element: {
        火: 0,
        水: 10,
        雷: 15,
        氷: 10,
        龍: 20,
      },
      stun: 0,
      partDurabilityNames: ['首'],
    },
    // 背
    {
      name: '背',
      mellee: {
        slash: 25,
        impact: 30,
        shot: 30,
      },
      element: {
        火: 15,
        水: 10,
        雷: 15,
        氷: 10,
        龍: 25,
      },
      stun: 0,
      partDurabilityNames: ['胴'],
    },
    // 腹
    {
      name: '腹',
      mellee: {
        slash: 60,
        impact: 55,
        shot: 45,
      },
      element: {
        火: 0,
        水: 5,
        雷: 20,
        氷: 5,
        龍: 10,
      },
      stun: 0,
      partDurabilityNames: ['胴'],
    },
    // 翼
    {
      name: '翼',
      mellee: {
        slash: 25,
        impact: 20,
        shot: 25,
      },
      element: {
        火: 0,
        水: 10,
        雷: 15,
        氷: 10,
        龍: 20,
      },
      stun: 0,
      partDurabilityNames: ['左翼', '右翼'],
    },
    // 脚
    {
      name: '脚',
      mellee: {
        slash: 44,
        impact: 40,
        shot: 45,
      },
      element: {
        火: 0,
        水: 5,
        雷: 10,
        氷: 5,
        龍: 10,
      },
      stun: 0,
      partDurabilityNames: ['左脚', '右脚'],
    },
    // 尻尾
    {
      name: '尻尾',
      mellee: {
        slash: 30,
        impact: 30,
        shot: 25,
      },
      element: {
        火: 0,
        水: 5,
        雷: 10,
        氷: 5,
        龍: 25,
      },
      stun: 0,
      partDurabilityNames: ['尻尾', '尻尾(破壊前)'],
    },
  ],
  partDurabilities: [
    // 頭
    new PartDurability('頭', 190, 285),
    // 首
    new PartDurability('首', 90, 135),
    // 胴
    new PartDurability('胴', 140, 210),
    // 左翼
    new PartDurability('左翼', 100, 150),
    // 右翼
    new PartDurability('右翼', 100, 150),
    // 左脚
    new PartDurability('左脚', 180, 270),
    // 右脚
    new PartDurability('右脚', 180, 270),
    // 尻尾
    new PartDurability('尻尾', 150, 225),
    // 尻尾(破壊前)
    new PartDurability('尻尾(破壊前)', 230),
  ],
}

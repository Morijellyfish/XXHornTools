import type { Monster } from '~/types/monster/monster'
import { PartDurability } from '~/types/monster/partDurability'

// バルファルクのモンスターデータ

export const valstrax: Monster = {
  name: 'バルファルク',
  hitZones: [
    // 頭
    {
      name: '頭',
      mellee: {
        slash: 55,
        impact: 60,
        shot: 45,
      },
      element: {
        火: 25,
        水: 25,
        雷: 25,
        氷: 25,
        龍: 0,
      },
      stun: 100,
    },
    // 頭(怒)
    {
      name: '頭(怒)',
      mellee: {
        slash: 55,
        impact: 60,
        shot: 45,
      },
      element: {
        火: 0,
        水: 0,
        雷: 0,
        氷: 0,
        龍: 0,
      },
      stun: 100,
    },
    // 首
    {
      name: '首',
      mellee: {
        slash: 40,
        impact: 30,
        shot: 40,
      },
      element: {
        火: 25,
        水: 25,
        雷: 25,
        氷: 25,
        龍: 0,
      },
      stun: 0,
    },
    // 首(怒)
    {
      name: '首(怒)',
      mellee: {
        slash: 40,
        impact: 30,
        shot: 25,
      },
      element: {
        火: 25,
        水: 25,
        雷: 25,
        氷: 25,
        龍: 0,
      },
      stun: 0,
    },
    // 胴
    {
      name: '胴',
      mellee: {
        slash: 30,
        impact: 25,
        shot: 45,
      },
      element: {
        火: 20,
        水: 20,
        雷: 20,
        氷: 20,
        龍: 0,
      },
      stun: 0,
    },
    // 胴(怒)
    {
      name: '胴(怒)',
      mellee: {
        slash: 30,
        impact: 25,
        shot: 25,
      },
      element: {
        火: 20,
        水: 20,
        雷: 20,
        氷: 20,
        龍: 0,
      },
      stun: 0,
    },
    // 翼
    {
      name: '翼',
      mellee: {
        slash: 22,
        impact: 25,
        shot: 10,
      },
      element: {
        火: 25,
        水: 25,
        雷: 25,
        氷: 25,
        龍: 0,
      },
      stun: 0,
    },
    // 翼(怒)
    {
      name: '翼(怒)',
      mellee: {
        slash: 22,
        impact: 25,
        shot: 10,
      },
      element: {
        火: 0,
        水: 0,
        雷: 0,
        氷: 0,
        龍: 0,
      },
      stun: 0,
    },
    // 翼脚
    {
      name: '翼脚',
      mellee: {
        slash: 30,
        impact: 30,
        shot: 60,
      },
      element: {
        火: 15,
        水: 15,
        雷: 15,
        氷: 15,
        龍: 0,
      },
      stun: 0,
    },
    // 前脚
    {
      name: '前脚',
      mellee: {
        slash: 25,
        impact: 24,
        shot: 25,
      },
      element: {
        火: 25,
        水: 25,
        雷: 25,
        氷: 25,
        龍: 0,
      },
      stun: 0,
    },
    // 後脚
    {
      name: '後脚',
      mellee: {
        slash: 25,
        impact: 24,
        shot: 20,
      },
      element: {
        火: 15,
        水: 15,
        雷: 15,
        氷: 15,
        龍: 0,
      },
      stun: 0,
    },
    // 後脚(怒)
    {
      name: '後脚(怒)',
      mellee: {
        slash: 25,
        impact: 24,
        shot: 40,
      },
      element: {
        火: 0,
        水: 0,
        雷: 0,
        氷: 0,
        龍: 0,
      },
      stun: 0,
    },
    // 尻尾
    {
      name: '尻尾',
      mellee: {
        slash: 30,
        impact: 24,
        shot: 20,
      },
      element: {
        火: 20,
        水: 20,
        雷: 20,
        氷: 20,
        龍: 0,
      },
      stun: 0,
    },
    // 尻尾(怒)
    {
      name: '尻尾(怒)',
      mellee: {
        slash: 30,
        impact: 24,
        shot: 20,
      },
      element: {
        火: 0,
        水: 0,
        雷: 0,
        氷: 0,
        龍: 0,
      },
      stun: 0,
    },
  ],
  partDurabilities: [
    // 頭
    new PartDurability('頭', ['頭'], 250),
    // 胴
    new PartDurability('胴', ['胴'], 200),
    // 左翼
    new PartDurability('左翼', ['翼'], 100),
    // 右翼
    new PartDurability('右翼', ['翼'], 100),
    // 左前脚
    new PartDurability('左前脚', ['前脚'], 150),
    // 右前脚
    new PartDurability('右前脚', ['前脚'], 150),
    // 尻尾
    new PartDurability('尻尾', ['尻尾'], 150),
    // 尻尾(破壊前)
    new PartDurability('尻尾(破壊前)', ['尻尾'], 300),
  ],
}

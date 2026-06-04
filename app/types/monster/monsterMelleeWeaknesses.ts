import type { MelleeType } from '../attackType'
import type { Monster } from './monster'

const MELLEE_ORDER: readonly MelleeType[] = ['slash', 'impact', 'shot']

function maxMelleeHitzone(monster: Monster, type: MelleeType): number {
  let max = 0
  for (const variant of monster.hitZoneVariants) {
    for (const hz of variant.hitZones) {
      const v = hz.mellee[type]
      if (v > max) max = v
    }
  }
  return max
}

// 全バリアントの肉質から、物理肉質が min 以上の部位がないタイプを返す
export function getMonsterMissingMelleeWeaknesses(monster: Monster, min = 45): MelleeType[] {
  const out: MelleeType[] = []
  for (const type of MELLEE_ORDER) {
    if (maxMelleeHitzone(monster, type) < min) {
      out.push(type)
    }
  }
  return out
}

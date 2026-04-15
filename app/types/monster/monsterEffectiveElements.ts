import type { ElementType } from '../attackType'
import type { Monster } from './monster'

// 列挙順（火→水→雷→氷→龍）
const ELEMENT_ORDER: readonly ElementType[] = ['火', '水', '雷', '氷', '龍']

function maxElementHitzone(monster: Monster, element: ElementType): number {
  let max = 0
  for (const variant of monster.hitZoneVariants) {
    for (const hz of variant.hitZones) {
      const v = hz.element[element]
      if (v > max) max = v
    }
  }
  return max
}

// 全バリアントの肉質から、属性肉質が min 以上の属性を ELEMENT_ORDER 順で返す
export function getMonsterEffectiveElements(monster: Monster, min = 20): ElementType[] {
  const out: ElementType[] = []
  for (const el of ELEMENT_ORDER) {
    if (maxElementHitzone(monster, el) >= min) {
      out.push(el)
    }
  }
  return out
}

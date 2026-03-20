import type { ElementType } from '../attackType'

// 属性
export type Element = '火' | '水' | '雷' | '氷' | '龍' | '無'

// 状態異常
export type StatusAilment = '毒' | '麻痺' | '睡眠' | '爆破' | '無'

// 属性or状態異常のスロット
export type ElementOrStatus =
  | { type: Element; value: number }
  | { type: StatusAilment; value: number }

const ELEMENT_TYPES = ['火', '水', '雷', '氷', '龍'] as const

/** 五属性のいずれか（「無」や状態異常は除外） */
export function isElementType(es: ElementOrStatus): es is { type: ElementType; value: number } {
  return ELEMENT_TYPES.includes(es.type as (typeof ELEMENT_TYPES)[number])
}

// 武器の基底インターフェース
export interface WeaponBase {
  // 基本情報
  name: string
  attack: number
  defense: number
  slots: number
  affinity: number // 会心率（%）

  // 主属性（属性 or 状態異常）
  elementStatus?: ElementOrStatus
}

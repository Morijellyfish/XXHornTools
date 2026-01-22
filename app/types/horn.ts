import type { SharpnessSet } from './sharpness'
import type { Notes } from './notes'

// 属性
export type Element = '火' | '水' | '雷' | '氷' | '龍' | '無'

// 状態異常
export type StatusAilment = '毒' | '麻痺' | '睡眠' | '爆破' | '無'

// 狩猟笛の型定義
export interface Horn {
  // 基本情報
  name: string
  attack: number
  defense: number
  slots: number
  affinity: number // 会心率（%）

  // 属性・状態異常
  element?: {
    type: Element
    value: number
  }
  statusAilment?: {
    type: StatusAilment
    value: number
  }

  // 音色
  notes: Notes

  // 切れ味
  sharpness: SharpnessSet
}

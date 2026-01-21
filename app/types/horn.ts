import type { SharpnessSet } from './sharpness'

// 音色
export type Note = '白' | '紫' | '青' | '黄' | '赤' | '緑' | '橙' | '空'

// 属性
export type Element =
  | '火'
  | '水'
  | '雷'
  | '氷'
  | '龍'
  | '無'

// 状態異常
export type StatusAilment =
  | '毒'
  | '麻痺'
  | '睡眠'
  | '爆破'
  | '無'

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
  note1: Note
  note2: Note
  note3: Note

  // 切れ味
  sharpness: SharpnessSet
}

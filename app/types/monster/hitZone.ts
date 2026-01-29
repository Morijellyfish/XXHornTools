// 属性の種類
export type ElementType = '火' | '水' | '雷' | '氷' | '龍'

export interface MelleeValues {
  slash: number
  impact: number
  shot: number
}

// 属性値の型
export interface ElementValues {
  火: number
  水: number
  雷: number
  氷: number
  龍: number
}

// 肉質データ
export interface HitZone {
  // 部位名称
  name: string
  // 肉質（切断、打撃、弾）
  mellee: MelleeValues
  // 属性（火、水、雷、氷、龍）
  element: ElementValues
  // 気絶
  stun: number
  // 対応する部位耐久名の配列（複数の部位耐久に対応可能）
  partDurabilityNames: string[]
}

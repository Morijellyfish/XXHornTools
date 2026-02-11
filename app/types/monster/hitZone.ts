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
  // 気絶（KO / Stun）
  stun: number
  // 減気（Exhaust）
  exhaust: number
}

// 肉質バリアント（例: 通常時 / 怒り時 / 獰猛時 など）
export interface HitZoneVariant {
  name: string
  hitZones: HitZone[]
}

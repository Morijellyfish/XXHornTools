import type { ElementType, MelleeType } from '../attackType'

/** 物理肉質 */
export type MelleeValues = Record<MelleeType, number>

/** 属性肉質 */
export type ElementValues = Record<ElementType, number>

// 肉質データ
export interface HitZone {
  // 部位名称
  name: string
  /** 物理肉質 */
  mellee: MelleeValues
  /** 属性肉質 */
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

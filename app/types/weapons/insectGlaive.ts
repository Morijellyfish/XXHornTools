import type { MelleeType } from '../attackType'
import type { WeaponMelee } from './weaponMelee'

export type InsectType = 'slash' | 'impact'

/** 操虫棍のデフォルト物理属性（切断） */
export const DEFAULT_HITZONE_TYPE: MelleeType = 'slash'

// 操虫棍の型定義
export interface InsectGlaive extends WeaponMelee {
  insectType: InsectType
}

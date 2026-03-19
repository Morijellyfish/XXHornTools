import type { Element, StatusAilment } from './weaponBase'
import type { MelleeType } from '../attackType'
import type { WeaponMelee } from './weaponMelee'

export type ElementOrStatus =
  | { type: Element; value: number }
  | { type: StatusAilment; value: number }

/** 双剣のデフォルト物理属性（斬撃） */
export const DEFAULT_HITZONE_TYPE: MelleeType = 'slash'

// 双剣の型定義
export interface DualBlade extends WeaponMelee {
  subElement?: ElementOrStatus
}

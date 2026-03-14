import type { MelleeType } from '../attackType'
import type { Notes } from '../notes'
import type { WeaponMelee } from './weaponMelee'
import type { WeaponBase } from './weaponBase'

/** 狩猟笛のデフォルト物理属性（打撃） */
export const DEFAULT_HITZONE_TYPE: MelleeType = 'impact'

// 狩猟笛の型定義
export interface HuntingHorn extends WeaponMelee {
  // 音色
  notes: Notes
}

// 型ガード: 武器が狩猟笛かどうかを判定
export function isHuntingHorn(weapon: WeaponBase | undefined): weapon is HuntingHorn {
  return weapon !== undefined && 'notes' in weapon
}

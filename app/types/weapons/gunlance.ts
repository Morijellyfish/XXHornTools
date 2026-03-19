import type { MelleeType } from '../attackType'
import type { WeaponMelee } from './weaponMelee'

export interface GunlanceShelling {
  type: 'normal' | 'long' | 'wide'
  level: 1 | 2 | 3 | 4 | 5
}

/** ガンランスのデフォルト物理属性（斬撃） */
export const DEFAULT_HITZONE_TYPE: MelleeType = 'slash'

// ガンランスの型定義
export interface Gunlance extends WeaponMelee {
  gunlanceShelling: GunlanceShelling
}

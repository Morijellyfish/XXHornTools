import type { MelleeType } from '../attackType'
import type { WeaponMelee } from './weaponMelee'

export type SwitchAxePhialType = 'power' | 'element' | 'dragon' | 'paralysis' | 'poison' | 'exhaust'

/** スラッシュアックスのデフォルト物理属性（斬撃） */
export const DEFAULT_HITZONE_TYPE: MelleeType = 'slash'

// スラッシュアックスの型定義
export interface SwitchAxe extends WeaponMelee {
  switchAxePhialType: SwitchAxePhialType
}

import type { MelleeType } from '../attackType'
import type { WeaponMelee } from './weaponMelee'

/** ランスのデフォルト物理属性（斬撃） */
export const DEFAULT_HITZONE_TYPE: MelleeType = 'slash'

// ランスの型定義
export type Lance = WeaponMelee

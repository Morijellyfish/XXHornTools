import type { MelleeType } from '../attackType'
import type { WeaponMelee } from './weaponMelee'

/** 片手剣のデフォルト物理属性（斬撃） */
export const DEFAULT_HITZONE_TYPE: MelleeType = 'slash'

// 片手剣の型定義
export type SwordAndShield = WeaponMelee

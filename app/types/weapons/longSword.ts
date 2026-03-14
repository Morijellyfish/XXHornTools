import type { MelleeType } from '../attackType'
import type { WeaponMelee } from './weaponMelee'

/** 太刀のデフォルト物理属性（斬撃） */
export const DEFAULT_HITZONE_TYPE: MelleeType = 'slash'

// 太刀の型定義
export type LongSword = WeaponMelee

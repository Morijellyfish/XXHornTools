import type { MelleeType } from '../attackType'
import type { WeaponMelee } from './weaponMelee'

/** ハンマーのデフォルト物理属性（打撃） */
export const DEFAULT_HITZONE_TYPE: MelleeType = 'impact'

// ハンマーの型定義
export type Hammer = WeaponMelee

import type { MelleeType } from '../attackType'
import type { WeaponMelee } from './weaponMelee'

export type ChargeBladePhialType = 'impact' | 'element'

/** チャージアックスのデフォルト物理属性（斬撃） */
export const DEFAULT_HITZONE_TYPE: MelleeType = 'slash'

// チャージアックスの型定義
export interface ChargeBlade extends WeaponMelee {
  chargeBladePhialType: ChargeBladePhialType
}

import type { SharpnessSet } from '../sharpness'
import type { WeaponBase } from './weaponBase'

// 近接武器の基底インターフェース
export interface WeaponMelee extends WeaponBase {
  // 切れ味
  sharpness: SharpnessSet
}

import type { Notes } from '../notes'
import type { WeaponMelee } from './weaponMelee'

// 狩猟笛の型定義
export interface HuntingHorn extends WeaponMelee {
  // 音色
  notes: Notes
}

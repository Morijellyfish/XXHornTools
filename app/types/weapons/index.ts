// 基底クラス
export type { Element, StatusAilment, ElementOrStatus, WeaponBase } from './weaponBase'
export { isElementType } from './weaponBase'
export type { WeaponMelee } from './weaponMelee'

/** 武器種（表示項目の出し分けなどに使用） */
export type WeaponType =
  | 'huntingHorn'
  | 'longSword'
  | 'lance'
  | 'swordAndShield'
  | 'greatSword'
  | 'hammer'
  | 'insectGlaive'
  | 'chargeBlade'
  | 'switchAxe'
  | 'gunlance'
  | 'dualBlade'

// 武器型
export type { HuntingHorn } from './huntingHorn'
export { isHuntingHorn } from './huntingHorn'
export type { LongSword } from './longSword'
export type { Lance } from './lance'
export type { SwordAndShield } from './swordAndShield'
export type { GreatSword } from './greatSword'
export type { Hammer } from './hammer'
export type { InsectGlaive, InsectType } from './insectGlaive'
export type { ChargeBlade, ChargeBladePhialType } from './chargeBlade'
export type { SwitchAxe, SwitchAxePhialType } from './switchAxe'
export type { Gunlance, GunlanceShelling } from './gunlance'
export type { DualBlade } from './dualBlade'

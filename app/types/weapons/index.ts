// 基底クラス
export type { Element, StatusAilment, WeaponBase } from './weaponBase'
export type { WeaponMelee } from './weaponMelee'

/** 武器種（表示項目の出し分けなどに使用） */
export type WeaponType =
  | 'huntingHorn'
  | 'longSword'
  | 'lance'
  | 'swordAndShield'
  | 'greatSword'
  | 'hammer'

// 武器型
export type { HuntingHorn } from './huntingHorn'
export { isHuntingHorn } from './huntingHorn'
export type { LongSword } from './longSword'
export type { Lance } from './lance'
export type { SwordAndShield } from './swordAndShield'
export type { GreatSword } from './greatSword'
export type { Hammer } from './hammer'

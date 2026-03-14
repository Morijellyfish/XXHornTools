/**
 * グループA: 属性旋律
 */
import { elementBuff } from './elementBuff'
import type { WeaponBase } from '~/types/weapons'
import { isHuntingHorn } from '~/types/weapons'

export class elementBuffA extends elementBuff {
  private elementMelody: ElementMelody
  private weapon?: WeaponBase

  constructor(elementMelody: ElementMelody, weapon?: WeaponBase) {
    super('element_multiplier', 'A')
    this.elementMelody = elementMelody
    this.weapon = weapon
  }

  override apply(elementValue: number): number {
    if (this.elementMelody === ElementMelody.None) {
      return elementValue
    }

    let multiplier = 1.0

    switch (this.elementMelody) {
      case ElementMelody.Bonus8:
        multiplier = 1.08
        break
      case ElementMelody.Bonus10:
        multiplier = 1.1
        break
      case ElementMelody.HornDependent:
        if (isHuntingHorn(this.weapon)) {
          multiplier = this.weapon.notes.getMaxMelodyMultiplier_Element()
        }
        break
    }

    if (multiplier !== 1.0) {
      this.value = multiplier
      return super.apply(elementValue)
    }

    return elementValue
  }
}

/**
 * 属性旋律の種類
 * 0: 無
 * 1: +8%
 * 2: +10%
 * 3: 笛依存（笛の時のみ）
 */
export enum ElementMelody {
  None = 0,
  Bonus8 = 1,
  Bonus10 = 2,
  HornDependent = 3,
}

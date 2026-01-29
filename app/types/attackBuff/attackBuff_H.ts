/**
 * グループH: 狩猟笛旋律
 */
import { attackBuff } from './attackBuff'
import type { WeaponBase } from '~/types/weapons'
import { isHuntingHorn } from '~/types/weapons'

export class attackBuffH extends attackBuff {
  private attackMelody: AttackMelody
  private weapon?: WeaponBase

  constructor(attackMelody: AttackMelody, weapon?: WeaponBase) {
    super('weapon_multiplier_multiply', 'H')
    this.attackMelody = attackMelody
    this.weapon = weapon
  }

  override apply(attack: number): number {
    if (this.attackMelody === AttackMelody.None) {
      return attack
    }

    let multiplier = 1.0

    switch (this.attackMelody) {
      case AttackMelody.Multiplier1_10:
        multiplier = 1.1
        break
      case AttackMelody.Multiplier1_15:
        multiplier = 1.15
        break
      case AttackMelody.Multiplier1_20:
        multiplier = 1.2
        break
      case AttackMelody.HornDependent:
        if (isHuntingHorn(this.weapon)) {
          multiplier = this.weapon.notes.getMaxMelodyMultiplier_Attack()
        }
        break
    }

    if (multiplier !== 1.0) {
      this.value = multiplier
      return super.apply(attack)
    }

    return attack
  }
}

/**
 * 攻撃旋律の種類
 * 0: 無
 * 1: x1.10
 * 2: x1.15
 * 3: x1.20
 * 4: 笛依存
 */
export enum AttackMelody {
  None = 0,
  Multiplier1_10 = 1,
  Multiplier1_15 = 2,
  Multiplier1_20 = 3,
  HornDependent = 4,
}

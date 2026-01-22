/**
 * グループH: 狩猟笛旋律
 */
import { attackBuff } from './attackBuff'
import type { Horn } from '~/types/horn'

export class attackBuffH extends attackBuff {
  private attackMelody?: AttackMelody
  private horn?: Horn

  constructor(attackMelody?: AttackMelody, horn?: Horn) {
    super('weapon_multiplier_multiply', 'H')
    this.attackMelody = attackMelody
    this.horn = horn
  }

  override apply(attack: number): number {
    if (!this.attackMelody || this.attackMelody === 'none') {
      return attack
    }

    let multiplier = 1.0

    if (this.attackMelody === 'horn' && this.horn) {
      multiplier = this.horn.notes.getMaxMelodyMultiplier_Attack()
    } else {
      switch (this.attackMelody) {
        case '1.10':
          multiplier = 1.1
          break
        case '1.15':
          multiplier = 1.15
          break
        case '1.20':
          multiplier = 1.2
          break
      }
    }

    if (multiplier !== 1.0) {
      this.value = multiplier
      return super.apply(attack)
    }

    return attack
  }
}

export type AttackMelody = 'none' | '1.10' | '1.15' | '1.20' | 'horn'

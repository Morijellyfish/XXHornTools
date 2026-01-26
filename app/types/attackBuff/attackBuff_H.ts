/**
 * グループH: 狩猟笛旋律
 */
import { attackBuff } from './attackBuff'
import type { HuntingHorn } from '~/types/weapons'

export class attackBuffH extends attackBuff {
  private attackMelody?: number
  private horn?: HuntingHorn

  constructor(attackMelody?: number, horn?: HuntingHorn) {
    super('weapon_multiplier_multiply', 'H')
    this.attackMelody = attackMelody
    this.horn = horn
  }

  override apply(attack: number): number {
    if (!this.attackMelody || this.attackMelody === 0) {
      return attack
    }

    let multiplier = 1.0

    // 数値ベースのattackMelody（0: 無, 1: x1.10, 2: x1.15, 3: x1.20, 4: 笛依存）
    if (this.attackMelody === 4 && this.horn) {
      // 笛依存の場合は狩猟笛の旋律から取得
      multiplier = this.horn.notes.getMaxMelodyMultiplier_Attack()
    } else {
      // 固定値（1, 2, 3）の場合はattackMelodyから倍率を計算
      switch (this.attackMelody) {
        case 1:
          multiplier = 1.1
          break
        case 2:
          multiplier = 1.15
          break
        case 3:
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

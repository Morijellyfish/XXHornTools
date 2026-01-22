/**
 * グループO: 龍気活性
 */
import { attackBuff } from './attackBuff'

export class attackBuffO extends attackBuff {
  constructor() {
    super('weapon_multiplier_multiply', 'O')
  }

  override apply(attack: number): number {
    this.value = 1.1
    return super.apply(attack)
  }
}

export type DragonInstinct = boolean

/**
 * グループM: 死中に活
 */
import { attackBuff } from './attackBuff'

export class attackBuffM extends attackBuff {
  constructor() {
    super('weapon_multiplier_add', 'M')
  }

  override apply(attack: number): number {
    this.value = 20
    return super.apply(attack)
  }
}

export type Resuscitate = boolean

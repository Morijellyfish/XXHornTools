import { attackBuff } from './attackBuff'

export class attackBuffA extends attackBuff {
  constructor() {
    super('weapon_multiplier_add', 'A')
  }

  override apply(attack: number): number {
    this.value = 6
    return super.apply(attack)
  }
}

export type PowerCharm = boolean

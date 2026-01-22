import { attackBuff } from './attackBuff'

export class attackBuffB extends attackBuff {
  constructor() {
    super('weapon_multiplier_add', 'B')
  }

  override apply(attack: number): number {
    this.value = 9
    return super.apply(attack)
  }
}

export type PowerTalon = boolean

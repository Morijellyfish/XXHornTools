import { attackBuff } from './attackBuff'

export class attackBuffN extends attackBuff {
  constructor() {
    super('weapon_multiplier_add', 'N')
  }

  override apply(attack: number): number {
    this.value = 20
    return super.apply(attack)
  }
}

export type Resentment = boolean

/**
 * グループE: ネコの短期催眠術
 */
import { attackBuff } from './attackBuff'

export class attackBuffE extends attackBuff {
  constructor() {
    super('weapon_multiplier_add', 'E')
  }

  override apply(attack: number): number {
    this.value = 3
    return super.apply(attack)
  }
}

export type ShortHypnosis = boolean

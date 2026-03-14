/**
 * グループI: 不屈
 */
import { attackBuff } from './attackBuff'

export class attackBuffI extends attackBuff {
  private fortifyMultiplier: number = 1.0

  constructor(fortify?: Fortify) {
    super('weapon_multiplier_multiply', 'I')
    if (fortify) {
      this.fortifyMultiplier = getFortifyMultiplier(fortify)
    }
  }

  override apply(attack: number): number {
    this.value = this.fortifyMultiplier
    return super.apply(attack)
  }
}

export type Fortify = 'none' | 'fortify1' | 'fortify2'

export const getFortifyMultiplier = (fortify: Fortify): number => {
  switch (fortify) {
    case 'fortify1':
      return 1.1 // 1乙: x1.1
    case 'fortify2':
      return 1.2 // 2乙: x1.2
    case 'none':
    default:
      return 1.0
  }
}

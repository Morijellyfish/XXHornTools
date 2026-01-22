/**
 * グループG: 火事場力
 */
import { attackBuff } from './attackBuff'

export class attackBuffG extends attackBuff {
  private adrenalineMultiplier: number = 1.0

  constructor(adrenaline?: Adrenaline) {
    super('weapon_multiplier_multiply', 'G')
    if (adrenaline) {
      this.adrenalineMultiplier = getAdrenalineMultiplier(adrenaline)
    }
  }

  override apply(attack: number): number {
    this.value = this.adrenalineMultiplier
    return super.apply(attack)
  }
}

export type Adrenaline =
  | 'none'
  | 'worrywart' // 心配性
  | 'adrenalinePlus2' // 火事場+2
  | 'catAdrenaline' // 猫火事場

export const getAdrenalineMultiplier = (adrenaline: Adrenaline): number => {
  switch (adrenaline) {
    case 'worrywart':
      return 0.7 // 心配性: x0.7
    case 'adrenalinePlus2':
      return 1.2 // 火事場+2: x1.2
    case 'catAdrenaline':
      return 1.35 // 猫火事場: x1.35
    case 'none':
    default:
      return 1.0
  }
}

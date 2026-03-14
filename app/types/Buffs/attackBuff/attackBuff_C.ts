/**
 * グループC: 鬼人薬
 */
import { attackBuff } from './attackBuff'

export class attackBuffC extends attackBuff {
  private buffValue: number = 0

  constructor(demonDrugBuff?: DemonDrugBuff) {
    super('weapon_multiplier_add', 'C')
    if (demonDrugBuff) {
      this.buffValue = getDemonDrugBuffValue(demonDrugBuff)
    }
  }

  override apply(attack: number): number {
    this.value = this.buffValue
    return super.apply(attack)
  }
}

export type DemonDrugBuff =
  | 'none'
  | 'demon_drug' // 鬼人薬
  | 'MegaDemondrug' // 鬼人薬G

export const getDemonDrugBuffValue = (demonDrugBuff: DemonDrugBuff): number => {
  switch (demonDrugBuff) {
    case 'demon_drug':
      return 5 // 鬼人薬: +5
    case 'MegaDemondrug':
      return 7 // 鬼人薬G: +7
    case 'none':
    default:
      return 0
  }
}

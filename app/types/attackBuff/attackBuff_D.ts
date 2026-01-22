/**
 * グループD: 怪力の種・鬼人笛など
 */
import { attackBuff } from './attackBuff'

export class attackBuffD extends attackBuff {
  private shortTermBuffValue: number = 0

  constructor(shortTermBuff?: ShortTermBuff) {
    super('weapon_multiplier_add', 'D')
    if (shortTermBuff) {
      this.shortTermBuffValue = getShortTermBuffValue(shortTermBuff)
    }
  }

  override apply(attack: number): number {
    this.value = this.shortTermBuffValue
    return super.apply(attack)
  }
}

export type ShortTermBuff =
  | 'none'
  | 'seedOrHorn' // 種/鬼人笛
  | 'pill' // 丸薬
  | 'restOrDance' // 休憩術/舞踏術
  | 'demonBullet' // 鬼人弾
  | 'demonCriticalBullet' // 鬼人会心弾

export const getShortTermBuffValue = (shortTermBuff: ShortTermBuff): number => {
  switch (shortTermBuff) {
    case 'seedOrHorn':
      return 10 // 種/鬼人笛: +10
    case 'pill':
      return 25 // 丸薬: +25
    case 'restOrDance':
      return 15 // 休憩術/舞踏術: +15
    case 'demonBullet':
      return 10 // 鬼人弾: +10
    case 'demonCriticalBullet':
      return 15 // 鬼人会心弾: +15
    case 'none':
    default:
      return 0
  }
}

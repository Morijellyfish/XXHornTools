import { attackBuff } from './attackBuff'

export class attackBuffC extends attackBuff {
  private preparedBuffValue: number = 0

  constructor(preparedBuff?: PreparedBuff) {
    super('weapon_multiplier_add', 'C')
    if (preparedBuff) {
      this.preparedBuffValue = getPreparedBuffValue(preparedBuff)
    }
  }

  override apply(attack: number): number {
    this.value = this.preparedBuffValue
    return super.apply(attack)
  }
}

export type PreparedBuff =
  | 'none'
  | 'demon_drug' // 鬼人薬
  | 'MegaDemondrug' // 鬼人薬G
  | 'meal_attack_small' // 食事攻撃小
  | 'meal_attack_medium' // 食事攻撃中
  | 'meal_attack_large' // 食事攻撃大

export const getPreparedBuffValue = (preparedBuff: PreparedBuff): number => {
  switch (preparedBuff) {
    case 'demon_drug':
      return 5 // 鬼人薬: +5
    case 'MegaDemondrug':
      return 7 // 鬼人薬G: +7
    case 'meal_attack_small':
      return 3 // 食事攻撃小: +3
    case 'meal_attack_medium':
      return 5 // 食事攻撃中: +5
    case 'meal_attack_large':
      return 7 // 食事攻撃大: +7
    case 'none':
    default:
      return 0
  }
}

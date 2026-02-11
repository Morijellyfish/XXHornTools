/**
 * グループP: 食事効果
 */
import { attackBuff } from './attackBuff'

export class attackBuffP extends attackBuff {
  private buffValue: number = 0

  constructor(mealAttackBuff?: MealAttackBuff) {
    super('weapon_multiplier_add', 'P')
    if (mealAttackBuff) {
      this.buffValue = getMealAttackBuffValue(mealAttackBuff)
    }
  }

  override apply(attack: number): number {
    this.value = this.buffValue
    return super.apply(attack)
  }
}

export type MealAttackBuff =
  | 'none'
  | 'meal_attack_small' // 食事攻撃小
  | 'meal_attack_medium' // 食事攻撃中
  | 'meal_attack_large' // 食事攻撃大

export const getMealAttackBuffValue = (mealAttackBuff: MealAttackBuff): number => {
  switch (mealAttackBuff) {
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

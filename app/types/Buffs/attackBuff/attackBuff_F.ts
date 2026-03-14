/**
 * グループF: 攻撃力UPスキル
 */
import { attackBuff } from './attackBuff'

export class attackBuffF extends attackBuff {
  private skillValue: number = 0

  constructor(attackSkill?: AttackSkill) {
    super('weapon_multiplier_add', 'F')
    if (attackSkill) {
      this.skillValue = getAttackSkillValue(attackSkill)
    }
  }

  override apply(attack: number): number {
    this.value = this.skillValue
    return super.apply(attack)
  }
}

export type AttackSkill =
  | 'none'
  | 'down_small'
  | 'down_medium'
  | 'down_large'
  | 'up_small'
  | 'up_medium'
  | 'up_large'

export const getAttackSkillValue = (attackSkill: AttackSkill): number => {
  switch (attackSkill) {
    case 'down_small':
      return -15
    case 'down_medium':
      return -10
    case 'down_large':
      return -5
    case 'up_small':
      return 10
    case 'up_medium':
      return 15
    case 'up_large':
      return 20
    case 'none':
    default:
      return 0
  }
}

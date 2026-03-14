/**
 * グループK: 北風の狩人・南風の狩人
 */
import { attackBuff } from './attackBuff'

export class attackBuffK extends attackBuff {
  private hunterSkillValue: number = 0

  constructor(hunterSkill?: HunterSkill) {
    super('weapon_multiplier_add', 'K')
    if (hunterSkill) {
      this.hunterSkillValue = getHunterSkillValue(hunterSkill)
    }
  }

  override apply(attack: number): number {
    this.value = this.hunterSkillValue
    return super.apply(attack)
  }
}

export type HunterSkill =
  | 'none'
  | 'cooler' // クーラー (Cooler)
  | 'eitherBlooded' // 北風/南風 (PolarHunter/TropicHunter)
  | 'polarCooler' // 北風クーラー (PolarCooler)

export const getHunterSkillValue = (hunterSkill: HunterSkill): number => {
  switch (hunterSkill) {
    case 'cooler':
      return 5 // クーラー: +5
    case 'eitherBlooded':
      return 15 // 北風/南風: +15
    case 'polarCooler':
      return 20 // 北風クーラー: +20
    case 'none':
    default:
      return 0
  }
}

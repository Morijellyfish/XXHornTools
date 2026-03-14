/**
 * グループB: 弱点特攻
 */
import { criticalBuff } from './criticalBuff'

export class criticalBuffB extends criticalBuff {
  constructor(hasWeaknessExploit: boolean) {
    super('B')
    // 弱点特攻の補正値: +50%
    this.value = hasWeaknessExploit ? 50 : 0
  }
}

export type WeaknessExploit = boolean

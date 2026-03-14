/**
 * グループF: 鬼人会心弾
 */
import { criticalBuff } from './criticalBuff'

export class criticalBuffF extends criticalBuff {
  constructor(hasDemonCriticalBullet: boolean) {
    super('F')
    // 鬼人会心弾の補正値: +10%
    this.value = hasDemonCriticalBullet ? 10 : 0
  }
}

export type DemonCriticalBullet = boolean

/**
 * グループA: 見切り
 */
import { criticalBuff } from './criticalBuff'

export class criticalBuffA extends criticalBuff {
  constructor(level: number) {
    super('A')
    // 見切りの補正値マッピング
    const criticalEyeBonus: Record<number, number> = {
      [-3]: -15,
      [-2]: -10,
      [-1]: -5,
      0: 0,
      1: 10,
      2: 20,
      3: 30,
    }
    this.value = criticalEyeBonus[level] ?? 0
  }
}

export type CriticalEye = number

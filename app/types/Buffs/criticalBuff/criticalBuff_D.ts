/**
 * グループD: 会心旋律
 */
import { criticalBuff } from './criticalBuff'

export class criticalBuffD extends criticalBuff {
  constructor(criticalMelody: CriticalMelody) {
    super('D')
    // 会心旋律の補正値マッピング（固定値の場合のみ）
    switch (criticalMelody) {
      case CriticalMelody.Bonus15:
        this.value = 15
        break
      case CriticalMelody.Bonus20:
        this.value = 20
        break
      case CriticalMelody.None:
      case CriticalMelody.HornDependent:
      default:
        // HornDependent の場合は武器依存のため、固定値は0
        this.value = 0
        break
    }
  }
}

/**
 * 会心旋律の種類
 * 0: 無
 * 1: +15%
 * 2: +20%
 * 3: 笛依存
 */
export enum CriticalMelody {
  None = 0,
  Bonus15 = 1,
  Bonus20 = 2,
  HornDependent = 3,
}

/**
 * グループA: 見切り
 */
import { criticalBuff } from './criticalBuff'

/**
 * 見切りのレベル
 */
export enum CriticalEye {
  Minus3 = -3,
  Minus2 = -2,
  Minus1 = -1,
  Zero = 0,
  Plus1 = 1,
  Plus2 = 2,
  Plus3 = 3,
}

export class criticalBuffA extends criticalBuff {
  constructor(level: CriticalEye) {
    super('A')
    // 見切りの補正値マッピング
    switch (level) {
      case CriticalEye.Minus3:
        this.value = -15
        break
      case CriticalEye.Minus2:
        this.value = -10
        break
      case CriticalEye.Minus1:
        this.value = -5
        break
      case CriticalEye.Zero:
        this.value = 0
        break
      case CriticalEye.Plus1:
        this.value = 10
        break
      case CriticalEye.Plus2:
        this.value = 20
        break
      case CriticalEye.Plus3:
        this.value = 30
        break
      default:
        this.value = 0
        break
    }
  }
}

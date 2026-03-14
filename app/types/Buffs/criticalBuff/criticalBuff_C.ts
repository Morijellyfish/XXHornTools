/**
 * グループC: 連撃
 */
import { criticalBuff } from './criticalBuff'

/** 連撃の種類 */
export type RepeatOffensive = 'none' | '25' | '30'

export class criticalBuffC extends criticalBuff {
  constructor(repeatOffensive: RepeatOffensive) {
    super('C')
    // 連撃の補正値マッピング
    switch (repeatOffensive) {
      case '25':
        this.value = 25
        break
      case '30':
        this.value = 30
        break
      case 'none':
      default:
        this.value = 0
        break
    }
  }
}

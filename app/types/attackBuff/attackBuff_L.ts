/**
 * グループL: 鈍器使い
 */
import { attackBuff } from './attackBuff'
import { SharpnessColor } from '~/types/sharpness'

export class attackBuffL extends attackBuff {
  private bludgeonerMultiplier: number = 1.0

  constructor(sharpnessColor?: SharpnessColor) {
    super('weapon_multiplier_multiply', 'L')
    if (sharpnessColor) {
      this.bludgeonerMultiplier = getBludgeonerMultiplier(sharpnessColor)
    }
  }

  override apply(attack: number): number {
    this.value = this.bludgeonerMultiplier
    return super.apply(attack)
  }
}

export type Bludgeoner = boolean

/**
 * 鈍器使いの倍率を取得（MHXX仕様）
 * @param sharpnessColor 切れ味の色
 * @returns 倍率（1.0 = 補正なし）
 */
export const getBludgeonerMultiplier = (sharpnessColor: SharpnessColor): number => {
  switch (sharpnessColor) {
    case SharpnessColor.Green:
      return 1.1 // 緑: x1.1
    case SharpnessColor.Yellow:
      return 1.15 // 黄色: x1.15
    case SharpnessColor.Orange:
    case SharpnessColor.Red:
      return 1.2 // 橙・赤: x1.2
    case SharpnessColor.Blue:
    case SharpnessColor.White:
    case SharpnessColor.Purple:
    default:
      return 1.0 // 青以上は補正なし
  }
}

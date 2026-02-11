/**
 * 部位耐久データ
 * 部位名と、状態ごとの耐久値を保持します
 */
export class PartDurability {
  // 部位名（例：「左翼」「右翼」「左脚」「右脚」など）
  name: string

  // 耐久値（通常時）
  durability: number

  // 耐久値（獰猛化、オプショナル）
  durabilityFrenzied?: number

  // 耐久値（破壊前、オプショナル）
  durabilityPreBreak?: number

  // 耐久値（獰猛化かつ破壊前、オプショナル）
  durabilityFrenziedPreBreak?: number

  constructor(
    name: string,
    durability: number,
    durabilityPreBreak?: number,
    durabilityFrenzied?: number,
    durabilityFrenziedPreBreak?: number
  ) {
    this.name = name
    this.durability = durability
    this.durabilityPreBreak = durabilityPreBreak
    this.durabilityFrenzied = durabilityFrenzied
    this.durabilityFrenziedPreBreak = durabilityFrenziedPreBreak
  }

  /**
   * 状態に応じた耐久値を取得（なければフォールバック）
   */
  getDurability(isFrenzied: boolean, isPreBreak: boolean): number {
    if (isFrenzied && isPreBreak && this.durabilityFrenziedPreBreak !== undefined) {
      return this.durabilityFrenziedPreBreak
    }

    if (isPreBreak && this.durabilityPreBreak !== undefined) {
      return this.durabilityPreBreak
    }

    if (isFrenzied && this.durabilityFrenzied !== undefined) {
      return this.durabilityFrenzied
    }

    return this.durability
  }
}

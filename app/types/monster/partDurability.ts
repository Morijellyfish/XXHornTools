/**
 * 部位耐久データ
 * 部位名と耐久値を保持します
 * 肉質データから部位耐久名で参照されます
 */
export class PartDurability {
  // 部位名（例：「左翼」「右翼」「左脚」「右脚」など）
  name: string
  // 耐久値（通常時）
  durability: number
  // 耐久値（獰猛時、オプショナル）
  durabilityFrenzied?: number

  constructor(name: string, durability: number, durabilityFrenzied?: number) {
    this.name = name
    this.durability = durability
    this.durabilityFrenzied = durabilityFrenzied
  }

  /**
   * 獰猛時の耐久値を取得（なければ通常時を返す）
   */
  getDurability(isFrenzied: boolean): number {
    return isFrenzied && this.durabilityFrenzied !== undefined
      ? this.durabilityFrenzied
      : this.durability
  }
}

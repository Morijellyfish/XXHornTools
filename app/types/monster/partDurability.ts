/**
 * 部位耐久データ
 * 部位名、対応する肉質部位名、耐久値を保持します
 * 肉質データへの参照は持たず、独立したデータ構造として定義されています
 */
export class PartDurability {
  // 部位名（例：「左翼」「右翼」「左脚」「右脚」など）
  name: string
  // 対応する肉質部位名の配列（複数の部位に対応）
  hitZoneNames: string[]
  // 耐久値（通常時）
  durability: number
  // 耐久値（獰猛時、オプショナル）
  durabilityFrenzied?: number

  constructor(
    name: string,
    hitZoneNames: string[],
    durability: number,
    durabilityFrenzied?: number
  ) {
    this.name = name
    this.hitZoneNames = hitZoneNames
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

/**
 * 会心率補正（バフ）の基底的な型定義
 */

/**
 * 会心バフのグループ
 */
export type CriticalBuffGroup =
  | 'A' // 見切り
  | 'B' // 弱点特攻
  | 'C' // 連撃
  | 'D' // 会心旋律
  | 'E' // 挑戦者・フルチャージ・力の解放
  | 'F' // 鬼人会心弾

/**
 * 会心バフの基底クラス
 */
export class criticalBuff {
  readonly group: CriticalBuffGroup
  value: number = 0

  constructor(group: CriticalBuffGroup) {
    this.group = group
  }

  /**
   * 会心率補正値を取得
   * @returns 会心率補正値（%）
   */
  getValue(): number {
    return this.value
  }
}

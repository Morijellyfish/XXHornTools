/**
 * 属性補正（バフ）の基底的な型定義
 */

/**
 * 属性バフの種類
 */
export type ElementBuffModifierType = 'element_multiplier'

/**
 * 属性バフのグループ
 */
export type ElementBuffGroup = 'A' // 属性旋律

export class elementBuff {
  readonly type: ElementBuffModifierType
  readonly group: ElementBuffGroup
  value: number = 1.0

  constructor(type: ElementBuffModifierType, group: ElementBuffGroup) {
    this.type = type
    this.group = group
  }

  /**
   * 属性値に補正を適用
   * @param elementValue 補正前の属性値
   * @returns 補正後の属性値（切り捨て）
   */
  apply(elementValue: number): number {
    if (this.type === 'element_multiplier') {
      return Math.round(elementValue * this.value)
    }
    return elementValue
  }
}

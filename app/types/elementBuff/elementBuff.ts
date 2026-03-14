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

  apply(elementValue: number): number {
    if (this.type === 'element_multiplier') {
      return Math.round(elementValue * this.value)
    }
    return elementValue
  }
}

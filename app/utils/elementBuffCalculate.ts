import type { ElementBuffs, elementBuff } from '~/types/Buffs/elementBuff'
import type { WeaponMelee } from '~/types/weapons'
import { elementBuffA, elementBuffB, elementBuffC, ElementMelody } from '~/types/Buffs/elementBuff'

const ELEM_ATK_ADD: Record<string, number> = {
  none: 0,
  down: 0,
  plus1: 4,
  plus2: 6,
}

export interface ElementWithBuffsResult {
  value: number
  isCapped: boolean
  /** キャップ適用前の値（キャップなしだった場合の表示値） */
  uncappedValue: number
}

/**
 * 補正済み属性値を計算（elementBuffクラスを使用）
 * @param baseElementValue 基礎属性値
 * @param modifiers 属性バフ設定
 * @param weapon 武器
 * @returns 補正済み属性値とキャップ到達フラグ
 */
export const calculateElementWithBuffs = (
  baseElementValue: number,
  modifiers: ElementBuffs,
  weapon?: WeaponMelee
): ElementWithBuffsResult => {
  const allModifiers: elementBuff[] = []

  // A: 属性旋律
  allModifiers.push(new elementBuffA(modifiers.elementMelody ?? ElementMelody.None, weapon))
  // B: 属性攻撃
  allModifiers.push(new elementBuffB(modifiers.elemental ?? 'none'))
  // C: 単属性強化
  allModifiers.push(new elementBuffC(modifiers.elemAtk ?? 'none'))

  let elementValue = baseElementValue
  for (const modifier of allModifiers) {
    elementValue = modifier.apply(elementValue)
  }

  // 倍率上限: 初期値の1.2倍+単属性の加算値（旋律・属性攻撃込みでも同じ）
  const add = ELEM_ATK_ADD[modifiers.elemAtk ?? 'none'] ?? 0
  const cap = Math.floor(baseElementValue * 1.2 + add)
  const isCapped = elementValue >= cap
  const uncappedValue = Math.floor(elementValue)
  elementValue = Math.min(elementValue, cap)

  return { value: Math.floor(elementValue), isCapped, uncappedValue }
}

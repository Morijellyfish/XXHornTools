import type { ElementBuffs, elementBuff } from '~/types/Buffs/elementBuff'
import type { WeaponMelee } from '~/types/weapons'
import { elementBuffA, elementBuffB, elementBuffC, ElementMelody } from '~/types/Buffs/elementBuff'

/**
 * 補正済み属性値を計算（elementBuffクラスを使用）
 * @param baseElementValue 基礎属性値
 * @param modifiers 属性バフ設定
 * @param weapon 武器
 * @returns 補正済み属性値
 */
export const calculateElementWithBuffs = (
  baseElementValue: number,
  modifiers: ElementBuffs,
  weapon?: WeaponMelee
): number => {
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

  return Math.floor(elementValue)
}

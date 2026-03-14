import type { ElementBuffs, elementBuff } from '~/types/elementBuff'
import type { WeaponMelee } from '~/types/weapons'
import { elementBuffA, ElementMelody } from '~/types/elementBuff'

export const calculateElementWithBuffs = (
  baseElementValue: number,
  modifiers: ElementBuffs,
  weapon?: WeaponMelee
): number => {
  const allModifiers: elementBuff[] = []

  allModifiers.push(new elementBuffA(modifiers.elementMelody ?? ElementMelody.None, weapon))

  let elementValue = baseElementValue
  for (const modifier of allModifiers) {
    elementValue = modifier.apply(elementValue)
  }

  return elementValue
}

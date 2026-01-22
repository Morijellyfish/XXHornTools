import type { AttackBuffs } from '~/types/attackBuffs'
import type { attackBuff } from '~/types/attackBuff'
import type { Horn } from '~/types/horn'
import { attackBuffA } from '~/types/attackBuff_A'
import { attackBuffB } from '~/types/attackBuff_B'
import { attackBuffF } from '~/types/attackBuff_F'
import { attackBuffH } from '~/types/attackBuff_H'

export const calculateAttackWithBuffs = (
  baseAttack: number,
  modifiers: AttackBuffs,
  horn?: Horn
): number => {
  const allModifiers: attackBuff[] = []

  if (modifiers.powerCharm) {
    allModifiers.push(new attackBuffA())
  }

  if (modifiers.powerTalon) {
    allModifiers.push(new attackBuffB())
  }

  if (modifiers.attackSkill && modifiers.attackSkill !== 'none') {
    allModifiers.push(new attackBuffF(modifiers.attackSkill))
  }

  if (modifiers.attackMelody && modifiers.attackMelody !== 'none') {
    allModifiers.push(new attackBuffH(modifiers.attackMelody, horn))
  }

  let attack = baseAttack

  const addModifiers = allModifiers.filter(m => m.type === 'weapon_multiplier_add')
  const multiplyModifiers = allModifiers.filter(m => m.type === 'weapon_multiplier_multiply')

  for (const modifier of addModifiers) {
    attack = modifier.apply(attack)
  }

  for (const modifier of multiplyModifiers) {
    attack = modifier.apply(attack)
  }

  return attack
}

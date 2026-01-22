import type { AttackBuffs } from '~/types/attackBuff/attackBuffs'
import type { attackBuff } from '~/types/attackBuff/attackBuff'
import type { Horn } from '~/types/horn'
import { attackBuffA } from '~/types/attackBuff/attackBuff_A'
import { attackBuffB } from '~/types/attackBuff/attackBuff_B'
import { attackBuffC } from '~/types/attackBuff/attackBuff_C'
import { attackBuffF } from '~/types/attackBuff/attackBuff_F'
import { attackBuffG } from '~/types/attackBuff/attackBuff_G'
import { attackBuffH } from '~/types/attackBuff/attackBuff_H'
import { attackBuffI } from '~/types/attackBuff/attackBuff_I'
import { attackBuffK } from '~/types/attackBuff/attackBuff_K'
import { attackBuffM } from '~/types/attackBuff/attackBuff_M'
import { attackBuffN } from '~/types/attackBuff/attackBuff_N'
import { attackBuffO } from '~/types/attackBuff/attackBuff_O'

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

  if (modifiers.preparedBuff && modifiers.preparedBuff !== 'none') {
    allModifiers.push(new attackBuffC(modifiers.preparedBuff))
  }

  if (modifiers.attackSkill && modifiers.attackSkill !== 'none') {
    allModifiers.push(new attackBuffF(modifiers.attackSkill))
  }

  if (modifiers.adrenaline && modifiers.adrenaline !== 'none') {
    allModifiers.push(new attackBuffG(modifiers.adrenaline))
  }

  if (modifiers.hunterSkill && modifiers.hunterSkill !== 'none') {
    allModifiers.push(new attackBuffK(modifiers.hunterSkill))
  }

  if (modifiers.resuscitate) {
    allModifiers.push(new attackBuffM())
  }

  if (modifiers.resentment) {
    allModifiers.push(new attackBuffN())
  }

  if (modifiers.fortify && modifiers.fortify !== 'none') {
    allModifiers.push(new attackBuffI(modifiers.fortify))
  }

  if (modifiers.dragonInstinct) {
    allModifiers.push(new attackBuffO())
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

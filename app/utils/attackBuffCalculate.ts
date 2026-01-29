import type { AttackBuffs } from '~/types/attackBuff/attackBuffs'
import type { attackBuff } from '~/types/attackBuff/attackBuff'
import type { WeaponMelee } from '~/types/weapons'
import { attackBuffA } from '~/types/attackBuff/attackBuff_A'
import { attackBuffB } from '~/types/attackBuff/attackBuff_B'
import { attackBuffC } from '~/types/attackBuff/attackBuff_C'
import { attackBuffD } from '~/types/attackBuff/attackBuff_D'
import { attackBuffE } from '~/types/attackBuff/attackBuff_E'
import { attackBuffF } from '~/types/attackBuff/attackBuff_F'
import { attackBuffG } from '~/types/attackBuff/attackBuff_G'
import { attackBuffH, AttackMelody } from '~/types/attackBuff/attackBuff_H'
import { attackBuffI } from '~/types/attackBuff/attackBuff_I'
import { attackBuffJ } from '~/types/attackBuff/attackBuff_J'
import { attackBuffK } from '~/types/attackBuff/attackBuff_K'
import { attackBuffL } from '~/types/attackBuff/attackBuff_L'
import { attackBuffM } from '~/types/attackBuff/attackBuff_M'
import { attackBuffN } from '~/types/attackBuff/attackBuff_N'
import { attackBuffO } from '~/types/attackBuff/attackBuff_O'

type SharpnessType = 'normal' | 'plus1' | 'plus2'

export const calculateAttackWithBuffs = (
  baseAttack: number,
  modifiers: AttackBuffs,
  weapon?: WeaponMelee,
  selectedSharpness?: SharpnessType
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

  if (modifiers.shortTermBuff && modifiers.shortTermBuff !== 'none') {
    allModifiers.push(new attackBuffD(modifiers.shortTermBuff))
  }

  if (modifiers.shortHypnosis) {
    allModifiers.push(new attackBuffE())
  }

  if (modifiers.attackSkill && modifiers.attackSkill !== 'none') {
    allModifiers.push(new attackBuffF(modifiers.attackSkill))
  }

  if (modifiers.adrenaline && modifiers.adrenaline !== 'none') {
    allModifiers.push(new attackBuffG(modifiers.adrenaline))
  }

  if (modifiers.challengeSkill && modifiers.challengeSkill !== 'none') {
    allModifiers.push(new attackBuffJ(modifiers.challengeSkill))
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

  allModifiers.push(new attackBuffH(modifiers.attackMelody ?? AttackMelody.None, weapon))

  // 鈍器使いの補正（切れ味に応じた倍率）
  if (modifiers.bludgeoner && weapon && selectedSharpness) {
    let sharpnessData
    switch (selectedSharpness) {
      case 'normal':
        sharpnessData = weapon.sharpness.normal
        break
      case 'plus1':
        sharpnessData = weapon.sharpness.plus1
        break
      case 'plus2':
        sharpnessData = weapon.sharpness.plus2
        break
    }
    if (sharpnessData) {
      allModifiers.push(new attackBuffL(sharpnessData.color))
    }
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

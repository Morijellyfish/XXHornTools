import type { AttackBuffs } from '~/types/attackBuff/attackBuffs'
import type { attackBuff } from '~/types/attackBuff/attackBuff'
import type { HuntingHorn, WeaponMelee } from '~/types/weapons'
import { attackBuffA } from '~/types/attackBuff/attackBuff_A'
import { attackBuffB } from '~/types/attackBuff/attackBuff_B'
import { attackBuffC } from '~/types/attackBuff/attackBuff_C'
import { attackBuffD } from '~/types/attackBuff/attackBuff_D'
import { attackBuffE } from '~/types/attackBuff/attackBuff_E'
import { attackBuffF } from '~/types/attackBuff/attackBuff_F'
import { attackBuffG } from '~/types/attackBuff/attackBuff_G'
import { attackBuffH } from '~/types/attackBuff/attackBuff_H'
import { attackBuffI } from '~/types/attackBuff/attackBuff_I'
import { attackBuffJ } from '~/types/attackBuff/attackBuff_J'
import { attackBuffK } from '~/types/attackBuff/attackBuff_K'
import { attackBuffL } from '~/types/attackBuff/attackBuff_L'
import { attackBuffM } from '~/types/attackBuff/attackBuff_M'
import { attackBuffN } from '~/types/attackBuff/attackBuff_N'
import { attackBuffO } from '~/types/attackBuff/attackBuff_O'

type SharpnessType = 'normal' | 'plus1' | 'plus2'

// 最終的な攻撃力を計算
export const calculateAttackWithBuffs = (
  baseAttack: number,
  modifiers: AttackBuffs,
  weapon?: WeaponMelee,
  selectedSharpness?: SharpnessType
): number => {
  const horn = weapon as unknown as HuntingHorn | undefined
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

  if (modifiers.attackMelody && modifiers.attackMelody !== 0) {
    allModifiers.push(new attackBuffH(modifiers.attackMelody, horn))
  }

  // 鈍器使いの補正（切れ味に応じた倍率）
  if (modifiers.bludgeoner && weapon && selectedSharpness) {
    let sharpnessColor
    if (selectedSharpness === 'normal') {
      sharpnessColor = weapon.sharpness.normal.color
    } else if (selectedSharpness === 'plus1' && weapon.sharpness.plus1) {
      sharpnessColor = weapon.sharpness.plus1.color
    } else if (selectedSharpness === 'plus2' && weapon.sharpness.plus2) {
      sharpnessColor = weapon.sharpness.plus2.color
    }
    if (sharpnessColor) {
      allModifiers.push(new attackBuffL(sharpnessColor))
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

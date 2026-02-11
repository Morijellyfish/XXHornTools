import type { AttackBuffs, attackBuff } from '~/types/attackBuff'
import type { WeaponMelee } from '~/types/weapons'
import {
  attackBuffA,
  attackBuffB,
  attackBuffC,
  attackBuffP,
  attackBuffD,
  attackBuffE,
  attackBuffF,
  attackBuffG,
  attackBuffH,
  attackBuffI,
  attackBuffJ,
  attackBuffK,
  attackBuffL,
  attackBuffM,
  attackBuffN,
  attackBuffO,
  AttackMelody,
} from '~/types/attackBuff'

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

  if (modifiers.demonDrugBuff && modifiers.demonDrugBuff !== 'none') {
    allModifiers.push(new attackBuffC(modifiers.demonDrugBuff))
  }

  if (modifiers.mealAttackBuff && modifiers.mealAttackBuff !== 'none') {
    allModifiers.push(new attackBuffP(modifiers.mealAttackBuff))
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

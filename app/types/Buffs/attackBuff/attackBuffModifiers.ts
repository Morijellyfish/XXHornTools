import type { AttackBuffs } from './attackBuffs'
import type { attackBuff } from './attackBuff'
import type { WeaponMelee } from '~/types/weapons'
import { attackBuffA } from './attackBuff_A'
import { attackBuffB } from './attackBuff_B'
import { attackBuffC } from './attackBuff_C'
import { attackBuffD } from './attackBuff_D'
import { attackBuffE } from './attackBuff_E'
import { attackBuffF } from './attackBuff_F'
import { attackBuffG } from './attackBuff_G'
import { attackBuffH, AttackMelody } from './attackBuff_H'
import { attackBuffI } from './attackBuff_I'
import { attackBuffJ } from './attackBuff_J'
import { attackBuffK } from './attackBuff_K'
import { attackBuffL } from './attackBuff_L'
import { attackBuffM } from './attackBuff_M'
import { attackBuffN } from './attackBuff_N'
import { attackBuffO } from './attackBuff_O'
import { attackBuffP } from './attackBuff_P'

export type SharpnessType = 'normal' | 'plus1' | 'plus2'

/**
 * 攻撃力加算バフのリストを取得
 * @param modifiers 攻撃バフ設定
 * @returns 加算バフのリスト
 */
export function getAttackAddModifiers(modifiers: AttackBuffs): attackBuff[] {
  const addModifiers: attackBuff[] = []

  // 力の護符
  if (modifiers.powerCharm) {
    addModifiers.push(new attackBuffA())
  }
  // 力の爪
  if (modifiers.powerTalon) {
    addModifiers.push(new attackBuffB())
  }
  // 鬼人薬
  if (modifiers.demonDrugBuff && modifiers.demonDrugBuff !== 'none') {
    addModifiers.push(new attackBuffC(modifiers.demonDrugBuff))
  }
  // 食事効果
  if (modifiers.mealAttackBuff && modifiers.mealAttackBuff !== 'none') {
    addModifiers.push(new attackBuffP(modifiers.mealAttackBuff))
  }
  // 怪力の種・鬼人笛など
  if (modifiers.shortTermBuff && modifiers.shortTermBuff !== 'none') {
    addModifiers.push(new attackBuffD(modifiers.shortTermBuff))
  }
  // ネコの短期催眠術
  if (modifiers.shortHypnosis) {
    addModifiers.push(new attackBuffE())
  }
  // 攻撃力UPスキル
  if (modifiers.attackSkill && modifiers.attackSkill !== 'none') {
    addModifiers.push(new attackBuffF(modifiers.attackSkill))
  }
  // 挑戦者・フルチャージ・力の解放
  if (modifiers.challengeSkill && modifiers.challengeSkill !== 'none') {
    addModifiers.push(new attackBuffJ(modifiers.challengeSkill))
  }
  // 北風の狩人・南風の狩人
  if (modifiers.hunterSkill && modifiers.hunterSkill !== 'none') {
    addModifiers.push(new attackBuffK(modifiers.hunterSkill))
  }
  // 死中に活
  if (modifiers.resuscitate) {
    addModifiers.push(new attackBuffM())
  }
  // 逆恨み
  if (modifiers.resentment) {
    addModifiers.push(new attackBuffN())
  }

  return addModifiers
}

/**
 * 攻撃力乗算バフのリストを取得
 * @param modifiers 攻撃バフ設定
 * @param weapon 武器
 * @param selectedSharpness 選択切れ味
 * @returns 乗算バフのリスト
 */
export function getAttackMultiplyModifiers(
  modifiers: AttackBuffs,
  weapon?: WeaponMelee,
  selectedSharpness?: SharpnessType
): attackBuff[] {
  const multiplyModifiers: attackBuff[] = []

  // 火事場力
  if (modifiers.adrenaline && modifiers.adrenaline !== 'none') {
    multiplyModifiers.push(new attackBuffG(modifiers.adrenaline))
  }
  // 不屈
  if (modifiers.fortify && modifiers.fortify !== 'none') {
    multiplyModifiers.push(new attackBuffI(modifiers.fortify))
  }
  // 龍気活性
  if (modifiers.dragonInstinct) {
    multiplyModifiers.push(new attackBuffO())
  }
  // 攻撃旋律
  const attackMelody = modifiers.attackMelody ?? AttackMelody.None
  if (weapon) {
    multiplyModifiers.push(new attackBuffH(attackMelody, weapon))
  } else if (attackMelody !== AttackMelody.None && attackMelody !== AttackMelody.HornDependent) {
    const attackMelodyBuff = new attackBuffH(attackMelody)
    attackMelodyBuff.apply(1)
    if (attackMelodyBuff.value !== 1.0) {
      multiplyModifiers.push(attackMelodyBuff)
    }
  }
  // 鈍器使い
  if (modifiers.bludgeoner && weapon && selectedSharpness) {
    const sharpnessData =
      selectedSharpness === 'normal'
        ? weapon.sharpness.normal
        : selectedSharpness === 'plus1'
          ? weapon.sharpness.plus1
          : weapon.sharpness.plus2
    if (sharpnessData) {
      multiplyModifiers.push(new attackBuffL(sharpnessData.color))
    }
  }

  return multiplyModifiers
}

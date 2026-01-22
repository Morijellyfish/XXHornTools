/**
 * 攻撃力補正（バフ）の計算に関するユーティリティ
 */

import type {
  AttackBuffModifiers,
} from '~/types/attackBuff'
import { getAttackSkillValue } from '~/types/attackBuff'
import type { Horn } from '~/types/horn'
import { getHornAttackMelodyMultiplier } from '~/types/horn'

/**
 * グループF（攻撃力UPスキル）の補正を計算
 * @param attack 現在の攻撃力
 * @param modifiers 攻撃バフの設定
 * @returns 補正後の攻撃力
 */
const calcGroupF = (attack: number, modifiers: AttackBuffModifiers): number => {
  // 攻撃スキル（DOWN/UP【小】【中】【大】）の補正
  if (modifiers.attackSkill) {
    const skillValue = getAttackSkillValue(modifiers.attackSkill)
    attack += skillValue
  }

  return attack
}

/**
 * グループH（狩猟笛旋律）の補正を計算
 * @param attack 現在の攻撃力
 * @param modifiers 攻撃バフの設定
 * @param horn 狩猟笛データ（'horn'の場合に使用）
 * @returns 補正後の攻撃力
 */
const calcGroupH = (attack: number, modifiers: AttackBuffModifiers, horn?: Horn): number => {
  if (!modifiers.attackMelody) {
    return attack
  }

  let multiplier = 1.0

  if (modifiers.attackMelody === 'horn' && horn) {
    multiplier = getHornAttackMelodyMultiplier(horn) //笛依存の場合は狩猟笛の旋律倍率を使用
  } else {
    switch (modifiers.attackMelody) {
      case '1.10':
        multiplier = 1.1
        break
      case '1.15':
        multiplier = 1.15
        break
      case '1.20':
        multiplier = 1.2
        break
    }
  }

  return Math.round(attack * multiplier)
}

/**
 * 攻撃力補正を計算
 * 計算順序: すべて加算 → その後乗算
 * @param baseAttack 武器倍率（素の攻撃力）
 * @param modifiers 攻撃バフの設定
 * @param horn 狩猟笛データ（攻撃旋律が'horn'の場合に使用）
 * @returns 補正済みの攻撃力
 */
export const calculateAttackWithBuffs = (
  baseAttack: number,
  modifiers: AttackBuffModifiers,
  horn?: Horn
): number => {
  let attack = baseAttack

  // グループF（攻撃力UPスキル）の補正（加算）
  attack = calcGroupF(attack, modifiers)

  // グループH（狩猟笛旋律）の補正（乗算）
  attack = calcGroupH(attack, modifiers, horn)

  // TODO: 他のグループの補正を追加
  // attack = calcGroupA(attack, modifiers)
  // attack = calcGroupB(attack, modifiers)
  // ...

  return attack
}

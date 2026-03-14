import type { Buffs } from '~/types/Buffs/Buffs'
import type { WeaponMelee } from '~/types/weapons'
import { isHuntingHorn } from '~/types/weapons'
import type { ChallengeSkill } from '~/types/Buffs/challengeSkill'
import {
  criticalBuffA,
  criticalBuffB,
  criticalBuffC,
  criticalBuffD,
  criticalBuffE,
  criticalBuffF,
  CriticalMelody,
} from '~/types/Buffs/criticalBuff'

/**
 * 会心補正値を計算（criticalBuffクラスを使用）
 * @param options バフ設定
 * @param weapon 武器
 * @returns 会心補正値（%）
 */
export function calculateCriticalWithBuffs(options: Buffs, weapon?: WeaponMelee): number {
  const buffs = options.criticalBuffs
  let bonus = 0

  // 見切り
  if (buffs?.criticalEye !== undefined) {
    bonus += new criticalBuffA(buffs.criticalEye).getValue()
  }
  // 弱点特攻
  if (buffs?.hasWeaknessExploit !== undefined) {
    bonus += new criticalBuffB(buffs.hasWeaknessExploit).getValue()
  }
  // 連撃
  if (buffs?.repeatOffensive) {
    bonus += new criticalBuffC(buffs.repeatOffensive).getValue()
  }
  // 挑戦者・フルチャージ・力の解放
  const challengeSkill = (options.attackModifiers?.challengeSkill ?? 'none') as ChallengeSkill
  bonus += new criticalBuffE(challengeSkill).getValue()
  // 鬼人会心弾
  if (buffs?.demonCriticalBullet !== undefined) {
    bonus += new criticalBuffF(buffs.demonCriticalBullet).getValue()
  }
  // 会心旋律
  const criticalMelody = buffs?.criticalMelody ?? CriticalMelody.None
  if (criticalMelody !== CriticalMelody.None && criticalMelody !== CriticalMelody.HornDependent) {
    bonus += new criticalBuffD(criticalMelody).getValue()
  }
  if (criticalMelody === CriticalMelody.HornDependent && isHuntingHorn(weapon)) {
    bonus += weapon.notes.getMaxMelodyBonus_Critical()
  }

  return bonus
}

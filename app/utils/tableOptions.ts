import type { TableBaseOption } from '~/types/tableBaseOption'
import { AttackMelody } from '~/types/attackBuff'
import { CriticalEye, CriticalMelody } from '~/types/criticalBuff'

/**
 * 武器比較表のオプション初期値
 * - 返り値は毎回新しいオブジェクト
 */
export function createDefaultTableOptions(): TableBaseOption {
  return {
    selectedSharpness: 'normal',
    criticalBuffs: {
      hasCriticalBoost: false,
      hasMadAffinity: false,
      hasWeaknessExploit: false,
      repeatOffensive: 'none',
      criticalEye: CriticalEye.Zero,
      criticalMelody: CriticalMelody.None,
      demonCriticalBullet: false,
    },
    attackModifiers: {
      powerCharm: false,
      powerTalon: false,
      demonDrugBuff: 'none',
      mealAttackBuff: 'none',
      shortTermBuff: 'none',
      shortHypnosis: false,
      attackSkill: 'none',
      challengeSkill: 'none',
      hunterSkill: 'none',
      bludgeoner: false,
      resuscitate: false,
      resentment: false,
      adrenaline: 'none',
      fortify: 'none',
      dragonInstinct: false,
      attackMelody: AttackMelody.None,
    },
    sharpnessMultiplier: 1.0,
  }
}

import type { TableBaseOption } from '~/types/tableBaseOption'
import { DEFAULT_VISIBLE_COLUMNS } from '~/types/tableBaseOption'
import { AttackMelody } from '~/types/Buffs/attackBuff'
import { ElementMelody } from '~/types/Buffs/elementBuff'
import { CriticalEye, CriticalMelody } from '~/types/Buffs/criticalBuff'

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
    elementModifiers: {
      elementMelody: ElementMelody.None,
    },
    sharpnessMultiplier: 1.0,
    visibleColumns: { ...DEFAULT_VISIBLE_COLUMNS },
  }
}

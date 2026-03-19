import type { CriticalBuffs } from './criticalBuff'
import type { AttackBuffs, AttackSkill, ChallengeSkill, HunterSkill, Fortify } from './attackBuff'
import type { ElementBuffs } from './elementBuff'
import type { WeaponMelee } from '~/types/weapons'
import { isElementType } from '~/types/weapons'
import {
  calculateAttackWithBuffs,
  calculateAttackAddWithBuffs as calcAttackAdd,
  calculateAttackMultiplyWithBuffs as calcAttackMultiply,
} from '~/utils/attackBuffCalculate'
import { calculateCriticalWithBuffs } from '~/utils/criticalBuffCalculate'
import { calculateElementWithBuffs } from '~/utils/elementBuffCalculate'
import { CriticalEye } from './criticalBuff'
import { ElementMelody } from './elementBuff'

/** 切れ味の種類（Buffs用、循環参照回避） */
type SharpnessType = 'normal' | 'plus1' | 'plus2'

/**
 * 会心・攻撃・属性のバフをまとめた型
 */
export interface Buffs {
  criticalBuffs?: CriticalBuffs
  attackModifiers?: AttackBuffs
  elementModifiers?: ElementBuffs
}

/** getActiveSkills の引数型 */
export type BuffsWithSharpness = Buffs & { selectedSharpness?: SharpnessType }

/**
 * 発動スキルのリストを取得
 * @param options バフ設定（selectedSharpness 含む）
 * @returns 発動スキルの名前の配列
 */
export function getActiveSkills(options: BuffsWithSharpness): string[] {
  const modifiers = options.attackModifiers ?? {}
  const buffs = options.criticalBuffs
  const skills: string[] = []

  // 攻撃スキル
  if (modifiers.attackSkill && modifiers.attackSkill !== 'none') {
    const skillNames: Record<AttackSkill, string> = {
      none: '',
      down_small: '攻撃力DOWN【小】',
      down_medium: '攻撃力DOWN【中】',
      down_large: '攻撃力DOWN【大】',
      up_small: '攻撃力UP【小】',
      up_medium: '攻撃力UP【中】',
      up_large: '攻撃力UP【大】',
    }
    skills.push(skillNames[modifiers.attackSkill as AttackSkill])
  }

  // 挑戦者・フルチャージ・力の解放
  if (modifiers.challengeSkill && modifiers.challengeSkill !== 'none') {
    const skillNames: Record<ChallengeSkill, string> = {
      none: '',
      challenger1: '挑戦者+1',
      challenger2: '挑戦者+2',
      peakPerformance: 'フルチャージ',
      latentPower1: '力の解放+1',
      latentPower2: '力の解放+2',
    }
    skills.push(skillNames[modifiers.challengeSkill as ChallengeSkill])
  }

  // 北風/南風
  if (modifiers.hunterSkill && modifiers.hunterSkill !== 'none') {
    const skillNames: Record<HunterSkill, string> = {
      none: '',
      cooler: '北風の狩人(非寒冷クーラー)',
      eitherBlooded: '北風の狩人/南風の狩人',
      polarCooler: '北風の狩人(寒冷クーラー)',
    }
    skills.push(skillNames[modifiers.hunterSkill as HunterSkill])
  }

  // 鈍器使い
  if (modifiers.bludgeoner) {
    skills.push('鈍器使い')
  }

  // 死中に活
  if (modifiers.resuscitate) {
    skills.push('死中に活')
  }

  // 逆恨み
  if (modifiers.resentment) {
    skills.push('逆恨み')
  }

  // 火事場力
  if (
    modifiers.adrenaline &&
    modifiers.adrenaline !== 'none' &&
    modifiers.adrenaline !== 'catAdrenaline'
  ) {
    const skillName = (() => {
      switch (modifiers.adrenaline) {
        case 'worrywart':
          return '心配性'
        case 'adrenalinePlus2':
          return '火事場力+2'
        default:
          return null
      }
    })()
    if (skillName) {
      skills.push(skillName)
    }
  }

  // 不屈
  if (modifiers.fortify && modifiers.fortify !== 'none') {
    const skillNames: Record<Fortify, string> = {
      none: '',
      fortify1: '不屈(1乙)',
      fortify2: '不屈(2乙)',
    }
    skills.push(skillNames[modifiers.fortify as Fortify])
  }

  // 龍気活性
  if (modifiers.dragonInstinct) {
    skills.push('龍気活性')
  }

  // 弱点特攻
  if (buffs?.hasWeaknessExploit) {
    skills.push('弱点特攻')
  }

  // 連撃
  if (buffs?.repeatOffensive && buffs.repeatOffensive !== 'none') {
    skills.push(`連撃の心得(${buffs.repeatOffensive}%)`)
  }

  // 見切り
  if (buffs?.criticalEye !== undefined && buffs.criticalEye !== CriticalEye.Zero) {
    const eyeName = (() => {
      switch (buffs.criticalEye) {
        case CriticalEye.Minus3:
          return '見切り-3'
        case CriticalEye.Minus2:
          return '見切り-2'
        case CriticalEye.Minus1:
          return '見切り-1'
        case CriticalEye.Plus1:
          return '見切り+1'
        case CriticalEye.Plus2:
          return '見切り+2'
        case CriticalEye.Plus3:
          return '見切り+3'
        default:
          return null
      }
    })()
    if (eyeName) {
      skills.push(eyeName)
    }
  }

  // 超会心
  if (buffs?.hasCriticalBoost) {
    skills.push('超会心')
  }

  // 裏会心
  if (buffs?.hasMadAffinity) {
    skills.push('裏会心')
  }

  // 属性旋律（固定値のみ、笛依存は武器依存のため除外）
  const elementMelody = options.elementModifiers?.elementMelody ?? ElementMelody.None
  if (elementMelody !== ElementMelody.None && elementMelody !== ElementMelody.HornDependent) {
    const melodyNames: Record<ElementMelody, string> = {
      [ElementMelody.None]: '',
      [ElementMelody.Bonus8]: '属性旋律(+8%)',
      [ElementMelody.Bonus10]: '属性旋律(+10%)',
      [ElementMelody.HornDependent]: '',
    }
    skills.push(melodyNames[elementMelody])
  }

  // 属性攻撃
  const elemental = options.elementModifiers?.elemental ?? 'none'
  if (elemental !== 'none') {
    const elementalNames: Record<'down' | 'up', string> = {
      down: '属性攻撃弱化',
      up: '属性攻撃強化',
    }
    skills.push(elementalNames[elemental])
  }

  // 単属性強化
  const elemAtk = options.elementModifiers?.elemAtk ?? 'none'
  if (elemAtk !== 'none') {
    const elemAtkNames: Record<'down' | 'plus1' | 'plus2', string> = {
      down: '単属性攻撃弱化',
      plus1: '単属性攻撃強化+1',
      plus2: '単属性攻撃強化+2',
    }
    skills.push(elemAtkNames[elemAtk])
  }

  // 斬れ味レベル
  if (options.selectedSharpness && options.selectedSharpness !== 'normal') {
    const sharpnessNames: Record<'normal' | 'plus1' | 'plus2', string> = {
      normal: '',
      plus1: '斬れ味レベル+1',
      plus2: '斬れ味レベル+2',
    }
    skills.push(sharpnessNames[options.selectedSharpness])
  }

  return skills
}

export { calculateCriticalWithBuffs } from '~/utils/criticalBuffCalculate'

export function calculateAttackAddWithBuffs(options: Buffs): number {
  return calcAttackAdd(options.attackModifiers ?? {})
}

export function calculateAttackMultiplyWithBuffs(options: Buffs): number {
  return calcAttackMultiply(options.attackModifiers ?? {})
}

export function getAttackWithBuffs(buffs: Buffs, weapon: WeaponMelee): number {
  return calculateAttackWithBuffs(weapon.attack, buffs.attackModifiers ?? {}, weapon, 'normal')
}

export function getAffinityWithBuffs(buffs: Buffs, weapon: WeaponMelee): number {
  return weapon.affinity + calculateCriticalWithBuffs(buffs, weapon)
}

export function getElementWithBuffs(buffs: Buffs, weapon: WeaponMelee): number {
  if (!weapon.elementStatus || !isElementType(weapon.elementStatus)) {
    return 0
  }
  return calculateElementWithBuffs(weapon.elementStatus.value, buffs.elementModifiers ?? {}, weapon)
    .value
}

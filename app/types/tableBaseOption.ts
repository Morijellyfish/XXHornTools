import type {
  AttackBuffs,
  ChallengeSkill,
  AttackSkill,
  HunterSkill,
  Fortify,
} from './attackBuff/attackBuffs'
import {
  getPreparedBuffValue,
  getShortTermBuffValue,
  getAttackSkillValue,
  getAdrenalineMultiplier,
  getChallengeSkillValue,
  getHunterSkillValue,
  getFortifyMultiplier,
} from './attackBuff/attackBuffs'
import type { CriticalBuffs } from './criticalBuffs'

/** 切れ味の種類 */
export type SharpnessType = 'normal' | 'plus1' | 'plus2'

/** 連撃の種類 */
export type RepeatOffensive = 'none' | '25' | '30'

/** 会心旋律の種類（0: 無, 1: 15%, 2: 20%, 3: 笛依存） */
export type CriticalMelody = 0 | 1 | 2 | 3

/**
 * テーブルコンポーネントの基底オプション
 * すべての武器テーブルで共通して使用されるオプションを定義
 */
export interface TableBaseOption {
  /** 選択された切れ味（通常、匠1、匠2） */
  selectedSharpness?: SharpnessType
  /** 会心率関連のバフ設定 */
  criticalBuffs?: CriticalBuffs
  /** 攻撃バフの設定 */
  attackModifiers?: AttackBuffs
  /** 切れ味補正倍率（デフォルト: 1.0 = 補正なし） */
  sharpnessMultiplier?: number
  /** 弱点特攻の有無 */
  hasWeaknessExploit?: boolean
  /** 連撃の種類 */
  repeatOffensive?: RepeatOffensive
  /** 見切り（会心率）のレベル */
  criticalEye?: number
  /** 会心旋律（0: 無, 1: 15%, 2: 20%, 3: 笛依存） */
  criticalMelody?: CriticalMelody
  /** 会心旋律の固定値（criticalMelodyが固定値の場合のみ） */
  criticalMelodyBonus?: number
  /** 攻撃旋律（0: 無, 1: x1.10, 2: x1.15, 3: x1.20, 4: 笛依存） */
  attackMelody?: number
  /** 攻撃旋律の倍率（AttackBuffsにも含まれるが、ここでも管理） */
  attackMelodyMultiplier?: number
  /** 攻撃力加算バフの合計（自動計算） */
  totalAttackAdd?: number
  /** 攻撃力倍率（乗算バフ）の合計（自動計算） */
  totalAttackMultiply?: number
  /** 発動スキルのリスト（自動計算） */
  activeSkills?: string[]
}

/**
 * 挑戦者・フルチャージ・力の解放の会心率補正値を取得
 * @param skill 挑戦者・フルチャージ・力の解放のスキル
 * @returns 会心率補正値（%）
 */
export function getChallengeSkillCriticalBonus(skill: ChallengeSkill | string): number {
  switch (skill) {
    case 'challenger1':
      return 10 // 挑戦者+1: 会心率+10%
    case 'challenger2':
      return 15 // 挑戦者+2: 会心率+15%
    case 'latentPower1':
      return 30 // 力の解放+1: 会心率+30%
    case 'latentPower2':
      return 50 // 力の解放+2: 会心率+50%
    case 'peakPerformance':
    case 'none':
    default:
      return 0
  }
}

/**
 * 会心補正を計算
 * @param options テーブルオプション
 * @returns 会心補正値（%）
 */
export function calculateCriticalBonus(options: TableBaseOption): number {
  let bonus = 0
  // 見切りの補正
  const criticalEyeBonus: Record<number, number> = {
    [-3]: -15,
    [-2]: -10,
    [-1]: -5,
    0: 0,
    1: 10,
    2: 20,
    3: 30,
  }

  bonus += criticalEyeBonus[options.criticalEye ?? 0] ?? 0

  // 弱点特攻の補正
  if (options.hasWeaknessExploit) {
    bonus += 50
  }

  // 連撃の補正
  if (options.repeatOffensive === '25') {
    bonus += 25
  } else if (options.repeatOffensive === '30') {
    bonus += 30
  }

  // 挑戦者・フルチャージ・力の解放の補正
  bonus += getChallengeSkillCriticalBonus(
    (options.attackModifiers?.challengeSkill ?? 'none') as ChallengeSkill
  )

  // 短期バフの補正（鬼人会心弾）
  if (options.attackModifiers?.shortTermBuff === 'demonCriticalBullet') {
    bonus += 10 // 鬼人会心弾: 会心率+10%
  }

  return bonus
}

/**
 * 攻撃旋律の倍率を計算
 * @param options テーブルオプション
 * @returns 攻撃旋律の倍率
 */
export function calculateAttackMelodyMultiplier(options: TableBaseOption): number {
  const attackMelody = options.attackMelody ?? options.attackModifiers?.attackMelody ?? 0

  switch (attackMelody) {
    case 1:
      return 1.1
    case 2:
      return 1.15
    case 3:
      return 1.2
    case 4:
      // 笛依存の場合は後で計算
      return 1.0
    default:
      return 1.0
  }
}

/**
 * 会心強化旋律の補正値を計算
 * @param options テーブルオプション
 * @returns 会心強化旋律の補正値（%）
 */
export function calculateCriticalMelodyBonus(options: TableBaseOption): number {
  const criticalMelody = options.criticalMelody ?? 0
  switch (criticalMelody) {
    case 1:
      return 15
    case 2:
      return 20
    case 3:
      // 笛依存の場合は後で計算
      return 0
    default:
      return 0
  }
}

/**
 * 切れ味補正倍率を計算
 * @param options テーブルオプション
 * @returns 切れ味補正倍率
 */
export function calculateSharpnessMultiplier(options: TableBaseOption): number {
  const shortTermBuff = options.attackModifiers?.shortTermBuff
  return shortTermBuff === 'demonBullet' || shortTermBuff === 'demonCriticalBullet' ? 1.1 : 1.0
}

/**
 * 攻撃力加算バフの合計を計算
 * @param options テーブルオプション
 * @returns 攻撃力加算バフの合計
 */
export function calculateTotalAttackAdd(options: TableBaseOption): number {
  const modifiers = options.attackModifiers ?? {}
  let total = 0
  if (modifiers.powerCharm) total += 6 // 力の護符
  if (modifiers.powerTalon) total += 9 // 力の爪
  if (modifiers.preparedBuff && modifiers.preparedBuff !== 'none') {
    total += getPreparedBuffValue(modifiers.preparedBuff)
  }
  if (modifiers.shortTermBuff && modifiers.shortTermBuff !== 'none') {
    total += getShortTermBuffValue(modifiers.shortTermBuff)
  }
  if (modifiers.shortHypnosis) total += 3 // 短期催眠術
  if (modifiers.attackSkill && modifiers.attackSkill !== 'none') {
    total += getAttackSkillValue(modifiers.attackSkill)
  }
  const challengeSkillValue = getChallengeSkillValue(
    (modifiers.challengeSkill ?? 'none') as ChallengeSkill
  )
  if (challengeSkillValue > 0) {
    total += challengeSkillValue
  }
  if (modifiers.hunterSkill && modifiers.hunterSkill !== 'none') {
    total += getHunterSkillValue(modifiers.hunterSkill)
  }
  if (modifiers.resuscitate) total += 20 // 死中に活
  if (modifiers.resentment) total += 20 // 逆恨み
  return total
}

/**
 * 攻撃力倍率（乗算バフ）の合計を計算
 * @param options テーブルオプション
 * @returns 攻撃力倍率（乗算バフ）の合計
 */
export function calculateTotalAttackMultiply(options: TableBaseOption): number {
  const modifiers = options.attackModifiers ?? {}
  let multiplier = 1.0
  if (modifiers.adrenaline && modifiers.adrenaline !== 'none') {
    multiplier *= getAdrenalineMultiplier(modifiers.adrenaline)
  }
  if (modifiers.fortify && modifiers.fortify !== 'none') {
    multiplier *= getFortifyMultiplier(modifiers.fortify)
  }
  if (modifiers.dragonInstinct) {
    multiplier *= 1.1 // 龍気活性
  }
  const attackMelody = options.attackMelody ?? modifiers.attackMelody ?? 0
  if (attackMelody !== 0 && attackMelody !== 4) {
    multiplier *= options.attackMelodyMultiplier ?? modifiers.attackMelodyMultiplier ?? 1.0
  }
  // 攻撃旋律（horn）は笛依存のため、ここでは計算しない
  // 鈍器使いは各武器の切れ味に応じて計算されるため、ここでは計算しない
  return multiplier
}

/**
 * 発動スキルのリストを計算
 * @param options テーブルオプション
 * @returns 発動スキルのリスト
 */
export function calculateActiveSkills(options: TableBaseOption): string[] {
  const modifiers = options.attackModifiers ?? {}
  const skills: string[] = []

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
    skills.push(skillNames[modifiers.attackSkill])
  }

  if (modifiers.challengeSkill && modifiers.challengeSkill !== 'none') {
    const skillNames: Record<ChallengeSkill, string> = {
      none: '',
      challenger1: '挑戦者+1',
      challenger2: '挑戦者+2',
      peakPerformance: 'フルチャージ',
      latentPower1: '力の解放+1',
      latentPower2: '力の解放+2',
    }
    skills.push(skillNames[modifiers.challengeSkill])
  }

  if (modifiers.hunterSkill && modifiers.hunterSkill !== 'none') {
    const skillNames: Record<HunterSkill, string> = {
      none: '',
      cooler: '北風の狩人(非寒冷クーラー)',
      eitherBlooded: '北風の狩人/南風の狩人',
      polarCooler: '北風の狩人(寒冷クーラー)',
    }
    skills.push(skillNames[modifiers.hunterSkill])
  }

  if (modifiers.bludgeoner) {
    skills.push('鈍器使い')
  }

  if (modifiers.resuscitate) {
    skills.push('死中に活')
  }

  if (modifiers.resentment) {
    skills.push('逆恨み')
  }

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

  if (modifiers.fortify && modifiers.fortify !== 'none') {
    const skillNames: Record<Fortify, string> = {
      none: '',
      fortify1: '不屈(1乙)',
      fortify2: '不屈(2乙)',
    }
    skills.push(skillNames[modifiers.fortify])
  }

  if (modifiers.dragonInstinct) {
    skills.push('龍気活性')
  }

  if (options.hasWeaknessExploit) {
    skills.push('弱点特攻')
  }

  if (options.repeatOffensive && options.repeatOffensive !== 'none') {
    skills.push(`連撃の心得(${options.repeatOffensive}%)`)
  }

  if (options.criticalEye !== 0) {
    const eyeName = (() => {
      switch (options.criticalEye) {
        case -3:
          return '見切り-3'
        case -2:
          return '見切り-2'
        case -1:
          return '見切り-1'
        case 1:
          return '見切り+1'
        case 2:
          return '見切り+2'
        case 3:
          return '見切り+3'
        default:
          return null
      }
    })()
    if (eyeName) {
      skills.push(eyeName)
    }
  }

  if (options.criticalBuffs?.hasCriticalBoost) {
    skills.push('超会心')
  }

  if (options.criticalBuffs?.hasMadAffinity) {
    skills.push('裏会心')
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

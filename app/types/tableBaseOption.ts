import type {
  AttackBuffs,
  AttackSkill,
  ChallengeSkill,
  HunterSkill,
  Fortify,
  attackBuff,
} from './attackBuff'
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
  attackBuffM,
  attackBuffN,
  attackBuffO,
  AttackMelody,
} from './attackBuff'
import type { CriticalBuffs } from './criticalBuff'
import {
  criticalBuffA,
  criticalBuffB,
  criticalBuffC,
  criticalBuffD,
  criticalBuffE,
  criticalBuffF,
  CriticalMelody,
  CriticalEye,
} from './criticalBuff'
import type { TargetDamageSettings } from './targetDamage'

/** 切れ味の種類 */
export type SharpnessType = 'normal' | 'plus1' | 'plus2'

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
  /** 目標ダメージ設定 */
  targetDamageSettings?: TargetDamageSettings
}

/**
 * 発動スキルのリストを取得
 * @param options テーブルオプション
 * @returns 発動スキルの名前の配列
 */
export function getActiveSkills(options: TableBaseOption): string[] {
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

/**
 * 会心補正値を計算（固定値のみ、武器依存の会心旋律は除外）
 * @param options テーブルオプション
 * @returns 会心補正値（%）
 */
export function calculateCriticalBonus(options: TableBaseOption): number {
  const buffs = options.criticalBuffs
  let bonus = 0

  // 見切りの補正
  if (buffs?.criticalEye !== undefined) {
    bonus += new criticalBuffA(buffs.criticalEye).getValue()
  }

  // 弱点特攻の補正
  if (buffs?.hasWeaknessExploit !== undefined) {
    bonus += new criticalBuffB(buffs.hasWeaknessExploit).getValue()
  }

  // 連撃の補正
  if (buffs?.repeatOffensive) {
    bonus += new criticalBuffC(buffs.repeatOffensive).getValue()
  }

  // 挑戦者・フルチャージ・力の解放の補正
  const challengeSkill = (options.attackModifiers?.challengeSkill ?? 'none') as ChallengeSkill
  bonus += new criticalBuffE(challengeSkill).getValue()

  // 鬼人会心弾の補正
  if (buffs?.demonCriticalBullet !== undefined) {
    bonus += new criticalBuffF(buffs.demonCriticalBullet).getValue()
  }

  // 会心旋律の補正（固定値のみ、HornDependentは武器依存のため除外）
  if (buffs?.criticalMelody !== undefined) {
    const criticalMelody = buffs.criticalMelody
    if (criticalMelody !== CriticalMelody.HornDependent) {
      bonus += new criticalBuffD(criticalMelody).getValue()
    }
  }

  return bonus
}

/**
 * 攻撃力加算バフの合計を計算（attackBuffクラスを使用）
 * @param options テーブルオプション
 * @returns 攻撃力加算バフの合計値
 */
export function calculateTotalAttackAdd(options: TableBaseOption): number {
  const modifiers = options.attackModifiers ?? {}
  const addModifiers: attackBuff[] = []

  // 加算バフのみを収集
  if (modifiers.powerCharm) {
    addModifiers.push(new attackBuffA())
  }
  if (modifiers.powerTalon) {
    addModifiers.push(new attackBuffB())
  }
  if (modifiers.demonDrugBuff && modifiers.demonDrugBuff !== 'none') {
    addModifiers.push(new attackBuffC(modifiers.demonDrugBuff))
  }
  if (modifiers.mealAttackBuff && modifiers.mealAttackBuff !== 'none') {
    addModifiers.push(new attackBuffP(modifiers.mealAttackBuff))
  }
  if (modifiers.shortTermBuff && modifiers.shortTermBuff !== 'none') {
    addModifiers.push(new attackBuffD(modifiers.shortTermBuff))
  }
  if (modifiers.shortHypnosis) {
    addModifiers.push(new attackBuffE())
  }
  if (modifiers.attackSkill && modifiers.attackSkill !== 'none') {
    addModifiers.push(new attackBuffF(modifiers.attackSkill))
  }
  if (modifiers.challengeSkill && modifiers.challengeSkill !== 'none') {
    addModifiers.push(new attackBuffJ(modifiers.challengeSkill))
  }
  if (modifiers.hunterSkill && modifiers.hunterSkill !== 'none') {
    addModifiers.push(new attackBuffK(modifiers.hunterSkill))
  }
  if (modifiers.resuscitate) {
    addModifiers.push(new attackBuffM())
  }
  if (modifiers.resentment) {
    addModifiers.push(new attackBuffN())
  }

  // 加算バフの合計を計算（apply(0)でvalueを取得）
  let total = 0
  for (const modifier of addModifiers) {
    modifier.apply(0) // valueを設定
    total += modifier.value
  }

  return total
}

/**
 * 攻撃力倍率（乗算バフ）の合計を計算（attackBuffクラスを使用）
 * @param options テーブルオプション
 * @returns 攻撃力倍率（乗算バフの合計）
 */
export function calculateTotalAttackMultiply(options: TableBaseOption): number {
  const modifiers = options.attackModifiers ?? {}
  const multiplyModifiers: attackBuff[] = []

  // 乗算バフのみを収集
  if (modifiers.adrenaline && modifiers.adrenaline !== 'none') {
    multiplyModifiers.push(new attackBuffG(modifiers.adrenaline))
  }
  if (modifiers.fortify && modifiers.fortify !== 'none') {
    multiplyModifiers.push(new attackBuffI(modifiers.fortify))
  }
  if (modifiers.dragonInstinct) {
    multiplyModifiers.push(new attackBuffO())
  }
  // 攻撃旋律（固定値のみ、HornDependentは武器依存のため除外）
  const attackMelody = modifiers.attackMelody ?? AttackMelody.None
  if (attackMelody !== AttackMelody.None && attackMelody !== AttackMelody.HornDependent) {
    // attackBuffHのインスタンスを作成してvalueを設定
    const attackMelodyBuff = new attackBuffH(attackMelody)
    attackMelodyBuff.apply(1) // valueを設定
    if (attackMelodyBuff.value !== 1.0) {
      multiplyModifiers.push(attackMelodyBuff)
    }
  }

  // 乗算バフの合計を計算（apply(1)でvalueを取得）
  let multiplier = 1.0
  for (const modifier of multiplyModifiers) {
    modifier.apply(1) // valueを設定
    multiplier *= modifier.value
  }

  return multiplier
}

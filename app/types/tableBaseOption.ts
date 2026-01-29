import type {
  AttackBuffs,
  AttackSkill,
  ChallengeSkill,
  HunterSkill,
  Fortify,
} from './attackBuff/attackBuffs'
import type { CriticalBuffs } from './criticalBuff/criticalBuffs'

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
    skills.push(skillNames[modifiers.attackSkill])
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
    skills.push(skillNames[modifiers.challengeSkill])
  }

  // 北風/南風
  if (modifiers.hunterSkill && modifiers.hunterSkill !== 'none') {
    const skillNames: Record<HunterSkill, string> = {
      none: '',
      cooler: '北風の狩人(非寒冷クーラー)',
      eitherBlooded: '北風の狩人/南風の狩人',
      polarCooler: '北風の狩人(寒冷クーラー)',
    }
    skills.push(skillNames[modifiers.hunterSkill])
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
    skills.push(skillNames[modifiers.fortify])
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
  if (buffs?.criticalEye !== undefined && buffs.criticalEye !== 0) {
    const eyeName = (() => {
      switch (buffs.criticalEye) {
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

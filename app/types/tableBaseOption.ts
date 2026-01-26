import type { AttackBuffs, AttackMelody, ChallengeSkill } from './attackBuff/attackBuffs'
import type { CriticalBuffs } from './criticalBuffs'

/** 切れ味の種類 */
export type SharpnessType = 'normal' | 'plus1' | 'plus2'

/** 連撃の種類 */
export type RepeatOffensive = 'none' | '25' | '30'

/** 会心旋律の種類 */
export type CriticalMelody = 'none' | '15' | '20' | 'horn'

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
  /** 会心旋律（HornTable以外では「笛依存」選択肢なし） */
  criticalMelody?: CriticalMelody
  /** 会心旋律の固定値（criticalMelodyが固定値の場合のみ） */
  criticalMelodyBonus?: number
  /** 攻撃旋律（HornTable以外では「笛依存」選択肢なし、AttackBuffsにも含まれるが、ここでも管理） */
  attackMelody?: AttackMelody
  /** 攻撃旋律の倍率（AttackBuffsにも含まれるが、ここでも管理） */
  attackMelodyMultiplier?: number
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

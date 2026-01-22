/**
 * 攻撃力補正（バフ）に関する型定義
 */

/**
 * 攻撃スキル（DOWN/UP【小】【中】【大】）
 */
export type AttackSkill = 'none' | 'down_small' | 'down_medium' | 'down_large' | 'up_small' | 'up_medium' | 'up_large'

/**
 * 攻撃スキル（DOWN/UP）の補正値を取得
 * @param attackSkill 攻撃スキル
 * @returns 武器倍率加算値（負の値の場合はDOWN、正の値の場合はUP）
 */
export const getAttackSkillValue = (attackSkill: AttackSkill): number => {
  switch (attackSkill) {
    case 'down_small':
      return -15
    case 'down_medium':
      return -10
    case 'down_large':
      return -5
    case 'up_small':
      return 10
    case 'up_medium':
      return 15
    case 'up_large':
      return 20
    case 'none':
    default:
      return 0
  }
}

/**
 * 力の護符（グループA）
 */
export type PowerCharm = boolean

/**
 * 力の爪（グループB）
 */
export type PowerTalon = boolean

/**
 * 攻撃旋律
 */
export type AttackMelody = 'none' | '1.10' | '1.15' | '1.20' | 'horn'

/**
 * 攻撃バフの種類
 */
export type AttackBuffModifierType =
  | 'weapon_multiplier_add' // 武器倍率加算（+3, +5, +6, +9など）
  | 'weapon_multiplier_multiply' // 武器倍率乗算（1.1倍、1.15倍など）
  | 'final_multiply' // 最終倍率（火事場力など）

/**
 * 攻撃バフのグループ
 * 仕様書のグループA～Oに対応
 */
export type AttackBuffGroup =
  | 'A' // 力の護符
  | 'B' // 力の爪
  | 'C' // 鬼人薬・食事効果（効果が高いものが優先）
  | 'D' // 怪力の種・鬼人笛など（後に使用したものが優先）
  | 'E' // ネコの短期催眠術
  | 'F' // 攻撃力UPスキル
  | 'G' // 火事場力
  | 'H' // 狩猟笛旋律
  | 'I' // 不屈
  | 'J' // 挑戦者・フルチャージ・力の解放
  | 'K' // 北風の狩人・南風の狩人
  | 'L' // 鈍器使い
  | 'M' // 死中に活
  | 'N' // 逆恨み
  | 'O' // 龍気活性

/**
 * 攻撃バフの基本情報
 */
export interface AttackBuffModifier {
  /** 補正の種類 */
  type: AttackBuffModifierType
  /** バフが属するグループ */
  group: AttackBuffGroup
  /** 補正値（加算の場合は数値、乗算の場合は倍率） */
  value: number
  /** 優先度（同じグループ内での優先度、数値が大きいほど優先） */
  priority?: number
}

/**
 * 攻撃バフの設定
 */
export interface AttackBuffModifiers {
  /** 力の護符（グループA） */
  powerCharm?: PowerCharm
  /** 力の爪（グループB） */
  powerTalon?: PowerTalon
  /** 攻撃スキル（DOWN/UP【小】【中】【大】） */
  attackSkill?: AttackSkill
  /** 攻撃旋律 */
  attackMelody?: AttackMelody
  /** 攻撃旋律の倍率（固定値の場合のみ） */
  attackMelodyMultiplier?: number
  /** その他の補正（将来的に拡張） */
  [key: string]: unknown
}

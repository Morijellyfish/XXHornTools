/**
 * 攻撃力補正（バフ）の基底的な型定義
 */

/**
 * 攻撃バフの種類
 */
export type AttackBuffModifierType = 'weapon_multiplier_add' | 'weapon_multiplier_multiply'

/**
 * 攻撃バフのグループ
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

export class attackBuff {
  readonly type: AttackBuffModifierType
  readonly group: AttackBuffGroup
  value: number = 0

  constructor(type: AttackBuffModifierType, group: AttackBuffGroup) {
    this.type = type
    this.group = group
  }

  apply(attack: number): number {
    if (this.type === 'weapon_multiplier_add') {
      return attack + this.value
    } else if (this.type === 'weapon_multiplier_multiply') {
      return Math.round(attack * this.value)
    }
    return attack
  }
}

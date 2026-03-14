/**
 * クエストデータ
 */
export interface Quest {
  /** クエスト名称 */
  name: string
  /** 体力（HP絶対値） */
  health: number
  /** 怯み倍率 */
  flinch: number
  /** 攻撃力倍率 */
  attack: number
  /** 防御力倍率 */
  defense: number
  /** 気絶倍率 */
  stun: number
  /** 疲れ倍率 */
  fatigue: number
  /** 乗り倍率 */
  mount: number
}

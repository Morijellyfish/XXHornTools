// 旋律カテゴリ
export type MelodyCategory =
  | '属性耐性'
  | '体力'
  | '状態異常耐性'
  | '妨害耐性'
  | 'ステータス増加'
  | 'その他'

// 旋律効果
export interface Melody {
  name: string // 効果名
  effectDuration: number // 効果時間（秒）
  effectDurationWithSkill: number // 笛吹き名人ありの効果時間（秒）
  extendDuration: number // 延長時間（秒）
  extendDurationWithSkill: number // 笛吹き名人ありの延長時間（秒）
  notes: string // 音色の組み合わせ（例："白白"）
}

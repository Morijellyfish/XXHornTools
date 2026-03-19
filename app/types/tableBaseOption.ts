import type { Buffs } from './Buffs/Buffs'
import type { TargetDamageSettings } from './targetDamage'

/** 切れ味の種類 */
export type SharpnessType = 'normal' | 'plus1' | 'plus2'

/** テーブルカラムの表示キー */
export type TableColumnKey =
  | 'name'
  | 'requiredMotionValue'
  | 'expected'
  | 'elementDamage'
  | 'attack'
  | 'defense'
  | 'slots'
  | 'affinity'
  | 'elementStatus'
  | 'sharpness'
  | 'notes'
  | 'melodies'
  | 'insectType'

/** テーブルカラムの表示設定 */
export interface VisibleColumns {
  name: boolean
  requiredMotionValue: boolean
  expected: boolean
  elementDamage: boolean
  attack: boolean
  defense: boolean
  slots: boolean
  affinity: boolean
  elementStatus: boolean
  sharpness: boolean
  notes?: boolean
  melodies?: boolean
  insectType?: boolean
}

/** 表示項目のデフォルト（防御・旋律はオフ、それ以外はオン） */
export const DEFAULT_VISIBLE_COLUMNS: VisibleColumns = {
  name: true,
  requiredMotionValue: true,
  expected: true,
  elementDamage: false,
  attack: true,
  defense: false,
  slots: true,
  affinity: true,
  elementStatus: true,
  sharpness: true,
  notes: true,
  melodies: false,
  insectType: true,
}

/** カラムが表示されるか判定 */
export function isColumnVisible(visibleColumns: VisibleColumns, key: TableColumnKey): boolean {
  return visibleColumns[key] !== false
}

/**
 * テーブルコンポーネントの基底オプション
 * すべての武器テーブルで共通して使用されるオプションを定義
 */
export interface TableBaseOption {
  /** 選択された切れ味（通常、匠1、匠2） */
  selectedSharpness?: SharpnessType
  /** 会心・攻撃・属性のバフ設定 */
  buffs?: Buffs
  /** 切れ味補正倍率（デフォルト: 1.0 = 補正なし） */
  sharpnessMultiplier?: number
  /** 目標ダメージ設定 */
  targetDamageSettings?: TargetDamageSettings
  /** テーブルカラムの表示設定 */
  visibleColumns: VisibleColumns
}

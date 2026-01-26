import type { AttackBuffs } from './attackBuff/attackBuffs'
import type { CriticalBuffs } from './criticalBuffs'

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

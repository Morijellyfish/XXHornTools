import type { MonsterEffectIntensity } from './monster'

// 一覧・詳細向けの表示用文字列化

/** 咆哮・風圧（強度の実値。なし / 小 / 大 / 龍 等） */
export function formatRoarOrWindPressure(value: MonsterEffectIntensity | undefined): string {
  if (value === undefined || value.has === undefined) return '未定義'
  if (!value.has) return 'なし'
  if (value.strength) return value.strength
  return '未定義'
}

/** 振動（有無のみ） */
export function formatTremor(has: boolean | undefined): string {
  if (has === undefined) return '未定義'
  return has ? 'あり' : 'なし'
}

/** 咆哮・風圧・振動セルの表示クラス（なしはグレーアウト） */
export function effectDisplayCellClass(display: string): string {
  if (display === '未定義') return 'text-amber-300/90'
  if (display === 'なし') return 'mp-muted opacity-50'
  return 'mp-text'
}

import type { MonsterEffectIntensity } from './monster'

// 一覧向けの表示用文字列化

export function formatMonsterEffectIntensity(value: MonsterEffectIntensity | undefined): string {
  if (value === undefined) return '未定義'
  if (value.has === undefined) return '未定義'
  if (!value.has) return 'なし'
  if (value.strength === undefined || value.strength === '') return 'あり（強度: 未定義）'
  return `あり（${value.strength}）`
}

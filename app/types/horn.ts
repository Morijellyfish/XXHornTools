import type { SharpnessSet } from './sharpness'
import { melodyEffects } from '~/data/melodies'

// 音色
export type Note = '白' | '紫' | '青' | '黄' | '赤' | '緑' | '橙' | '空'

// 音色の色マッピング
export const NOTE_COLORS: Record<Note, string> = {
  白: '#ffffff',
  赤: '#ff0000',
  青: '#0000ff',
  黄: '#ffff00',
  緑: '#00ff00',
  空: '#75C4FF',
  紫: '#ff00ff',
  橙: '#FF8800',
}

// 音色のボーダーカラー取得
export const getNoteBorderColor = (note: Note): string => {
  // 白、黄、空は明るい色なので、ボーダーを暗くする
  if (note === '白' || note === '黄' || note === '空') {
    return '#888'
  }
  return '#222'
}

// 属性
export type Element = '火' | '水' | '雷' | '氷' | '龍' | '無'

// 状態異常
export type StatusAilment = '毒' | '麻痺' | '睡眠' | '爆破' | '無'

// 旋律効果
export interface MelodyEffect {
  name: string // 効果名
  effectDuration: number // 効果時間（秒）
  effectDurationWithSkill: number // 笛吹き名人ありの効果時間（秒）
  extendDuration: number // 延長時間（秒）
  extendDurationWithSkill: number // 笛吹き名人ありの延長時間（秒）
  notes: string // 音色の組み合わせ（例："白白"）
}

// 音色の組み合わせをキーとした旋律効果のマッピング
export type MelodyEffectsMap = Record<string, MelodyEffect[]>

// 狩猟笛の型定義
export interface Horn {
  // 基本情報
  name: string
  attack: number
  defense: number
  slots: number
  affinity: number // 会心率（%）

  // 属性・状態異常
  element?: {
    type: Element
    value: number
  }
  statusAilment?: {
    type: StatusAilment
    value: number
  }

  // 音色
  note1: Note
  note2: Note
  note3: Note

  // 切れ味
  sharpness: SharpnessSet
}

/**
 * 狩猟笛が吹ける旋律の名称リストを取得
 * @param horn 狩猟笛データ
 * @returns 旋律の名称リスト
 */
export const getMelodyNames = (horn: Horn): string[] => {
  // まず通常の順序で検索
  const noteKey = `${horn.note1}${horn.note2}${horn.note3}`
  let effects = melodyEffects[noteKey]

  // 見つからない場合、音色2と3を入れ替えて検索
  if (!effects) {
    const swappedKey = `${horn.note1}${horn.note3}${horn.note2}`
    effects = melodyEffects[swappedKey]
  }

  if (!effects) return []
  return effects.map(effect => effect.name)
}

/**
 * 狩猟笛の攻撃旋律倍率を取得（笛依存の場合）
 * @param horn 狩猟笛データ
 * @returns 攻撃旋律の倍率（1.0, 1.15, 1.20）
 */
export const getHornAttackMelodyMultiplier = (horn: Horn): number => {
  const melodyNames = getMelodyNames(horn)

  // 攻撃力強化【大】を確認
  if (melodyNames.includes('攻撃力強化【大】')) {
    return 1.2
  }

  // 攻撃力強化【小】を確認
  if (melodyNames.includes('攻撃力強化【小】')) {
    return 1.15
  }

  // どちらもない場合は倍率なし
  return 1.0
}

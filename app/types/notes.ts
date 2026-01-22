import { melodyEffects } from '~/data/melodies'
import type { Melody } from './melody'

export type Note = '白' | '紫' | '青' | '黄' | '赤' | '緑' | '橙' | '空'

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

// 音色の枠線の色を取得
export const getNoteBorderColor = (note: Note): string => {
  if (note === '白' || note === '黄' || note === '空') {
    return '#888'
  }
  return '#222'
}

export class Notes {
  readonly note1: Note
  readonly note2: Note
  readonly note3: Note

  private readonly melodies: Melody[]

  constructor(note1: Note, note2: Note, note3: Note) {
    this.note1 = note1
    this.note2 = note2
    this.note3 = note3
    this.melodies = this._findMelodies(note1, note2, note3)
  }

  private _findMelodies(note1: Note, note2: Note, note3: Note): Melody[] {
    const noteKey = `${note1}${note2}${note3}`
    let effects = melodyEffects[noteKey]

    if (!effects) {
      const swappedKey = `${note1}${note3}${note2}`
      effects = melodyEffects[swappedKey]
    }

    return effects ?? []
  }

  // 旋律の名称リストを取得
  getMelodyNames(): string[] {
    return this.melodies.map(melody => melody.name)
  }

  // 攻撃旋律の確認
  getMaxMelodyMultiplier_Attack(): number {
    const melodyNames = this.getMelodyNames()

    if (melodyNames.includes('攻撃力強化【大】')) {
      return 1.2
    }

    if (melodyNames.includes('攻撃力強化【小】')) {
      return 1.15
    }

    return 1.0
  }

  // 会心旋律の確認
  getMaxMelodyBonus_Critical(): number {
    const melodyNames = this.getMelodyNames()

    if (melodyNames.includes('会心率UP&体力回復【小】')) {
      return 20
    }

    return 0
  }
}

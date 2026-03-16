import type { ElementMelody } from './elementBuff_A'

/** 属性攻撃 (Elemental): Down | 無し | Up */
export type Elemental = 'down' | 'none' | 'up'

/** 単属性強化 (ElemAtk): Down | 無し | Plus1 | Plus2 */
export type ElemAtk = 'down' | 'none' | 'plus1' | 'plus2'

export interface ElementBuffs {
  elementMelody?: ElementMelody
  elemental?: Elemental
  elemAtk?: ElemAtk
}

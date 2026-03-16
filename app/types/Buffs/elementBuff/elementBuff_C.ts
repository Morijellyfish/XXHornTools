/**
 * グループC: 単属性強化 (ElemAtk)
 * 弱化: 0.75倍, 無し: 1.0倍, 強化+1: 1.05倍+4, 強化+2: 1.1倍+6
 */
import { elementBuff } from './elementBuff'
import type { ElemAtk } from './elementBuffs'

interface ElemAtkEffect {
  multiplier: number
  add: number
}

const EFFECTS: Record<ElemAtk, ElemAtkEffect> = {
  down: { multiplier: 0.75, add: 0 },
  none: { multiplier: 1.0, add: 0 },
  plus1: { multiplier: 1.05, add: 4 },
  plus2: { multiplier: 1.1, add: 6 },
}

export class elementBuffC extends elementBuff {
  private readonly add: number

  constructor(elemAtk: ElemAtk) {
    super('element_multiplier', 'C')
    const effect = EFFECTS[elemAtk]
    this.value = effect.multiplier
    this.add = effect.add
  }

  override apply(elementValue: number): number {
    if (this.value === 1.0 && this.add === 0) {
      return elementValue
    }
    return elementValue * this.value + this.add
  }
}

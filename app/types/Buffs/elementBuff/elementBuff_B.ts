/**
 * グループB: 属性攻撃 (Elemental)
 * 弱化: 0.9倍, 無し: 1.0倍, 強化: 1.1倍
 */
import { elementBuff } from './elementBuff'
import type { Elemental } from './elementBuffs'

const MULTIPLIERS: Record<Elemental, number> = {
  down: 0.9,
  none: 1.0,
  up: 1.1,
}

export class elementBuffB extends elementBuff {
  constructor(elemental: Elemental) {
    super('element_multiplier', 'B')
    this.value = MULTIPLIERS[elemental]
  }

  override apply(elementValue: number): number {
    if (this.value === 1.0) {
      return elementValue
    }
    return super.apply(elementValue)
  }
}

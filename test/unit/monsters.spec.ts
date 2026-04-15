import { describe, expect, it } from 'vitest'
import { arzuros } from '~/data/monsters/arzuros'
import { getMonster } from '~/data/monsters'
import { getMonsterEffectiveElements } from '~/types/monster/monsterEffectiveElements'

describe('getMonsterEffectiveElements', () => {
  it('火→龍の順で、閾値以上の属性だけ列挙する', () => {
    const list = getMonsterEffectiveElements(arzuros)
    expect(list).toEqual(['火', '雷', '氷'])
  })
})

describe('getMonster', () => {
  it('既知のモンスター名で取得できる', () => {
    const m = getMonster('アオアシラ')
    expect(m).toBeDefined()
    expect(m?.name).toBe('アオアシラ')
  })

  it('存在しない場合 undefined', () => {
    expect(getMonster('存在しないモンスター')).toBeUndefined()
  })
})

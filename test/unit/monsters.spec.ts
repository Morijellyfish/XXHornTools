import { describe, expect, it } from 'vitest'
import { arzuros } from '~/data/monsters/arzuros'
import { kushala } from '~/data/monsters/kushala'
import { getMonster } from '~/data/monsters'
import { getMonsterEffectiveElements } from '~/types/monster/monsterEffectiveElements'
import { getMonsterMissingMelleeWeaknesses } from '~/types/monster/monsterMelleeWeaknesses'

describe('getMonsterEffectiveElements', () => {
  it('火→龍の順で、閾値以上の属性だけ列挙する', () => {
    const list = getMonsterEffectiveElements(arzuros)
    expect(list).toEqual(['火', '雷', '氷'])
  })
})

describe('getMonsterMissingMelleeWeaknesses', () => {
  it('斬→打→弾の順で、閾値以上の肉質がない物理タイプだけ列挙する', () => {
    expect(getMonsterMissingMelleeWeaknesses(kushala)).toEqual(['shot'])
    expect(getMonsterMissingMelleeWeaknesses(arzuros)).toEqual([])
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

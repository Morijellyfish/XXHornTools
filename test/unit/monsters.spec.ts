import { describe, expect, it } from 'vitest'
import { getMonster } from '~/data/monsters'

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

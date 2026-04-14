import { describe, expect, it, vi } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import HornTable from '~/components/weaponsTable/HornTable.vue'
import { createDefaultTableOptions } from '~/utils/tableOptions'
import { DEFAULT_VISIBLE_COLUMNS } from '~/types/tableBaseOption'
import type { HuntingHorn } from '~/types/weapons'

// vi.hoisted 内で Notes を new すると import 初期化順で落ちるため、async ファクトリで組み立てる
vi.mock('~/data/weapons/horns', async () => {
  const { SharpnessColor } = await import('~/types/sharpness')
  const { Notes } = await import('~/types/notes')

  const purpleSharpnessSet = {
    normal: { color: SharpnessColor.Purple, length: 10 },
    plus1: { color: SharpnessColor.Purple, length: 10 },
    plus2: { color: SharpnessColor.Purple, length: 10 },
  }
  const notes = new Notes('白', '赤', '青')
  const horn = (name: string, attack: number): HuntingHorn => ({
    name,
    attack,
    defense: 0,
    slots: 0,
    affinity: 0,
    notes,
    sharpness: purpleSharpnessSet,
  })
  return {
    allHorns: [horn('モック笛α', 100), horn('モック笛β', 200), horn('モック笛γ', 300)],
  }
})

describe('HornTable + vi.mock(allHorns)', () => {
  it('モックした狩猟笛3件でテーブル行が生成され、音色・旋律列にデータが出る', async () => {
    const { allHorns } = await import('~/data/weapons/horns')
    expect(allHorns).toHaveLength(3)
    expect(allHorns.map(h => h.attack)).toEqual([100, 200, 300])
    expect(allHorns[0]?.notes.getMelodyNames().length).toBeGreaterThan(0)

    const opts = createDefaultTableOptions()
    const wrapper = await mountSuspended(HornTable, {
      props: {
        horns: allHorns,
        selectedSharpness: opts.selectedSharpness,
        buffs: opts.buffs,
        sharpnessMultiplier: opts.sharpnessMultiplier,
        targetDamageSettings: opts.targetDamageSettings,
        visibleColumns: {
          ...DEFAULT_VISIBLE_COLUMNS,
          ...opts.visibleColumns,
          notes: true,
          melodies: true,
        },
      },
    })

    const text = wrapper.text()
    expect(text).toContain('モック笛α')
    expect(text).toContain('モック笛β')
    expect(text).toContain('モック笛γ')

    const rows = wrapper.findAll('tbody tr')
    expect(rows.length).toBe(3)
  })
})

import { describe, expect, it } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import WeaponTableOptions from '~/components/WeaponTableOptions.vue'
import { createDefaultTableOptions } from '~/utils/tableOptions'
import type { TableBaseOption } from '~/types/tableBaseOption'

describe('WeaponTableOptions', () => {
  it('攻撃スキルの「UP【大】」ボタンで attackSkill が up_large に更新される', async () => {
    const wrapper = await mountSuspended(WeaponTableOptions, {
      props: {
        modelValue: createDefaultTableOptions(),
      },
    })

    const buttons = wrapper.findAll('button')
    const upLarge = buttons.find(b => b.text().includes('UP【大】'))
    expect(upLarge).toBeDefined()
    await upLarge!.trigger('click')

    const emitted = wrapper.emitted('update:modelValue')
    expect(emitted).toBeDefined()
    const payload = emitted!.at(-1)![0] as TableBaseOption
    expect(payload.buffs?.attackModifiers?.attackSkill).toBe('up_large')
  })
})

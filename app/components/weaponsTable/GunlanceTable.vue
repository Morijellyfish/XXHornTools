<script setup lang="ts">
import type { Gunlance, GunlanceShelling } from '~/types/weapons'
import type { TableBaseOption } from '~/types/tableBaseOption'
import { isColumnVisible } from '~/types/tableBaseOption'
import { AttackMelody } from '~/types/Buffs/attackBuff'
import { ElementMelody } from '~/types/Buffs/elementBuff'
import WeaponTable from './WeaponTable.vue'

interface Props extends TableBaseOption {
  gunlances: Gunlance[]
}

const props = withDefaults(defineProps<Props>(), {
  selectedSharpness: 'normal',
  buffs: () => ({
    criticalBuffs: { hasCriticalBoost: false, hasMadAffinity: false },
    attackModifiers: {
      powerCharm: false,
      powerTalon: false,
      attackSkill: 'none',
      attackMelody: AttackMelody.None,
    },
    elementModifiers: { elementMelody: ElementMelody.None },
  }),
  sharpnessMultiplier: 1.0,
})

/** 砲撃種別・レベルを日本語ラベルに変換 */
const shellingLabel = (s: GunlanceShelling): string => {
  const labels: Record<GunlanceShelling['type'], string> = {
    normal: '通常',
    long: '放射',
    wide: '拡散',
  }
  return `${labels[s.type]}${s.level}`
}
</script>

<template>
  <WeaponTable
    :weapons="props.gunlances"
    :selected-sharpness="props.selectedSharpness"
    :buffs="props.buffs"
    :sharpness-multiplier="props.sharpnessMultiplier"
    :target-damage-settings="props.targetDamageSettings"
    :visible-columns="props.visibleColumns"
  >
    <template #header-columns>
      <th v-if="isColumnVisible(props.visibleColumns, 'gunlanceShelling')" class="text-left p-2">
        砲撃
      </th>
    </template>
    <template #row-columns="{ weapon: gl }">
      <td v-if="isColumnVisible(props.visibleColumns, 'gunlanceShelling')" class="p-2">
        {{ shellingLabel(gl.gunlanceShelling) }}
      </td>
    </template>
  </WeaponTable>
</template>

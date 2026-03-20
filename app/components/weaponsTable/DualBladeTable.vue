<script setup lang="ts">
import { computed } from 'vue'
import type { DualBlade } from '~/types/weapons'
import { isElementType } from '~/types/weapons'
import type { TableBaseOption } from '~/types/tableBaseOption'
import { isColumnVisible } from '~/types/tableBaseOption'
import { AttackMelody } from '~/types/Buffs/attackBuff'
import { ElementMelody } from '~/types/Buffs/elementBuff'
import type { WeaponMeleeStatsContext } from '~/utils/weaponMeleeStats'
import * as weaponMeleeStats from '~/utils/weaponMeleeStats'
import WeaponTable from './WeaponTable.vue'

interface Props extends TableBaseOption {
  dualBlades: DualBlade[]
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

const statsContext = computed<WeaponMeleeStatsContext>(() => ({
  buffs: props.buffs,
  selectedSharpness: props.selectedSharpness ?? 'normal',
  targetDamageSettings: props.targetDamageSettings,
  sharpnessMultiplier: props.sharpnessMultiplier ?? 1.0,
  dualBladeElementMainRatio: props.dualBladeElementMainRatio,
}))

/** 副スロット表示（属性はバフ後、状態異常は素値） */
const subElementLabel = (db: DualBlade): string => {
  if (!db.subElement) return '-'
  if (!isElementType(db.subElement)) {
    return `${db.subElement.type}${db.subElement.value}`
  }
  const v = weaponMeleeStats.getSubElement(db, statsContext.value)
  return `${db.subElement.type}${v}`
}

const showSubBaseElement = (db: DualBlade): boolean => {
  if (!db.subElement || !isElementType(db.subElement)) return false
  return weaponMeleeStats.isShowBaseElement(db, statsContext.value)
}

const subElementTooltip = (db: DualBlade) => {
  if (!db.subElement || !isElementType(db.subElement)) return undefined
  const capped = weaponMeleeStats.isSubElementCapped(db, statsContext.value)
  const uncapped = weaponMeleeStats.getSubElementUncappedValue(db, statsContext.value)
  if (capped && uncapped !== undefined) {
    return {
      value: `上限に引っかかっています\r\n素の値：${uncapped}`,
      showDelay: 50,
    }
  }
  return undefined
}
</script>

<template>
  <WeaponTable
    :weapons="props.dualBlades"
    :selected-sharpness="props.selectedSharpness"
    :buffs="props.buffs"
    :sharpness-multiplier="props.sharpnessMultiplier"
    :target-damage-settings="props.targetDamageSettings"
    :visible-columns="props.visibleColumns"
    :dual-blade-element-main-ratio="props.dualBladeElementMainRatio"
  >
    <template #header-columns>
      <th v-if="isColumnVisible(props.visibleColumns, 'dualBladeSubElement')" class="text-left p-2">
        副属性
      </th>
    </template>
    <template #row-columns="{ weapon: db }">
      <td v-if="isColumnVisible(props.visibleColumns, 'dualBladeSubElement')" class="p-2">
        <div
          v-if="db.subElement && isElementType(db.subElement)"
          class="flex flex-col items-start leading-tight"
        >
          <span
            v-tooltip.top="subElementTooltip(db)"
            class="whitespace-nowrap"
            :class="{
              'mp-alert-attack cursor-help': weaponMeleeStats.isSubElementCapped(db, statsContext),
            }"
          >
            {{ subElementLabel(db) }}
          </span>
          <span v-if="showSubBaseElement(db)" class="text-xs mp-muted">
            ({{ db.subElement.type }}{{ db.subElement.value }})
          </span>
        </div>
        <span v-else-if="db.subElement" class="whitespace-nowrap">
          {{ db.subElement.type }}{{ db.subElement.value }}
        </span>
        <span v-else>-</span>
      </td>
    </template>
  </WeaponTable>
</template>

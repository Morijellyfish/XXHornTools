<script setup lang="ts" generic="T extends WeaponMelee">
import { computed } from 'vue'
import type { WeaponMelee } from '~/types/weapons'
import type { TableBaseOption } from '~/types/tableBaseOption'
import { isColumnVisible } from '~/types/tableBaseOption'
import { AttackMelody } from '~/types/Buffs/attackBuff'
import { ElementMelody } from '~/types/Buffs/elementBuff'
import { useWeaponTable } from '~/composables/useWeaponTable'
import WeaponTableRow from './WeaponTableRow.vue'

interface Props extends TableBaseOption {
  weapons: T[]
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

const visibleColumns = computed(() => props.visibleColumns)

const {
  sortedWeapons,
  toggleSort,
  getSortIcon,
  getAffinity,
  getExpectedValue,
  getPhysicalExpectedValue,
  getElementExpectedValue,
  getAttack,
  getElement,
  getRequiredMotionValue,
  getRequiredMotionValueElementInfo,
  getElementDamage,
  getAttackCount,
  isShowBaseAttack,
  isShowBaseAffinity,
  isShowBaseElement,
} = useWeaponTable(props)
</script>

<template>
  <div class="mp-panel overflow-hidden">
    <div class="overflow-x-auto">
      <table class="weapon-table w-full">
        <thead>
          <tr class="border-b">
            <th
              v-if="isColumnVisible(visibleColumns, 'name')"
              class="text-left p-2 whitespace-nowrap"
            >
              名称
            </th>
            <th
              v-if="isColumnVisible(visibleColumns, 'requiredMotionValue')"
              class="text-right p-2 cursor-pointer mp-hover-surface-2 select-none whitespace-nowrap"
              @click="toggleSort('requiredMotionValue')"
            >
              <span class="inline-flex items-center gap-1 justify-end w-full whitespace-nowrap">
                必要モーション値
                <span class="w-4 text-center">{{ getSortIcon('requiredMotionValue') }}</span>
              </span>
            </th>
            <th
              v-if="isColumnVisible(visibleColumns, 'expected')"
              class="text-right p-2 cursor-pointer mp-hover-surface-2 select-none whitespace-nowrap"
              @click="toggleSort('expected')"
            >
              <span class="inline-flex items-center gap-1 justify-end w-full whitespace-nowrap">
                期待値 <span class="w-4 text-center">{{ getSortIcon('expected') }}</span>
              </span>
            </th>
            <th
              v-if="isColumnVisible(visibleColumns, 'elementDamage')"
              class="text-right p-2 whitespace-nowrap"
            >
              属性ダメージ
            </th>
            <th
              v-if="isColumnVisible(visibleColumns, 'attack')"
              class="text-right p-2 cursor-pointer mp-hover-surface-2 select-none whitespace-nowrap"
              @click="toggleSort('attack')"
            >
              <span class="inline-flex items-center gap-1 justify-end w-full whitespace-nowrap">
                攻撃 <span class="w-4 text-center">{{ getSortIcon('attack') }}</span>
              </span>
            </th>
            <th
              v-if="isColumnVisible(visibleColumns, 'defense')"
              class="text-right p-2 cursor-pointer mp-hover-surface-2 select-none whitespace-nowrap"
              @click="toggleSort('defense')"
            >
              <span class="inline-flex items-center gap-1 justify-end w-full whitespace-nowrap">
                防御 <span class="w-4 text-center">{{ getSortIcon('defense') }}</span>
              </span>
            </th>
            <th
              v-if="isColumnVisible(visibleColumns, 'slots')"
              class="text-center p-2 cursor-pointer mp-hover-surface-2 select-none whitespace-nowrap w-20"
              @click="toggleSort('slots')"
            >
              <span class="inline-flex items-center gap-1 justify-center w-full whitespace-nowrap">
                スロット <span class="w-4 text-center">{{ getSortIcon('slots') }}</span>
              </span>
            </th>
            <th
              v-if="isColumnVisible(visibleColumns, 'affinity')"
              class="text-right p-2 cursor-pointer mp-hover-surface-2 select-none whitespace-nowrap"
              @click="toggleSort('affinity')"
            >
              <span class="inline-flex items-center gap-1 justify-end w-full whitespace-nowrap">
                会心率 <span class="w-1 text-center">{{ getSortIcon('affinity') }}</span>
              </span>
            </th>
            <th
              v-if="isColumnVisible(visibleColumns, 'elementStatus')"
              class="text-left p-2 whitespace-nowrap"
            >
              属性・状態異常
            </th>
            <!-- 拡張用ヘッダー -->
            <slot name="header-columns" />
            <th
              v-if="isColumnVisible(visibleColumns, 'sharpness')"
              class="text-left p-2 whitespace-nowrap"
            >
              斬れ味
            </th>
          </tr>
        </thead>
        <tbody>
          <WeaponTableRow
            v-for="weapon in sortedWeapons"
            :key="weapon.name"
            :weapon="weapon"
            :required-motion-value="getRequiredMotionValue(weapon)"
            :required-motion-value-element-info="getRequiredMotionValueElementInfo(weapon)"
            :attack-count="getAttackCount()"
            :expected-value="getExpectedValue(weapon)"
            :physical-expected-value="getPhysicalExpectedValue(weapon)"
            :element-expected-value="getElementExpectedValue(weapon)"
            :element-damage="getElementDamage(weapon)"
            :attack-with-buffs="getAttack(weapon)"
            :base-attack="weapon.attack"
            :show-base-attack="isShowBaseAttack(weapon)"
            :element-with-buffs="getElement(weapon)"
            :show-base-element="isShowBaseElement(weapon)"
            :affinity="getAffinity(weapon)"
            :base-affinity="weapon.affinity"
            :show-base-affinity="isShowBaseAffinity(weapon)"
            :selected-sharpness="props.selectedSharpness"
            :bludgeoner="props.buffs?.attackModifiers?.bludgeoner"
            :visible-columns="visibleColumns"
          >
            <!-- 拡張用カラム -->
            <template #additional-columns="{ weapon: w }">
              <slot name="row-columns" :weapon="w" />
            </template>
          </WeaponTableRow>
        </tbody>
      </table>
    </div>
  </div>
</template>

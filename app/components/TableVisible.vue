<script setup lang="ts">
import { computed, ref } from 'vue'
import type { VisibleColumns } from '~/types/tableBaseOption'
import type { WeaponType } from '~/types/weapons'

interface Props {
  /** 武器種（表示項目の出し分けに使用） */
  weaponType: WeaponType
  /** 表示設定 */
  modelValue: VisibleColumns
}

const props = defineProps<Props>()
const emit = defineEmits<{
  'update:modelValue': [value: VisibleColumns]
}>()

const visibleColumns = computed({
  get: () => props.modelValue,
  set: value => emit('update:modelValue', value),
})

// 武器種に応じた拡張カラムを取得
const hornColumnItems = [
  { key: 'notes' as const, label: '音色' },
  { key: 'melodies' as const, label: '旋律' },
]

const insectGlaiveColumnItems = [{ key: 'insectType' as const, label: '系統' }]

const chargeBladeColumnItems = [{ key: 'chargeBladePhialType' as const, label: '装着ビン' }]

const switchAxeColumnItems = [{ key: 'switchAxePhialType' as const, label: '装着ビン' }]

const getHornColumnItems = (weaponType: WeaponType) =>
  weaponType === 'huntingHorn' ? hornColumnItems : []

const getInsectGlaiveColumnItems = (weaponType: WeaponType) =>
  weaponType === 'insectGlaive' ? insectGlaiveColumnItems : []

const getChargeBladeColumnItems = (weaponType: WeaponType) =>
  weaponType === 'chargeBlade' ? chargeBladeColumnItems : []

const getSwitchAxeColumnItems = (weaponType: WeaponType) =>
  weaponType === 'switchAxe' ? switchAxeColumnItems : []

const columnItems = [
  { key: 'name' as const, label: '名称' },
  { key: 'requiredMotionValue' as const, label: '必要モーション値' },
  { key: 'expected' as const, label: '期待値' },
  { key: 'elementDamage' as const, label: '属性ダメージ' },
  { key: 'attack' as const, label: '攻撃' },
  { key: 'defense' as const, label: '防御' },
  { key: 'slots' as const, label: 'スロット' },
  { key: 'affinity' as const, label: '会心率' },
  { key: 'elementStatus' as const, label: '属性・状態異常' },
  { key: 'sharpness' as const, label: '斬れ味' },
]

const expanded = ref(false)

const toggle = (key: keyof VisibleColumns) => {
  const current = visibleColumns.value[key]
  const next = current === undefined ? false : !current
  visibleColumns.value = { ...visibleColumns.value, [key]: next }
}
</script>

<template>
  <div>
    <button
      type="button"
      class="mp-label mp-muted cursor-pointer select-none bg-transparent border-none p-0 text-left"
      @click="expanded = !expanded"
    >
      {{ expanded ? '▼' : '▶' }} 表示項目
    </button>
    <div v-show="expanded" class="mt-3 flex flex-wrap gap-x-6 gap-y-2">
      <div v-for="item in columnItems" :key="item.key" class="flex items-center gap-2">
        <Checkbox
          :model-value="visibleColumns[item.key]"
          binary
          :input-id="`col-${item.key}`"
          @update:model-value="toggle(item.key)"
        />
        <label
          :for="`col-${item.key}`"
          class="mp-label mp-text cursor-pointer whitespace-nowrap"
          @click="toggle(item.key)"
        >
          {{ item.label }}
        </label>
      </div>
      <template
        v-for="item in [
          ...getHornColumnItems(props.weaponType),
          ...getInsectGlaiveColumnItems(props.weaponType),
          ...getChargeBladeColumnItems(props.weaponType),
          ...getSwitchAxeColumnItems(props.weaponType),
        ]"
        :key="item.key"
      >
        <div class="flex items-center gap-2">
          <Checkbox
            :model-value="visibleColumns[item.key]"
            binary
            :input-id="`col-${item.key}`"
            @update:model-value="toggle(item.key)"
          />
          <label
            :for="`col-${item.key}`"
            class="mp-label mp-text cursor-pointer whitespace-nowrap"
            @click="toggle(item.key)"
          >
            {{ item.label }}
          </label>
        </div>
      </template>
    </div>
  </div>
</template>

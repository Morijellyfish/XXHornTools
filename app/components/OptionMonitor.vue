<script setup lang="ts">
import { computed } from 'vue'
import type { TableBaseOption } from '~/types/tableBaseOption'
import {
  getActiveSkills,
  calculateCriticalBonus,
  calculateTotalAttackAdd,
  calculateTotalAttackMultiply,
} from '~/types/tableBaseOption'

interface Props {
  modelValue: TableBaseOption
}

const props = defineProps<Props>()

const emit = defineEmits<{
  'update:modelValue': [value: TableBaseOption]
}>()

const tableOptions = computed({
  get: () => props.modelValue,
  set: value => emit('update:modelValue', value),
})

const targetDamageSettings = computed(() => tableOptions.value.targetDamageSettings ?? {})

const updateTargetDamage = (value: number | null | undefined) => {
  const numValue = value === null || value === undefined ? undefined : Number(value)
  tableOptions.value = {
    ...tableOptions.value,
    targetDamageSettings: {
      ...targetDamageSettings.value,
      targetDamage: numValue,
    },
  }
}

const clampTargetDamage = () => {
  const value = targetDamageSettings.value.targetDamage
  if (value !== undefined && value < 0) {
    updateTargetDamage(0)
  }
}

const updateHitzone = (value: number | null | undefined) => {
  const numValue = value === null || value === undefined ? undefined : Number(value)
  tableOptions.value = {
    ...tableOptions.value,
    targetDamageSettings: {
      ...targetDamageSettings.value,
      hitzone: numValue,
    },
  }
}

const clampHitzone = () => {
  const value = targetDamageSettings.value.hitzone
  if (value === undefined) {
    return
  }
  let clampedValue = value
  if (value < 0) {
    clampedValue = 0
  } else if (value > 1000) {
    clampedValue = 1000
  }
  if (clampedValue !== value) {
    updateHitzone(clampedValue)
  }
}

const updateOverallDefenseRate = (value: number | null | undefined) => {
  const numValue = value === null || value === undefined ? undefined : Number(value)
  tableOptions.value = {
    ...tableOptions.value,
    targetDamageSettings: {
      ...targetDamageSettings.value,
      overallDefenseRate: numValue,
    },
  }
}

const clampOverallDefenseRate = () => {
  const value = targetDamageSettings.value.overallDefenseRate
  if (value === undefined) {
    return
  }
  if (value < 0) {
    updateOverallDefenseRate(0)
  }
}

// 会心補正を計算
const criticalBonus = computed(() => calculateCriticalBonus(tableOptions.value))

// 攻撃力加算バフの合計を計算
const totalAttackAdd = computed(() => calculateTotalAttackAdd(tableOptions.value))

// 攻撃力倍率（乗算バフ）の合計を計算
const totalAttackMultiply = computed(() => calculateTotalAttackMultiply(tableOptions.value))

// 発動スキルのリストを取得
const activeSkills = computed(() => getActiveSkills(tableOptions.value))
</script>

<template>
  <div class="mb-0 p-4 mp-panel">
    <div class="flex flex-wrap gap-4 text-sm">
      <div>
        <span class="mp-muted">攻撃力加算:</span>
        <span
          class="font-mono font-bold ml-2"
          :class="
            totalAttackAdd > 0
              ? 'text-[var(--mainpalette-accent)]'
              : 'text-[var(--mainpalette-text-muted)]'
          "
        >
          {{ totalAttackAdd > 0 ? `+${totalAttackAdd}` : '0' }}
        </span>
      </div>
      <div>
        <span class="mp-muted">攻撃力倍率:</span>
        <span
          class="font-mono font-bold ml-2"
          :class="
            totalAttackMultiply !== 1.0
              ? 'text-[var(--mainpalette-accent)]'
              : 'text-[var(--mainpalette-text-muted)]'
          "
        >
          x{{ totalAttackMultiply.toFixed(2) }}
        </span>
      </div>
      <div>
        <span class="mp-muted">会心率追加:</span>
        <span
          class="font-mono font-bold ml-2"
          :class="
            criticalBonus > 0
              ? 'text-[var(--mainpalette-accent)]'
              : 'text-[var(--mainpalette-text-muted)]'
          "
        >
          {{ criticalBonus > 0 ? `+${criticalBonus}%` : '0%' }}
        </span>
      </div>
    </div>
    <div class="mt-3 text-sm">
      <span class="mp-muted">発動スキル:</span>
      <span v-if="activeSkills.length === 0" class="ml-2 mp-muted"> なし </span>
      <span v-else class="ml-2 mp-text">
        {{ activeSkills.join('、') }}
      </span>
    </div>
    <div class="mt-4 pt-4 mp-divider-top">
      <div class="text-sm font-medium mb-2 mp-text">目標ダメージ設定</div>
      <div class="flex flex-wrap gap-4">
        <div class="flex items-center gap-2">
          <label class="text-sm mp-muted whitespace-nowrap"> 目標ダメージ: </label>
          <InputNumber
            :model-value="targetDamageSettings.targetDamage ?? null"
            :min="0"
            class="w-24"
            placeholder="10000"
            input-class="w-full"
            :use-grouping="false"
            @update:model-value="updateTargetDamage($event)"
            @blur="clampTargetDamage"
          />
        </div>
        <div class="flex items-center gap-2">
          <label class="text-sm mp-muted whitespace-nowrap">肉質:</label>
          <InputNumber
            :model-value="targetDamageSettings.hitzone ?? null"
            :min="0"
            :max="1000"
            class="w-20"
            placeholder="45"
            input-class="w-full"
            :use-grouping="false"
            @update:model-value="updateHitzone($event)"
            @blur="clampHitzone"
          />
        </div>
        <div class="flex items-center gap-2">
          <label class="text-sm mp-muted whitespace-nowrap"> 全体防御率: </label>
          <InputNumber
            :model-value="targetDamageSettings.overallDefenseRate ?? null"
            :min="0"
            :step="0.01"
            class="w-20"
            placeholder="1.0"
            input-class="w-full"
            :use-grouping="false"
            :min-fraction-digits="0"
            :max-fraction-digits="2"
            @update:model-value="updateOverallDefenseRate($event)"
            @blur="clampOverallDefenseRate"
          />
        </div>
      </div>
    </div>
  </div>
</template>

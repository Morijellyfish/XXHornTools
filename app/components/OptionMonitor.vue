<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import Select from 'primevue/select'
import { allMonsters } from '~/data/monsters'
import {
  getDefaultDurabilityPartKey,
  getDefaultHitZonePartName,
  getDefaultVariantName,
  getDurabilityList,
  getDurabilityListWithValue,
  getHitZonePartList,
  getHitZonePartListWithValue,
  getHitZoneVariantList,
  getMonsterList,
} from '~/types/monster/monsterOptions'
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

const selectedMonsterName = ref<string>('')
const selectedVariantName = ref<string>('')
const selectedHitzonePartName = ref<string>('')
const selectedDurabilityPartKey = ref<string>('')
const selectedHitzoneType = ref<'slash' | 'impact' | 'shot'>('impact')

// 目標テンプレート側の補助入力（将来の適用ロジック用）
const templateFlinchMultiplier = ref<number | null>(null)
const templateDefenseMultiplier = ref<number | null>(null)
const templateStunMultiplier = ref<number | null>(null)
const templateFatigueMultiplier = ref<number | null>(null)

const monsterOptions = computed(() => {
  return getMonsterList(allMonsters)
})

const selectedMonster = computed(() => {
  if (!selectedMonsterName.value) return undefined
  return allMonsters.find(m => m.name === selectedMonsterName.value)
})

const variantOptions = computed(() => {
  return getHitZoneVariantList(selectedMonster.value)
})

const hitzonePartOptions = computed(() => {
  if (!selectedMonster.value || !selectedVariantName.value) {
    return getHitZonePartList(selectedMonster.value, selectedVariantName.value)
  }
  return getHitZonePartListWithValue(
    selectedMonster.value,
    selectedVariantName.value,
    selectedHitzoneType.value
  )
})

const durabilityPartOptions = computed(() => {
  if (!selectedMonster.value) return getDurabilityList(selectedMonster.value)
  return getDurabilityListWithValue(selectedMonster.value, isFrenziedVariant.value)
})

const hitzoneTypeOptions: { label: string; value: 'slash' | 'impact' | 'shot' }[] = [
  { label: '切', value: 'slash' },
  { label: '打', value: 'impact' },
  { label: '弾', value: 'shot' },
]

const isFrenziedVariant = computed(() => selectedVariantName.value.includes('獰猛'))

const getSelectedHitzoneValue = (): number | undefined => {
  const monster = selectedMonster.value
  if (!monster) return undefined
  const variant = monster.hitZoneVariants.find(v => v.name === selectedVariantName.value)
  const hitZone = variant?.hitZones.find(hz => hz.name === selectedHitzonePartName.value)
  return hitZone?.mellee[selectedHitzoneType.value]
}

const getSelectedDurabilityValue = (): number | undefined => {
  const monster = selectedMonster.value
  if (!monster) return undefined

  const [name, kind] = selectedDurabilityPartKey.value.split('::')
  if (!name || (kind !== 'normal' && kind !== 'prebreak')) return undefined

  const part = monster.partDurabilities.find(p => p.name === name)
  if (!part) return undefined

  const isPreBreak = kind === 'prebreak'
  return part.getDurability(isFrenziedVariant.value, isPreBreak)
}

const canApplyTemplate = computed(() => {
  return (
    !!selectedMonsterName.value &&
    !!selectedVariantName.value &&
    !!selectedHitzonePartName.value &&
    !!selectedDurabilityPartKey.value
  )
})

const applyTemplate = () => {
  if (!canApplyTemplate.value) return

  const hitzone = getSelectedHitzoneValue()
  const targetDamage = getSelectedDurabilityValue()

  const flinchMultiplier = templateFlinchMultiplier.value ?? 1.0
  const defenseMultiplier = templateDefenseMultiplier.value ?? 1.0

  const nextTargetDamage = targetDamage !== undefined ? targetDamage * flinchMultiplier : undefined

  const baseOverallDefenseRate = targetDamageSettings.value.overallDefenseRate ?? 1.0
  const nextOverallDefenseRate = baseOverallDefenseRate * defenseMultiplier

  tableOptions.value = {
    ...tableOptions.value,
    targetDamageSettings: {
      ...targetDamageSettings.value,
      ...(hitzone !== undefined ? { hitzone } : {}),
      ...(nextTargetDamage !== undefined ? { targetDamage: nextTargetDamage } : {}),
      overallDefenseRate: nextOverallDefenseRate,
    },
  }
}

watch(
  () => selectedMonsterName.value,
  () => {
    selectedVariantName.value = getDefaultVariantName(selectedMonster.value)
    selectedHitzonePartName.value = getDefaultHitZonePartName(
      selectedMonster.value,
      selectedVariantName.value
    )
    selectedDurabilityPartKey.value = getDefaultDurabilityPartKey(selectedMonster.value)
  }
)

watch(
  () => selectedVariantName.value,
  () => {
    selectedHitzonePartName.value = getDefaultHitZonePartName(
      selectedMonster.value,
      selectedVariantName.value
    )
  }
)
</script>

<template>
  <div class="mb-0 mp-panel mp-pad">
    <div class="flex flex-wrap gap-4 mp-body">
      <div>
        <span class="mp-muted">攻撃力加算:</span>
        <span
          class="font-mono font-bold ml-2"
          :class="totalAttackAdd > 0 ? 'mp-accent' : 'mp-muted'"
        >
          {{ totalAttackAdd > 0 ? `+${totalAttackAdd}` : '0' }}
        </span>
      </div>
      <div>
        <span class="mp-muted">攻撃力倍率:</span>
        <span
          class="font-mono font-bold ml-2"
          :class="totalAttackMultiply !== 1.0 ? 'mp-accent' : 'mp-muted'"
        >
          x{{ totalAttackMultiply.toFixed(2) }}
        </span>
      </div>
      <div>
        <span class="mp-muted">会心率追加:</span>
        <span
          class="font-mono font-bold ml-2"
          :class="criticalBonus > 0 ? 'mp-accent' : 'mp-muted'"
        >
          {{ criticalBonus > 0 ? `+${criticalBonus}%` : '0%' }}
        </span>
      </div>
    </div>
    <div class="mt-3 mp-body">
      <span class="mp-muted">発動スキル:</span>
      <span v-if="activeSkills.length === 0" class="ml-2 mp-muted"> なし </span>
      <span v-else class="ml-2 mp-text">
        {{ activeSkills.join('、') }}
      </span>
    </div>
    <div class="mt-4 pt-4 mp-divider-top">
      <div class="space-y-6">
        <div>
          <div class="mp-label mb-3 mp-text">目標テンプレート</div>
          <div class="flex flex-wrap items-center gap-3">
            <Select
              v-model="selectedMonsterName"
              :options="monsterOptions"
              option-label="label"
              option-value="value"
              placeholder="モンスター"
              class="w-56"
            />
            <Select
              v-model="selectedVariantName"
              :options="variantOptions"
              option-label="label"
              option-value="value"
              placeholder="通常時"
              class="w-40"
              :disabled="!selectedMonsterName"
            />
            <Select
              v-model="selectedHitzonePartName"
              :options="hitzonePartOptions"
              option-label="label"
              option-value="value"
              placeholder="肉質部位"
              class="w-40"
              :disabled="!selectedMonsterName || !selectedVariantName"
            />
            <Select
              v-model="selectedDurabilityPartKey"
              :options="durabilityPartOptions"
              option-label="label"
              option-value="value"
              placeholder="耐久部位"
              class="w-40"
              :disabled="!selectedMonsterName"
            />
            <Select
              v-model="selectedHitzoneType"
              :options="hitzoneTypeOptions"
              option-label="label"
              option-value="value"
              placeholder="切/打/弾"
              class="w-28"
            />
          </div>

          <div class="mt-3 flex flex-wrap items-center gap-4">
            <div class="flex items-center gap-2">
              <label class="mp-label mp-muted whitespace-nowrap">怯み:</label>
              <InputNumber
                v-model="templateFlinchMultiplier"
                :min="0"
                :step="0.01"
                class="w-24"
                placeholder="1.0"
                input-class="w-full"
                :use-grouping="false"
                :min-fraction-digits="0"
                :max-fraction-digits="2"
              />
            </div>
            <div class="flex items-center gap-2">
              <label class="mp-label mp-muted whitespace-nowrap">防御力:</label>
              <InputNumber
                v-model="templateDefenseMultiplier"
                :min="0"
                :step="0.01"
                class="w-24"
                placeholder="1.0"
                input-class="w-full"
                :use-grouping="false"
                :min-fraction-digits="0"
                :max-fraction-digits="2"
              />
            </div>
            <div class="flex items-center gap-2">
              <label class="mp-label mp-muted whitespace-nowrap">気絶:</label>
              <InputNumber
                v-model="templateStunMultiplier"
                :min="0"
                :step="0.01"
                class="w-24"
                placeholder="1.0"
                input-class="w-full"
                :use-grouping="false"
                :min-fraction-digits="0"
                :max-fraction-digits="2"
              />
            </div>
            <div class="flex items-center gap-2">
              <label class="mp-label mp-muted whitespace-nowrap">疲れ:</label>
              <InputNumber
                v-model="templateFatigueMultiplier"
                :min="0"
                :step="0.01"
                class="w-24"
                placeholder="1.0"
                input-class="w-full"
                :use-grouping="false"
                :min-fraction-digits="0"
                :max-fraction-digits="2"
              />
            </div>
            <div class="flex items-center">
              <Button :disabled="!canApplyTemplate" @click="applyTemplate">適用</Button>
            </div>
          </div>
        </div>

        <div class="pt-6 mp-divider-top">
          <div class="mp-label mb-3 mp-text">目標ダメージ設定</div>
          <div class="flex flex-wrap items-center gap-4">
            <div class="flex items-center gap-2">
              <label class="mp-label mp-muted whitespace-nowrap"> 目標ダメージ: </label>
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
              <label class="mp-label mp-muted whitespace-nowrap">肉質:</label>
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
              <label class="mp-label mp-muted whitespace-nowrap"> 全体防御率: </label>
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
    </div>
  </div>
</template>

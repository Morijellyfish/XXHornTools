<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import Select from 'primevue/select'
import { allMonsters } from '~/data/monsters'
import type { ElementHitzoneValues } from '~/types/targetDamage'
import type { MelleeType } from '~/types/attackType'
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
  getQuestList,
} from '~/types/monster/monsterOptions'

interface Props {
  /** 目標テンプレートのデフォルト物理属性（切/打/弾） */
  defaultHitzoneType: MelleeType
}

const props = defineProps<Props>()

const emit = defineEmits<{
  apply: [
    payload: {
      hitzone?: number
      targetDamage?: number
      overallDefenseRate?: number
      elementHitzone?: ElementHitzoneValues
    },
  ]
}>()

const selectedMonsterName = ref<string>('')
const selectedVariantName = ref<string>('')
const selectedHitzonePartName = ref<string>('')
const selectedDurabilityPartKey = ref<string>('')
const selectedQuestName = ref<string>('')
const selectedHitzoneType = ref<MelleeType>(props.defaultHitzoneType)

const expanded = ref(false)
const templateFlinchMultiplier = ref<number | null>(null)
const templateDefenseMultiplier = ref<number | null>(null)
const templateStunMultiplier = ref<number | null>(null)
const templateFatigueMultiplier = ref<number | null>(null)

const monsterOptions = computed(() => getMonsterList(allMonsters))

const selectedMonster = computed(() => {
  if (!selectedMonsterName.value) return undefined
  return allMonsters.find(m => m.name === selectedMonsterName.value)
})

const variantOptions = computed(() => getHitZoneVariantList(selectedMonster.value))

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

const questOptions = computed(() => getQuestList(selectedMonster.value))

const selectedQuest = computed(() => {
  if (!selectedMonster.value || !selectedQuestName.value) return undefined
  return selectedMonster.value.quests?.find(q => q.name === selectedQuestName.value)
})

const hitzoneTypeOptions: { label: string; value: MelleeType }[] = [
  { label: '切', value: 'slash' },
  { label: '打', value: 'impact' },
  { label: '弾', value: 'shot' },
]

const isFrenziedVariant = computed(() => selectedVariantName.value.includes('獰猛'))

const getSelectedHitzoneValue = (): number | undefined => {
  const monster = selectedMonster.value!
  const variant = monster.hitZoneVariants.find(v => v.name === selectedVariantName.value)
  const hitZone = variant?.hitZones.find(hz => hz.name === selectedHitzonePartName.value)
  return hitZone?.mellee[selectedHitzoneType.value]
}

const getSelectedElementHitzoneValue = (): ElementHitzoneValues | undefined => {
  const monster = selectedMonster.value!
  const variant = monster.hitZoneVariants.find(v => v.name === selectedVariantName.value)
  const hitZone = variant?.hitZones.find(hz => hz.name === selectedHitzonePartName.value)
  return hitZone?.element
}

const getSelectedDurabilityValue = (): number | undefined => {
  const monster = selectedMonster.value!

  const [name, kind] = selectedDurabilityPartKey.value.split('::')
  if (!name || (kind !== 'normal' && kind !== 'prebreak')) return undefined

  const part = monster.partDurabilities.find(p => p.name === name)
  if (!part) return undefined

  const isPreBreak = kind === 'prebreak'
  return part.getDurability(isFrenziedVariant.value, isPreBreak)
}

const canApply = computed(
  () =>
    !!selectedMonsterName.value &&
    !!selectedVariantName.value &&
    !!selectedHitzonePartName.value &&
    !!selectedDurabilityPartKey.value
)

const apply = () => {
  if (!canApply.value) return

  const hitzone = getSelectedHitzoneValue()
  const elementHitzone = getSelectedElementHitzoneValue()
  const durabilityValue = getSelectedDurabilityValue()
  const flinchMultiplier = templateFlinchMultiplier.value ?? 1.0
  const defenseMultiplier = templateDefenseMultiplier.value ?? 1.0

  const targetDamage =
    durabilityValue !== undefined ? durabilityValue * flinchMultiplier : undefined

  emit('apply', {
    ...(hitzone !== undefined ? { hitzone } : {}),
    ...(elementHitzone !== undefined ? { elementHitzone } : {}),
    ...(targetDamage !== undefined ? { targetDamage } : {}),
    overallDefenseRate: defenseMultiplier,
  })
}

watch(
  () => selectedMonsterName.value,
  () => {
    selectedQuestName.value = ''
    selectedVariantName.value = getDefaultVariantName(selectedMonster.value)
    selectedHitzonePartName.value = getDefaultHitZonePartName(
      selectedMonster.value,
      selectedVariantName.value
    )
    selectedDurabilityPartKey.value = getDefaultDurabilityPartKey(selectedMonster.value)
  }
)

watch(
  () => selectedQuest.value,
  quest => {
    if (!quest) return
    templateFlinchMultiplier.value = quest.flinch
    templateDefenseMultiplier.value = quest.defense
    templateStunMultiplier.value = quest.stun
    templateFatigueMultiplier.value = quest.fatigue
  },
  { immediate: true }
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
  <div>
    <button
      type="button"
      class="mp-label mp-muted cursor-pointer select-none bg-transparent border-none p-0 text-left"
      @click="expanded = !expanded"
    >
      {{ expanded ? '▼' : '▶' }} 目標テンプレート
    </button>
    <div v-show="expanded">
      <div class="mt-3 flex flex-wrap items-center gap-3">
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
      <div class="mt-3 flex flex-wrap items-center gap-3">
        <Select
          v-model="selectedQuestName"
          :options="questOptions"
          option-label="label"
          option-value="value"
          placeholder="クエスト"
          class="w-[28rem]"
          :disabled="!selectedMonsterName || questOptions.length === 0"
          show-clear
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
          <Button :disabled="!canApply" @click="apply">適用</Button>
        </div>
      </div>
    </div>
  </div>
</template>

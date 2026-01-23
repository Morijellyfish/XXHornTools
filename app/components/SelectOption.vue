<script setup lang="ts" generic="T extends string | number | boolean">
import { computed } from 'vue'

interface Option {
  value: T
  label: string
}

interface Props {
  label: string
  modelValue: T
  options?: Option[]
  wrap?: boolean
  rows?: Option[][]
}

const props = withDefaults(defineProps<Props>(), {
  options: () => [],
  wrap: false,
  rows: () => [],
})

const emit = defineEmits<{
  'update:modelValue': [value: T]
}>()

const updateValue = (value: T) => {
  emit('update:modelValue', value)
}

// 行に分かれる場合はrowsを使用、そうでなければoptionsを使用
const hasRows = computed(() => props.rows.length > 0)
</script>

<template>
  <div>
    <label class="text-xs text-gray-400 mb-1 block">{{ label }}</label>
    <div v-if="hasRows" class="space-y-2">
      <div
        v-for="(row, rowIndex) in rows"
        :key="rowIndex"
        class="flex gap-2"
        :class="{ 'flex-wrap': wrap }"
      >
        <UButton
          v-for="option in row"
          :key="String(option.value)"
          :variant="modelValue === option.value ? 'solid' : 'outline'"
          @click="updateValue(option.value)"
        >
          {{ option.label }}
        </UButton>
      </div>
    </div>
    <div v-else class="flex gap-2" :class="{ 'flex-wrap': wrap }">
      <UButton
        v-for="option in options"
        :key="String(option.value)"
        :variant="modelValue === option.value ? 'solid' : 'outline'"
        @click="updateValue(option.value)"
      >
        {{ option.label }}
      </UButton>
    </div>
  </div>
</template>

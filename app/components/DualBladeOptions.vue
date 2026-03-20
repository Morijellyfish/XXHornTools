<script setup lang="ts">
import { ref, computed } from 'vue'

interface Props {
  /**
   * 主属性の割合（0.0 = 副のみ 〜 1.0 = 主のみ）
   * 副属性の割合は 1 - modelValue
   */
  modelValue?: number
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: 0.5,
})

const emit = defineEmits<{
  'update:modelValue': [value: number]
}>()

const isExpanded = ref(false)

/** スライダー位置: 0 = 左（主100%）、1 = 右（副100%） */
const sliderPosition = computed({
  get: () => roundRatio(1 - props.modelValue),
  set: (v: number) => {
    const main = roundRatio(1 - v)
    emit('update:modelValue', main)
  },
})

const mainRatio = computed(() => roundRatio(props.modelValue))
const subRatio = computed(() => roundRatio(1 - props.modelValue))

function roundRatio(n: number): number {
  return Math.round(n * 10) / 10
}
</script>

<template>
  <div class="mb-0 mp-panel">
    <button
      type="button"
      class="w-full mp-pad-header flex items-center justify-between mp-hover-surface-2 transition-colors"
      @click="isExpanded = !isExpanded"
    >
      <div class="flex items-center gap-2">
        <span class="mp-label mp-text">双剣オプション</span>
      </div>
      <span class="mp-muted">
        {{ isExpanded ? '▼' : '▶' }}
      </span>
    </button>
    <div v-show="isExpanded" class="mp-pad-body space-y-4">
      <div class="space-y-3">
        <span class="mp-label mp-text block">属性の使用</span>
        <div class="flex flex-col gap-2 sm:flex-row sm:items-end sm:gap-4">
          <div class="flex shrink-0 flex-col items-center gap-0.5 sm:w-20">
            <span class="mp-body mp-muted">主属性</span>
            <span class="mp-body mp-text font-mono tabular-nums">{{ mainRatio.toFixed(1) }}</span>
          </div>
          <Slider
            v-model="sliderPosition"
            :min="0"
            :max="1"
            :step="0.1"
            class="w-full min-w-0 flex-1"
          />
          <div class="flex shrink-0 flex-col items-center gap-0.5 sm:w-20">
            <span class="mp-body mp-muted">副属性</span>
            <span class="mp-body mp-text font-mono tabular-nums">{{ subRatio.toFixed(1) }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

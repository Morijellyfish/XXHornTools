<script setup lang="ts">
import { computed } from 'vue'
import type { Note } from '~/types/notes'
import { NOTE_COLORS, getNoteBorderColor } from '~/types/notes'

interface Props {
  index: number
  name?: string
  effectDuration?: number
  extendDuration?: number
  timer?: number
  notes?: string
}

const props = withDefaults(defineProps<Props>(), {
  name: '',
  effectDuration: 180,
  extendDuration: 90,
  timer: 0,
  notes: '',
})

const emit = defineEmits<{
  'update:name': [value: string]
  'update:effectDuration': [value: number]
  'update:extendDuration': [value: number]
  'update:timer': [value: number]
  reset: []
}>()

const localName = computed({
  get: () => props.name,
  set: value => emit('update:name', value),
})

const localEffectDuration = computed({
  get: () => props.effectDuration,
  set: value => emit('update:effectDuration', value),
})

const localExtendDuration = computed({
  get: () => props.extendDuration,
  set: value => emit('update:extendDuration', value),
})

const isBlinking = computed(() => props.timer > 0 && props.timer <= 15)
const isInactive = computed(() => props.timer === 0)
const isActive = computed(() => props.timer > 15)

// ノートを配列に変換
const noteArray = computed(() => {
  if (!props.notes || !props.name) return []
  return props.notes.split('') as Note[]
})

const handleReset = () => {
  emit('update:timer', 0)
  emit('reset')
}
</script>

<template>
  <UCard
    :class="{
      'timer-blinking': isBlinking,
      'timer-inactive': isInactive,
      'timer-active': isActive,
    }"
    class="transition-all duration-200"
  >
    <div class="flex items-center gap-2 flex-wrap">
      <!-- インデックスと名称 -->
      <div class="flex items-center gap-2 shrink-0 min-w-[12rem]">
        <div class="flex items-center gap-1 w-10 shrink-0">
          <span class="text-sm font-medium text-gray-500 dark:text-gray-400 whitespace-nowrap"
            >[{{ index }}]</span
          >
        </div>
        <div class="flex items-center gap-2 flex-1 min-w-0">
          <UInput v-model="localName" placeholder="名称" class="w-full" />
        </div>
      </div>

      <!-- 効果時間と延長時間 -->
      <div class="flex items-center gap-2 shrink-0">
        <div class="flex items-center gap-1 shrink-0">
          <label class="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap"
            >効果時間:</label
          >
          <UInput v-model.number="localEffectDuration" type="number" :min="1" class="w-20" />
        </div>
        <div class="flex items-center gap-1 shrink-0">
          <label class="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap"
            >延長時間:</label
          >
          <UInput v-model.number="localExtendDuration" type="number" :min="1" class="w-20" />
        </div>
      </div>

      <!-- タイマー表示とリセットボタン -->
      <div class="flex items-center gap-2 shrink-0">
        <div class="flex items-center gap-2 shrink-0">
          <span
            class="text-xl font-bold tabular-nums min-w-[3rem] text-right"
            :class="{
              'text-yellow-500 dark:text-yellow-400': isBlinking,
            }"
          >
            {{ timer }}
          </span>
          <span class="text-sm text-gray-500 dark:text-gray-400">秒</span>
        </div>
        <UButton variant="outline" size="sm" @click="handleReset"> リセット </UButton>
      </div>

      <!-- ノート表示（常に同じサイズ） -->
      <div class="flex items-center gap-1 shrink-0 w-[5.5rem]">
        <span
          v-for="(note, noteIndex) in noteArray"
          :key="noteIndex"
          :title="note"
          class="inline-block w-5 h-5 rounded-full border-2 flex-shrink-0"
          :style="{
            background: NOTE_COLORS[note],
            borderColor: getNoteBorderColor(note),
          }"
        />
      </div>
    </div>
  </UCard>
</template>

<style scoped>
.timer-inactive {
  background-color: var(--color-gray-200) !important;
}

.dark .timer-inactive {
  background-color: var(--color-gray-950) !important;
}

.timer-active {
  background-color: var(--color-blue-50) !important;
}

.dark .timer-active {
  background-color: var(--color-blue-950) !important;
}

.timer-blinking {
  animation: blink-timer 1.2s ease-in-out infinite;
}

@keyframes blink-timer {
  0%,
  100% {
    background-color: var(--color-gray-50);
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  }

  50% {
    background-color: rgba(255, 251, 230, 0.55);
    box-shadow: 0 0 16px 4px rgba(255, 224, 102, 0.25);
  }
}

.dark .timer-blinking {
  animation: blink-timer-dark 1.2s ease-in-out infinite;
}

@keyframes blink-timer-dark {
  0%,
  100% {
    background-color: var(--color-gray-900);
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.3);
  }

  50% {
    background-color: rgba(191, 166, 0, 0.33);
    box-shadow: 0 0 16px 4px rgba(255, 224, 102, 0.13);
  }
}
</style>

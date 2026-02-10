<script setup lang="ts">
import { computed, onMounted, onUnmounted, watch, ref } from 'vue'
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

// フラッシュ状態をコンポーネント側で管理
const isFlashing = ref(false)

const emit = defineEmits<{
  'update:name': [value: string]
  'update:effectDuration': [value: number]
  'update:extendDuration': [value: number]
  'update:timer': [value: number]
  reset: []
  'extend-others': [extendDuration: number]
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
const isInactive = computed(() => props.timer === 0 && !isFlashing.value)
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

// タイマーを開始/延長する関数（外部からも呼び出し可能）
const addTime = () => {
  // 延長時のフィードバック用フラッシュ
  isFlashing.value = true
  setTimeout(() => {
    isFlashing.value = false
  }, 400)

  if (props.timer === 0) {
    // タイマーが0の場合は初回値を設定
    // effectDurationが0の場合は延長時間を設定（全旋律効果延長用）
    const initialDuration = props.effectDuration > 0 ? props.effectDuration : props.extendDuration
    if (initialDuration > 0) {
      emit('update:timer', initialDuration)
    }
  } else {
    // タイマーが動いている場合は延長時間を加算（上限はeffectDuration、ただし0の場合は延長時間を上限とする）
    const oldTimer = props.timer
    const maxDuration = props.effectDuration > 0 ? props.effectDuration : props.extendDuration
    const newTimer = Math.min(maxDuration, props.timer + props.extendDuration)

    // 延長できた場合はタイマーを更新
    if (newTimer > oldTimer) {
      emit('update:timer', newTimer)
    }
  }

  // 全旋律効果延長の場合は、他の旋律タイマーも延長
  if (props.name === '全旋律効果延長') {
    emit('extend-others', props.extendDuration)
  }
}

// 指定された延長時間でタイマーを延長する関数（全旋律効果延長用）
const addTimeByMelody = (extendDuration: number) => {
  // 音色が設定されていて発動中のタイマーのみ延長
  if (!props.notes?.trim() || props.timer === 0) {
    return
  }

  const newTimer = Math.min(props.effectDuration, props.timer + extendDuration)
  if (newTimer > props.timer) {
    emit('update:timer', newTimer)
  }

  // フィードバック用フラッシュ
  isFlashing.value = true
  setTimeout(() => {
    isFlashing.value = false
  }, 400)
}

// カードクリック時の処理
const handleCardClick = (event: MouseEvent) => {
  // 入力フィールド、ボタン、リンクなどのクリックは無視
  const target = event.target as HTMLElement
  if (
    target.tagName === 'INPUT' ||
    target.tagName === 'BUTTON' ||
    target.tagName === 'A' ||
    target.closest('input, button, a')
  ) {
    return
  }
  addTime()
}

// カウントダウン処理
let countdownInterval: ReturnType<typeof setInterval> | null = null

const startCountdown = () => {
  if (countdownInterval) return // 既に開始されている場合は何もしない

  countdownInterval = setInterval(() => {
    if (props.timer > 0) {
      emit('update:timer', props.timer - 1)
    }
  }, 1000)
}

const stopCountdown = () => {
  if (countdownInterval) {
    clearInterval(countdownInterval)
    countdownInterval = null
  }
}

// タイマーが0になったらカウントダウンを停止
watch(
  () => props.timer,
  newTimer => {
    if (newTimer === 0) {
      stopCountdown()
    } else if (newTimer > 0 && !countdownInterval) {
      startCountdown()
    }
  }
)

onMounted(() => {
  // タイマーが既に動いている場合はカウントダウンを開始
  if (props.timer > 0) {
    startCountdown()
  }
})

onUnmounted(() => {
  stopCountdown()
})

// 外部から呼び出し可能にする
defineExpose({
  addTime,
  addTimeByMelody,
})
</script>

<template>
  <Card
    :class="{
      'timer-blinking': isBlinking,
      'timer-inactive': isInactive,
      'timer-active': isActive,
      'timer-flashing': isFlashing,
    }"
    class="transition-all duration-200 cursor-pointer"
    @click="handleCardClick"
  >
    <template #content>
      <div class="flex items-center gap-2 flex-wrap">
        <!-- インデックスと名称 -->
        <div class="flex items-center gap-2 shrink-0 min-w-[12rem]">
          <div class="flex items-center gap-1 w-10 shrink-0">
            <span class="text-sm font-medium text-gray-500 dark:text-gray-400 whitespace-nowrap"
              >[{{ index }}]</span
            >
          </div>
          <div class="flex items-center gap-2 flex-1 min-w-0">
            <InputText v-model="localName" placeholder="名称" class="w-full" />
          </div>
        </div>

        <!-- 効果時間と延長時間 -->
        <div class="flex items-center gap-2 shrink-0">
          <div class="flex items-center gap-1 shrink-0">
            <label class="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap"
              >効果時間:</label
            >
            <InputNumber
              v-model="localEffectDuration"
              :min="1"
              :use-grouping="false"
              :allow-empty="false"
              input-class="w-20"
            />
          </div>
          <div class="flex items-center gap-1 shrink-0">
            <label class="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap"
              >延長時間:</label
            >
            <InputNumber
              v-model="localExtendDuration"
              :min="1"
              :use-grouping="false"
              :allow-empty="false"
              input-class="w-20"
            />
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
          <Button outlined size="small" @click.stop="handleReset">リセット</Button>
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
    </template>
  </Card>
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

.timer-flashing {
  animation: flash-timer 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: center;
}

@keyframes flash-timer {
  0% {
    background-color: rgba(255, 251, 230, 0.9);
    box-shadow:
      0 0 20px 6px rgba(255, 224, 102, 0.45),
      0 0 36px 10px rgba(255, 224, 102, 0.25);
    transform: scale(1.015);
  }

  25% {
    background-color: rgba(255, 251, 230, 0.95);
    box-shadow:
      0 0 24px 8px rgba(255, 224, 102, 0.5),
      0 0 40px 12px rgba(255, 224, 102, 0.3);
    transform: scale(1.02);
  }

  50% {
    background-color: rgba(255, 251, 230, 0.7);
    box-shadow: 0 0 20px 6px rgba(255, 224, 102, 0.4);
    transform: scale(1.01);
  }

  100% {
    background-color: var(--color-gray-50);
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
    transform: scale(1);
  }
}

.dark .timer-flashing {
  animation: flash-timer-dark 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes flash-timer-dark {
  0% {
    background-color: rgba(191, 166, 0, 0.55);
    box-shadow:
      0 0 20px 6px rgba(255, 224, 102, 0.22),
      0 0 36px 10px rgba(255, 224, 102, 0.12);
    transform: scale(1.015);
  }

  25% {
    background-color: rgba(191, 166, 0, 0.6);
    box-shadow:
      0 0 24px 8px rgba(255, 224, 102, 0.25),
      0 0 40px 12px rgba(255, 224, 102, 0.15);
    transform: scale(1.02);
  }

  50% {
    background-color: rgba(191, 166, 0, 0.4);
    box-shadow: 0 0 20px 6px rgba(255, 224, 102, 0.2);
    transform: scale(1.01);
  }

  100% {
    background-color: var(--color-gray-900);
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.3);
    transform: scale(1);
  }
}
</style>

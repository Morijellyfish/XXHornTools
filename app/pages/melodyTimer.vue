<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import MelodyTimer from '~/components/MelodyTimer.vue'
import { melodyEffects } from '~/data/melodies'
import type { Note } from '~/types/notes'
import { NOTE_COLORS, getNoteBorderColor } from '~/types/notes'

useHead({
  title: '旋律タイマー - 狩りピTools',
})

interface TimerState {
  name: string
  effectDuration: number
  extendDuration: number
  timer: number
  notes?: string
  isFlashing?: boolean
}

const timers = ref<TimerState[]>(
  Array.from({ length: 10 }, () => ({
    name: '',
    effectDuration: 180,
    extendDuration: 90,
    timer: 0,
    notes: '',
    isFlashing: false,
  }))
)

// テンプレート選択
const selectedTemplate = ref<string>('')
const hasFuefukiSkill = ref(false)

// 利用可能なテンプレート一覧
const templateOptions = computed(() => {
  const keys = Object.keys(melodyEffects).sort()
  return keys.map(key => ({
    label: key,
    value: key,
  }))
})

// 選択されたテンプレートの音色（最初の3文字）
const selectedHornColors = computed(() => {
  if (!selectedTemplate.value) return []
  return selectedTemplate.value.split('').slice(0, 3) as Note[]
})

// テンプレート適用
const applyTemplate = () => {
  if (!selectedTemplate.value) return
  const template = melodyEffects[selectedTemplate.value]
  if (!template) return

  for (let i = 0; i < 10; i++) {
    const melody = template[i]
    if (melody) {
      updateTimer(i, {
        name: melody.name,
        effectDuration: hasFuefukiSkill.value
          ? melody.effectDurationWithSkill
          : melody.effectDuration,
        extendDuration: hasFuefukiSkill.value
          ? melody.extendDurationWithSkill
          : melody.extendDuration,
        notes: melody.notes,
        timer: 0,
        isFlashing: false,
      })
    } else {
      // テンプレートにない場合はデフォルト値にリセット
      updateTimer(i, {
        name: '',
        effectDuration: 180,
        extendDuration: 90,
        notes: '',
        timer: 0,
        isFlashing: false,
      })
    }
  }
}

const updateTimer = (index: number, updates: Partial<TimerState>) => {
  const current = timers.value[index]
  if (!current) return
  timers.value[index] = {
    name: updates.name ?? current.name,
    effectDuration: updates.effectDuration ?? current.effectDuration,
    extendDuration: updates.extendDuration ?? current.extendDuration,
    timer: updates.timer ?? current.timer,
    notes: updates.notes ?? current.notes,
    isFlashing: updates.isFlashing ?? current.isFlashing,
  }
}

// タイマーを開始/延長する関数
const addTime = (index: number) => {
  const timer = timers.value[index]
  if (!timer) return

  // 延長時のフィードバック用フラッシュ
  const triggerFlash = () => {
    updateTimer(index, { isFlashing: true })
    setTimeout(() => {
      updateTimer(index, { isFlashing: false })
    }, 400)
  }

  if (timer.timer === 0) {
    // タイマーが0の場合は初回値を設定
    if (timer.effectDuration > 0) {
      updateTimer(index, { timer: timer.effectDuration })
    }
    triggerFlash()
  } else {
    // タイマーが動いている場合は延長時間を加算（上限はeffectDuration）
    const oldTimer = timer.timer
    const newTimer = Math.min(timer.effectDuration, timer.timer + timer.extendDuration)

    // 延長できた場合はタイマーを更新
    if (newTimer > oldTimer) {
      updateTimer(index, { timer: newTimer })
    }

    // すべての場合でフィードバックを表示（延長できなくても光る）
    triggerFlash()
  }
}

// キーボード入力ハンドラー
const handleKeyDown = (e: KeyboardEvent) => {
  // 入力系要素がフォーカスされている場合は無視
  const active = document.activeElement
  if (
    active &&
    (active.tagName === 'INPUT' ||
      active.tagName === 'TEXTAREA' ||
      active.tagName === 'SELECT' ||
      (active as HTMLElement).isContentEditable)
  ) {
    return
  }

  // 0-9のキー入力を受け付ける
  if (!/^[0-9]$/.test(e.key)) return

  const key = Number(e.key)
  // 0キーは10番目のタイマー（index 9）、1-9は1-9番目のタイマー（index 0-8）
  const timerIndex = key === 0 ? 9 : key - 1
  addTime(timerIndex)
}

// カウントダウン処理
let countdownInterval: ReturnType<typeof setInterval> | null = null

const startCountdown = () => {
  countdownInterval = setInterval(() => {
    timers.value.forEach((timer, index) => {
      if (timer.timer > 0) {
        updateTimer(index, { timer: timer.timer - 1 })
      }
    })
  }, 1000)
}

const stopCountdown = () => {
  if (countdownInterval) {
    clearInterval(countdownInterval)
    countdownInterval = null
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeyDown)
  startCountdown()
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeyDown)
  stopCountdown()
})
</script>

<template>
  <div>
    <UPageHero
      title="旋律タイマー"
      description="モンスターハンターXXの狩猟笛のバフ管理に特化した、上限値・延長機能付きタイマー"
    />

    <UPageSection>
      <div class="space-y-4">
        <div class="mb-4 text-sm text-gray-500 dark:text-gray-400">
          ※各タイマーごとに「初回値」「延長値」を変更できます。
        </div>

        <!-- テンプレート選択UI -->
        <UCard class="template-select-card">
          <div class="space-y-4">
            <div class="flex flex-col sm:flex-row items-start sm:items-center gap-8">
              <div class="flex items-center gap-3">
                <label class="text-sm font-medium whitespace-nowrap">狩猟笛テンプレート:</label>
                <select
                  v-model="selectedTemplate"
                  class="w-32 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="">--選択--</option>
                  <option
                    v-for="option in templateOptions"
                    :key="option.value"
                    :value="option.value"
                  >
                    {{ option.label }}
                  </option>
                </select>
              </div>

              <div class="flex items-center gap-3">
                <div class="flex items-center gap-2">
                  <UCheckbox v-model="hasFuefukiSkill" />
                  <label
                    class="text-sm font-medium cursor-pointer"
                    @click="hasFuefukiSkill = !hasFuefukiSkill"
                  >
                    笛吹き名人
                  </label>
                </div>

                <UButton :disabled="!selectedTemplate" @click="applyTemplate"> 適用 </UButton>
              </div>
            </div>

            <!-- 音色表示 -->
            <div
              class="flex items-center gap-3 pt-2 border-t border-gray-200 dark:border-gray-700 h-[3rem]"
            >
              <span class="text-sm font-medium">音色:</span>
              <div class="flex items-center gap-2 w-[6.25rem] h-7">
                <span
                  v-for="(color, index) in selectedHornColors"
                  :key="index"
                  :title="color"
                  class="inline-block w-7 h-7 rounded-full border-2 flex-shrink-0"
                  :style="{
                    background: NOTE_COLORS[color],
                    borderColor: getNoteBorderColor(color),
                  }"
                />
              </div>
            </div>
          </div>
        </UCard>

        <div class="space-y-3">
          <MelodyTimer
            v-for="(timer, index) in timers"
            :key="index"
            :index="index + 1"
            :name="timer.name"
            :effect-duration="timer.effectDuration"
            :extend-duration="timer.extendDuration"
            :timer="timer.timer"
            :notes="timer.notes"
            :is-flashing="timer.isFlashing ?? false"
            @update:name="value => updateTimer(index, { name: value })"
            @update:effect-duration="value => updateTimer(index, { effectDuration: value })"
            @update:extend-duration="value => updateTimer(index, { extendDuration: value })"
            @update:timer="value => updateTimer(index, { timer: value })"
            @reset="updateTimer(index, { timer: 0 })"
            @extend="addTime(index)"
          />
        </div>
      </div>
    </UPageSection>
  </div>
</template>

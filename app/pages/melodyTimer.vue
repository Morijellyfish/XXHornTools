<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import MelodyTimer from '~/components/MelodyTimer.vue'
import { melodyEffects } from '~/data/melodies'
import type { Note } from '~/types/notes'
import { NOTE_COLORS, getNoteBorderColor } from '~/types/notes'
import Select from 'primevue/select'

useHead({
  title: '旋律タイマー - 狩りピTools',
})

interface TimerState {
  name: string
  effectDuration: number
  extendDuration: number
  timer: number
  notes?: string
}

const timers = ref<TimerState[]>(
  Array.from({ length: 10 }, () => ({
    name: '',
    effectDuration: 180,
    extendDuration: 90,
    timer: 0,
    notes: '',
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
      })
    } else {
      // テンプレートにない場合はデフォルト値にリセット
      updateTimer(i, {
        name: '',
        effectDuration: 180,
        extendDuration: 90,
        notes: '',
        timer: 0,
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
  }
}

// 他の旋律タイマーを延長する関数（全旋律効果延長用）
const extendOtherMelodyTimers = (sourceIndex: number, extendDuration: number) => {
  timerRefs.value.forEach((ref, index) => {
    if (index === sourceIndex || !ref) return
    ref.addTimeByMelody(extendDuration)
  })
}

// コンポーネントのrefを保持
type TimerRef = { addTime: () => void; addTimeByMelody: (extendDuration: number) => void } | null
const timerRefs = ref<TimerRef[]>(Array.from({ length: 10 }, () => null))

// キーボード入力でタイマーを開始/延長する関数
const addTimeByKey = (index: number) => {
  const timerRef = timerRefs.value[index]
  if (timerRef) {
    timerRef.addTime()
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
  addTimeByKey(timerIndex)
}

onMounted(() => {
  document.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeyDown)
})
</script>

<template>
  <div>
    <section class="py-10">
      <div class="max-w-6xl mx-auto px-4">
        <h1 class="text-3xl font-bold text-[var(--mainpalette-text)]">旋律タイマー</h1>
        <p class="mt-2 text-sm text-[var(--mainpalette-text-muted)]">
          モンスターハンターXXの狩猟笛のバフ管理に特化した、上限値・延長機能付きタイマー
        </p>
      </div>
    </section>

    <section class="pb-12">
      <div class="max-w-6xl mx-auto px-4">
        <div class="space-y-4">
          <div class="mb-4 text-sm text-[var(--mainpalette-text-muted)]">
            ※各タイマーごとに「初回値」「延長値」を変更できます。
          </div>

          <!-- テンプレート選択UI -->
          <Card class="template-select-card">
            <template #content>
              <div class="space-y-4">
                <div class="flex flex-col sm:flex-row items-start sm:items-center gap-8">
                  <div class="flex items-center gap-3">
                    <label class="text-sm font-medium whitespace-nowrap">狩猟笛テンプレート:</label>
                    <Select
                      v-model="selectedTemplate"
                      :options="templateOptions"
                      option-label="label"
                      option-value="value"
                      placeholder="--選択--"
                      class="w-32"
                      :pt="{
                        overlay: {
                          style:
                            'background: var(--mainpalette-surface-1); border: 1px solid var(--mainpalette-border);',
                        },
                      }"
                    />
                  </div>

                  <div class="flex items-center gap-3">
                    <div class="flex items-center gap-2">
                      <Checkbox v-model="hasFuefukiSkill" binary />
                      <label
                        class="text-sm font-medium cursor-pointer"
                        @click="hasFuefukiSkill = !hasFuefukiSkill"
                      >
                        笛吹き名人
                      </label>
                    </div>

                    <Button :disabled="!selectedTemplate" @click="applyTemplate">適用</Button>
                  </div>
                </div>

                <!-- 音色表示 -->
                <div
                  class="flex items-center gap-3 pt-2 border-t border-[var(--mainpalette-border)] h-[3rem]"
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
            </template>
          </Card>

          <div class="space-y-3">
            <MelodyTimer
              v-for="(timer, index) in timers"
              :key="index"
              :ref="
                el => {
                  if (el) timerRefs[index] = el as unknown as TimerRef
                }
              "
              :index="index + 1"
              :name="timer.name"
              :effect-duration="timer.effectDuration"
              :extend-duration="timer.extendDuration"
              :timer="timer.timer"
              :notes="timer.notes"
              @update:name="value => updateTimer(index, { name: value })"
              @update:effect-duration="value => updateTimer(index, { effectDuration: value })"
              @update:extend-duration="value => updateTimer(index, { extendDuration: value })"
              @update:timer="value => updateTimer(index, { timer: value })"
              @reset="updateTimer(index, { timer: 0 })"
              @extend-others="
                (extendDuration: number) => extendOtherMelodyTimers(index, extendDuration)
              "
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

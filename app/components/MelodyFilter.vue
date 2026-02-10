<script setup lang="ts">
import { ref, computed } from 'vue'
import { getMelodyCategory, melodyCategoryMap } from '~/data/melodies'
import type { MelodyCategory } from '~/types/melody'

interface Props {
  melodyNames: string[]
  modelValue: Set<string>
}

const props = defineProps<Props>()

const emit = defineEmits<{
  'update:modelValue': [value: Set<string>]
}>()

const isFilterExpanded = ref(false)

// カテゴリの順序
const categoryOrder: MelodyCategory[] = [
  '属性耐性',
  '体力',
  '状態異常耐性',
  '妨害耐性',
  'ステータス増加',
  'その他',
]

// カテゴリごとに旋律をグループ化
const melodiesByCategory = computed(() => {
  const grouped: Record<MelodyCategory, string[]> = {
    属性耐性: [],
    体力: [],
    状態異常耐性: [],
    妨害耐性: [],
    ステータス増加: [],
    その他: [],
  }

  for (const melodyName of props.melodyNames) {
    const category = getMelodyCategory(melodyName)
    grouped[category].push(melodyName)
  }

  // 各カテゴリ内で順序付け
  for (const category of categoryOrder) {
    const order = melodyCategoryMap[category]
    if (order.length > 0) {
      // 定義された順序に従ってソート
      grouped[category].sort((a, b) => {
        const indexA = order.indexOf(a)
        const indexB = order.indexOf(b)
        // 順序に定義されていないものは後ろに
        if (indexA === -1 && indexB === -1) return a.localeCompare(b)
        if (indexA === -1) return 1
        if (indexB === -1) return -1
        return indexA - indexB
      })
    } else {
      // 順序が定義されていない場合は通常のソート
      grouped[category].sort()
    }
  }

  return grouped
})

// カテゴリの展開状態を管理
const expandedCategories = ref<Set<MelodyCategory>>(new Set(categoryOrder))

// カテゴリの展開/折りたたみ
const toggleCategory = (category: MelodyCategory) => {
  if (expandedCategories.value.has(category)) {
    expandedCategories.value.delete(category)
  } else {
    expandedCategories.value.add(category)
  }
  expandedCategories.value = new Set(expandedCategories.value)
}

// 旋律フィルターのトグル関数
const toggleMelodyFilter = (melodyName: string) => {
  const newSet = new Set(props.modelValue)
  if (newSet.has(melodyName)) {
    newSet.delete(melodyName)
  } else {
    newSet.add(melodyName)
  }
  emit('update:modelValue', newSet)
}

// クリア関数
const clearFilter = () => {
  emit('update:modelValue', new Set())
}
</script>

<template>
  <div class="mb-0 bg-[var(--mh-surface-1)] rounded-lg border border-[var(--mh-border)]">
    <button
      type="button"
      class="w-full p-4 flex items-center justify-between hover:bg-[var(--mh-surface-2)] transition-colors"
      @click="isFilterExpanded = !isFilterExpanded"
    >
      <div class="flex items-center gap-2">
        <span class="text-sm font-medium">旋律フィルター</span>
        <span
          v-if="modelValue.size > 0"
          class="px-2 py-0.5 text-xs bg-[var(--mh-primary)] text-[var(--mh-surface-1)] rounded-full"
        >
          {{ modelValue.size }}件選択中
        </span>
      </div>
      <span class="text-[var(--mh-text-muted)]">
        {{ isFilterExpanded ? '▼' : '▶' }}
      </span>
    </button>
    <div v-show="isFilterExpanded" class="px-4 pb-4 space-y-4">
      <div
        v-for="category in categoryOrder"
        :key="category"
        class="border-b border-[var(--mh-border)] last:border-b-0 pb-3 last:pb-0"
      >
        <button
          type="button"
          class="w-full flex items-center justify-between mb-2 text-sm font-medium text-[var(--mh-text)] hover:text-[var(--mh-text)]"
          @click="toggleCategory(category)"
        >
          <span>{{ category }}</span>
          <span class="text-[var(--mh-text-muted)]">
            {{ expandedCategories.has(category) ? '▼' : '▶' }}
          </span>
        </button>
        <div v-show="expandedCategories.has(category)" class="flex flex-wrap gap-2">
          <button
            v-for="melodyName in melodiesByCategory[category]"
            :key="melodyName"
            type="button"
            class="px-3 py-1 text-sm rounded border transition-colors"
            :class="
              modelValue.has(melodyName)
                ? 'bg-[var(--mh-primary)] text-[var(--mh-surface-1)] border-[var(--mh-primary)]'
                : 'bg-[var(--mh-surface-1)] text-[var(--mh-text-muted)] border-[var(--mh-border)] hover:bg-[var(--mh-surface-2)] hover:text-[var(--mh-text)]'
            "
            @click="toggleMelodyFilter(melodyName)"
          >
            {{ melodyName }}
          </button>
        </div>
      </div>
      <div v-if="modelValue.size > 0" class="mt-3 text-sm text-[var(--mh-text-muted)]">
        <button
          type="button"
          class="text-[var(--mh-primary)] hover:text-[var(--mh-accent-2)] underline"
          @click="clearFilter"
        >
          クリア
        </button>
      </div>
    </div>
  </div>
</template>

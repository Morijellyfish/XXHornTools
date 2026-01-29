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
  tableOptions: TableBaseOption
}

const props = defineProps<Props>()

// 会心補正を計算
const criticalBonus = computed(() => calculateCriticalBonus(props.tableOptions))

// 攻撃力加算バフの合計を計算
const totalAttackAdd = computed(() => calculateTotalAttackAdd(props.tableOptions))

// 攻撃力倍率（乗算バフ）の合計を計算
const totalAttackMultiply = computed(() => calculateTotalAttackMultiply(props.tableOptions))

// 発動スキルのリストを取得
const activeSkills = computed(() => getActiveSkills(props.tableOptions))
</script>

<template>
  <div class="mb-0 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
    <div class="flex flex-wrap gap-4 text-sm">
      <div>
        <span class="text-gray-600 dark:text-gray-400">攻撃力加算:</span>
        <span
          class="font-mono font-bold ml-2"
          :class="totalAttackAdd > 0 ? 'text-green-600 dark:text-green-400' : 'text-gray-400'"
        >
          {{ totalAttackAdd > 0 ? `+${totalAttackAdd}` : '0' }}
        </span>
      </div>
      <div>
        <span class="text-gray-600 dark:text-gray-400">攻撃力倍率:</span>
        <span
          class="font-mono font-bold ml-2"
          :class="
            totalAttackMultiply !== 1.0 ? 'text-green-600 dark:text-green-400' : 'text-gray-400'
          "
        >
          x{{ totalAttackMultiply.toFixed(2) }}
        </span>
      </div>
      <div>
        <span class="text-gray-600 dark:text-gray-400">会心率追加:</span>
        <span
          class="font-mono font-bold ml-2"
          :class="criticalBonus > 0 ? 'text-green-600 dark:text-green-400' : 'text-gray-400'"
        >
          {{ criticalBonus > 0 ? `+${criticalBonus}%` : '0%' }}
        </span>
      </div>
    </div>
    <div class="mt-3 text-sm">
      <span class="text-gray-600 dark:text-gray-400">発動スキル:</span>
      <span v-if="activeSkills.length === 0" class="ml-2 text-gray-400">なし</span>
      <span v-else class="ml-2 text-gray-800 dark:text-gray-200">
        {{ activeSkills.join('、') }}
      </span>
    </div>
  </div>
</template>

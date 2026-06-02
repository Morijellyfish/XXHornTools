<script setup lang="ts">
import type { Quest } from '~/types/quest/quest'

defineProps<{
  quests: Quest[]
}>()
</script>

<template>
  <div>
    <h2 class="mp-section-title mp-text mb-3">クエスト一覧</h2>
    <div class="mp-panel overflow-hidden">
      <div class="overflow-x-auto">
        <table class="weapon-table w-full min-w-[60rem] table-fixed text-sm">
          <colgroup>
            <col class="w-[30%]" />
            <col class="w-[10%]" />
            <col class="w-[10%]" />
            <col class="w-[10%]" />
            <col class="w-[10%]" />
            <col class="w-[10%]" />
            <col class="w-[10%]" />
            <col class="w-[10%]" />
          </colgroup>
          <thead>
            <tr>
              <th class="text-left p-2 whitespace-nowrap">クエスト</th>
              <th class="text-right p-2 whitespace-nowrap">HP</th>
              <th class="text-right p-2 whitespace-nowrap">怯み</th>
              <th class="text-right p-2 whitespace-nowrap">攻撃</th>
              <th class="text-right p-2 whitespace-nowrap">防御</th>
              <th class="text-right p-2 whitespace-nowrap">気絶</th>
              <th class="text-right p-2 whitespace-nowrap">疲れ</th>
              <th class="text-right p-2 whitespace-nowrap">乗り</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="quest in quests" :key="quest.name">
              <td class="p-2 truncate whitespace-nowrap">{{ quest.name }}</td>
              <td class="text-right p-2 tabular-nums">{{ quest.health }}</td>
              <td class="text-right p-2 tabular-nums">{{ quest.flinch }}</td>
              <td class="text-right p-2 tabular-nums">{{ quest.attack }}</td>
              <td class="text-right p-2 tabular-nums">{{ quest.defense }}</td>
              <td class="text-right p-2 tabular-nums">{{ quest.stun }}</td>
              <td class="text-right p-2 tabular-nums">{{ quest.fatigue }}</td>
              <td class="text-right p-2 tabular-nums">{{ quest.mount }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

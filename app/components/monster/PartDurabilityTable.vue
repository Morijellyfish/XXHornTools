<script setup lang="ts">
import { computed } from 'vue'
import type { PartDurability } from '~/types/monster/partDurability'

const props = defineProps<{
  parts: PartDurability[]
}>()

const hasPreBreak = computed(() => props.parts.some(part => part.durabilityPreBreak !== undefined))
const hasFrenzied = computed(() => props.parts.some(part => part.durabilityFrenzied !== undefined))
const hasFrenziedPreBreak = computed(() =>
  props.parts.some(part => part.durabilityFrenziedPreBreak !== undefined)
)

function formatOptional(value: number | undefined): string {
  return value === undefined ? '-' : String(value)
}
</script>

<template>
  <div>
    <h2 class="mp-section-title mp-text mb-3">部位耐久</h2>
    <div class="mp-panel overflow-hidden">
      <div class="overflow-x-auto">
        <table class="weapon-table w-full min-w-[28rem] table-fixed text-sm">
          <colgroup>
            <col class="w-[26%]" />
            <col class="w-[18%]" />
            <col v-if="hasPreBreak" class="w-[18%]" />
            <col v-if="hasFrenzied" class="w-[18%]" />
            <col v-if="hasFrenziedPreBreak" class="w-[20%]" />
          </colgroup>
          <thead>
            <tr>
              <th class="text-left p-2 whitespace-nowrap">部位</th>
              <th class="text-right p-2 whitespace-nowrap">耐久</th>
              <th v-if="hasPreBreak" class="text-right p-2 whitespace-nowrap">破壊前</th>
              <th v-if="hasFrenzied" class="text-right p-2 whitespace-nowrap">獰猛化</th>
              <th v-if="hasFrenziedPreBreak" class="text-right p-2 whitespace-nowrap">
                獰猛化・破壊前
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="part in parts" :key="part.name">
              <td class="p-2 whitespace-nowrap">{{ part.name }}</td>
              <td class="text-right p-2 tabular-nums">{{ part.durability }}</td>
              <td v-if="hasPreBreak" class="text-right p-2 tabular-nums">
                {{ formatOptional(part.durabilityPreBreak) }}
              </td>
              <td v-if="hasFrenzied" class="text-right p-2 tabular-nums">
                {{ formatOptional(part.durabilityFrenzied) }}
              </td>
              <td v-if="hasFrenziedPreBreak" class="text-right p-2 tabular-nums">
                {{ formatOptional(part.durabilityFrenziedPreBreak) }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

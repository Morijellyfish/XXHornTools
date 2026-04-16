<script setup lang="ts">
import type { HitZoneVariant } from '~/types/monster/hitZone'

defineProps<{
  variant: HitZoneVariant
}>()

const MELLEE_THRESHOLD = 45
const ELEMENT_THRESHOLD = 20

function isWeakMellee(value: number): boolean {
  return value >= MELLEE_THRESHOLD
}

function isWeakElement(value: number): boolean {
  return value >= ELEMENT_THRESHOLD
}
</script>

<template>
  <div>
    <h3 class="mp-section-title mp-text mb-3">{{ variant.name }}</h3>
    <div class="mp-panel overflow-hidden">
      <div class="overflow-x-auto">
        <table class="weapon-table w-full text-sm">
          <thead>
            <tr>
              <th class="text-left p-2 whitespace-nowrap">部位</th>
              <th class="text-right p-2 whitespace-nowrap">切</th>
              <th class="text-right p-2 whitespace-nowrap">打</th>
              <th class="text-right p-2 whitespace-nowrap">弾</th>
              <th class="text-right p-2 whitespace-nowrap">火</th>
              <th class="text-right p-2 whitespace-nowrap">水</th>
              <th class="text-right p-2 whitespace-nowrap">雷</th>
              <th class="text-right p-2 whitespace-nowrap">氷</th>
              <th class="text-right p-2 whitespace-nowrap">龍</th>
              <th class="text-right p-2 whitespace-nowrap">気絶</th>
              <th class="text-right p-2 whitespace-nowrap">減</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="hz in variant.hitZones" :key="hz.name">
              <td class="p-2 whitespace-nowrap">{{ hz.name }}</td>
              <td
                class="text-right p-2 tabular-nums"
                :class="{ 'text-orange-400 font-semibold': isWeakMellee(hz.mellee.slash) }"
              >
                {{ hz.mellee.slash }}
              </td>
              <td
                class="text-right p-2 tabular-nums"
                :class="{ 'text-orange-400 font-semibold': isWeakMellee(hz.mellee.impact) }"
              >
                {{ hz.mellee.impact }}
              </td>
              <td
                class="text-right p-2 tabular-nums"
                :class="{ 'text-orange-400 font-semibold': isWeakMellee(hz.mellee.shot) }"
              >
                {{ hz.mellee.shot }}
              </td>
              <td
                class="text-right p-2 tabular-nums"
                :class="{ 'text-orange-400 font-semibold': isWeakElement(hz.element.火) }"
              >
                {{ hz.element.火 }}
              </td>
              <td
                class="text-right p-2 tabular-nums"
                :class="{ 'text-orange-400 font-semibold': isWeakElement(hz.element.水) }"
              >
                {{ hz.element.水 }}
              </td>
              <td
                class="text-right p-2 tabular-nums"
                :class="{ 'text-orange-400 font-semibold': isWeakElement(hz.element.雷) }"
              >
                {{ hz.element.雷 }}
              </td>
              <td
                class="text-right p-2 tabular-nums"
                :class="{ 'text-orange-400 font-semibold': isWeakElement(hz.element.氷) }"
              >
                {{ hz.element.氷 }}
              </td>
              <td
                class="text-right p-2 tabular-nums"
                :class="{ 'text-orange-400 font-semibold': isWeakElement(hz.element.龍) }"
              >
                {{ hz.element.龍 }}
              </td>
              <td class="text-right p-2 tabular-nums">{{ hz.stun }}</td>
              <td class="text-right p-2 tabular-nums">{{ hz.exhaust }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

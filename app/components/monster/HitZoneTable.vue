<script setup lang="ts">
import type { ElementType, MelleeType } from '~/types/attackType'
import type { HitZoneVariant } from '~/types/monster/hitZone'

const props = defineProps<{
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

function hasMelleeWeakness(type: MelleeType): boolean {
  return props.variant.hitZones.some(hz => hz.mellee[type] >= MELLEE_THRESHOLD)
}

function isElementAllZero(element: ElementType): boolean {
  return props.variant.hitZones.every(hz => hz.element[element] === 0)
}

function warningHeaderClass(warn: boolean): string {
  return warn ? 'text-yellow-300 font-semibold' : ''
}

function hitZoneValueClass(value: number, weak = false): string {
  if (value === 0) return 'text-white/25'
  return weak ? 'text-orange-400 font-semibold' : ''
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
              <th
                class="text-right p-2 whitespace-nowrap"
                :class="warningHeaderClass(!hasMelleeWeakness('slash'))"
              >
                切
              </th>
              <th
                class="text-right p-2 whitespace-nowrap"
                :class="warningHeaderClass(!hasMelleeWeakness('impact'))"
              >
                打
              </th>
              <th
                class="text-right p-2 whitespace-nowrap"
                :class="warningHeaderClass(!hasMelleeWeakness('shot'))"
              >
                弾
              </th>
              <th
                class="text-right p-2 whitespace-nowrap"
                :class="warningHeaderClass(isElementAllZero('火'))"
              >
                火
              </th>
              <th
                class="text-right p-2 whitespace-nowrap"
                :class="warningHeaderClass(isElementAllZero('水'))"
              >
                水
              </th>
              <th
                class="text-right p-2 whitespace-nowrap"
                :class="warningHeaderClass(isElementAllZero('雷'))"
              >
                雷
              </th>
              <th
                class="text-right p-2 whitespace-nowrap"
                :class="warningHeaderClass(isElementAllZero('氷'))"
              >
                氷
              </th>
              <th
                class="text-right p-2 whitespace-nowrap"
                :class="warningHeaderClass(isElementAllZero('龍'))"
              >
                龍
              </th>
              <th class="text-right p-2 whitespace-nowrap">気絶</th>
              <th class="text-right p-2 whitespace-nowrap">減</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="hz in variant.hitZones" :key="hz.name">
              <td class="p-2 whitespace-nowrap">{{ hz.name }}</td>
              <td
                class="text-right p-2 tabular-nums"
                :class="hitZoneValueClass(hz.mellee.slash, isWeakMellee(hz.mellee.slash))"
              >
                {{ hz.mellee.slash }}
              </td>
              <td
                class="text-right p-2 tabular-nums"
                :class="hitZoneValueClass(hz.mellee.impact, isWeakMellee(hz.mellee.impact))"
              >
                {{ hz.mellee.impact }}
              </td>
              <td
                class="text-right p-2 tabular-nums"
                :class="hitZoneValueClass(hz.mellee.shot, isWeakMellee(hz.mellee.shot))"
              >
                {{ hz.mellee.shot }}
              </td>
              <td
                class="text-right p-2 tabular-nums"
                :class="hitZoneValueClass(hz.element.火, isWeakElement(hz.element.火))"
              >
                {{ hz.element.火 }}
              </td>
              <td
                class="text-right p-2 tabular-nums"
                :class="hitZoneValueClass(hz.element.水, isWeakElement(hz.element.水))"
              >
                {{ hz.element.水 }}
              </td>
              <td
                class="text-right p-2 tabular-nums"
                :class="hitZoneValueClass(hz.element.雷, isWeakElement(hz.element.雷))"
              >
                {{ hz.element.雷 }}
              </td>
              <td
                class="text-right p-2 tabular-nums"
                :class="hitZoneValueClass(hz.element.氷, isWeakElement(hz.element.氷))"
              >
                {{ hz.element.氷 }}
              </td>
              <td
                class="text-right p-2 tabular-nums"
                :class="hitZoneValueClass(hz.element.龍, isWeakElement(hz.element.龍))"
              >
                {{ hz.element.龍 }}
              </td>
              <td class="text-right p-2 tabular-nums" :class="hitZoneValueClass(hz.stun)">
                {{ hz.stun }}
              </td>
              <td class="text-right p-2 tabular-nums" :class="hitZoneValueClass(hz.exhaust)">
                {{ hz.exhaust }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

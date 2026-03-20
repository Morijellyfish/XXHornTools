import { ref, computed } from 'vue'
import type { WeaponMelee } from '~/types/weapons'
import type { TableBaseOption, SharpnessType } from '~/types/tableBaseOption'
import { getDefaultTargetDamageSettings } from '~/types/targetDamage'
import * as weaponMeleeStats from '~/utils/weaponMeleeStats'
import type { WeaponMeleeStatsContext } from '~/utils/weaponMeleeStats'

// SharpnessType を再エクスポート（後方互換性のため）
export type { SharpnessType }
export type SortKey =
  | 'requiredMotionValue'
  | 'expected'
  | 'attack'
  | 'defense'
  | 'slots'
  | 'affinity'
  | null
export type SortOrder = 'asc' | 'desc'

export interface UseWeaponTableProps<T extends WeaponMelee> extends TableBaseOption {
  weapons: T[]
}

export function useWeaponTable<T extends WeaponMelee>(props: UseWeaponTableProps<T>) {
  // ソート状態
  const sortKey = ref<SortKey>('requiredMotionValue')
  const sortOrder = ref<SortOrder>('asc')

  const context = computed<WeaponMeleeStatsContext>(() => ({
    buffs: props.buffs,
    selectedSharpness: props.selectedSharpness ?? 'normal',
    targetDamageSettings: props.targetDamageSettings,
    sharpnessMultiplier: props.sharpnessMultiplier ?? 1.0,
    dualBladeElementMainRatio: props.dualBladeElementMainRatio,
  }))

  const sortedWeapons = computed(() => {
    const ctx = context.value
    if (!sortKey.value) return props.weapons

    const sorted = [...props.weapons].sort((a, b) => {
      let aValue: number
      let bValue: number

      switch (sortKey.value) {
        case 'requiredMotionValue':
          aValue = weaponMeleeStats.getRequiredMotionValue(a, ctx)
          bValue = weaponMeleeStats.getRequiredMotionValue(b, ctx)
          break
        case 'expected':
          aValue = weaponMeleeStats.getExpectedValue(a, ctx)
          bValue = weaponMeleeStats.getExpectedValue(b, ctx)
          break
        case 'attack':
          aValue = a.attack
          bValue = b.attack
          break
        case 'defense':
          aValue = a.defense
          bValue = b.defense
          break
        case 'slots':
          aValue = a.slots
          bValue = b.slots
          break
        case 'affinity':
          aValue = a.affinity
          bValue = b.affinity
          break
        default:
          return 0
      }

      if (sortOrder.value === 'asc') {
        return aValue - bValue
      } else {
        return bValue - aValue
      }
    })

    return sorted
  })

  // ソート切り替え
  const toggleSort = (key: SortKey) => {
    if (sortKey.value === key) {
      // 同じカラムをクリックした場合は昇順/降順を切り替え
      sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc'
    } else {
      // 別のカラムをクリックした場合はそのカラムで昇順ソート
      sortKey.value = key
      sortOrder.value = 'asc'
    }
  }

  // ソートアイコン表示
  const getSortIcon = (key: SortKey): string => {
    if (sortKey.value !== key) return ''
    return sortOrder.value === 'asc' ? '↑' : '↓'
  }

  const getAttackCount = (): number => {
    const defaults = getDefaultTargetDamageSettings()
    return props.targetDamageSettings?.attackCount ?? defaults.attackCount
  }

  return {
    sortKey,
    sortOrder,
    sortedWeapons,
    toggleSort,
    getSortIcon,
    getAffinity: (weapon: T) => weaponMeleeStats.getAffinity(weapon, context.value),
    getExpectedValue: (weapon: T) => weaponMeleeStats.getExpectedValue(weapon, context.value),
    getPhysicalExpectedValue: (weapon: T) =>
      weaponMeleeStats.getPhysicalExpectedValue(weapon, context.value),
    getElementExpectedValue: (weapon: T) =>
      weaponMeleeStats.getElementExpectedValue(weapon, context.value),
    getSubElementExpectedValue: (weapon: T) =>
      weaponMeleeStats.getSubElementExpectedValue(weapon, context.value),
    getAttack: (weapon: T) => weaponMeleeStats.getAttack(weapon, context.value),
    getElement: (weapon: T) => weaponMeleeStats.getElement(weapon, context.value),
    isElementCapped: (weapon: T) => weaponMeleeStats.isElementCapped(weapon, context.value),
    getElementUncappedValue: (weapon: T) =>
      weaponMeleeStats.getElementUncappedValue(weapon, context.value),
    getRequiredMotionValue: (weapon: T) =>
      weaponMeleeStats.getRequiredMotionValue(weapon, context.value),
    getRequiredMotionValueElementInfo: (weapon: T) =>
      weaponMeleeStats.getRequiredMotionValueElementInfo(weapon, context.value),
    getElementDamage: (weapon: T) => weaponMeleeStats.getElementDamage(weapon, context.value),
    getElementDamageBreakdownLine: (weapon: T) =>
      weaponMeleeStats.getElementDamageDetail(weapon, context.value).breakdownLine,
    getAttackCount,
    isShowBaseAttack: (weapon: T) => weaponMeleeStats.isShowBaseAttack(weapon, context.value),
    isShowBaseAffinity: (weapon: T) => weaponMeleeStats.isShowBaseAffinity(weapon, context.value),
    isShowBaseElement: (weapon: T) => weaponMeleeStats.isShowBaseElement(weapon, context.value),
  }
}

<script setup lang="ts">
import { allHorns } from '~/data/horns'
import { melodyNames } from '~/data/melodies'
import { ref, computed } from 'vue'
import type { TableBaseOption } from '~/types/tableBaseOption'
import WeaponTableOptions from '~/components/WeaponTableOptions.vue'
import MelodyFilter from '~/components/MelodyFilter.vue'
import HornTable from '~/components/weaponsTable/HornTable.vue'

useHead({
  title: '狩猟笛比較表',
})

// TableBaseOption にすべてのオプションを集約
const tableOptions = ref<TableBaseOption>({
  selectedSharpness: 'normal',
  criticalBuffs: {
    criticalBonus: 0,
    hasCriticalBoost: false,
    hasMadAffinity: false,
  },
  attackModifiers: {
    powerCharm: false,
    powerTalon: false,
    preparedBuff: 'none',
    shortTermBuff: 'none',
    shortHypnosis: false,
    attackSkill: 'none',
    challengeSkill: 'none',
    hunterSkill: 'none',
    bludgeoner: false,
    resuscitate: false,
    resentment: false,
    adrenaline: 'none',
    fortify: 'none',
    dragonInstinct: false,
    attackMelody: 'none',
    attackMelodyMultiplier: 1.0,
  },
  sharpnessMultiplier: 1.0,
  hasWeaknessExploit: false,
  repeatOffensive: 'none',
  criticalEye: 0,
  criticalMelody: 'none',
  criticalMelodyBonus: 0,
  attackMelody: 'none',
  attackMelodyMultiplier: 1.0,
})

// フィルター: 旋律
const selectedMelodyNames = ref<Set<string>>(new Set())

// ハイライト: 旋律
const highlightedMelodyNames = ref<Set<string>>(new Set())

// 旋律名のハイライトをトグル
const toggleMelodyHighlight = (melodyName: string) => {
  if (highlightedMelodyNames.value.has(melodyName)) {
    highlightedMelodyNames.value.delete(melodyName)
  } else {
    highlightedMelodyNames.value.add(melodyName)
  }
  highlightedMelodyNames.value = new Set(highlightedMelodyNames.value)
}

// 会心率追加の合計を計算
const totalCriticalBonus = computed(() => {
  return (
    (tableOptions.value.criticalBuffs?.criticalBonus ?? 0) +
    (tableOptions.value.criticalMelodyBonus ?? 0)
  )
})

// フィルター済みの狩猟笛を計算
const filteredHorns = computed(() => {
  if (selectedMelodyNames.value.size === 0) {
    return allHorns
  }

  return allHorns.filter(horn => {
    const hornMelodyNames = horn.notes.getMelodyNames()
    // 選択された旋律のいずれかが含まれているかチェック
    return Array.from(selectedMelodyNames.value).some(selectedName =>
      hornMelodyNames.includes(selectedName)
    )
  })
})
</script>

<template>
  <div>
    <UPageHero title="狩猟笛比較表" description="モンスターハンターXXの狩猟笛のステータス比較表" />

    <UPageSection>
      <WeaponTableOptions v-model="tableOptions" :allow-horn-dependent-melody="true" />

      <!-- フィルター -->
      <MelodyFilter v-model="selectedMelodyNames" :melody-names="melodyNames" />

      <!-- バフ合計表示 -->
      <div class="mb-0 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <div class="flex flex-wrap gap-4 text-sm">
          <div>
            <span class="text-gray-600 dark:text-gray-400">攻撃力加算:</span>
            <span
              class="font-mono font-bold ml-2"
              :class="
                (tableOptions.totalAttackAdd ?? 0) > 0
                  ? 'text-green-600 dark:text-green-400'
                  : 'text-gray-400'
              "
            >
              {{ (tableOptions.totalAttackAdd ?? 0) > 0 ? `+${tableOptions.totalAttackAdd}` : '0' }}
            </span>
          </div>
          <div>
            <span class="text-gray-600 dark:text-gray-400">攻撃力倍率:</span>
            <span
              class="font-mono font-bold ml-2"
              :class="
                (tableOptions.totalAttackMultiply ?? 1.0) !== 1.0
                  ? 'text-green-600 dark:text-green-400'
                  : 'text-gray-400'
              "
            >
              x{{ (tableOptions.totalAttackMultiply ?? 1.0).toFixed(2) }}
            </span>
          </div>
          <div>
            <span class="text-gray-600 dark:text-gray-400">会心率追加:</span>
            <span
              class="font-mono font-bold ml-2"
              :class="
                totalCriticalBonus > 0 ? 'text-green-600 dark:text-green-400' : 'text-gray-400'
              "
            >
              {{ totalCriticalBonus > 0 ? `+${totalCriticalBonus}%` : '0%' }}
            </span>
          </div>
        </div>
        <div class="mt-3 text-sm">
          <span class="text-gray-600 dark:text-gray-400">発動スキル:</span>
          <span v-if="(tableOptions.activeSkills ?? []).length === 0" class="ml-2 text-gray-400"
            >なし</span
          >
          <span v-else class="ml-2 text-gray-800 dark:text-gray-200">
            {{ (tableOptions.activeSkills ?? []).join('、') }}
          </span>
        </div>
      </div>

      <HornTable
        :horns="filteredHorns"
        :selected-sharpness="tableOptions.selectedSharpness"
        :critical-buffs="tableOptions.criticalBuffs"
        :attack-modifiers="tableOptions.attackModifiers"
        :sharpness-multiplier="tableOptions.sharpnessMultiplier"
        :critical-melody="tableOptions.criticalMelody"
        :critical-melody-bonus="tableOptions.criticalMelodyBonus"
        :selected-melody-names="selectedMelodyNames"
        :highlighted-melody-names="highlightedMelodyNames"
        :on-melody-click="toggleMelodyHighlight"
      />
    </UPageSection>
  </div>
</template>

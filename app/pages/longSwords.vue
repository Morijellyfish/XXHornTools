<script setup lang="ts">
import { allLongSwords } from '~/data/longSword'
import { ref, computed } from 'vue'
import type { TableBaseOption } from '~/types/tableBaseOption'
import WeaponTableOptions from '~/components/WeaponTableOptions.vue'
import LongSwordTable from '~/components/weaponsTable/LongSwordTable.vue'

useHead({
  title: '太刀比較表',
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
    attackMelody: 0,
    attackMelodyMultiplier: 1.0,
  },
  sharpnessMultiplier: 1.0,
  hasWeaknessExploit: false,
  repeatOffensive: 'none',
  criticalEye: 0,
  criticalMelody: 0,
  criticalMelodyBonus: 0,
  attackMelody: 0,
  attackMelodyMultiplier: 1.0,
})

// 会心率追加の合計を計算
const totalCriticalBonus = computed(() => {
  return (
    (tableOptions.value.criticalBuffs?.criticalBonus ?? 0) +
    (tableOptions.value.criticalMelodyBonus ?? 0)
  )
})
</script>

<template>
  <div>
    <UPageHero title="太刀比較表" description="モンスターハンターXXの太刀のステータス比較表" />

    <UPageSection>
      <WeaponTableOptions v-model="tableOptions" />

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

      <LongSwordTable
        :long-swords="allLongSwords"
        :selected-sharpness="tableOptions.selectedSharpness"
        :critical-buffs="tableOptions.criticalBuffs"
        :attack-modifiers="tableOptions.attackModifiers"
        :sharpness-multiplier="tableOptions.sharpnessMultiplier"
        :attack-melody="tableOptions.attackMelody"
        :critical-melody="tableOptions.criticalMelody"
        :critical-melody-bonus="tableOptions.criticalMelodyBonus"
      />
    </UPageSection>
  </div>
</template>

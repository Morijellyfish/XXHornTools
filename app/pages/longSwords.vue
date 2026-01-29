<script setup lang="ts">
import { allLongSwords } from '~/data/longSword'
import { ref, computed } from 'vue'
import type { TableBaseOption } from '~/types/tableBaseOption'
import {
  getActiveSkills,
  calculateCriticalBonus,
  calculateTotalAttackAdd,
  calculateTotalAttackMultiply,
} from '~/types/tableBaseOption'
import { AttackMelody } from '~/types/attackBuff/attackBuff_H'
import { CriticalMelody } from '~/types/criticalBuff/criticalBuff_D'
import WeaponTableOptions from '~/components/WeaponTableOptions.vue'
import LongSwordTable from '~/components/weaponsTable/LongSwordTable.vue'

useHead({
  title: '太刀比較表',
})

// TableBaseOption にすべてのオプションを集約
const tableOptions = ref<TableBaseOption>({
  selectedSharpness: 'normal',
  criticalBuffs: {
    hasCriticalBoost: false,
    hasMadAffinity: false,
    hasWeaknessExploit: false,
    repeatOffensive: 'none',
    criticalEye: 0,
    criticalMelody: CriticalMelody.None,
    demonCriticalBullet: false,
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
    attackMelody: AttackMelody.None,
    attackMelodyMultiplier: 1.0,
  },
  sharpnessMultiplier: 1.0,
})

// 会心補正を計算
const calculateCriticalBonusComputed = computed(() => calculateCriticalBonus(tableOptions.value))

// criticalBuffsをそのまま使用
const criticalBuffs = computed(() => tableOptions.value.criticalBuffs)

// 攻撃力加算バフの合計を計算
const totalAttackAdd = computed(() => calculateTotalAttackAdd(tableOptions.value))

// 攻撃力倍率（乗算バフ）の合計を計算
const totalAttackMultiply = computed(() => calculateTotalAttackMultiply(tableOptions.value))

// 会心率追加の合計を計算
const totalCriticalBonus = computed(() => {
  return calculateCriticalBonusComputed.value
})

// 切れ味補正倍率を計算
const sharpnessMultiplier = computed(() => {
  const shortTermBuff = tableOptions.value.attackModifiers?.shortTermBuff
  return shortTermBuff === 'demonBullet' || shortTermBuff === 'demonCriticalBullet' ? 1.1 : 1.0
})

// 発動スキルのリストを取得
const activeSkills = computed(() => getActiveSkills(tableOptions.value))
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
          <span v-if="activeSkills.length === 0" class="ml-2 text-gray-400">なし</span>
          <span v-else class="ml-2 text-gray-800 dark:text-gray-200">
            {{ activeSkills.join('、') }}
          </span>
        </div>
      </div>

      <LongSwordTable
        :long-swords="allLongSwords"
        :selected-sharpness="tableOptions.selectedSharpness"
        :critical-buffs="criticalBuffs"
        :attack-modifiers="tableOptions.attackModifiers"
        :sharpness-multiplier="sharpnessMultiplier"
        :critical-melody="tableOptions.criticalBuffs?.criticalMelody"
      />
    </UPageSection>
  </div>
</template>

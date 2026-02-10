<script setup lang="ts">
import { allLongSwords } from '~/data/longSword'
import { ref, computed } from 'vue'
import type { TableBaseOption } from '~/types/tableBaseOption'
import { AttackMelody } from '~/types/attackBuff'
import { CriticalMelody, CriticalEye } from '~/types/criticalBuff'
import WeaponTableOptions from '~/components/WeaponTableOptions.vue'
import OptionMonitor from '~/components/OptionMonitor.vue'
import LongSwordTable from '~/components/weaponsTable/LongSwordTable.vue'

useHead({
  title: '太刀比較表 - 狩りピTools',
})

// TableBaseOption にすべてのオプションを集約
const tableOptions = ref<TableBaseOption>({
  selectedSharpness: 'normal',
  criticalBuffs: {
    hasCriticalBoost: false,
    hasMadAffinity: false,
    hasWeaknessExploit: false,
    repeatOffensive: 'none',
    criticalEye: CriticalEye.Zero,
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
  },
  sharpnessMultiplier: 1.0,
})

// criticalBuffsをそのまま使用
const criticalBuffs = computed(() => tableOptions.value.criticalBuffs)

// 切れ味補正倍率を計算
const sharpnessMultiplier = computed(() => {
  const shortTermBuff = tableOptions.value.attackModifiers?.shortTermBuff
  return shortTermBuff === 'demonBullet' || shortTermBuff === 'demonCriticalBullet' ? 1.1 : 1.0
})
</script>

<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <section class="mx-auto max-w-6xl py-10 sm:py-14">
      <h1 class="text-2xl sm:text-3xl font-semibold tracking-tight text-white">太刀比較表</h1>
      <p class="mt-3 text-sm sm:text-base text-gray-300">
        モンスターハンターXXの太刀のステータス比較表
      </p>
    </section>

    <section class="mx-auto max-w-6xl pb-10 sm:pb-14 space-y-6">
      <WeaponTableOptions v-model="tableOptions" />
      <!-- オプションモニター -->
      <OptionMonitor v-model="tableOptions" />

      <LongSwordTable
        :long-swords="allLongSwords"
        :selected-sharpness="tableOptions.selectedSharpness"
        :critical-buffs="criticalBuffs"
        :attack-modifiers="tableOptions.attackModifiers"
        :sharpness-multiplier="sharpnessMultiplier"
        :critical-melody="tableOptions.criticalBuffs?.criticalMelody"
        :target-damage-settings="tableOptions.targetDamageSettings"
      />
    </section>
  </div>
</template>

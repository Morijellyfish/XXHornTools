<script setup lang="ts">
import { allHorns } from '~/data/horns'
import { melodyNames } from '~/data/melodies'
import { ref, computed } from 'vue'
import type { TableBaseOption } from '~/types/tableBaseOption'
import { AttackMelody } from '~/types/attackBuff'
import { CriticalMelody, CriticalEye } from '~/types/criticalBuff'
import WeaponTableOptions from '~/components/WeaponTableOptions.vue'
import OptionMonitor from '~/components/OptionMonitor.vue'
import MelodyFilter from '~/components/MelodyFilter.vue'
import HornTable from '~/components/weaponsTable/HornTable.vue'

useHead({
  title: '狩猟笛比較表 - 狩りピTools',
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

// criticalBuffsをそのまま使用
const criticalBuffs = computed(() => tableOptions.value.criticalBuffs)

// 切れ味補正倍率を計算
const sharpnessMultiplier = computed(() => {
  const shortTermBuff = tableOptions.value.attackModifiers?.shortTermBuff
  return shortTermBuff === 'demonBullet' || shortTermBuff === 'demonCriticalBullet' ? 1.1 : 1.0
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
  <div class="px-4 sm:px-6 lg:px-8">
    <section class="mx-auto max-w-6xl py-10 sm:py-14">
      <h1 class="text-2xl sm:text-3xl font-semibold tracking-tight text-white">狩猟笛比較表</h1>
      <p class="mt-3 text-sm sm:text-base text-gray-300">
        モンスターハンターXXの狩猟笛のステータス比較表
      </p>
    </section>

    <section class="mx-auto max-w-6xl pb-10 sm:pb-14 space-y-6">
      <WeaponTableOptions v-model="tableOptions" :allow-horn-dependent-melody="true" />

      <!-- フィルター -->
      <MelodyFilter v-model="selectedMelodyNames" :melody-names="melodyNames" />
      <!-- オプションモニター -->
      <OptionMonitor v-model="tableOptions" />

      <HornTable
        :horns="filteredHorns"
        :selected-sharpness="tableOptions.selectedSharpness"
        :critical-buffs="criticalBuffs"
        :attack-modifiers="tableOptions.attackModifiers"
        :sharpness-multiplier="sharpnessMultiplier"
        :critical-melody="tableOptions.criticalBuffs?.criticalMelody"
        :target-damage-settings="tableOptions.targetDamageSettings"
        :selected-melody-names="selectedMelodyNames"
        :highlighted-melody-names="highlightedMelodyNames"
        :on-melody-click="toggleMelodyHighlight"
      />
    </section>
  </div>
</template>

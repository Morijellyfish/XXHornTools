<script setup lang="ts">
import { allLongSwords } from '~/data/longSword'
import { ref, computed } from 'vue'
import type { TableBaseOption } from '~/types/tableBaseOption'
import { getActiveSkills } from '~/types/tableBaseOption'
import { CriticalMelody, criticalBuffD } from '~/types/criticalBuff/criticalBuff_D'
import { getChallengeSkillAttackValue } from '~/types/challengeSkill'
import { AttackMelody } from '~/types/attackBuff/attackBuff_H'
import { criticalBuffA } from '~/types/criticalBuff/criticalBuff_A'
import { criticalBuffB } from '~/types/criticalBuff/criticalBuff_B'
import { criticalBuffC } from '~/types/criticalBuff/criticalBuff_C'
import { criticalBuffE } from '~/types/criticalBuff/criticalBuff_E'
import { criticalBuffF } from '~/types/criticalBuff/criticalBuff_F'
import type { ChallengeSkill } from '~/types/attackBuff/attackBuffs'
import {
  getPreparedBuffValue,
  getShortTermBuffValue,
  getAttackSkillValue,
  getAdrenalineMultiplier,
  getHunterSkillValue,
  getFortifyMultiplier,
} from '~/types/attackBuff/attackBuffs'
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

// 会心補正を計算（criticalBuffクラスを使用）
const calculateCriticalBonus = computed((): number => {
  const buffs = tableOptions.value.criticalBuffs
  let bonus = 0

  // 見切りの補正
  if (buffs?.criticalEye !== undefined) {
    bonus += new criticalBuffA(buffs.criticalEye).getValue()
  }

  // 弱点特攻の補正
  if (buffs?.hasWeaknessExploit !== undefined) {
    bonus += new criticalBuffB(buffs.hasWeaknessExploit).getValue()
  }

  // 連撃の補正
  if (buffs?.repeatOffensive) {
    bonus += new criticalBuffC(buffs.repeatOffensive).getValue()
  }

  // 挑戦者・フルチャージ・力の解放の補正
  const challengeSkill = (tableOptions.value.attackModifiers?.challengeSkill ??
    'none') as ChallengeSkill
  bonus += new criticalBuffE(challengeSkill).getValue()

  // 鬼人会心弾の補正
  if (buffs?.demonCriticalBullet !== undefined) {
    bonus += new criticalBuffF(buffs.demonCriticalBullet).getValue()
  }

  // 会心旋律の補正（固定値のみ、HornDependentは武器依存のため除外）
  if (buffs?.criticalMelody !== undefined) {
    const criticalMelody = buffs.criticalMelody
    if (criticalMelody !== CriticalMelody.HornDependent) {
      bonus += new criticalBuffD(criticalMelody).getValue()
    }
  }

  return bonus
})

// 攻撃旋律の倍率を計算（固定値の場合のみ）
const attackMelodyMultiplier = computed(() => {
  const attackMelody = tableOptions.value.attackModifiers?.attackMelody ?? AttackMelody.None
  switch (attackMelody) {
    case AttackMelody.Multiplier1_10:
      return 1.1
    case AttackMelody.Multiplier1_15:
      return 1.15
    case AttackMelody.Multiplier1_20:
      return 1.2
    default:
      return 1.0
  }
})

// criticalBuffsをそのまま使用
const criticalBuffs = computed(() => tableOptions.value.criticalBuffs)

// 攻撃力加算バフの合計を計算
const totalAttackAdd = computed(() => {
  const modifiers = tableOptions.value.attackModifiers ?? {}
  let total = 0
  if (modifiers.powerCharm) total += 6 // 力の護符
  if (modifiers.powerTalon) total += 9 // 力の爪
  if (modifiers.preparedBuff && modifiers.preparedBuff !== 'none') {
    total += getPreparedBuffValue(modifiers.preparedBuff)
  }
  if (modifiers.shortTermBuff && modifiers.shortTermBuff !== 'none') {
    total += getShortTermBuffValue(modifiers.shortTermBuff)
  }
  if (modifiers.shortHypnosis) total += 3 // 短期催眠術
  if (modifiers.attackSkill && modifiers.attackSkill !== 'none') {
    total += getAttackSkillValue(modifiers.attackSkill)
  }
  const challengeSkillValue = getChallengeSkillAttackValue(
    (modifiers.challengeSkill ?? 'none') as ChallengeSkill
  )
  if (challengeSkillValue > 0) {
    total += challengeSkillValue
  }
  if (modifiers.hunterSkill && modifiers.hunterSkill !== 'none') {
    total += getHunterSkillValue(modifiers.hunterSkill)
  }
  if (modifiers.resuscitate) total += 20 // 死中に活
  if (modifiers.resentment) total += 20 // 逆恨み
  return total
})

// 攻撃力倍率（乗算バフ）の合計を計算
const totalAttackMultiply = computed(() => {
  const modifiers = tableOptions.value.attackModifiers ?? {}
  let multiplier = 1.0
  if (modifiers.adrenaline && modifiers.adrenaline !== 'none') {
    multiplier *= getAdrenalineMultiplier(modifiers.adrenaline)
  }
  if (modifiers.fortify && modifiers.fortify !== 'none') {
    multiplier *= getFortifyMultiplier(modifiers.fortify)
  }
  if (modifiers.dragonInstinct) {
    multiplier *= 1.1 // 龍気活性
  }
  const attackMelody = modifiers.attackMelody ?? AttackMelody.None
  if (attackMelody !== AttackMelody.None && attackMelody !== AttackMelody.HornDependent) {
    multiplier *= attackMelodyMultiplier.value
  }
  return multiplier
})

// 会心率追加の合計を計算
const totalCriticalBonus = computed(() => {
  return calculateCriticalBonus.value
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

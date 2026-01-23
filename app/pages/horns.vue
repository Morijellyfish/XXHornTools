<script setup lang="ts">
import { allHorns } from '~/data/horns'
import { ref, computed } from 'vue'
import type {
  AttackSkill,
  AttackMelody,
  PreparedBuff,
  ShortTermBuff,
  ShortHypnosis,
  Adrenaline,
  ChallengeSkill,
  HunterSkill,
  Bludgeoner,
  Resuscitate,
  Resentment,
  Fortify,
  DragonInstinct,
} from '~/types/attackBuff/attackBuffs'
import {
  getPreparedBuffValue,
  getShortTermBuffValue,
  getAttackSkillValue,
  getAdrenalineMultiplier,
  getChallengeSkillValue,
  getHunterSkillValue,
  getFortifyMultiplier,
} from '~/types/attackBuff/attackBuffs'

useHead({
  title: '狩猟笛比較表',
})

// 事前準備
const powerCharm = ref(false) // 力の護符（グループA）
const powerTalon = ref(false) // 力の爪（グループB）
const preparedBuff = ref<PreparedBuff>('none') // 鬼人薬・食事効果（グループC）
const shortHypnosis = ref<ShortHypnosis>(false) // 短期催眠術（グループE）

// 短期バフ
const shortTermBuff = ref<ShortTermBuff>('none') // 短期バフ（グループD）

// 攻撃スキル
const attackSkill = ref<AttackSkill>('none')

// 挑戦者・フルチャージ・力の解放
const challengeSkill = ref<ChallengeSkill>('none') // 挑戦者・フルチャージ・力の解放（グループJ）

// 北風/南風
const hunterSkill = ref<HunterSkill>('none')

// 鈍器使い
const bludgeoner = ref<Bludgeoner>(false) // 鈍器使い（グループL）

// 死中に活
const resuscitate = ref<Resuscitate>(false) // 死中に活（グループM）

// 逆恨み
const resentment = ref<Resentment>(false) // 逆恨み（グループN）

// 火事場系
const adrenaline = ref<Adrenaline>('none') // 火事場力（グループG）
const fortify = ref<Fortify>('none') // 不屈（グループI）
const dragonInstinct = ref<DragonInstinct>(false) // 龍気活性（グループO）

// 切れ味選択（通常、匠1、匠2）
type SharpnessType = 'normal' | 'plus1' | 'plus2'
const selectedSharpness = ref<SharpnessType>('normal')

// 弱点特攻
const hasWeaknessExploit = ref(false)

// 連撃
type RepeatOffensive = 'none' | '25' | '30'
const repeatOffensive = ref<RepeatOffensive>('none')

// 見切り（会心率）
const criticalEye = ref(0)

// 超会心
const hasCriticalBoost = ref(false)

// 裏会心
const hasMadAffinity = ref(false)

// 旋律オプション
const attackMelody = ref<AttackMelody>('none')

type CriticalMelody = 'none' | '15' | '20' | 'horn'
const criticalMelody = ref<CriticalMelody>('none')

// 会心補正を計算
const calculateCriticalBonus = (): number => {
  let bonus = 0
  // 見切りの補正
  const criticalEyeBonus: Record<number, number> = {
    [-3]: -15,
    [-2]: -10,
    [-1]: -5,
    0: 0,
    1: 10,
    2: 20,
    3: 30,
  }

  bonus += criticalEyeBonus[criticalEye.value] ?? 0

  // 弱点特攻の補正
  if (hasWeaknessExploit.value) {
    bonus += 50
  }

  // 連撃の補正
  if (repeatOffensive.value === '25') {
    bonus += 25
  } else if (repeatOffensive.value === '30') {
    bonus += 30
  }

  // 挑戦者・フルチャージ・力の解放の補正
  bonus += getChallengeSkillCriticalBonus(challengeSkill.value)

  // 短期バフの補正（鬼人会心弾）
  if (shortTermBuff.value === 'demonCriticalBullet') {
    bonus += 10 // 鬼人会心弾: 会心率+10%
  }

  return bonus
}

// 挑戦者・フルチャージ・力の解放の会心率補正値を取得
const getChallengeSkillCriticalBonus = (skill: ChallengeSkill): number => {
  switch (skill) {
    case 'challenger1':
      return 10 // 挑戦者+1: 会心率+10%
    case 'challenger2':
      return 20 // 挑戦者+2: 会心率+20%
    case 'latentPower1':
      return 30 // 力の解放+1: 会心率+30%
    case 'latentPower2':
      return 50 // 力の解放+2: 会心率+50%
    case 'peakPerformance':
    case 'none':
    default:
      return 0
  }
}

// 会心補正値を計算
const criticalBonus = computed(() => calculateCriticalBonus())

// 攻撃旋律の倍率を計算（固定値の場合のみ）
const attackMelodyMultiplier = computed(() => {
  switch (attackMelody.value) {
    case '1.10':
      return 1.1
    case '1.15':
      return 1.15
    case '1.20':
      return 1.2
    default:
      return 1.0
  }
})

// 会心強化旋律の補正値を計算（固定値の場合のみ）
const criticalMelodyBonus = computed(() => {
  switch (criticalMelody.value) {
    case '15':
      return 15
    case '20':
      return 20
    default:
      return 0
  }
})

// 攻撃力加算バフの合計を計算
const totalAttackAdd = computed(() => {
  let total = 0
  if (powerCharm.value) total += 6 // 力の護符
  if (powerTalon.value) total += 9 // 力の爪
  if (preparedBuff.value !== 'none') {
    total += getPreparedBuffValue(preparedBuff.value)
  }
  if (shortTermBuff.value !== 'none') {
    total += getShortTermBuffValue(shortTermBuff.value)
  }
  if (shortHypnosis.value) total += 3 // 短期催眠術
  if (attackSkill.value !== 'none') {
    total += getAttackSkillValue(attackSkill.value)
  }
  const challengeSkillValue = getChallengeSkillValue(challengeSkill.value)
  if (challengeSkillValue > 0) {
    total += challengeSkillValue
  }
  if (hunterSkill.value !== 'none') {
    total += getHunterSkillValue(hunterSkill.value)
  }
  if (resuscitate.value) total += 20 // 死中に活
  if (resentment.value) total += 20 // 逆恨み
  return total
})

// 攻撃力倍率（乗算バフ）の合計を計算
const totalAttackMultiply = computed(() => {
  let multiplier = 1.0
  if (adrenaline.value !== 'none') {
    multiplier *= getAdrenalineMultiplier(adrenaline.value)
  }
  if (fortify.value !== 'none') {
    multiplier *= getFortifyMultiplier(fortify.value)
  }
  if (dragonInstinct.value) {
    multiplier *= 1.1 // 龍気活性
  }
  if (attackMelody.value !== 'none' && attackMelody.value !== 'horn') {
    multiplier *= attackMelodyMultiplier.value
  }
  // 鈍器使いと攻撃旋律（horn）は笛依存のため、ここでは計算しない
  return multiplier
})

// 会心率追加の合計を計算
const totalCriticalBonus = computed(() => {
  return criticalBonus.value + criticalMelodyBonus.value
})
</script>

<template>
  <div>
    <UPageHero title="狩猟笛比較表" description="モンスターハンターXXの狩猟笛のステータス比較表" />

    <UPageSection>
      <div class="mb-4 space-y-4">
        <div class="grid grid-cols-1 md:grid-cols-2">
          <div class="border-r border-gray-300 dark:border-gray-600 pr-4">
            <label class="text-sm font-medium mb-2 block">事前準備:</label>
            <div class="space-y-3">
              <div>
                <label class="text-xs text-gray-400 mb-1 block">力の護符 (A):</label>
                <div class="flex gap-2">
                  <UButton :variant="!powerCharm ? 'solid' : 'outline'" @click="powerCharm = false">
                    無
                  </UButton>
                  <UButton :variant="powerCharm ? 'solid' : 'outline'" @click="powerCharm = true">
                    有 | +6
                  </UButton>
                </div>
              </div>
              <div>
                <label class="text-xs text-gray-400 mb-1 block">力の爪 (B):</label>
                <div class="flex gap-2">
                  <UButton :variant="!powerTalon ? 'solid' : 'outline'" @click="powerTalon = false">
                    無
                  </UButton>
                  <UButton :variant="powerTalon ? 'solid' : 'outline'" @click="powerTalon = true">
                    有 | +9
                  </UButton>
                </div>
              </div>
              <div>
                <label class="text-xs text-gray-400 mb-1 block">鬼人薬・食事効果 (C):</label>
                <div class="space-y-2">
                  <div class="flex gap-2">
                    <UButton
                      :variant="preparedBuff === 'none' ? 'solid' : 'outline'"
                      @click="preparedBuff = 'none'"
                    >
                      なし
                    </UButton>
                    <UButton
                      :variant="preparedBuff === 'demon_drug' ? 'solid' : 'outline'"
                      @click="preparedBuff = 'demon_drug'"
                    >
                      鬼人薬 | +{{ getPreparedBuffValue('demon_drug') }}
                    </UButton>
                    <UButton
                      :variant="preparedBuff === 'MegaDemondrug' ? 'solid' : 'outline'"
                      @click="preparedBuff = 'MegaDemondrug'"
                    >
                      鬼人薬G | +{{ getPreparedBuffValue('MegaDemondrug') }}
                    </UButton>
                  </div>
                  <div class="flex gap-2">
                    <UButton
                      :variant="preparedBuff === 'meal_attack_small' ? 'solid' : 'outline'"
                      @click="preparedBuff = 'meal_attack_small'"
                    >
                      食事【小】| +{{ getPreparedBuffValue('meal_attack_small') }}
                    </UButton>
                    <UButton
                      :variant="preparedBuff === 'meal_attack_medium' ? 'solid' : 'outline'"
                      @click="preparedBuff = 'meal_attack_medium'"
                    >
                      食事【中】| +{{ getPreparedBuffValue('meal_attack_medium') }}
                    </UButton>
                    <UButton
                      :variant="preparedBuff === 'meal_attack_large' ? 'solid' : 'outline'"
                      @click="preparedBuff = 'meal_attack_large'"
                    >
                      食事【大】| +{{ getPreparedBuffValue('meal_attack_large') }}
                    </UButton>
                  </div>
                </div>
              </div>
              <div>
                <label class="text-xs text-gray-400 mb-1 block">短期催眠術 (E):</label>
                <div class="flex gap-2">
                  <UButton
                    :variant="!shortHypnosis ? 'solid' : 'outline'"
                    @click="shortHypnosis = false"
                  >
                    無
                  </UButton>
                  <UButton
                    :variant="shortHypnosis ? 'solid' : 'outline'"
                    @click="shortHypnosis = true"
                  >
                    有 | +3
                  </UButton>
                </div>
              </div>
            </div>
            <div class="mt-4">
              <label class="text-sm font-medium mb-2 block">短期バフ:</label>
              <div class="space-y-3">
                <div>
                  <label class="text-xs text-gray-400 mb-1 block">アイテム等 (D):</label>
                  <div class="space-y-2">
                    <div class="flex gap-2 flex-wrap">
                      <UButton
                        :variant="shortTermBuff === 'none' ? 'solid' : 'outline'"
                        @click="shortTermBuff = 'none'"
                      >
                        なし
                      </UButton>
                      <UButton
                        :variant="shortTermBuff === 'seedOrHorn' ? 'solid' : 'outline'"
                        @click="shortTermBuff = 'seedOrHorn'"
                      >
                        種/鬼人笛 | +10
                      </UButton>
                      <UButton
                        :variant="shortTermBuff === 'pill' ? 'solid' : 'outline'"
                        @click="shortTermBuff = 'pill'"
                      >
                        丸薬 | +25
                      </UButton>
                      <UButton
                        :variant="shortTermBuff === 'restOrDance' ? 'solid' : 'outline'"
                        @click="shortTermBuff = 'restOrDance'"
                      >
                        休憩術/舞踏術 | +15
                      </UButton>
                    </div>
                    <div class="flex gap-2 flex-wrap">
                      <UButton
                        :variant="shortTermBuff === 'demonBullet' ? 'solid' : 'outline'"
                        @click="shortTermBuff = 'demonBullet'"
                      >
                        鬼人弾 | +10, 切れ味補正x1.1
                      </UButton>
                      <UButton
                        :variant="shortTermBuff === 'demonCriticalBullet' ? 'solid' : 'outline'"
                        @click="shortTermBuff = 'demonCriticalBullet'"
                      >
                        鬼人会心弾 | +15, +10%, 切れ味補正x1.1
                      </UButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="pl-4">
            <label class="text-sm font-medium mb-2 block">スキル:</label>
            <div class="space-y-3">
              <div>
                <label class="text-xs text-gray-400 mb-1 block">攻撃 (F):</label>
                <div class="space-y-2">
                  <div class="flex gap-2">
                    <UButton
                      :variant="attackSkill === 'none' ? 'solid' : 'outline'"
                      @click="attackSkill = 'none'"
                    >
                      なし
                    </UButton>
                    <UButton
                      :variant="attackSkill === 'down_small' ? 'solid' : 'outline'"
                      @click="attackSkill = 'down_small'"
                    >
                      DOWN【小】| {{ getAttackSkillValue('down_small') }}
                    </UButton>
                    <UButton
                      :variant="attackSkill === 'down_medium' ? 'solid' : 'outline'"
                      @click="attackSkill = 'down_medium'"
                    >
                      DOWN【中】| {{ getAttackSkillValue('down_medium') }}
                    </UButton>
                    <UButton
                      :variant="attackSkill === 'down_large' ? 'solid' : 'outline'"
                      @click="attackSkill = 'down_large'"
                    >
                      DOWN【大】| {{ getAttackSkillValue('down_large') }}
                    </UButton>
                  </div>
                  <div class="flex gap-2">
                    <UButton
                      :variant="attackSkill === 'up_small' ? 'solid' : 'outline'"
                      @click="attackSkill = 'up_small'"
                    >
                      UP【小】| +{{ getAttackSkillValue('up_small') }}
                    </UButton>
                    <UButton
                      :variant="attackSkill === 'up_medium' ? 'solid' : 'outline'"
                      @click="attackSkill = 'up_medium'"
                    >
                      UP【中】| +{{ getAttackSkillValue('up_medium') }}
                    </UButton>
                    <UButton
                      :variant="attackSkill === 'up_large' ? 'solid' : 'outline'"
                      @click="attackSkill = 'up_large'"
                    >
                      UP【大】| +{{ getAttackSkillValue('up_large') }}
                    </UButton>
                  </div>
                </div>
              </div>
              <div>
                <label class="text-xs text-gray-400 mb-1 block"
                  >挑戦者・フルチャージ・力の解放 (J):</label
                >
                <div class="space-y-2">
                  <div class="flex gap-2 flex-wrap">
                    <UButton
                      :variant="challengeSkill === 'none' ? 'solid' : 'outline'"
                      @click="challengeSkill = 'none'"
                    >
                      なし
                    </UButton>
                    <UButton
                      :variant="challengeSkill === 'challenger1' ? 'solid' : 'outline'"
                      @click="challengeSkill = 'challenger1'"
                    >
                      挑戦者+1 | +{{ getChallengeSkillValue('challenger1') }}, +{{
                        getChallengeSkillCriticalBonus('challenger1')
                      }}%
                    </UButton>
                    <UButton
                      :variant="challengeSkill === 'challenger2' ? 'solid' : 'outline'"
                      @click="challengeSkill = 'challenger2'"
                    >
                      挑戦者+2 | +{{ getChallengeSkillValue('challenger2') }}, +{{
                        getChallengeSkillCriticalBonus('challenger2')
                      }}%
                    </UButton>
                    <UButton
                      :variant="challengeSkill === 'peakPerformance' ? 'solid' : 'outline'"
                      @click="challengeSkill = 'peakPerformance'"
                    >
                      フルチャージ | +{{ getChallengeSkillValue('peakPerformance') }}
                    </UButton>
                  </div>
                  <div class="flex gap-2 flex-wrap">
                    <UButton
                      :variant="challengeSkill === 'latentPower1' ? 'solid' : 'outline'"
                      @click="challengeSkill = 'latentPower1'"
                    >
                      力の解放+1 | +{{ getChallengeSkillCriticalBonus('latentPower1') }}%
                    </UButton>
                    <UButton
                      :variant="challengeSkill === 'latentPower2' ? 'solid' : 'outline'"
                      @click="challengeSkill = 'latentPower2'"
                    >
                      力の解放+2 | +{{ getChallengeSkillCriticalBonus('latentPower2') }}%
                    </UButton>
                  </div>
                </div>
              </div>
              <div>
                <label class="text-xs text-gray-400 mb-1 block">北風/南風 (K):</label>
                <div class="flex gap-2 flex-wrap">
                  <UButton
                    :variant="hunterSkill === 'none' ? 'solid' : 'outline'"
                    @click="hunterSkill = 'none'"
                  >
                    なし
                  </UButton>
                  <UButton
                    :variant="hunterSkill === 'cooler' ? 'solid' : 'outline'"
                    @click="hunterSkill = 'cooler'"
                  >
                    クーラー | +{{ getHunterSkillValue('cooler') }}
                  </UButton>
                  <UButton
                    :variant="hunterSkill === 'eitherBlooded' ? 'solid' : 'outline'"
                    @click="hunterSkill = 'eitherBlooded'"
                  >
                    北風/南風 | +{{ getHunterSkillValue('eitherBlooded') }}
                  </UButton>
                  <UButton
                    :variant="hunterSkill === 'polarCooler' ? 'solid' : 'outline'"
                    @click="hunterSkill = 'polarCooler'"
                  >
                    北風クーラー | +{{ getHunterSkillValue('polarCooler') }}
                  </UButton>
                </div>
              </div>
              <div class="grid grid-cols-2">
                <div class="border-r border-gray-300 dark:border-gray-600 pr-4">
                  <label class="text-xs text-gray-400 mb-1 block">死中に活 (M):</label>
                  <div class="flex gap-2">
                    <UButton
                      :variant="!resuscitate ? 'solid' : 'outline'"
                      @click="resuscitate = false"
                    >
                      無
                    </UButton>
                    <UButton
                      :variant="resuscitate ? 'solid' : 'outline'"
                      @click="resuscitate = true"
                    >
                      有 | +20
                    </UButton>
                  </div>
                </div>
                <div class="pl-4">
                  <label class="text-xs text-gray-400 mb-1 block">逆恨み (N):</label>
                  <div class="flex gap-2">
                    <UButton
                      :variant="!resentment ? 'solid' : 'outline'"
                      @click="resentment = false"
                    >
                      無
                    </UButton>
                    <UButton :variant="resentment ? 'solid' : 'outline'" @click="resentment = true">
                      有 | +20
                    </UButton>
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-2">
                <div class="border-r border-gray-300 dark:border-gray-600 pr-4">
                  <label class="text-xs text-gray-400 mb-1 block">斬れ味:</label>
                  <div class="flex gap-2">
                    <UButton
                      :variant="selectedSharpness === 'normal' ? 'solid' : 'outline'"
                      @click="selectedSharpness = 'normal'"
                    >
                      通常
                    </UButton>
                    <UButton
                      :variant="selectedSharpness === 'plus1' ? 'solid' : 'outline'"
                      @click="selectedSharpness = 'plus1'"
                    >
                      匠1
                    </UButton>
                    <UButton
                      :variant="selectedSharpness === 'plus2' ? 'solid' : 'outline'"
                      @click="selectedSharpness = 'plus2'"
                    >
                      匠2
                    </UButton>
                  </div>
                </div>
                <div class="pl-4">
                  <label class="text-xs text-gray-400 mb-1 block">鈍器使い (L):</label>
                  <div class="flex gap-2">
                    <UButton
                      :variant="!bludgeoner ? 'solid' : 'outline'"
                      @click="bludgeoner = false"
                    >
                      無
                    </UButton>
                    <UButton :variant="bludgeoner ? 'solid' : 'outline'" @click="bludgeoner = true">
                      有
                    </UButton>
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-2">
                <div class="border-r border-gray-300 dark:border-gray-600 pr-4">
                  <label class="text-xs text-gray-400 mb-1 block">弱点特攻:</label>
                  <div class="flex gap-2">
                    <UButton
                      :variant="!hasWeaknessExploit ? 'solid' : 'outline'"
                      @click="hasWeaknessExploit = false"
                    >
                      無
                    </UButton>
                    <UButton
                      :variant="hasWeaknessExploit ? 'solid' : 'outline'"
                      @click="hasWeaknessExploit = true"
                    >
                      有
                    </UButton>
                  </div>
                </div>
                <div class="pl-4">
                  <label class="text-xs text-gray-400 mb-1 block">連撃:</label>
                  <div class="flex gap-2">
                    <UButton
                      :variant="repeatOffensive === 'none' ? 'solid' : 'outline'"
                      @click="repeatOffensive = 'none'"
                    >
                      なし
                    </UButton>
                    <UButton
                      :variant="repeatOffensive === '25' ? 'solid' : 'outline'"
                      @click="repeatOffensive = '25'"
                    >
                      25%
                    </UButton>
                    <UButton
                      :variant="repeatOffensive === '30' ? 'solid' : 'outline'"
                      @click="repeatOffensive = '30'"
                    >
                      30%
                    </UButton>
                  </div>
                </div>
              </div>
              <div>
                <label class="text-xs text-gray-400 mb-1 block">見切り:</label>
                <div class="flex gap-2">
                  <UButton
                    v-for="value in [-3, -2, -1, 0, 1, 2, 3]"
                    :key="value"
                    :variant="criticalEye === value ? 'solid' : 'outline'"
                    @click="criticalEye = value"
                  >
                    {{ value > 0 ? `+${value}` : value }}
                  </UButton>
                </div>
              </div>
              <div class="grid grid-cols-2">
                <div class="border-r border-gray-300 dark:border-gray-600 pr-4">
                  <label class="text-xs text-gray-400 mb-1 block">超会心:</label>
                  <div class="flex gap-2">
                    <UButton
                      :variant="!hasCriticalBoost ? 'solid' : 'outline'"
                      @click="hasCriticalBoost = false"
                    >
                      無
                    </UButton>
                    <UButton
                      :variant="hasCriticalBoost ? 'solid' : 'outline'"
                      @click="hasCriticalBoost = true"
                    >
                      有
                    </UButton>
                  </div>
                </div>
                <div class="pl-4">
                  <label class="text-xs text-gray-400 mb-1 block">裏会心:</label>
                  <div class="flex gap-2">
                    <UButton
                      :variant="!hasMadAffinity ? 'solid' : 'outline'"
                      @click="hasMadAffinity = false"
                    >
                      無
                    </UButton>
                    <UButton
                      :variant="hasMadAffinity ? 'solid' : 'outline'"
                      @click="hasMadAffinity = true"
                    >
                      有
                    </UButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2">
          <div class="border-r border-gray-300 dark:border-gray-600 pr-4">
            <label class="text-sm font-medium mb-2 block">旋律:</label>
            <div class="space-y-3">
              <div>
                <label class="text-xs text-gray-400 mb-1 block">攻撃旋律 (H):</label>
                <div class="flex gap-2">
                  <UButton
                    :variant="attackMelody === 'none' ? 'solid' : 'outline'"
                    @click="attackMelody = 'none'"
                  >
                    なし
                  </UButton>
                  <UButton
                    :variant="attackMelody === '1.10' ? 'solid' : 'outline'"
                    @click="attackMelody = '1.10'"
                  >
                    x1.10
                  </UButton>
                  <UButton
                    :variant="attackMelody === '1.15' ? 'solid' : 'outline'"
                    @click="attackMelody = '1.15'"
                  >
                    x1.15
                  </UButton>
                  <UButton
                    :variant="attackMelody === '1.20' ? 'solid' : 'outline'"
                    @click="attackMelody = '1.20'"
                  >
                    x1.20
                  </UButton>
                  <UButton
                    :variant="attackMelody === 'horn' ? 'solid' : 'outline'"
                    @click="attackMelody = 'horn'"
                  >
                    笛依存
                  </UButton>
                </div>
              </div>
              <div>
                <label class="text-xs text-gray-400 mb-1 block">会心旋律:</label>
                <div class="flex gap-2">
                  <UButton
                    :variant="criticalMelody === 'none' ? 'solid' : 'outline'"
                    @click="criticalMelody = 'none'"
                  >
                    なし
                  </UButton>
                  <UButton
                    :variant="criticalMelody === '15' ? 'solid' : 'outline'"
                    @click="criticalMelody = '15'"
                  >
                    15%
                  </UButton>
                  <UButton
                    :variant="criticalMelody === '20' ? 'solid' : 'outline'"
                    @click="criticalMelody = '20'"
                  >
                    20%
                  </UButton>
                  <UButton
                    :variant="criticalMelody === 'horn' ? 'solid' : 'outline'"
                    @click="criticalMelody = 'horn'"
                  >
                    笛依存
                  </UButton>
                </div>
              </div>
            </div>
          </div>
          <div class="pl-4">
            <label class="text-sm font-medium mb-2 block">火事場系:</label>
            <div class="space-y-3">
              <div>
                <label class="text-xs text-gray-400 mb-1 block">火事場力 (G):</label>
                <div class="flex gap-2 flex-wrap">
                  <UButton
                    :variant="adrenaline === 'none' ? 'solid' : 'outline'"
                    @click="adrenaline = 'none'"
                  >
                    なし
                  </UButton>
                  <UButton
                    :variant="adrenaline === 'worrywart' ? 'solid' : 'outline'"
                    @click="adrenaline = 'worrywart'"
                  >
                    心配性 | x{{ getAdrenalineMultiplier('worrywart') }}
                  </UButton>
                  <UButton
                    :variant="adrenaline === 'adrenalinePlus2' ? 'solid' : 'outline'"
                    @click="adrenaline = 'adrenalinePlus2'"
                  >
                    火事場+2 | x{{ getAdrenalineMultiplier('adrenalinePlus2') }}
                  </UButton>
                  <UButton
                    :variant="adrenaline === 'catAdrenaline' ? 'solid' : 'outline'"
                    @click="adrenaline = 'catAdrenaline'"
                  >
                    猫火事場 | x{{ getAdrenalineMultiplier('catAdrenaline') }}
                  </UButton>
                </div>
              </div>
              <div class="grid grid-cols-2">
                <div class="border-r border-gray-300 dark:border-gray-600 pr-4">
                  <label class="text-xs text-gray-400 mb-1 block">不屈 (I):</label>
                  <div class="flex gap-2">
                    <UButton
                      :variant="fortify === 'none' ? 'solid' : 'outline'"
                      @click="fortify = 'none'"
                    >
                      無
                    </UButton>
                    <UButton
                      :variant="fortify === 'fortify1' ? 'solid' : 'outline'"
                      @click="fortify = 'fortify1'"
                    >
                      1乙 | x{{ getFortifyMultiplier('fortify1') }}
                    </UButton>
                    <UButton
                      :variant="fortify === 'fortify2' ? 'solid' : 'outline'"
                      @click="fortify = 'fortify2'"
                    >
                      2乙 | x{{ getFortifyMultiplier('fortify2') }}
                    </UButton>
                  </div>
                </div>
                <div class="pl-4">
                  <label class="text-xs text-gray-400 mb-1 block">龍気活性 (O):</label>
                  <div class="flex gap-2">
                    <UButton
                      :variant="!dragonInstinct ? 'solid' : 'outline'"
                      @click="dragonInstinct = false"
                    >
                      無
                    </UButton>
                    <UButton
                      :variant="dragonInstinct ? 'solid' : 'outline'"
                      @click="dragonInstinct = true"
                    >
                      有 | x1.1
                    </UButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- バフ合計表示 -->
      <div class="mb-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
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
      </div>

      <HornTable
        :horns="allHorns"
        :selected-sharpness="selectedSharpness"
        :critical-bonus="criticalBonus"
        :has-critical-boost="hasCriticalBoost"
        :has-mad-affinity="hasMadAffinity"
        :attack-modifiers="{
          powerCharm,
          powerTalon,
          preparedBuff,
          shortTermBuff,
          shortHypnosis,
          attackSkill,
          adrenaline,
          challengeSkill,
          hunterSkill,
          bludgeoner,
          resuscitate,
          resentment,
          fortify,
          dragonInstinct,
          attackMelody,
          attackMelodyMultiplier,
        }"
        :sharpness-multiplier="
          shortTermBuff === 'demonBullet' || shortTermBuff === 'demonCriticalBullet' ? 1.1 : 1.0
        "
        :critical-melody="criticalMelody"
        :critical-melody-bonus="criticalMelodyBonus"
      />
    </UPageSection>
  </div>
</template>

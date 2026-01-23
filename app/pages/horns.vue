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
import SelectOption from '~/components/SelectOption.vue'

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
              <SelectOption
                label="力の護符 (A):"
                v-model="powerCharm"
                :options="[
                  { value: false, label: '無' },
                  { value: true, label: '有 | +6' },
                ]"
              />
              <SelectOption
                label="力の爪 (B):"
                v-model="powerTalon"
                :options="[
                  { value: false, label: '無' },
                  { value: true, label: '有 | +9' },
                ]"
              />
              <SelectOption
                label="鬼人薬・食事効果 (C):"
                v-model="preparedBuff"
                :rows="[
                  [
                    { value: 'none', label: '無' },
                    { value: 'demon_drug', label: `鬼人薬 | +${getPreparedBuffValue('demon_drug')}` },
                    { value: 'MegaDemondrug', label: `鬼人薬G | +${getPreparedBuffValue('MegaDemondrug')}` },
                  ],
                  [
                    { value: 'meal_attack_small', label: `食事【小】| +${getPreparedBuffValue('meal_attack_small')}` },
                    { value: 'meal_attack_medium', label: `食事【中】| +${getPreparedBuffValue('meal_attack_medium')}` },
                    { value: 'meal_attack_large', label: `食事【大】| +${getPreparedBuffValue('meal_attack_large')}` },
                  ],
                ]"
              />
              <SelectOption
                label="短期催眠術 (E):"
                v-model="shortHypnosis"
                :options="[
                  { value: false, label: '無' },
                  { value: true, label: '有 | +3' },
                ]"
              />
            </div>
            <div class="mt-4">
              <label class="text-sm font-medium mb-2 block">短期バフ:</label>
              <div class="space-y-3">
                <SelectOption
                  label="アイテム等 (D):"
                  v-model="shortTermBuff"
                  wrap
                  :rows="[
                    [
                      { value: 'none', label: '無' },
                      { value: 'seedOrHorn', label: '種/鬼人笛 | +10' },
                      { value: 'pill', label: '丸薬 | +25' },
                      { value: 'restOrDance', label: '休憩術/舞踏術 | +15' },
                    ],
                    [
                      { value: 'demonBullet', label: '鬼人弾 | +10, 切れ味補正x1.1' },
                      { value: 'demonCriticalBullet', label: '鬼人会心弾 | +15, +10%, 切れ味補正x1.1' },
                    ],
                  ]"
                />
              </div>
            </div>
          </div>

          <div class="pl-4">
            <label class="text-sm font-medium mb-2 block">スキル:</label>
            <div class="space-y-3">
              <SelectOption
                label="攻撃 (F):"
                v-model="attackSkill"
                :rows="[
                  [
                    { value: 'none', label: '無' },
                    { value: 'down_small', label: `DOWN【小】| ${getAttackSkillValue('down_small')}` },
                    { value: 'down_medium', label: `DOWN【中】| ${getAttackSkillValue('down_medium')}` },
                    { value: 'down_large', label: `DOWN【大】| ${getAttackSkillValue('down_large')}` },
                  ],
                  [
                    { value: 'up_small', label: `UP【小】| +${getAttackSkillValue('up_small')}` },
                    { value: 'up_medium', label: `UP【中】| +${getAttackSkillValue('up_medium')}` },
                    { value: 'up_large', label: `UP【大】| +${getAttackSkillValue('up_large')}` },
                  ],
                ]"
              />
              <SelectOption
                label="挑戦者・フルチャージ・力の解放 (J):"
                v-model="challengeSkill"
                wrap
                :rows="[
                  [
                    { value: 'none', label: '無' },
                    { value: 'challenger1', label: `挑戦者+1 | +${getChallengeSkillValue('challenger1')}, +${getChallengeSkillCriticalBonus('challenger1')}%` },
                    { value: 'challenger2', label: `挑戦者+2 | +${getChallengeSkillValue('challenger2')}, +${getChallengeSkillCriticalBonus('challenger2')}%` },
                    { value: 'peakPerformance', label: `フルチャージ | +${getChallengeSkillValue('peakPerformance')}` },
                  ],
                  [
                    { value: 'latentPower1', label: `力の解放+1 | +${getChallengeSkillCriticalBonus('latentPower1')}%` },
                    { value: 'latentPower2', label: `力の解放+2 | +${getChallengeSkillCriticalBonus('latentPower2')}%` },
                  ],
                ]"
              />
              <SelectOption
                label="北風/南風 (K):"
                v-model="hunterSkill"
                wrap
                :options="[
                  { value: 'none', label: '無' },
                  { value: 'cooler', label: `クーラー | +${getHunterSkillValue('cooler')}` },
                  { value: 'eitherBlooded', label: `北風/南風 | +${getHunterSkillValue('eitherBlooded')}` },
                  { value: 'polarCooler', label: `北風クーラー | +${getHunterSkillValue('polarCooler')}` },
                ]"
              />
              <div class="grid grid-cols-2">
                <div class="border-r border-gray-300 dark:border-gray-600 pr-4">
                  <SelectOption
                    label="死中に活 (M):"
                    v-model="resuscitate"
                    :options="[
                      { value: false, label: '無' },
                      { value: true, label: '有 | +20' },
                    ]"
                  />
                </div>
                <div class="pl-4">
                  <SelectOption
                    label="逆恨み (N):"
                    v-model="resentment"
                    :options="[
                      { value: false, label: '無' },
                      { value: true, label: '有 | +20' },
                    ]"
                  />
                </div>
              </div>
              <div class="grid grid-cols-2">
                <div class="border-r border-gray-300 dark:border-gray-600 pr-4">
                  <SelectOption
                    label="斬れ味:"
                    v-model="selectedSharpness"
                    :options="[
                      { value: 'normal', label: '通常' },
                      { value: 'plus1', label: '匠1' },
                      { value: 'plus2', label: '匠2' },
                    ]"
                  />
                </div>
                <div class="pl-4">
                  <SelectOption
                    label="鈍器使い (L):"
                    v-model="bludgeoner"
                    :options="[
                      { value: false, label: '無' },
                      { value: true, label: '有' },
                    ]"
                  />
                </div>
              </div>
              <div class="grid grid-cols-2">
                <div class="border-r border-gray-300 dark:border-gray-600 pr-4">
                  <SelectOption
                    label="弱点特攻:"
                    v-model="hasWeaknessExploit"
                    :options="[
                      { value: false, label: '無' },
                      { value: true, label: '有' },
                    ]"
                  />
                </div>
                <div class="pl-4">
                  <SelectOption
                    label="連撃:"
                    v-model="repeatOffensive"
                    :options="[
                      { value: 'none', label: '無' },
                      { value: '25', label: '25%' },
                      { value: '30', label: '30%' },
                    ]"
                  />
                </div>
              </div>
              <SelectOption
                label="見切り:"
                v-model="criticalEye"
                :options="[
                  { value: -3, label: '-3' },
                  { value: -2, label: '-2' },
                  { value: -1, label: '-1' },
                  { value: 0, label: '0' },
                  { value: 1, label: '+1' },
                  { value: 2, label: '+2' },
                  { value: 3, label: '+3' },
                ]"
              />
              <div class="grid grid-cols-2">
                <div class="border-r border-gray-300 dark:border-gray-600 pr-4">
                  <SelectOption
                    label="超会心:"
                    v-model="hasCriticalBoost"
                    :options="[
                      { value: false, label: '無' },
                      { value: true, label: '有' },
                    ]"
                  />
                </div>
                <div class="pl-4">
                  <SelectOption
                    label="裏会心:"
                    v-model="hasMadAffinity"
                    :options="[
                      { value: false, label: '無' },
                      { value: true, label: '有' },
                    ]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2">
          <div class="border-r border-gray-300 dark:border-gray-600 pr-4">
            <label class="text-sm font-medium mb-2 block">旋律:</label>
            <div class="space-y-3">
              <SelectOption
                label="攻撃旋律 (H):"
                v-model="attackMelody"
                :options="[
                  { value: 'none', label: '無' },
                  { value: '1.10', label: 'x1.10' },
                  { value: '1.15', label: 'x1.15' },
                  { value: '1.20', label: 'x1.20' },
                  { value: 'horn', label: '笛依存' },
                ]"
              />
              <SelectOption
                label="会心旋律:"
                v-model="criticalMelody"
                :options="[
                  { value: 'none', label: '無' },
                  { value: '15', label: '15%' },
                  { value: '20', label: '20%' },
                  { value: 'horn', label: '笛依存' },
                ]"
              />
            </div>
          </div>
          <div class="pl-4">
            <label class="text-sm font-medium mb-2 block">火事場系:</label>
            <div class="space-y-3">
              <SelectOption
                label="火事場力 (G):"
                v-model="adrenaline"
                wrap
                :options="[
                  { value: 'none', label: '無' },
                  { value: 'worrywart', label: `心配性 | x${getAdrenalineMultiplier('worrywart')}` },
                  { value: 'adrenalinePlus2', label: `火事場+2 | x${getAdrenalineMultiplier('adrenalinePlus2')}` },
                  { value: 'catAdrenaline', label: `猫火事場 | x${getAdrenalineMultiplier('catAdrenaline')}` },
                ]"
              />
              <div class="grid grid-cols-2">
                <div class="border-r border-gray-300 dark:border-gray-600 pr-4">
                  <SelectOption
                    label="不屈 (I):"
                    v-model="fortify"
                    :options="[
                      { value: 'none', label: '無' },
                      { value: 'fortify1', label: `1乙 | x${getFortifyMultiplier('fortify1')}` },
                      { value: 'fortify2', label: `2乙 | x${getFortifyMultiplier('fortify2')}` },
                    ]"
                  />
                </div>
                <div class="pl-4">
                  <SelectOption
                    label="龍気活性 (O):"
                    v-model="dragonInstinct"
                    :options="[
                      { value: false, label: '無' },
                      { value: true, label: '有 | x1.1' },
                    ]"
                  />
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

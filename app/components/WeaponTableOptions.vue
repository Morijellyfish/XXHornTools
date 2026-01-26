<script setup lang="ts">
import { computed, watch } from 'vue'
import type { TableBaseOption, CriticalMelody } from '~/types/tableBaseOption'
import {
  calculateCriticalBonus,
  calculateAttackMelodyMultiplier,
  calculateCriticalMelodyBonus,
  calculateSharpnessMultiplier,
  calculateTotalAttackAdd,
  calculateTotalAttackMultiply,
  calculateActiveSkills,
  getChallengeSkillCriticalBonus,
} from '~/types/tableBaseOption'
import {
  getPreparedBuffValue,
  getAttackSkillValue,
  getAdrenalineMultiplier,
  getChallengeSkillValue,
  getHunterSkillValue,
  getFortifyMultiplier,
} from '~/types/attackBuff/attackBuffs'
import SelectOption from './SelectOption.vue'

interface Props {
  modelValue: TableBaseOption
  /** 「笛依存」の選択肢を表示するか（HornTableの場合のみ true） */
  allowHornDependentMelody?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  allowHornDependentMelody: false,
})

const emit = defineEmits<{
  'update:modelValue': [value: TableBaseOption]
}>()

const options = computed({
  get: () => props.modelValue,
  set: value => emit('update:modelValue', value),
})

// 各プロパティへのアクセスを簡潔にするための computed
const attackModifiers = computed(() => options.value.attackModifiers ?? {})
const criticalBuffs = computed(() => options.value.criticalBuffs ?? {})

// 会心補正値を自動計算して更新
watch(
  [
    () => options.value.criticalEye,
    () => options.value.hasWeaknessExploit,
    () => options.value.repeatOffensive,
    () => attackModifiers.value.challengeSkill,
    () => attackModifiers.value.shortTermBuff,
  ],
  () => {
    const calculatedBonus = calculateCriticalBonus(options.value)
    const currentBonus = options.value.criticalBuffs?.criticalBonus ?? 0
    if (currentBonus !== calculatedBonus) {
      options.value = {
        ...options.value,
        criticalBuffs: {
          ...(options.value.criticalBuffs ?? {}),
          criticalBonus: calculatedBonus,
        },
      }
    }
  },
  { immediate: true }
)

// 攻撃旋律の倍率を自動計算して更新
watch(
  [() => options.value.attackMelody, () => attackModifiers.value.attackMelody],
  () => {
    const calculatedMultiplier = calculateAttackMelodyMultiplier(options.value)
    const currentMultiplier = options.value.attackMelodyMultiplier ?? 1.0
    if (currentMultiplier !== calculatedMultiplier) {
      options.value = {
        ...options.value,
        attackMelodyMultiplier: calculatedMultiplier,
        attackModifiers: {
          ...attackModifiers.value,
          attackMelodyMultiplier: calculatedMultiplier,
        },
      }
    }
  },
  { immediate: true }
)

// 会心強化旋律の補正値を自動計算して更新
watch(
  () => options.value.criticalMelody,
  () => {
    const calculatedBonus = calculateCriticalMelodyBonus(options.value)
    const currentBonus = options.value.criticalMelodyBonus ?? 0
    if (currentBonus !== calculatedBonus) {
      options.value = {
        ...options.value,
        criticalMelodyBonus: calculatedBonus,
      }
    }
  },
  { immediate: true }
)

// 切れ味補正倍率を自動計算して更新
watch(
  () => attackModifiers.value.shortTermBuff,
  () => {
    const calculatedMultiplier = calculateSharpnessMultiplier(options.value)
    const currentMultiplier = options.value.sharpnessMultiplier ?? 1.0
    if (currentMultiplier !== calculatedMultiplier) {
      options.value = {
        ...options.value,
        sharpnessMultiplier: calculatedMultiplier,
      }
    }
  },
  { immediate: true }
)

// 攻撃力加算バフの合計を自動計算して更新
watch(
  [
    () => attackModifiers.value.powerCharm,
    () => attackModifiers.value.powerTalon,
    () => attackModifiers.value.preparedBuff,
    () => attackModifiers.value.shortTermBuff,
    () => attackModifiers.value.shortHypnosis,
    () => attackModifiers.value.attackSkill,
    () => attackModifiers.value.challengeSkill,
    () => attackModifiers.value.hunterSkill,
    () => attackModifiers.value.resuscitate,
    () => attackModifiers.value.resentment,
  ],
  () => {
    const calculatedTotal = calculateTotalAttackAdd(options.value)
    const currentTotal = options.value.totalAttackAdd ?? 0
    if (currentTotal !== calculatedTotal) {
      options.value = {
        ...options.value,
        totalAttackAdd: calculatedTotal,
      }
    }
  },
  { immediate: true }
)

// 攻撃力倍率（乗算バフ）の合計を自動計算して更新
watch(
  [
    () => attackModifiers.value.adrenaline,
    () => attackModifiers.value.fortify,
    () => attackModifiers.value.dragonInstinct,
    () => options.value.attackMelody,
    () => attackModifiers.value.attackMelody,
    () => options.value.attackMelodyMultiplier,
    () => attackModifiers.value.attackMelodyMultiplier,
  ],
  () => {
    const calculatedMultiplier = calculateTotalAttackMultiply(options.value)
    const currentMultiplier = options.value.totalAttackMultiply ?? 1.0
    if (currentMultiplier !== calculatedMultiplier) {
      options.value = {
        ...options.value,
        totalAttackMultiply: calculatedMultiplier,
      }
    }
  },
  { immediate: true }
)

// 発動スキルのリストを自動計算して更新
watch(
  [
    () => attackModifiers.value.attackSkill,
    () => attackModifiers.value.challengeSkill,
    () => attackModifiers.value.hunterSkill,
    () => attackModifiers.value.bludgeoner,
    () => attackModifiers.value.resuscitate,
    () => attackModifiers.value.resentment,
    () => attackModifiers.value.adrenaline,
    () => attackModifiers.value.fortify,
    () => attackModifiers.value.dragonInstinct,
    () => options.value.hasWeaknessExploit,
    () => options.value.repeatOffensive,
    () => options.value.criticalEye,
    () => options.value.criticalBuffs?.hasCriticalBoost,
    () => options.value.criticalBuffs?.hasMadAffinity,
    () => options.value.selectedSharpness,
  ],
  () => {
    const calculatedSkills = calculateActiveSkills(options.value)
    const currentSkills = options.value.activeSkills ?? []
    // 配列の比較（順序も考慮）
    if (
      currentSkills.length !== calculatedSkills.length ||
      !currentSkills.every((skill, index) => skill === calculatedSkills[index])
    ) {
      options.value = {
        ...options.value,
        activeSkills: calculatedSkills,
      }
    }
  },
  { immediate: true }
)
</script>

<template>
  <div class="mb-0 space-y-4">
    <div class="grid grid-cols-1 md:grid-cols-2">
      <div class="border-r border-gray-300 dark:border-gray-600 pr-4">
        <label class="text-sm font-medium mb-2 block">事前準備:</label>
        <div class="space-y-3">
          <SelectOption
            :model-value="attackModifiers.powerCharm ?? false"
            label="力の護符 (A):"
            :options="[
              { value: false, label: '無' },
              { value: true, label: '有 | +6' },
            ]"
            @update:model-value="
              options = {
                ...options,
                attackModifiers: { ...attackModifiers, powerCharm: $event },
              }
            "
          />
          <SelectOption
            :model-value="attackModifiers.powerTalon ?? false"
            label="力の爪 (B):"
            :options="[
              { value: false, label: '無' },
              { value: true, label: '有 | +9' },
            ]"
            @update:model-value="
              options = {
                ...options,
                attackModifiers: { ...attackModifiers, powerTalon: $event },
              }
            "
          />
          <SelectOption
            :model-value="attackModifiers.preparedBuff ?? 'none'"
            label="鬼人薬・食事効果 (C):"
            :rows="[
              [
                { value: 'none', label: '無' },
                {
                  value: 'demon_drug',
                  label: `鬼人薬 | +${getPreparedBuffValue('demon_drug')}`,
                },
                {
                  value: 'MegaDemondrug',
                  label: `鬼人薬G | +${getPreparedBuffValue('MegaDemondrug')}`,
                },
              ],
              [
                {
                  value: 'meal_attack_small',
                  label: `食事【小】| +${getPreparedBuffValue('meal_attack_small')}`,
                },
                {
                  value: 'meal_attack_medium',
                  label: `食事【中】| +${getPreparedBuffValue('meal_attack_medium')}`,
                },
                {
                  value: 'meal_attack_large',
                  label: `食事【大】| +${getPreparedBuffValue('meal_attack_large')}`,
                },
              ],
            ]"
            @update:model-value="
              options = {
                ...options,
                attackModifiers: { ...attackModifiers, preparedBuff: $event },
              }
            "
          />
          <SelectOption
            :model-value="attackModifiers.shortHypnosis ?? false"
            label="短期催眠術 (E):"
            :options="[
              { value: false, label: '無' },
              { value: true, label: '有 | +3' },
            ]"
            @update:model-value="
              options = {
                ...options,
                attackModifiers: { ...attackModifiers, shortHypnosis: $event },
              }
            "
          />
        </div>
        <div class="mt-4">
          <label class="text-sm font-medium mb-2 block">短期バフ:</label>
          <div class="space-y-3">
            <SelectOption
              :model-value="attackModifiers.shortTermBuff ?? 'none'"
              label="アイテム等 (D):"
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
                  {
                    value: 'demonCriticalBullet',
                    label: '鬼人会心弾 | +15, +10%, 切れ味補正x1.1',
                  },
                ],
              ]"
              @update:model-value="
                options = {
                  ...options,
                  attackModifiers: { ...attackModifiers, shortTermBuff: $event },
                }
              "
            />
          </div>
        </div>
      </div>

      <div class="pl-4">
        <label class="text-sm font-medium mb-2 block">スキル:</label>
        <div class="space-y-3">
          <SelectOption
            :model-value="attackModifiers.attackSkill ?? 'none'"
            label="攻撃 (F):"
            :rows="[
              [
                { value: 'none', label: '無' },
                {
                  value: 'down_small',
                  label: `DOWN【小】| ${getAttackSkillValue('down_small')}`,
                },
                {
                  value: 'down_medium',
                  label: `DOWN【中】| ${getAttackSkillValue('down_medium')}`,
                },
                {
                  value: 'down_large',
                  label: `DOWN【大】| ${getAttackSkillValue('down_large')}`,
                },
              ],
              [
                { value: 'up_small', label: `UP【小】| +${getAttackSkillValue('up_small')}` },
                { value: 'up_medium', label: `UP【中】| +${getAttackSkillValue('up_medium')}` },
                { value: 'up_large', label: `UP【大】| +${getAttackSkillValue('up_large')}` },
              ],
            ]"
            @update:model-value="
              options = {
                ...options,
                attackModifiers: { ...attackModifiers, attackSkill: $event },
              }
            "
          />
          <SelectOption
            :model-value="attackModifiers.challengeSkill ?? 'none'"
            label="挑戦者・フルチャージ・力の解放 (J):"
            wrap
            :rows="[
              [
                { value: 'none', label: '無' },
                {
                  value: 'challenger1',
                  label: `挑戦者+1 | +${getChallengeSkillValue('challenger1')}, +${getChallengeSkillCriticalBonus('challenger1')}%`,
                },
                {
                  value: 'challenger2',
                  label: `挑戦者+2 | +${getChallengeSkillValue('challenger2')}, +${getChallengeSkillCriticalBonus('challenger2')}%`,
                },
                {
                  value: 'peakPerformance',
                  label: `フルチャージ | +${getChallengeSkillValue('peakPerformance')}`,
                },
              ],
              [
                {
                  value: 'latentPower1',
                  label: `力の解放+1 | +${getChallengeSkillCriticalBonus('latentPower1')}%`,
                },
                {
                  value: 'latentPower2',
                  label: `力の解放+2 | +${getChallengeSkillCriticalBonus('latentPower2')}%`,
                },
              ],
            ]"
            @update:model-value="
              options = {
                ...options,
                attackModifiers: { ...attackModifiers, challengeSkill: $event },
              }
            "
          />
          <SelectOption
            :model-value="attackModifiers.hunterSkill ?? 'none'"
            label="北風/南風 (K):"
            wrap
            :options="[
              { value: 'none', label: '無' },
              { value: 'cooler', label: `クーラー | +${getHunterSkillValue('cooler')}` },
              {
                value: 'eitherBlooded',
                label: `北風/南風 | +${getHunterSkillValue('eitherBlooded')}`,
              },
              {
                value: 'polarCooler',
                label: `北風クーラー | +${getHunterSkillValue('polarCooler')}`,
              },
            ]"
            @update:model-value="
              options = {
                ...options,
                attackModifiers: { ...attackModifiers, hunterSkill: $event },
              }
            "
          />
          <div class="grid grid-cols-2">
            <div class="border-r border-gray-300 dark:border-gray-600 pr-4">
              <SelectOption
                :model-value="attackModifiers.resuscitate ?? false"
                label="死中に活 (M):"
                :options="[
                  { value: false, label: '無' },
                  { value: true, label: '有 | +20' },
                ]"
                @update:model-value="
                  options = {
                    ...options,
                    attackModifiers: { ...attackModifiers, resuscitate: $event },
                  }
                "
              />
            </div>
            <div class="pl-4">
              <SelectOption
                :model-value="attackModifiers.resentment ?? false"
                label="逆恨み (N):"
                :options="[
                  { value: false, label: '無' },
                  { value: true, label: '有 | +20' },
                ]"
                @update:model-value="
                  options = {
                    ...options,
                    attackModifiers: { ...attackModifiers, resentment: $event },
                  }
                "
              />
            </div>
          </div>
          <div class="grid grid-cols-2">
            <div class="border-r border-gray-300 dark:border-gray-600 pr-4">
              <SelectOption
                :model-value="options.selectedSharpness ?? 'normal'"
                label="斬れ味:"
                :options="[
                  { value: 'normal', label: '通常' },
                  { value: 'plus1', label: '匠1' },
                  { value: 'plus2', label: '匠2' },
                ]"
                @update:model-value="options = { ...options, selectedSharpness: $event }"
              />
            </div>
            <div class="pl-4">
              <SelectOption
                :model-value="attackModifiers.bludgeoner ?? false"
                label="鈍器使い (L):"
                :options="[
                  { value: false, label: '無' },
                  { value: true, label: '有' },
                ]"
                @update:model-value="
                  options = {
                    ...options,
                    attackModifiers: { ...attackModifiers, bludgeoner: $event },
                  }
                "
              />
            </div>
          </div>
          <div class="grid grid-cols-2">
            <div class="border-r border-gray-300 dark:border-gray-600 pr-4">
              <SelectOption
                :model-value="options.hasWeaknessExploit ?? false"
                label="弱点特攻:"
                :options="[
                  { value: false, label: '無' },
                  { value: true, label: '有' },
                ]"
                @update:model-value="options = { ...options, hasWeaknessExploit: $event }"
              />
            </div>
            <div class="pl-4">
              <SelectOption
                :model-value="options.repeatOffensive ?? 'none'"
                label="連撃:"
                :options="[
                  { value: 'none', label: '無' },
                  { value: '25', label: '25%' },
                  { value: '30', label: '30%' },
                ]"
                @update:model-value="options = { ...options, repeatOffensive: $event }"
              />
            </div>
          </div>
          <SelectOption
            :model-value="options.criticalEye ?? 0"
            label="見切り:"
            :options="[
              { value: -3, label: '-3' },
              { value: -2, label: '-2' },
              { value: -1, label: '-1' },
              { value: 0, label: '0' },
              { value: 1, label: '+1' },
              { value: 2, label: '+2' },
              { value: 3, label: '+3' },
            ]"
            @update:model-value="options = { ...options, criticalEye: $event }"
          />
          <div class="grid grid-cols-2">
            <div class="border-r border-gray-300 dark:border-gray-600 pr-4">
              <SelectOption
                :model-value="criticalBuffs.hasCriticalBoost ?? false"
                label="超会心:"
                :options="[
                  { value: false, label: '無' },
                  { value: true, label: '有' },
                ]"
                @update:model-value="
                  options = {
                    ...options,
                    criticalBuffs: { ...criticalBuffs, hasCriticalBoost: $event },
                  }
                "
              />
            </div>
            <div class="pl-4">
              <SelectOption
                :model-value="criticalBuffs.hasMadAffinity ?? false"
                label="裏会心:"
                :options="[
                  { value: false, label: '無' },
                  { value: true, label: '有' },
                ]"
                @update:model-value="
                  options = {
                    ...options,
                    criticalBuffs: { ...criticalBuffs, hasMadAffinity: $event },
                  }
                "
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
            :model-value="options.attackMelody ?? 0"
            label="攻撃旋律 (H):"
            :options="[
              { value: 0, label: '無' },
              { value: 1, label: 'x1.10' },
              { value: 2, label: 'x1.15' },
              { value: 3, label: 'x1.20' },
              ...(props.allowHornDependentMelody ? [{ value: 4, label: '笛依存' }] : []),
            ]"
            @update:model-value="options = { ...options, attackMelody: $event as number }"
          />
          <SelectOption
            :model-value="options.criticalMelody ?? 0"
            label="会心旋律:"
            :options="[
              { value: 0, label: '無' },
              { value: 1, label: '15%' },
              { value: 2, label: '20%' },
              ...(props.allowHornDependentMelody ? [{ value: 3, label: '笛依存' }] : []),
            ]"
            @update:model-value="options = { ...options, criticalMelody: $event as CriticalMelody }"
          />
        </div>
      </div>
      <div class="pl-4">
        <label class="text-sm font-medium mb-2 block">火事場系:</label>
        <div class="space-y-3">
          <SelectOption
            :model-value="attackModifiers.adrenaline ?? 'none'"
            label="火事場力 (G):"
            wrap
            :options="[
              { value: 'none', label: '無' },
              {
                value: 'worrywart',
                label: `心配性 | x${getAdrenalineMultiplier('worrywart')}`,
              },
              {
                value: 'adrenalinePlus2',
                label: `火事場+2 | x${getAdrenalineMultiplier('adrenalinePlus2')}`,
              },
              {
                value: 'catAdrenaline',
                label: `猫火事場 | x${getAdrenalineMultiplier('catAdrenaline')}`,
              },
            ]"
            @update:model-value="
              options = {
                ...options,
                attackModifiers: { ...attackModifiers, adrenaline: $event },
              }
            "
          />
          <div class="grid grid-cols-2">
            <div class="border-r border-gray-300 dark:border-gray-600 pr-4">
              <SelectOption
                :model-value="attackModifiers.fortify ?? 'none'"
                label="不屈 (I):"
                :options="[
                  { value: 'none', label: '無' },
                  { value: 'fortify1', label: `1乙 | x${getFortifyMultiplier('fortify1')}` },
                  { value: 'fortify2', label: `2乙 | x${getFortifyMultiplier('fortify2')}` },
                ]"
                @update:model-value="
                  options = {
                    ...options,
                    attackModifiers: { ...attackModifiers, fortify: $event },
                  }
                "
              />
            </div>
            <div class="pl-4">
              <SelectOption
                :model-value="attackModifiers.dragonInstinct ?? false"
                label="龍気活性 (O):"
                :options="[
                  { value: false, label: '無' },
                  { value: true, label: '有 | x1.1' },
                ]"
                @update:model-value="
                  options = {
                    ...options,
                    attackModifiers: { ...attackModifiers, dragonInstinct: $event },
                  }
                "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

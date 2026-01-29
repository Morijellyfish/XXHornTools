<script setup lang="ts">
import { allLongSwords } from '~/data/longSword'
import { ref, computed } from 'vue'
import type { TableBaseOption } from '~/types/tableBaseOption'
import { CriticalMelody, getChallengeSkillCriticalBonus } from '~/types/tableBaseOption'
import { AttackMelody } from '~/types/attackBuff/attackBuff_H'
import type {
  AttackSkill,
  ChallengeSkill,
  HunterSkill,
  Fortify,
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
    attackMelody: AttackMelody.None,
    attackMelodyMultiplier: 1.0,
  },
  sharpnessMultiplier: 1.0,
  hasWeaknessExploit: false,
  repeatOffensive: 'none',
  criticalEye: 0,
  criticalMelody: CriticalMelody.None,
  criticalMelodyBonus: 0,
  attackMelody: AttackMelody.None,
  attackMelodyMultiplier: 1.0,
})

// 会心補正を計算
const calculateCriticalBonus = computed((): number => {
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

  bonus += criticalEyeBonus[tableOptions.value.criticalEye ?? 0] ?? 0

  // 弱点特攻の補正
  if (tableOptions.value.hasWeaknessExploit) {
    bonus += 50
  }

  // 連撃の補正
  if (tableOptions.value.repeatOffensive === '25') {
    bonus += 25
  } else if (tableOptions.value.repeatOffensive === '30') {
    bonus += 30
  }

  // 挑戦者・フルチャージ・力の解放の補正
  bonus += getChallengeSkillCriticalBonus(
    (tableOptions.value.attackModifiers?.challengeSkill ?? 'none') as ChallengeSkill
  )

  // 短期バフの補正（鬼人会心弾）
  if (tableOptions.value.attackModifiers?.shortTermBuff === 'demonCriticalBullet') {
    bonus += 10 // 鬼人会心弾: 会心率+10%
  }

  return bonus
})

// 会心補正値を計算（criticalBuffsに反映）
const criticalBonus = computed(() => calculateCriticalBonus.value)

// 攻撃旋律の倍率を計算（固定値の場合のみ）
const attackMelodyMultiplier = computed(() => {
  const attackMelody =
    tableOptions.value.attackMelody ?? tableOptions.value.attackModifiers?.attackMelody ?? AttackMelody.None
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

// 会心強化旋律の補正値を計算（固定値の場合のみ）
const criticalMelodyBonus = computed(() => {
  switch (tableOptions.value.criticalMelody) {
    case CriticalMelody.Bonus15:
      return 15
    case CriticalMelody.Bonus20:
      return 20
    default:
      return 0
  }
})

// criticalBuffsを更新（criticalBonusを反映）
const criticalBuffs = computed(() => ({
  ...tableOptions.value.criticalBuffs,
  criticalBonus: criticalBonus.value,
}))

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
  const challengeSkillValue = getChallengeSkillValue(
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
  const attackMelody = tableOptions.value.attackMelody ?? modifiers.attackMelody ?? AttackMelody.None
  if (attackMelody !== AttackMelody.None && attackMelody !== AttackMelody.HornDependent) {
    multiplier *= attackMelodyMultiplier.value
  }
  return multiplier
})

// 会心率追加の合計を計算
const totalCriticalBonus = computed(() => {
  return criticalBonus.value + criticalMelodyBonus.value
})

// 切れ味補正倍率を計算
const sharpnessMultiplier = computed(() => {
  const shortTermBuff = tableOptions.value.attackModifiers?.shortTermBuff
  return shortTermBuff === 'demonBullet' || shortTermBuff === 'demonCriticalBullet' ? 1.1 : 1.0
})

// 発動スキルのリストを取得
const activeSkills = computed(() => {
  const modifiers = tableOptions.value.attackModifiers ?? {}
  const skills: string[] = []

  if (modifiers.attackSkill && modifiers.attackSkill !== 'none') {
    const skillNames: Record<AttackSkill, string> = {
      none: '',
      down_small: '攻撃力DOWN【小】',
      down_medium: '攻撃力DOWN【中】',
      down_large: '攻撃力DOWN【大】',
      up_small: '攻撃力UP【小】',
      up_medium: '攻撃力UP【中】',
      up_large: '攻撃力UP【大】',
    }
    skills.push(skillNames[modifiers.attackSkill])
  }

  if (modifiers.challengeSkill && modifiers.challengeSkill !== 'none') {
    const skillNames: Record<ChallengeSkill, string> = {
      none: '',
      challenger1: '挑戦者+1',
      challenger2: '挑戦者+2',
      peakPerformance: 'フルチャージ',
      latentPower1: '力の解放+1',
      latentPower2: '力の解放+2',
    }
    skills.push(skillNames[modifiers.challengeSkill])
  }

  if (modifiers.hunterSkill && modifiers.hunterSkill !== 'none') {
    const skillNames: Record<HunterSkill, string> = {
      none: '',
      cooler: '北風の狩人(非寒冷クーラー)',
      eitherBlooded: '北風の狩人/南風の狩人',
      polarCooler: '北風の狩人(寒冷クーラー)',
    }
    skills.push(skillNames[modifiers.hunterSkill])
  }

  if (modifiers.bludgeoner) {
    skills.push('鈍器使い')
  }

  if (modifiers.resuscitate) {
    skills.push('死中に活')
  }

  if (modifiers.resentment) {
    skills.push('逆恨み')
  }

  if (
    modifiers.adrenaline &&
    modifiers.adrenaline !== 'none' &&
    modifiers.adrenaline !== 'catAdrenaline'
  ) {
    const skillName = (() => {
      switch (modifiers.adrenaline) {
        case 'worrywart':
          return '心配性'
        case 'adrenalinePlus2':
          return '火事場力+2'
        default:
          return null
      }
    })()
    if (skillName) {
      skills.push(skillName)
    }
  }

  if (modifiers.fortify && modifiers.fortify !== 'none') {
    const skillNames: Record<Fortify, string> = {
      none: '',
      fortify1: '不屈(1乙)',
      fortify2: '不屈(2乙)',
    }
    skills.push(skillNames[modifiers.fortify])
  }

  if (modifiers.dragonInstinct) {
    skills.push('龍気活性')
  }

  if (tableOptions.value.hasWeaknessExploit) {
    skills.push('弱点特攻')
  }

  if (tableOptions.value.repeatOffensive && tableOptions.value.repeatOffensive !== 'none') {
    skills.push(`連撃の心得(${tableOptions.value.repeatOffensive}%)`)
  }

  if (tableOptions.value.criticalEye !== 0) {
    const eyeName = (() => {
      switch (tableOptions.value.criticalEye) {
        case -3:
          return '見切り-3'
        case -2:
          return '見切り-2'
        case -1:
          return '見切り-1'
        case 1:
          return '見切り+1'
        case 2:
          return '見切り+2'
        case 3:
          return '見切り+3'
        default:
          return null
      }
    })()
    if (eyeName) {
      skills.push(eyeName)
    }
  }

  if (tableOptions.value.criticalBuffs?.hasCriticalBoost) {
    skills.push('超会心')
  }

  if (tableOptions.value.criticalBuffs?.hasMadAffinity) {
    skills.push('裏会心')
  }

  // 斬れ味レベル
  if (tableOptions.value.selectedSharpness && tableOptions.value.selectedSharpness !== 'normal') {
    const sharpnessNames: Record<'normal' | 'plus1' | 'plus2', string> = {
      normal: '',
      plus1: '斬れ味レベル+1',
      plus2: '斬れ味レベル+2',
    }
    skills.push(sharpnessNames[tableOptions.value.selectedSharpness])
  }

  return skills
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
        :critical-melody="tableOptions.criticalMelody"
      />
    </UPageSection>
  </div>
</template>

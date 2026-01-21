<script setup lang="ts">
import { allHorns } from '~/data/horns'
import { ref, computed } from 'vue'

useHead({
  title: '狩猟笛一覧',
})

// 切れ味選択（通常、匠1、匠2）
type SharpnessType = 'normal' | 'plus1' | 'plus2'
const selectedSharpness = ref<SharpnessType>('normal')

// 弱点特攻
const hasWeaknessExploit = ref(false)

// 見切り（会心率）
const criticalEye = ref(0)

// 超会心
const hasCriticalBoost = ref(false)

// 裏会心
const hasMadAffinity = ref(false)

// 旋律オプション
type AttackMelody = 'none' | '1.10' | '1.15' | '1.20' | 'horn'
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

  return bonus
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
</script>

<template>
  <div>
    <UPageHero title="狩猟笛一覧" description="モンスターハンターXXの狩猟笛のステータス比較表" />

    <UPageSection>
      <div class="mb-4 space-y-4">
        <div>
          <label class="text-sm font-medium mb-2 block">使用する斬れ味:</label>
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

        <div>
          <label class="text-sm font-medium mb-2 block">弱点特攻:</label>
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

        <div>
          <label class="text-sm font-medium mb-2 block">見切り:</label>
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

        <div>
          <label class="text-sm font-medium mb-2 block">超会心:</label>
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

        <div>
          <label class="text-sm font-medium mb-2 block">裏会心:</label>
          <div class="flex gap-2">
            <UButton
              :variant="!hasMadAffinity ? 'solid' : 'outline'"
              @click="hasMadAffinity = false"
            >
              無
            </UButton>
            <UButton :variant="hasMadAffinity ? 'solid' : 'outline'" @click="hasMadAffinity = true">
              有
            </UButton>
          </div>
        </div>

        <div>
          <label class="text-sm font-medium mb-2 block">旋律:</label>
          <div class="space-y-3">
            <div>
              <label class="text-xs text-gray-400 mb-1 block">攻撃旋律:</label>
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
              <label class="text-xs text-gray-400 mb-1 block">会心強化:</label>
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
      </div>

      <HornTable
        :horns="allHorns"
        :selected-sharpness="selectedSharpness"
        :critical-bonus="criticalBonus"
        :has-critical-boost="hasCriticalBoost"
        :has-mad-affinity="hasMadAffinity"
        :attack-melody="attackMelody"
        :attack-melody-multiplier="attackMelodyMultiplier"
      />
    </UPageSection>
  </div>
</template>

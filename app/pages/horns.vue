<script setup lang="ts">
import { allHorns } from '~/data/horns'
import { ref } from 'vue'

useHead({
  title: '狩猟笛一覧',
})

// 切れ味選択（通常、匠1、匠2）
type SharpnessType = 'normal' | 'plus1' | 'plus2'
const selectedSharpness = ref<SharpnessType>('normal')
</script>

<template>
  <div>
    <UPageHero title="狩猟笛一覧" description="モンスターハンターXXの狩猟笛のステータス比較表" />

    <UPageSection>
      <div class="mb-4">
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

      <HornTable :horns="allHorns" :selected-sharpness="selectedSharpness" />
    </UPageSection>
  </div>
</template>

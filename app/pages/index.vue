<script setup lang="ts">
useHead({
  title: '狩りピTools - モンスターハンターXX ツール集',
})

type ButtonColor = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error' | 'neutral'

interface Tool {
  id: string
  title: string
  description: string
  icon: string
  to: string
  status: 'available' | 'coming-soon'
  color?: ButtonColor
}

const tools: Tool[] = [
  {
    id: 'horns',
    title: '狩猟笛比較表',
    description:
      'モンスターハンターXXの狩猟笛のステータスを比較し、様々なバフやスキルを組み合わせた際の期待値を計算できます。',
    icon: 'i-lucide-music',
    to: '/horns',
    status: 'available',
    color: 'primary',
  },
  // 将来的に他のツールを追加する場合は、ここに追加
  // {
  //   id: 'weapon-comparison',
  //   title: '武器比較表',
  //   description: '他の武器種の比較表',
  //   icon: 'i-lucide-sword',
  //   to: '/weapons',
  //   status: 'coming-soon',
  // },
]
</script>

<template>
  <div>
    <UPageHero
      title="狩りピTools"
      description="モンスターハンターXXのプレイをサポートする各種ツール集"
    />

    <UPageSection
      id="tools"
      title="利用可能なツール"
      description="モンスターハンターXXのプレイに役立つツールを提供しています。"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <UCard
          v-for="tool in tools"
          :key="tool.id"
          :to="tool.status === 'available' ? tool.to : undefined"
          class="hover:shadow-lg transition-all duration-200 p-6"
          :class="{
            'cursor-pointer': tool.status === 'available',
            'opacity-75': tool.status === 'coming-soon',
            'ring-2 ring-primary-500 dark:ring-primary-400': tool.status === 'available',
          }"
        >
          <template #header>
            <div class="flex items-center gap-3">
              <div
                class="p-2 rounded-lg"
                :class="
                  tool.status === 'available'
                    ? 'bg-primary-100 dark:bg-primary-900/30'
                    : 'bg-gray-100 dark:bg-gray-800'
                "
              >
                <UIcon
                  :name="tool.icon"
                  class="w-6 h-6"
                  :class="tool.status === 'available' ? 'text-primary-600 dark:text-primary-400' : ''"
                />
              </div>
              <div>
                <h3 class="text-lg font-semibold">{{ tool.title }}</h3>
                <UBadge
                  v-if="tool.status === 'coming-soon'"
                  color="neutral"
                  variant="subtle"
                  size="xs"
                  class="mt-1"
                >
                  準備中
                </UBadge>
              </div>
            </div>
          </template>

          <p class="text-gray-600 dark:text-gray-400 mt-2">{{ tool.description }}</p>

          <template #footer v-if="tool.status === 'available'">
            <div class="flex items-center justify-between">
              <UButton
                :to="tool.to"
                :color="tool.color || 'primary'"
                variant="ghost"
                trailing-icon="i-lucide-arrow-right"
                size="sm"
              >
                ツールを開く
              </UButton>
            </div>
          </template>
        </UCard>
      </div>
    </UPageSection>

    <UPageSection>
      <UPageCTA
        title="狩猟笛をより楽しむために"
        description="狩りピToolsは、モンスターハンターXXの狩猟笛をサポートするためのツール集です。いくつかのツールを追加予定です。"
        variant="subtle"
      />
    </UPageSection>
  </div>
</template>

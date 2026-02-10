<script setup lang="ts">
useHead({
  title: 'トップ - 狩りピTools',
})

interface Tool {
  id: string
  title: string
  description: string
  to: string
  status: 'available' | 'coming-soon'
}

interface ReferenceSite {
  name: string
  url: string
}

const tools: Tool[] = [
  {
    id: 'horns',
    title: '狩猟笛比較表',
    description:
      'モンスターハンターXXの狩猟笛のステータスを比較し、様々なバフやスキルを組み合わせた際の期待値を計算できます。',
    to: '/huntingHorns',
    status: 'available',
  },
  {
    id: 'melody-timer',
    title: '旋律タイマー',
    description:
      '狩猟笛のバフ管理に特化したタイマー。各旋律ごとにタイマーを設定し、キーボード入力で簡単に管理できます。',
    to: '/melodyTimer',
    status: 'available',
  },
  // 将来的に他のツールを追加する場合は、ここに追加
  // {
  //   id: 'weapon-comparison',
  //   title: '武器比較表',
  //   description: '他の武器種の比較表',
  //   to: '/weapons',
  //   status: 'coming-soon',
  // },
]

const referenceSites: ReferenceSite[] = [
  {
    name: 'MHXX ダメージ計算',
    url: 'https://kuroyonhon.com/mhxx/d/dame.php',
  },
  {
    name: 'MHXG Wiki',
    url: 'http://wiki.mhxg.org/',
  },
]
</script>

<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <section class="mx-auto max-w-6xl py-10 sm:py-14">
      <h1 class="text-3xl sm:text-4xl font-semibold tracking-tight mp-text">狩りピTools</h1>
      <p class="mt-3 text-base sm:text-lg mp-muted">
        モンスターハンターXXのプレイをサポートする各種ツール集
      </p>
    </section>

    <section id="tools" class="mx-auto max-w-6xl py-8 sm:py-10">
      <div class="mb-6">
        <h2 class="text-xl sm:text-2xl font-semibold mp-text">利用可能なツール</h2>
        <p class="mt-2 text-sm sm:text-base mp-muted">
          モンスターハンターXXのプレイに役立つツールを提供しています。
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          v-for="tool in tools"
          :key="tool.id"
          class="tool-card h-full transition-shadow"
          :class="{
            'hover:shadow-lg cursor-pointer': tool.status === 'available',
            'opacity-75': tool.status === 'coming-soon',
          }"
          @click="tool.status === 'available' && navigateTo(tool.to)"
        >
          <template #title>
            <div class="flex items-center justify-between gap-3">
              <span class="mp-text">{{ tool.title }}</span>
              <span
                v-if="tool.status === 'coming-soon'"
                class="text-xs px-2 py-1 rounded-full mp-surface-2 mp-text"
              >
                準備中
              </span>
            </div>
          </template>

          <template #content>
            <p class="mp-muted text-sm leading-relaxed">
              {{ tool.description }}
            </p>
          </template>

          <template v-if="tool.status === 'available'" #footer>
            <div class="mp-footer-divider flex justify-end">
              <span class="text-xs font-medium tracking-wide mp-accent">ツールを開く</span>
            </div>
          </template>
        </Card>
      </div>
    </section>

    <section class="mx-auto max-w-6xl py-8 sm:py-10">
      <div class="mp-panel mp-pad-loose">
        <h2 class="text-base sm:text-lg font-semibold mp-text">狩猟笛をより楽しむために</h2>
        <p class="mt-2 mp-muted text-sm leading-relaxed">
          狩りピToolsは、モンスターハンターXXの狩猟笛をサポートするためのツール集です。いくつかのツールを追加予定です。
        </p>
      </div>
    </section>

    <section id="references" class="mx-auto max-w-6xl py-8 sm:py-10">
      <div class="mb-6">
        <h2 class="text-xl sm:text-2xl font-semibold mp-text">参考にさせていただいたサイト</h2>
        <p class="mt-2 text-sm sm:text-base mp-muted">
          以下のサイトを参考にさせていただきました。ありがとうございます。
        </p>
      </div>

      <div class="space-y-3">
        <Card v-for="(site, index) in referenceSites" :key="index" class="hover:shadow-md">
          <template #content>
            <div class="flex-1">
              <a
                :href="site.url"
                target="_blank"
                rel="noopener noreferrer"
                class="text-lg font-semibold mp-text hover:underline"
              >
                {{ site.name }}
              </a>
              <a
                :href="site.url"
                target="_blank"
                rel="noopener noreferrer"
                class="text-xs mp-muted mt-1 block break-all"
              >
                {{ site.url }}
              </a>
            </div>
          </template>
        </Card>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { TableBaseOption } from '~/types/tableBaseOption'
import WeaponTableOptions from '~/components/WeaponTableOptions.vue'
import OptionMonitor from '~/components/OptionMonitor.vue'

type Props = {
  title: string
  description?: string
  modelValue: TableBaseOption
  allowHornDependentMelody?: boolean
}

const props = defineProps<Props>()
const emit = defineEmits<{
  (e: 'update:modelValue', value: TableBaseOption): void
}>()
</script>

<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <section class="mx-auto max-w-6xl py-10 sm:py-14">
      <h1 class="mp-page-title mp-text">{{ title }}</h1>
      <p v-if="description" class="mt-3 mp-body mp-muted">
        {{ description }}
      </p>
    </section>

    <section class="mx-auto max-w-6xl pb-10 sm:pb-14 space-y-6">
      <WeaponTableOptions
        :model-value="props.modelValue"
        :allow-horn-dependent-melody="props.allowHornDependentMelody ?? false"
        @update:model-value="emit('update:modelValue', $event)"
      />

      <!-- ページ固有のフィルターなど（必要なページだけ差し込む） -->
      <slot name="filters" />

      <OptionMonitor
        :model-value="props.modelValue"
        @update:model-value="emit('update:modelValue', $event)"
      />

      <!-- テーブル本体 -->
      <slot />
    </section>
  </div>
</template>

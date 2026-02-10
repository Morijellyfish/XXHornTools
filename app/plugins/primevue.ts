import PrimeVue from 'primevue/config'
import Ripple from 'primevue/ripple'
import Aura from '@primeuix/themes/aura'
import { Theme, definePreset, dt, evaluateDtExpressions } from '@primeuix/styled'

// FOUC対策用：このアプリで今使っているPrimeVueコンポーネントの構造CSSだけを先読み
import { style as baseStyle } from '@primeuix/styles/base'
import { style as buttonStyle } from '@primeuix/styles/button'
import { style as cardStyle } from '@primeuix/styles/card'
import { style as checkboxStyle } from '@primeuix/styles/checkbox'
import { style as inputnumberStyle } from '@primeuix/styles/inputnumber'
import { style as inputtextStyle } from '@primeuix/styles/inputtext'

export default defineNuxtPlugin(nuxtApp => {
  const MhAura = definePreset(Aura, {
    semantic: {
      /**
       * アプリ側のCSS変数（--mh-*）にPrimeVueの色トークンを接続する
       * - surface.*: 背景/面/境界線など
       * - primary.*: アクセント（ボタン等）
       */
      primary: {
        50: 'var(--mh-primary)',
        100: 'var(--mh-primary)',
        200: 'var(--mh-primary)',
        300: 'var(--mh-primary)',
        400: 'var(--mh-primary)',
        500: 'var(--mh-primary)',
        600: 'var(--mh-primary)',
        700: 'var(--mh-primary)',
        800: 'var(--mh-primary)',
        900: 'var(--mh-primary)',
        950: 'var(--mh-primary)',
      },
      colorScheme: {
        dark: {
          surface: {
            0: 'var(--mh-white)',
            400: 'var(--mh-text-muted)',
            700: 'var(--mh-surface-2)',
            800: 'var(--mh-surface-2)',
            900: 'var(--mh-surface-1)',
            950: 'var(--mh-bg)',
          },
          text: {
            color: 'var(--mh-text)',
            mutedColor: 'var(--mh-text-muted)',
          },
          formField: {
            background: 'var(--mh-surface-1)',
            borderColor: 'var(--mh-surface-2)',
            hoverBorderColor: 'var(--mh-surface-2)',
            focusBorderColor: 'var(--mh-primary)',
            color: 'var(--mh-text)',
            placeholderColor: 'var(--mh-text-muted)',
          },
          content: {
            background: 'var(--mh-surface-1)',
            borderColor: 'var(--mh-surface-2)',
            color: 'var(--mh-text)',
            hoverColor: 'var(--mh-text)',
          },
        },
      },
    },
  })

  nuxtApp.vueApp.use(PrimeVue, {
    theme: {
      preset: MhAura,
      options: {
        // 常にダーク固定（htmlに`class=dark`を付ける運用）
        darkModeSelector: '.dark',
      },
    },
    ripple: true,
  })

  nuxtApp.vueApp.directive('ripple', Ripple)

  // FOUC対策（SSG/SSRでのみ実行）
  if (import.meta.server) {
    /**
     * SSR/SSG時点で最低限のPrimeVueテーマCSSをheadへ先に差し込む
     */
    const common = Theme.getCommon('primevue', {})
    const initialComponents = ['button', 'card', 'inputtext', 'inputnumber', 'checkbox'] as const
    const componentCss = initialComponents
      .map(name => {
        const preset = Theme.getComponent(name, {})
        return [preset?.css, preset?.style].filter(Boolean).join('\n')
      })
      .join('\n')

    // 構造CSS（.p-card等）をdt()解決して先出し（いま使っている分だけ）
    const structuralCss = evaluateDtExpressions(
      [baseStyle, buttonStyle, cardStyle, checkboxStyle, inputtextStyle, inputnumberStyle].join(
        '\n'
      ),
      dt
    )

    const preloadedCss = [
      common?.primitive?.css,
      common?.semantic?.css,
      common?.global?.css,
      common?.style,
      componentCss,
      structuralCss,
    ]
      .filter(Boolean)
      .join('\n')

    useHead({
      style: [
        {
          key: 'primevue-preload-css',
          innerHTML: preloadedCss,
        },
      ],
    })
  }
})

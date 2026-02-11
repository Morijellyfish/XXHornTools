/** @type {import('stylelint').Config} */
module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-tailwindcss'],
  rules: {
    // Tailwind + PrimeVue + 手書きCSSの混在環境では、厳格すぎる表記強制でノイズが増えがちなので緩める
    'at-rule-no-unknown': null,
    'alpha-value-notation': null,
    'color-function-alias-notation': null,
    'color-function-notation': null,
    'color-hex-length': null,
    'comment-empty-line-before': null,
    'media-feature-range-notation': null,
    'no-descending-specificity': null,
    'selector-not-notation': null,
  },
  overrides: [
    {
      files: ['**/*.{vue,html}'],
      customSyntax: 'postcss-html',
    },
  ],
  ignoreFiles: ['**/.nuxt/**', '**/.output/**', '**/dist/**', '**/node_modules/**'],
}

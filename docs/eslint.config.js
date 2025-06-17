import pluginVue from 'eslint-plugin-vue'
import vueTsEslintConfig from '@vue/eslint-config-typescript'
import pluginVitest from '@vitest/eslint-plugin'
import pluginPlaywright from 'eslint-plugin-playwright'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },

  ...pluginVue.configs['flat/essential'],
  ...vueTsEslintConfig(),

  {
    ...pluginVitest.configs.recommended,
    files: ['src/**/__tests__/*'],
  },

  {
    ...pluginPlaywright.configs['flat/recommended'],
    files: ['e2e/**/*.{test,spec}.{js,ts,jsx,tsx}'],
  },
  {
    rules: {
      'no-unused-vars': ['warn'],
      'no-undef': ['error'],
      '@typescript-eslint/no-unused-vars': ['warn'],
      'vue/multi-word-component-names': ['warn'],
      'vue/no-undef-components': ['warn'],
      'vue/no-undef-properties': ['error'],
      'vue/valid-attribute-name': ['warn'],
      'vue/no-parsing-error': ['warn'],
      '@typescript-eslint/no-explicit-any': ['off'],
    },
  },
  skipFormatting,
]

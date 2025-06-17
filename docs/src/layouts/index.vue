<script setup lang="ts">
import AppLayoutDefault from './Default.vue'
import { markRaw, ref, watch } from 'vue'
import { useRoute, RouterView } from 'vue-router'
import { useThemeVars } from 'naive-ui'

const currentTheme = useThemeVars()
const layout = ref()
const route = useRoute()

watch(
  () => route.meta?.layout,
  async (metaLayout) => {
    layout.value = markRaw(metaLayout ?? AppLayoutDefault)
  },
  { immediate: true },
)
</script>

<template>
  <div
    :style="{
      backgroundColor: currentTheme.baseColor,
      minHeight: '100vh',
    }"
  >
    <component :is="layout"> <RouterView /> </component>
  </div>
</template>

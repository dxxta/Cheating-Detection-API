<script setup lang="ts">
import { onBeforeUnmount, onMounted, watch } from 'vue'
import { NConfigProvider, darkTheme as darkThemeNaive } from 'naive-ui'
import { useThemeStore } from '@/stores/theme.store'
import { storeToRefs } from 'pinia'
import { idID, dateIdID } from 'naive-ui'

const whiteColor = '#FFF'
const blackColor = '#000'
const primaryColor = '#024ED1'
const redColor = '#fc0303'
const themeStore = useThemeStore()
const { toggleTheme, isDarkTheme } = storeToRefs(themeStore)
const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

function autoCheckMediaTheme(event: MediaQueryListEvent) {
  if (toggleTheme.value != 'device') return
  if (event.matches) {
    themeStore.isDarkTheme = true
    return
  }
  themeStore.isDarkTheme = false
}
function autoCheckToggleTheme() {
  if (toggleTheme.value == 'dark' || (toggleTheme.value == 'device' && darkMediaQuery.matches)) {
    themeStore.isDarkTheme = true
    return
  }
  themeStore.isDarkTheme = false
}

watch([toggleTheme, isDarkTheme], autoCheckToggleTheme, { immediate: true })
onMounted(() => {
  themeStore.loadCookieThemeAction()
  darkMediaQuery.addEventListener('change', autoCheckMediaTheme)
})
onBeforeUnmount(() => {
  darkMediaQuery.removeEventListener('change', autoCheckMediaTheme)
})
</script>

<template>
  <NConfigProvider
    :theme-overrides="{
      common: {
        primaryColor: primaryColor,
        primaryColorHover: '#2877FF',
        primaryColorPressed: primaryColor,
        borderRadius: '15px',
      },
      Button: {
        textColorPrimary: whiteColor,
        textColorPressedPrimary: whiteColor,
        textColorHoverPrimary: whiteColor,
        textColorFocusPrimary: whiteColor,
        textColorDisabledPrimary: whiteColor,
        textColorWarning: blackColor,
        textColorPressedWarning: blackColor,
        textColorHoverWarning: blackColor,
        textColorFocusWarning: blackColor,
        textColorDisabledWarning: blackColor,
      },
      Tabs: {
        tabColorSegment: primaryColor,
        tabTextColorActiveSegment: whiteColor,
      },
      Form: {
        feedbackTextColor: redColor,
      },
    }"
    :theme="Boolean(isDarkTheme) ? darkThemeNaive : null"
    :locale="idID"
    :date-locale="dateIdID"
  >
    <slot />
  </NConfigProvider>
</template>

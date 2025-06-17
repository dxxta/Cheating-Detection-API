import { getCookie, setCookie } from '@/composables/webstorage'
import { defineStore } from 'pinia'
import { ref } from 'vue'
type toggleThemeType = 'light' | 'dark' | 'device'
export const useThemeStore = defineStore('useThemeStore', () => {
  const toggleTheme = ref<toggleThemeType>('device')
  const isDarkTheme = ref<boolean>(false)
  async function loadCookieThemeAction() {
    const theme = getCookie('theme')
    toggleTheme.value = theme ?? 'device'
  }
  async function setCookieThemeAction(payload: toggleThemeType) {
    setCookie('theme', payload)
    toggleTheme.value = payload
  }
  return {
    toggleTheme,
    isDarkTheme,
    setCookieThemeAction,
    loadCookieThemeAction,
  }
})

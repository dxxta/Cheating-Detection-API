import { h, type App, type Component, type VNode } from 'vue'
export interface PluginOptions {
  prefix?: string
}
export interface PluginInstance {
  appWindow: Window & typeof globalThis
  renderIcon: (icon: Component) => () => VNode
  safeJsonParse: (value: any) => any
  getQueryParam: (value: string) => string | null
  sleep: (ms: number) => Promise<void>
  onRedirectToNewWindow: (url: string) => void
  addSeparator: (
    num: number,
    minDecimalDigit?: number,
    maxDecimalDigit?: number,
    isUseBracket?: boolean,
  ) => string
  removeSeparator: (text: string | number) => number
}
export const utils: PluginInstance = {
  appWindow: window,
  renderIcon(icon) {
    return () => {
      return h(icon)
    }
  },
  safeJsonParse(value) {
    if (typeof value !== 'string') return value
    try {
      return JSON.parse(value)
    } catch {
      return value
    }
  },
  getQueryParam(name: string) {
    const params = new URLSearchParams(window.location.search)
    return params.get(name)
  },
  sleep(ms: number = 1000) {
    return new Promise((resolve) => setTimeout(resolve, ms))
  },
  onRedirectToNewWindow(url: string) {
    window.open(url, 'loginPopup', `width=${window.screen.width},height=${window.screen.height}`)
  },
  addSeparator(num: number, minDecimalDigit = 0, maxDecimalDigit = 0, isUseBracket = false) {
    num = Number(num)
    let displayNum = num.toLocaleString('id', {
      minimumFractionDigits: minDecimalDigit,
      maximumFractionDigits: maxDecimalDigit,
    })
    if (displayNum === '-0') displayNum = '0'
    if (isUseBracket && /^-/.test(displayNum)) {
      displayNum = `(${displayNum.replace('-', '')})`
    }
    return !isNaN(num) ? displayNum : '0'
  },
  removeSeparator(text: string | number) {
    if (typeof text === 'string') {
      return Number(text?.replace(/\./gi, '')?.replace(/,/gi, ',')) ?? 0
    }
    return text
  },
}
export default {
  install(app: App) {
    app.config.globalProperties.$utils = utils
  },
}
declare module 'vue' {
  interface ComponentCustomProperties {
    $utils: PluginInstance
  }
}

import { useLoadingBar, useMessage, type MessageType } from 'naive-ui'
import { ref } from 'vue'

export const useCustomLoading = () => {
  const isLoading = ref<boolean>(false)
  const loadingBar = useLoadingBar()
  const messageBar = useMessage()
  function start() {
    isLoading.value = true
    loadingBar.start()
  }
  function finish() {
    isLoading.value = false
    loadingBar.finish()
  }
  function error() {
    isLoading.value = false
    loadingBar.error()
  }
  async function execWithLoading(
    message: string,
    func: () => Promise<void>,
    type: MessageType = 'loading',
  ) {
    if (!message || !func) return
    messageBar.create(message, { type })
    try {
      loadingBar.start()
      await func()
    } catch {
      loadingBar.error()
    } finally {
      messageBar.destroyAll()
      loadingBar.finish()
    }
  }

  return {
    execWithLoading,
    isLoading,
    start,
    finish,
    error,
  }
}

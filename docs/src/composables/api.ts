import axios, { type AxiosInstance } from 'axios'
import { getCookie, setCookie } from './webstorage'
import { reactive } from 'vue'
import { useUserStore } from '@/stores/user.store'
import { useMessage } from 'naive-ui'

const defaultHeaders = {
  'Content-type': 'application/json',
}
export const useApi = (path: string = '') => {
  const userStore = useUserStore()
  const defaultOptions = {
    baseURL: `${import.meta.env.VITE_API}${path}`,
    headers: defaultHeaders,
  }
  const instance = reactive({
    api: axios.create(defaultOptions),
    options: defaultOptions,
  })
  const signoutAction = () => {
    setTimeout(() => {
      // userStore.signoutUserAction()
    }, 1000)
  }
  const onErrorResponse = (retry: AxiosInstance) => async (error: any) => {
    const originalRequest = error.config
    if (Boolean(error.response?.status === 401) && !axios.isCancel(error)) {
      signoutAction()
      return Promise.reject(error?.response)
    }
    // todo : access token expired, force into 403.. give client a chance to retry
    if (error.response?.status === 403 && originalRequest._retry != true) {
      originalRequest._retry = true
      const generateToken = async () => {
        const { refreshToken } = getCookie('credentials')
        if (refreshToken) {
          const response = await axios
            .post(`${import.meta.env.VITE_API}/user/token`, {
              token: refreshToken,
            })
            .catch(signoutAction)
          if (response?.data?.result?.token) {
            setCookie('credentials', {
              accessToken: response.data.result.token,
              refreshToken,
            })
          }
        }
      }
      await generateToken()
      return await retry(originalRequest)
    }
    error.message = '[error] : ' + error.message
    return Promise.reject(error?.response ?? error)
  }
  instance.api.interceptors.request.use((config) => {
    const token = getCookie('credentials')
    if (token?.accessToken && token?.refreshToken) {
      ;(config.headers as Record<string, string>)['Authorization'] = `Bearer ${token.accessToken}`
    }
    if (import.meta.env.NODE_ENV === 'development') {
      console.info('[', 'making request to', ' ', config.url, ']')
    }
    return config
  })
  instance.api.interceptors.response.use((result) => {
    return result
  }, onErrorResponse(instance.api))
  return { api: instance.api, options: instance.options }
}

/* eslint-disable no-undef */
import { useApi } from '@/composables/api'
import { deleteCookie, getCookie, setCookie } from '@/composables/webstorage'
import { AxiosError } from 'axios'
import { jwtDecode } from 'jwt-decode'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('useUserStore', () => {
  const { api: userApi } = useApi('/user')
  const isLoggedIn = ref<boolean>(false)
  const isConnectedToServer = ref<boolean>(true)
  const userSigninData = ref<extendedUserDataType | null>(null)
  const userFullData = ref<userDataType | null>(null)
  const userAuditData = ref<auditDataType[] | null>(null)
  async function signinAction(email: string, password: string) {
    if (!email || !password) throw new Error('Make sure email and password were filled')
    const response = await userApi.post<
      AxiosResponseResult<extendedUserDataType & { accessToken: string; refreshToken: string }>
    >('/signin', {
      email,
      password,
    })
    if (!response.data.result?.id) {
      throw new Error('Failed to logged in')
    }
    setCookie('credentials', {
      accessToken: response.data.result.accessToken,
      refreshToken: response.data.result.refreshToken,
    })
    delete (response.data.result as any)?.accessToken
    delete (response.data.result as any)?.refreshToken
    userSigninData.value = response.data.result
    isLoggedIn.value = true
    location.reload()
  }
  async function loadSigninAction() {
    const credentialsData = getCookie('credentials')
    if (!credentialsData?.accessToken || !credentialsData?.refreshToken) return
    const userData: extendedUserDataType = jwtDecode(credentialsData?.accessToken)
    if (!userData) return
    setCookie('credentials', {
      accessToken: credentialsData?.accessToken,
      refreshToken: credentialsData?.refreshToken,
    })
    userSigninData.value = userData
    isLoggedIn.value = true
  }
  async function loadUserDataAction() {
    if (!userSigninData.value) return
    // todo: get logged user data
    const fetchedUserData = await userApi.get<AxiosResponseResult<any>>('')
    userFullData.value = fetchedUserData.data.result
    // todo: get logged audit data
    if (userFullData.value?.id) {
      const fetchedUserAuditData = await userApi.get<AxiosResponseResult<any>>('/audit', {
        params: {
          entityId: userFullData.value.id,
        },
      })
      userAuditData.value = fetchedUserAuditData.data.result
    }
  }
  async function pingServerAction() {
    try {
      await userApi.get('/ping')
      isConnectedToServer.value = true
    } catch (error) {
      if ((error as AxiosError)?.code == 'ERR_NETWORK') {
        isConnectedToServer.value = false
      }
    }
  }
  function signoutUserAction() {
    deleteCookie('credentials')
    window.location.reload()
  }
  return {
    userApi,
    isLoggedIn,
    signinAction,
    userFullData,
    userAuditData,
    userSigninData,
    loadSigninAction,
    signoutUserAction,
    pingServerAction,
    loadUserDataAction,
    isConnectedToServer,
    userPostApi: userApi.post<AxiosResponseResult<any>>,
    userPatchApi: userApi.patch<AxiosResponseResult<any>>,
    userGetApi: userApi.get<AxiosResponseResult<any>>,
  }
})

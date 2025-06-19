<script setup lang="ts">
import {
  NCard,
  NText,
  NTag,
  NSpace,
  NDivider,
  NGrid,
  NGridItem,
  NForm,
  NInput,
  NFormItem,
  NAlert,
  NButton,
  NEmpty,
  useMessage,
  NAvatar,
  NFlex,
  NBlockquote,
  NList,
  NListItem,
  NImage,
  NSelect,
  NInputGroup,
} from 'naive-ui'
import { required, email, minLength, helpers } from '@vuelidate/validators'
import { getCurrentInstance, onMounted, reactive, ref } from 'vue'
import { useCustomLoading } from '@/composables/loading'
import { useUserStore } from '@/stores/user.store'
import { IconRefresh } from '@tabler/icons-vue'
import { useVuelidate } from '@vuelidate/core'
import { storeToRefs } from 'pinia'
import moment from 'moment'
import { useApi } from '@/composables/api'

const mode = import.meta.env.MODE
const message = useMessage()
const userStore = useUserStore()
const loading = useCustomLoading()
const utils = getCurrentInstance()?.proxy?.$utils
const { userSigninData, userFullData, userAuditData, isConnectedToServer } = storeToRefs(userStore)

const stateStreamData = ref<streamDataType[] | null>(null)
const stateLiveData = ref<liveDataType[] | null>(null)
const stateSignin = reactive<{
  email: string | null
  password: string | null
}>({
  email: 'basic@byecheating.com',
  password: '@aBcDeFgHiJk12345',
})
const stateSignup = reactive<{
  name: string | null
}>({
  name: null,
})
const stateUserEdit = reactive<{
  name: string | null
}>({
  name: null,
})
const stateStream = reactive<{
  url: string | null
}>({
  url: null,
})

const formSignin = useVuelidate(
  {
    email: {
      required: helpers.withMessage(() => `Please fill the field`, required),
      email: helpers.withMessage(() => `Email tidak valid`, email),
    },
    password: {
      required: helpers.withMessage(() => `Please fill the field`, required),
      minLength: helpers.withMessage(() => `8 chars minimum`, minLength(8)),
    },
  },
  stateSignin,
)
const formSignup = useVuelidate(
  {
    name: {
      required: helpers.withMessage(() => `Please fill the field`, required),
    },
  },
  stateSignup,
)
const formStream = useVuelidate(
  {
    url: {
      required: helpers.withMessage(() => `Please fill the field`, required),
    },
  },
  stateStream,
)

async function onSubmitSignin() {
  try {
    loading.start()
    if (!(await formSignin.value.$validate())) {
      throw new Error('Please fill email and password')
    }
    const body = JSON.parse(JSON.stringify(stateSignin))
    await userStore.signinAction(body.email, body.password)
    formSignin.value.$reset()
  } catch (error: any) {
    loading.error()
    message.error(`${error?.data?.message ?? error?.message ?? error}`)
  } finally {
    loading.finish()
  }
}
async function onSubmitSignup() {
  try {
    loading.start()
    if (!(await formSignin.value.$validate()) && !(await formSignup.value.$validate())) {
      throw new Error('Please fill email, password and name fields')
    }
    const body = JSON.parse(
      JSON.stringify({
        ...stateSignin,
        ...stateSignup,
      }),
    )
    await userStore.userPostApi('/signup', body)
    message.success(`user ${body.email} success created`)
    await userStore.signinAction(body.email, body.password)
    formSignin.value.$reset()
    formSignup.value.$reset()
  } catch (error: any) {
    loading.error()
    message.error(`${error?.data?.message ?? error?.message ?? error}`)
  } finally {
    loading.finish()
  }
}
async function onSubmitEditUser() {
  try {
    loading.start()
    if (!(Object.values(stateUserEdit).length > 0)) {
      throw new Error('Nothing to update')
    }
    const body = JSON.parse(JSON.stringify(stateUserEdit))
    await userStore.userPatchApi('', body)
    await userStore.loadUserDataAction()
    stateUserEdit.name = userFullData.value?.name ?? null
  } catch (error: any) {
    loading.error()
    message.error(`${error?.data?.message ?? error?.message ?? error}`)
  } finally {
    loading.finish()
  }
}
async function onGetStream() {
  try {
    loading.start()
    const response = await useApi('/stream').api.get('')
    if (response.data.result) {
      stateStreamData.value = response.data.result
    }
  } catch (error: any) {
    loading.error()
    message.error(`${error?.data?.message ?? error?.message ?? error}`)
  } finally {
    loading.finish()
  }
}
async function onDeleteStream(stream: streamDataType) {
  try {
    loading.start()
    await useApi('/stream').api.delete(stream.id)
    message.success(`stream ${stream.url} deleted`)
    await onGetStream()
  } catch (error: any) {
    loading.error()
    message.error(`${error?.data?.message ?? error?.message ?? error}`)
  } finally {
    loading.finish()
  }
}
async function onSubmitStream() {
  try {
    loading.start()
    if (!(await formStream.value.$validate())) {
      throw new Error('Please fill url field')
    }
    await useApi('/stream').api.post('', {
      url: stateStream.url,
    })
    await onGetStream()
    stateStream.url = null
    formStream.value.$reset()
  } catch (error: any) {
    loading.error()
    message.error(`${error?.data?.message ?? error?.message ?? error}`)
  } finally {
    loading.finish()
  }
}
async function onSubmitLive() {
  try {
    loading.start()
    // console.log(stream)
    // if (!(await formStream.value.$validate())) {
    //   throw new Error('Please fill url field')
    // }
    // await useApi('/stream').api.post('', {
    //   url: stateStream.url,
    // })
    // await onGetStream()
    // stateStream.url = null
    // formStream.value.$reset()
  } catch (error: any) {
    loading.error()
    message.error(`${error?.data?.message ?? error?.message ?? error}`)
  } finally {
    loading.finish()
  }
}

onMounted(() => {
  userStore.loadSigninAction().then(() => {
    if (userSigninData.value?.email) {
      message.success(`Welcome ${userSigninData.value.email}`)
    }
    userStore.loadUserDataAction().then(() => {
      if (userFullData.value?.name) {
        stateUserEdit.name = userFullData.value.name
      }
    })
  })
})
</script>
<template>
  <NSpace vertical size="large">
    <NBlockquote>
      <NText
        >Byecheating API is an integrated system cheating detection through RTSP protocol. It
        enables live streaming analysis, frame-level predictions, and storage of activity reports.
        This API is part of a system built to track, monitor, and record suspicious behavior during
        remote sessions.<br /><br />On this page, you can walkthrough the features<br
      /></NText>
    </NBlockquote>
    <NDivider><NText>Authentication Story</NText></NDivider>
    <NGrid cols="1 l:2" responsive="screen" x-gap="20" y-gap="10">
      <NGridItem>
        <NCard
          :style="{
            height: '100%',
          }"
        >
          <NSpace
            vertical
            align="center"
            justify="center"
            :style="{
              height: '100%',
            }"
          >
            <NEmpty v-if="!userFullData?.id" description="User not logged in" />
            <NFlex v-else>
              <NAvatar
                :src="
                  userFullData?.photo ??
                  `https://api.dicebear.com/9.x/adventurer/svg?seed=${userFullData?.name}`
                "
                :size="100"
              />
              <NSpace vertical size="large">
                <NText>[Name]: {{ userFullData.name }}</NText>
                <NText>[Email]: {{ userFullData.email }}</NText>
                <NText
                  >[Joined Date]:
                  {{ moment(userFullData.createdDate).format('DD MMMM YYYY') }}</NText
                >
              </NSpace>
              <NButton
                type="primary"
                style="width: 100%"
                :loading="loading.isLoading.value"
                :disabled="loading.isLoading.value"
                @click="
                  () => {
                    loading.start()
                    userStore.loadUserDataAction().finally(() => loading.finish())
                  }
                "
                :render-icon="utils?.renderIcon(IconRefresh)"
                >Refresh data</NButton
              >
            </NFlex>
          </NSpace>
        </NCard>
      </NGridItem>
      <NGridItem>
        <NForm @submit.prevent="onSubmitSignin">
          <NSpace vertical space="large">
            <NFormItem
              path="email"
              :feedback="formSignin.email.$errors.map(($error) => $error.$message).toString()"
            >
              <template #label>
                <strong> Email </strong>
              </template>
              <NInput
                type="text"
                v-model:value="stateSignin.email"
                placeholder="ex: email@website.com"
                :loading="loading.isLoading.value"
                :disabled="loading.isLoading.value || !!userSigninData?.id"
              />
            </NFormItem>
            <NFormItem
              path="password"
              :feedback="formSignin.password.$errors.map(($error) => $error.$message).toString()"
            >
              <template #label>
                <strong> Password </strong>
              </template>
              <NInput
                type="password"
                show-password-on="mousedown"
                :loading="loading.isLoading.value"
                :disabled="loading.isLoading.value || !!userSigninData?.id"
                v-model:value="stateSignin.password"
                placeholder="8 digit alphanumeric with 1 symbol"
              />
            </NFormItem>
            <NButton
              attr-type="submit"
              type="primary"
              style="width: 100%"
              :loading="loading.isLoading.value"
              :disabled="loading.isLoading.value || !!userSigninData?.id"
              >Sign in</NButton
            >
          </NSpace>
        </NForm>
        <br />
        <section v-if="!userSigninData?.id">
          <NDivider><NText italic>Or if you dont have an account</NText></NDivider>
          <NForm @submit.prevent="onSubmitSignup">
            <NSpace vertical space="large">
              <NFormItem
                path="name"
                :feedback="formSignup.name.$errors.map(($error) => $error.$message).toString()"
              >
                <template #label>
                  <strong> Name </strong>
                </template>
                <NInput
                  type="text"
                  v-model:value="stateSignup.name"
                  :loading="loading.isLoading.value"
                  :disabled="loading.isLoading.value"
                  placeholder="ex: Dinta Wonderwaal"
                />
              </NFormItem>
              <NButton
                attr-type="submit"
                type="primary"
                style="width: 100%"
                :loading="loading.isLoading.value"
                :disabled="loading.isLoading.value"
                >Sign up</NButton
              >
            </NSpace>
          </NForm>
        </section>
        <NButton
          v-else
          type="error"
          style="width: 100%"
          @click="userStore.signoutUserAction"
          :loading="loading.isLoading.value"
          :disabled="loading.isLoading.value"
          >Sign out</NButton
        >
      </NGridItem>
    </NGrid>
    <section v-if="userFullData?.id">
      <NSpace vertical size="large">
        <NDivider><NText>User Story</NText></NDivider>
        <NCard title="Edit user data">
          <NForm @submit.prevent="onSubmitEditUser">
            <NSpace vertical space="large">
              <NFormItem path="name">
                <template #label>
                  <strong> Name </strong>
                </template>
                <NInput
                  type="text"
                  v-model:value="stateUserEdit.name"
                  placeholder="ex: Dinta Wondervaal"
                  :loading="loading.isLoading.value"
                  :disabled="loading.isLoading.value"
                />
              </NFormItem>
              <NFormItem path="email">
                <template #label>
                  <strong> Email</strong>
                </template>
                <NInput
                  disabled
                  type="text"
                  :value="userFullData?.email"
                  placeholder="ex: email@website.com"
                  :loading="loading.isLoading.value"
                />
              </NFormItem>
              <NButton
                attr-type="submit"
                type="primary"
                style="width: 100%"
                :loading="loading.isLoading.value"
                :disabled="loading.isLoading.value"
                >Save</NButton
              >
            </NSpace>
          </NForm>
        </NCard>
        <NCard title="User Audit Logs">
          <NList v-if="userAuditData && userAuditData?.length > 0" hoverable bordered>
            <NListItem v-for="(item, itemIdx) in userAuditData" :key="itemIdx">
              <NFlex justify="space-between">
                <NText
                  ><strong>{{ item.user?.name }}</strong> made changes at
                  {{ moment(item.createdDate).format('DD MMMM YYYY') }}</NText
                >
                <NText>{{ moment(item.createdDate).format('HH:mm A') }}</NText>
              </NFlex>
            </NListItem>
          </NList>
          <NEmpty v-else description="Logs not found" />
        </NCard>
      </NSpace>
      <NSpace vertical size="large" @vue:mounted="onGetStream">
        <NDivider><NText>Stream Story</NText></NDivider>
        <NCard title="Add stream">
          <NBlockquote>
            <NText>Managing rtsp feeds</NText>
          </NBlockquote>
          <NForm @submit.prevent="onSubmitStream">
            <NSpace vertical space="large">
              <NFormItem
                path="url"
                :feedback="formStream.url.$errors.map(($error) => $error.$message).toString()"
              >
                <template #label>
                  <strong> URL </strong>
                </template>
                <NInput
                  type="text"
                  v-model:value="stateStream.url"
                  placeholder="rtsp://0.0.0.0:8554/live"
                  :loading="loading.isLoading.value"
                  :disabled="loading.isLoading.value"
                />
              </NFormItem>
              <NButton
                attr-type="submit"
                type="primary"
                style="width: 100%"
                :loading="loading.isLoading.value"
                :disabled="loading.isLoading.value"
                >Save</NButton
              >
            </NSpace>
          </NForm>
        </NCard>
        <NCard title="Stream Data">
          <NList v-if="stateStreamData && stateStreamData?.length > 0" hoverable bordered>
            <NListItem v-for="(item, itemIdx) in stateStreamData" :key="itemIdx">
              <NFlex justify="space-between" align="center">
                <NText
                  ><strong>{{ item.url }}</strong></NText
                >
                <NSpace align="center">
                  <NText>{{ moment(item.createdDate).format('DD MMMM YYYY') }}</NText>
                  <NButton
                    :disabled="loading.isLoading.value"
                    :loading="loading.isLoading.value"
                    size="small"
                    @click="
                      () => {
                        utils?.appWindow.navigator.clipboard
                          .writeText(item.id)
                          .then(() => message.success('ID copied'))
                          .catch(() => message.error('Clipboard not supported'))
                      }
                    "
                    >Copy ID</NButton
                  >
                  <NButton
                    :disabled="loading.isLoading.value"
                    :loading="loading.isLoading.value"
                    size="small"
                    type="error"
                    @click="onDeleteStream(item)"
                    >Delete</NButton
                  >
                </NSpace>
              </NFlex>
            </NListItem>
          </NList>
          <NEmpty v-else description="Logs not found" />
        </NCard>
      </NSpace>
      <NSpace vertical size="large">
        <NDivider><NText>Live Story</NText></NDivider>
        <NCard title="Streaming">
          <template #header-extra>
            <NText>Status: {{ isConnectedToServer ? 'Connected' : 'Disconnected' }}</NText>
          </template>
          <NBlockquote>
            <NText
              >[{{ mode }}]
              {{
                mode == 'production' ? 'on this stage, dummy video is used' : 'actual video'
              }}</NText
            >
          </NBlockquote>
          <NForm @submit.prevent="onSubmitLive">
            <NSpace vertical space="large">
              <NFormItem path="streamId">
                <template #label>
                  <strong> Stream </strong>
                </template>
                <NInputGroup>
                  <NSelect
                    filterable
                    placeholder="Please select a stream"
                    :options="
                      stateStreamData?.map((item) => ({
                        label: item.url,
                        value: item.url,
                      })) ?? []
                    "
                  />
                  <NButton
                    attr-type="submit"
                    type="primary"
                    :loading="loading.isLoading.value"
                    :disabled="loading.isLoading.value"
                    >Play Stream</NButton
                  >
                </NInputGroup>
              </NFormItem>

              <NImage
                src=""
                preview-disabled
                :height="250"
                :style="{
                  width: '100%',
                  background: 'black',
                  borderRadius: ' 15px',
                }"
              >
              </NImage>
            </NSpace>
          </NForm>
        </NCard>
      </NSpace>
    </section>
    <!-- <NDivider><NText>Stream Story</NText></NDivider>
    <NDivider><NText>Report Story</NText></NDivider> -->
  </NSpace>
</template>

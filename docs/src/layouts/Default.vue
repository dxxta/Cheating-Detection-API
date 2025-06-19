<script setup lang="ts">
import type { DropdownOption } from 'naive-ui/es/dropdown/src/interface'
import {
  IconMoonFilled,
  IconSunFilled,
  IconDevices,
  IconHome,
  IconPaperclip,
  IconCode,
  IconMail,
  IconLink,
  IconQuestionMark,
} from '@tabler/icons-vue'
import {
  NButton,
  NButtonGroup,
  NCard,
  NDropdown,
  NFlex,
  NH1,
  NSpace,
  NText,
  NAlert,
  useMessage,
} from 'naive-ui'
import { getCurrentInstance, h, onMounted, reactive, watch } from 'vue'
import { useThemeStore } from '@/stores/theme.store'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import Container from '@/shared/ui/Container.vue'
import { useBreakpoint } from '@/composables/breakpoint'
import { useUserStore } from '@/stores/user.store'

const router = useRouter()
const breakpoint = useBreakpoint()
const themeStore = useThemeStore()
const userStore = useUserStore()
const message = useMessage()
const { toggleTheme } = storeToRefs(themeStore)
const utils = getCurrentInstance()?.proxy?.$utils
const data: {
  selectedButtonOptions: DropdownOption | null
  themeButtonOptions: DropdownOption[] &
    { key: typeof toggleTheme.value; label: typeof toggleTheme.value }[]
} = reactive({
  themeButtonOptions: [
    {
      key: 'light',
      label: 'light',
      icon: utils?.renderIcon(IconSunFilled),
      props: {
        onClick: () => {
          themeStore.setCookieThemeAction('light')
        },
      },
    },
    {
      key: 'dark',
      label: 'dark',
      icon: utils?.renderIcon(IconMoonFilled),
      props: {
        onClick: () => {
          themeStore.setCookieThemeAction('dark')
        },
      },
    },
    {
      key: 'device',
      label: 'device',
      icon: utils?.renderIcon(IconDevices),
      props: {
        onClick: () => {
          themeStore.setCookieThemeAction('device')
        },
      },
    },
  ],
  selectedButtonOptions: null,
})

function handleSelectedButtonOptions(key: string | number) {
  const findButtonOption = data.themeButtonOptions.find((themeButton) => themeButton.key == key)
  if (!findButtonOption) return
  data.selectedButtonOptions = findButtonOption
}

watch(
  () => toggleTheme.value,
  (value) => {
    handleSelectedButtonOptions(value)
  },
  { immediate: true },
)

onMounted(() => {
  userStore.pingServerAction().finally(() => {
    message.loading(
      () =>
        h(NFlex, { align: 'center' }, [
          h(NText, {}, { default: () => 'Failed to connect, server unreachable.' }),
          h(
            NButton,
            {
              size: 'small',
              type: 'primary',
              onClick: () => {
                window.location.reload()
              },
            },
            { default: () => 'Try again' },
          ),
        ]),
      {
        duration: 0,
      },
    )
  })
})
</script>
<template>
  <Container>
    <br />
    <NFlex justify="center">
      <NButton @click="router.push({ path: '/' })" circle
        ><template #icon><IconHome /> </template
      ></NButton>
      <NButtonGroup>
        <NDropdown
          :options="data.themeButtonOptions"
          @select="handleSelectedButtonOptions"
          :render-label="
            (option) =>
              h('span', { style: { textTransform: 'capitalize' } }, { default: () => option.label })
          "
        >
          <NButton>
            <template #icon> <data.selectedButtonOptions?.icon /> </template>
            <span style="text-transform: capitalize">{{
              data.selectedButtonOptions?.key
            }}</span></NButton
          >
        </NDropdown>
      </NButtonGroup>
    </NFlex>
    <br />
    <div
      :style="{
        zIndex: 1,
      }"
    >
      <NCard>
        <NFlex justify="space-between" align="center" :vertical="breakpoint.mdAndDown" size="large">
          <NH1>Byecheating API</NH1>
          <NSpace align="center" justify="center">
            <NButton
              @click="() => router.push('/docs')"
              type="primary"
              :render-icon="utils?.renderIcon(IconCode)"
              >API Docs</NButton
            >
            <NButton
              @click="() => router.push('/about')"
              :render-icon="utils?.renderIcon(IconQuestionMark)"
              icon-placement="right"
              >About</NButton
            >
            <NButton
              :render-icon="utils?.renderIcon(IconLink)"
              @click="
                () => {
                  utils?.appWindow.open('https://linkedin.com/in/dinta-syaifuddin', '_blank')
                }
              "
              >Dev</NButton
            >
          </NSpace>
        </NFlex>
      </NCard>
      <br />
      <NAlert type="warning">
        <NText
          >This site is intended for academic research, so please be certain that you do not
          disclose any sensitive informations on it!
        </NText>
      </NAlert>
      <br />
      <slot />
    </div>
    <br />
    <br />
  </Container>
</template>

<script setup lang="ts">
import Layout from '@/layouts/index.vue'
import { ThemeProvider } from '@/features'
import { NLoadingBarProvider, NMessageProvider, NNotificationProvider } from 'naive-ui'
</script>
<template>
  <ThemeProvider>
    <NLoadingBarProvider>
      <NNotificationProvider :max="1">
        <NMessageProvider placement="bottom-right">
          <Layout />
        </NMessageProvider>
      </NNotificationProvider>
    </NLoadingBarProvider>
  </ThemeProvider>
</template>

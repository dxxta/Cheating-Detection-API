<!-- eslint-disable no-undef -->
<script setup lang="ts">
import { useBreakpoint } from '@/composables/breakpoint'
import { NH1, NText } from 'naive-ui'

const breakpoint = useBreakpoint()
</script>
<template>
  <div
    :style="{
      margin: 'auto',
      maxWidth: breakpoint.smAndDown ? '100vw' : breakpoint.lgAndDown ? '50vw' : '25vw',
      minHeight: '50vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }"
  >
    <div style="text-align: center">
      <NH1>404 Not Found</NH1>
      <NText>The page you're looking for is missing :(</NText>
    </div>
    <br />
  </div>
</template>

<script lang="ts" setup>
import { NTabPane, NTabs } from 'naive-ui'
import { VPdfViewer } from '@vue-pdf-viewer/viewer'
</script>
<template>
  <NTabs type="line" animated>
    <NTabPane name="development-team" tab="Development Team"> Wonderwall </NTabPane>
    <NTabPane name="Poster" tab="Poster"> Hey Jude </NTabPane>
    <NTabPane name="Paper" tab="Paper"> Qilixiang </NTabPane>
  </NTabs>
</template>

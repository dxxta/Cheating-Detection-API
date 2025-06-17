<script setup lang="ts">
import { SwaggerUIBundle, SwaggerUIStandalonePreset } from 'swagger-ui-dist'
import 'swagger-ui-dist/swagger-ui.css'
import { onMounted } from 'vue'
import { useThemeStore } from '@/stores/theme.store'
import { storeToRefs } from 'pinia'

const themeStore = useThemeStore()
const { isDarkTheme } = storeToRefs(themeStore)

onMounted(() => {
  SwaggerUIBundle({
    // url: 'https://petstore.swagger.io/v2/swagger.json',
    url: '/specs.yaml',
    dom_id: '#swagger-ui',
    presets: [SwaggerUIBundle.presets.apis, SwaggerUIStandalonePreset],
  })
})
</script>

<template>
  <div id="swagger-ui" :class="isDarkTheme ? 'swagger-dark' : 'swagger-light'"></div>
</template>

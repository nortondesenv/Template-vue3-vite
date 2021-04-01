<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, computed, reactive } from 'vue'
import { useHead } from '@vueuse/head'

export default defineComponent({
  setup() {
    const siteData = reactive({
      title: 'No Paper',
    })

    useHead({
      title: computed(() => siteData.title),
    })
  },
})
</script>

<template>
  <router-view />
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue'
import { useHead } from '@vueuse/head'

const siteData = reactive({
  title: 'NoPaper - Private',
})
useHead({
  title: computed(() => siteData.title),
})
</script>

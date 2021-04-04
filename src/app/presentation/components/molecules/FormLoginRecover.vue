<template>
  <Input />
  {{ text }}
</template>

<script setup lang="ts">
import Input from '../atoms/Input.vue'
import { ref } from 'vue'

const text = ref<string>('FormLogin')
</script>

<template>
  <Input />
  <Button :text="textButton"></Button>
</template>

<script setup lang="ts">
import Input from '../atoms/Input.vue'
import Button from '../atoms/Button.vue'
import { ref } from 'vue'

const textButton = ref<string>('FormRecover')
</script>

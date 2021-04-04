<template>
  <FormLoginUser v-if="true"></FormLoginUser>
  <FormLoginRecover v-else></FormLoginRecover>
</template>

<script setup lang="ts">
import FormLoginRecover from '../molecules/FormLoginRecover.vue'
import FormLoginUser from '../molecules/FormLoginUser.vue'
</script>

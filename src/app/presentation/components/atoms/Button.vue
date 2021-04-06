<template>
  <button
    :class="[typeClass, sizeClass, marginClass, { '--autoWidth': autoWidth }]"
    :disabled="disabled"
    class="Button"
    @click="handleClick"
  >
    <div class="Button__Text">{{ text }}</div>
  </button>
</template>

<script setup lang="ts">
import { computed, defineProps, defineEmit } from 'vue'

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  autoWidth: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: 'Primary',
    validator: (val: string) => ['Primary', 'Secundary'].includes(val),
  },
  size: {
    type: String,
    default: 'Midium',
    validator: (val: string) => ['Small', 'Midium', 'Large'].includes(val),
  },
  margin: {
    type: String,
    default: 'Margin-None',
    validator: (val: string) => ['Margin-None', 'Margin-Small'].includes(val),
  },
})

const typeClass = computed<string>(() => `Button--${props.type}`)
const sizeClass = computed<string>(() => `Button--${props.size}`)
const marginClass = computed<string>(() => `Button--${props.margin}`)

const emit = defineEmit(['click'])

const handleClick = () => {
  emit('click')
}
</script>

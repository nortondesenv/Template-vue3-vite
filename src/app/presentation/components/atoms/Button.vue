<template>
  <button
    :class="[
      typeClassName,
      sizeClassName,
      marginClassName,
      { '--autoWidth': autoWidth },
    ]"
    :disabled="disabled"
    class="Button"
    @click="handleClick"
  >
    <div class="Button__Text">{{ text }}</div>
  </button>
</template>

<script setup lang="ts">
import { computed, defineProps, defineEmit, useContext } from 'vue'
const context = useContext()

const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: Type.Primary,
  },
  size: {
    type: String,
    default: Size.Midium,
  },
  autoWidth: {
    type: Boolean,
    default: false,
  },
  margin: {
    type: String,
    default: Margin.None,
  },
  text: {
    type: String,
    required: true,
  },
})

const typeClassName = computed(() => `Button--${props.type}`)
const sizeClassName = computed(() => `Button--${props.size}`)
const marginClassName = computed(() => `Button--${props.margin}`)

defineEmit(['click'])
const handleClick = () => {
  context.emit('click')
}
</script>

<script>
enum Type {
  Primary = 'Primary',
  Secondary = 'Secundary',
}

enum Margin {
  None = 'Margin-None',
  Small = 'Margin-Small',
}

enum Size {
  Small = 'Small',
  Midium = 'Midium',
  Large = 'Large',
}
</script>

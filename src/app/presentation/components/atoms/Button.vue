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
import { computed, defineProps, defineEmit } from 'vue'

/**
 * @Props
 */
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

/**
 * @Computeds
 */
const typeClassName = computed<string>(() => `Button--${props.type}`)
const sizeClassName = computed<string>(() => `Button--${props.size}`)
const marginClassName = computed<string>(() => `Button--${props.margin}`)

/**
 * @Events
 */
const emit = defineEmit(['click'])

/**
 * @Methods
 */
const handleClick = () => {
  emit('click')
}
</script>

<script lang="ts">
/**
 * @Enum
 * Mapper enum for props
 */
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

<template>
    <div></div>
  </template>
  
  <script lang="ts">
  import { ref, defineComponent } from "vue";
  export default defineComponent({
    name: "Button",
    props: {
      text: {
        type: String
      },
    },
    setup: () => {
      const count = ref(0);
      return { count };
    },
  });
  </script>
  
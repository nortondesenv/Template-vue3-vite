<template>
  <Button></Button>
  <Input></Input>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from "../atoms/Button.vue";
import Input from "../atoms/Input.vue";

export default defineComponent({
  name: "App",
  components: { Button, Input },
});
</script>

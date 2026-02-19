<script setup lang="ts">
defineProps<{ type: string }>();
</script>

<template>
  <div :class="[type]">
    <ContentSlot :use="$slots.default" unwrap="p" />
  </div>
</template>

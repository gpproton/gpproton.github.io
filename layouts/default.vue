<script lang="ts" setup>
import AppTopbar from './components/AppTopbar.vue';
</script>

<template>
  <div class="bg-transparent">
    <app-topbar></app-topbar>
    <div class="lg:px-8 px-4">
      <slot>
        <router-view></router-view>
      </slot>
    </div>
  </div>
</template>

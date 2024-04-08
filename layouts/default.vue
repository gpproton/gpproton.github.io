<script lang="ts" setup>
import AppTopbar from './components/AppTopbar.vue';
</script>

<template>
  <div class="bg-white container">
    <app-topbar></app-topbar>
    <div class="relative isolate px-6 pt-14 mt-8 lg:px-8">
      <slot>
        <router-view></router-view>
      </slot>
    </div>
  </div>
</template>

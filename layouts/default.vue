<script lang="ts" setup>
import AppTopbar from './components/AppTopbar.vue';
</script>

<template>
  <div class="bg-white">
    <app-topbar></app-topbar>
    <div class="pt-14 mt-8 lg:px-8 px-4">
      <slot>
        <router-view></router-view>
      </slot>
    </div>
  </div>
</template>

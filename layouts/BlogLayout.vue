<script lang="ts" setup></script>

<template>
  <div>
    <header>
      <slot name="header"> Default header content </slot>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

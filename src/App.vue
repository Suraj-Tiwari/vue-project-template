<template>
  <div id="app">
    <component :is="this.$route?.meta?.default || defaultLayout">
      <router-view/>
    </component>
  </div>
</template>

<script setup>
import defaultLayout from '@/layouts/default'
</script>

<template>
  <div class="fancyBox">
    {{ title }}
  </div>
</template>

<script>
export default {
  props: ["title"]
}
</script>

<style scoped>
.fancyBox {
  border: 1px solid red;
}
</style>
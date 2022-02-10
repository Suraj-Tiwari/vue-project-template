<template>
  <div>
    <h1>Todos Create {{ message }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "test",
    }
  },
  mounted() {
    this.message = this.$route.params.todo;
  }
}
</script>
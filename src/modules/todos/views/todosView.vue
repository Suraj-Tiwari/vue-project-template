<template>
  <b-container class="pt-2">
    <b-skeleton-wrapper :loading="!todoData || !todoData.title">
      <template #loading>
        <b-card>
          <b-skeleton width="85%"></b-skeleton>
        </b-card>
      </template>
      <b-alert show>{{ todoData.title }}</b-alert>
    </b-skeleton-wrapper>
  </b-container>
</template>

<script>

export default {
  data() {
    return {
      todoData: {},
    }
  },
  async mounted() {
    const {todo, id} = this.$route.params;
    if (todo)
      this.todoData = todo;
    else
      this.todoData = await this.$store.dispatch('todos/getTodosById', id);
  }
}
</script>

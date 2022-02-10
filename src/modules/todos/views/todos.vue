<template>
  <b-container>
    <b-list-group>
      <b-list-group-item
          class="d-flex justify-content-between align-items-center border-top-0 border-left-0 border-right-0"
      >
        <b-col></b-col>
        <b-button variant="danger" @click="$store.dispatch('todos/getTodos',true)">
          <b-icon-arrow-repeat></b-icon-arrow-repeat>
        </b-button>
      </b-list-group-item>
      <b-skeleton-wrapper :loading="!$store.state['todos'].todos || !$store.state['todos'].todos.length">
        <template #loading>
          <b-list-group-item class="d-flex justify-content-between align-items-center" v-for="i in 10" :key="i">
            <b-skeleton width="85%"></b-skeleton>
            <b-skeleton
                type="button"
            ></b-skeleton>
          </b-list-group-item>
        </template>
        <b-list-group-item
            class="d-flex justify-content-between align-items-center"
            v-for="(todo, i) in $store.state['todos'].todos" :key="i"
        >
          {{ todo.title }}
          <b-button variant="primary" @click="$router.push({name: 'TodosView',params: {id: todo.id,todo}})">
            <b-icon-eye-fill/>
          </b-button>
        </b-list-group-item>
      </b-skeleton-wrapper>
    </b-list-group>
  </b-container>
</template>

<script>

export default {
  mounted() {
    this.$store.dispatch('todos/getTodos')
  },
}
</script>

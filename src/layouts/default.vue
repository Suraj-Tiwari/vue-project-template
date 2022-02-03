<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item
          :to="modules['home'].basePath"
          v-if="modules['home']"
          :active="$route.path === '/'"
          >Home
        </b-nav-item>
        <b-nav-item
          :to="modules['about'].basePath"
          v-if="modules['about']"
          :active="$route.path.startsWith(modules['about'].basePath)"
          >About
        </b-nav-item>

        <b-nav-item
          :to="modules['todos'].basePath"
          v-if="modules['todos']"
          :active="$route.path.startsWith(modules['todos'].basePath)"
          >Todos
        </b-nav-item>
        <b-nav-item
          :to="modules['pokemon'].basePath"
          v-if="modules['pokemon']"
          :active="$route.path.startsWith(modules['pokemon'].basePath)"
          >Pokemon
        </b-nav-item>
        <!--        Vue.options.components['todos-fancy-box']-->
        <b-nav-item
          v-if="modules['dogs']"
          :active="$route.path.startsWith(modules['dogs'].basePath)"
          :to="modules['dogs'].basePath"
        >
          Dogs
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <b-container fluid>
      <slot></slot>
    </b-container>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      modules: "availableModules",
    }),
  },
};
</script>

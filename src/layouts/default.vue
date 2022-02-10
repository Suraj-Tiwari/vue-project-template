<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item" v-if="modules['home']">
              <router-link :class="['nav-link', $route.path === '/'? 'active': '']" :to="modules['home'].basePath">Home</router-link>
            </li>
            <li class="nav-item" v-if="modules['about']">
              <router-link :class="['nav-link', $route.path.startsWith(modules['about'].basePath)? 'active': '']" :to="modules['about'].basePath">About</router-link>
            </li>
            <li class="nav-item" v-if="modules['todos']">
              <router-link :class="['nav-link', $route.path.startsWith(modules['todos'].basePath)? 'active': '']" :to="modules['todos'].basePath">Todos</router-link>
            </li>
            <li class="nav-item" v-if="modules['pokemon']">
              <router-link :class="['nav-link', $route.path.startsWith(modules['pokemon'].basePath)? 'active': '']" :to="modules['pokemon'].basePath">Pokemon</router-link>
            </li>
            <li class="nav-item" v-if="modules['dogs']">
              <router-link :class="['nav-link', $route.path.startsWith(modules['dogs'].basePath)? 'active': '']" :to="modules['dogs'].basePath">Dogs</router-link>
            </li>
            <li v-if="modules['todos'].components['todos-fancy-box']">
              <todos-fancy-box title="asdfasdf"/>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <slot></slot>
<!--    <b-navbar type="dark" variant="dark">-->
<!--      <b-navbar-nav>-->
<!--        <b-nav-item-->
<!--          :to="modules['home'].basePath"-->
<!--          v-if="modules['home']"-->
<!--          :active="$route.path === '/'"-->
<!--          >Home-->
<!--        </b-nav-item>-->
<!--        <b-nav-item-->
<!--          :to="modules['about'].basePath"-->
<!--          v-if="modules['about']"-->
<!--          :active="$route.path.startsWith(modules['about'].basePath)"-->
<!--          >About-->
<!--        </b-nav-item>-->

<!--        <b-nav-item-->
<!--          :to="modules['todos'].basePath"-->
<!--          v-if="modules['todos']"-->
<!--          :active="$route.path.startsWith(modules['todos'].basePath)"-->
<!--          >Todos-->
<!--        </b-nav-item>-->
<!--        <b-nav-item-->
<!--          :to="modules['pokemon'].basePath"-->
<!--          v-if="modules['pokemon']"-->
<!--          :active="$route.path.startsWith(modules['pokemon'].basePath)"-->
<!--          >Pokemon-->
<!--        </b-nav-item>-->
<!--        &lt;!&ndash;        Vue.options.components['todos-fancy-box']&ndash;&gt;-->
<!--        <b-nav-item-->
<!--          v-if="modules['dogs']"-->
<!--          :active="$route.path.startsWith(modules['dogs'].basePath)"-->
<!--          :to="modules['dogs'].basePath"-->
<!--        >-->
<!--          Dogs-->
<!--        </b-nav-item>-->
<!--      </b-navbar-nav>-->
<!--    </b-navbar>-->
<!--    <b-container fluid>-->
<!--      <slot></slot>-->
<!--    </b-container>-->
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import {getCurrentInstance} from 'vue'

export default {
  computed: {
    ...mapGetters({
      modules: "availableModules",
    }),
  },
};
</script>

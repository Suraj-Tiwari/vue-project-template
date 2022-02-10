<template>
  <div class="about">
    <h1>This is an about page {{ $store.state['about'].counter }}</h1>
    <button @click="$store.commit('about/incrementCounter')">increment</button>
    <button @click="$store.commit('resetState')">reset</button>
    <div class="row">
      <pre>
        {{$store.getters.availableModules}}
      </pre>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    resetState() {
      this.$store.replaceState({})
    }
  }
}
</script>

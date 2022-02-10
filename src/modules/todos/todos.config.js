export default {
  key: "todos",
  basePath: '/todos',
  exclude: false,
  components: [
    {
      name: "FancyBox",
      component: () => import( './components/FancyBox.vue')
    }
  ]
}

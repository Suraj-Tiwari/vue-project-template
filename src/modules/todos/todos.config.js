export default {
  key: "todos",
  basePath: '/todos',
  exclude: true,
  components: [
    {
      name: "FancyBox",
      component: () => import( './components/FancyBox')
    }
  ]
}

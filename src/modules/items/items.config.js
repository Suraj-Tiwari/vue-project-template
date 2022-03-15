export default {
  key: "items",
  basePath: '/item',
  exclude: false,
  components: [
    {
      name: "layout-view",
      component: () => import( './components/itemView')
    },
  ]
}

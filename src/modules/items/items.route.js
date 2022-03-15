import moduleConfig from './items.config'

export default [
  {
    path: moduleConfig.basePath,
    component: () => import('./items.module'),
    children: [
      {
        path: '/',
        name: 'Item',
        meta: {
          layout: () => import("@/layouts/default"),
        },
        component: () => import('./views/Item.vue')
      }
    ]
  }
]

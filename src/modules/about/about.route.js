import moduleConfig from './about.config'

export default [
  {
    path: moduleConfig.basePath,
    component: () => import('./about.module'),
    children: [
      {
        path: '',
        name: 'About',
        meta: {
          layout: () => import("@/layouts/default"),
        },
        component: () => import('./views/About.vue')
      }
    ]
  }
]

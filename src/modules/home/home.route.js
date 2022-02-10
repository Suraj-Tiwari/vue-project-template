import moduleConfig from './home.config'

export default [
  {
    path: moduleConfig.basePath,
    component: () => import('./home.module'),
    children: [
      {
        path: '',
        name: "Home",
        component: () => import('./views/Home'),
      }
    ]
  }
]

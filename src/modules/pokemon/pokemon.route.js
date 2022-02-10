import moduleConfig from './pokemon.config'

export default [
  {
    path: moduleConfig.basePath,
    component: () => import( './pokemon.module'),
    children: [
      {
        path: '',
        name: 'Pokemon',
        component: () => import( './views/pokemon'),
      },
    ]
  }
]

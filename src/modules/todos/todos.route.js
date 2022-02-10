import moduleConfig from './todos.config'

export default [
  {
    path: moduleConfig.basePath,
    component: () => import( './todos.module'),
    children: [
      {
        path: '',
        name: 'Todos',
        component: () => import( './views/todos'),
      },
      {
        path: 'create',
        name: 'TodosCreate',
        component: () => import( './views/todosCreate')
      },
      {
        path: ':id',
        name: 'TodosView',
        component: () => import( './views/todosView')
      },
    ]
  }
]

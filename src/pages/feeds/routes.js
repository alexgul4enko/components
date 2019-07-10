import Feeds from './FeedsContainer'

const routes = [
  {
    path: '/',
    routes: [
      {
        path: '/',
        exact: true,
        component: Feeds,
      },
    ],
  },
]

export default routes

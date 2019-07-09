import Notificatoins from './NotificatoinsContainer'

const routes = [
  {
    path: '/',
    routes: [
      {
        path: '/',
        exact: true,
        component: Notificatoins,
      },
    ],
  },
]

export default routes

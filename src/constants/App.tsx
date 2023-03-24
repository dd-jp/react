import { type RouteObject } from 'react-router-dom'
import { Home } from '../components/home'
import { Test } from '../components/test'

interface CustomRouteObject {
  title: string
}

type TRouteObject = RouteObject & CustomRouteObject

export const ROUTES: TRouteObject[] = [
  {
    path: '/',
    title: 'Home',
    element: <Home />,
  },
  {
    path: '/test',
    title: 'Test',
    element: <Test />,
  },
]

import { type RouteObject } from 'react-router-dom'
import { Home } from '../components/home'
import { Test } from '../components/test'

interface IExtendedRouteObject {
  title: string
}

type TExtendedRouteObject = RouteObject & IExtendedRouteObject

export const ROUTES: TExtendedRouteObject[] = [
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

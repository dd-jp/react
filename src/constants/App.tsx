import { type RouteObject } from 'react-router-dom'

export const ROUTES: RouteObject[] = [
  {
    path: '/',
    element: <div>Hello world!</div>,
  },
  {
    path: '/test',
    element: <div>Test</div>,
  },
]

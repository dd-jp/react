import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ROUTES } from '../constants'
import './App.css'

const router = createBrowserRouter(ROUTES)

export default function App(): JSX.Element {
  return (
    <div className="App">
      <div>Header</div>
      <RouterProvider router={router} />
    </div>
  )
}

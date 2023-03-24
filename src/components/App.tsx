import { Routes, Route, Outlet, Link } from 'react-router-dom'
import Error from './Error'
import { ROUTES } from '../constants'

export default function App(): JSX.Element {
  return (
    <div>
      <h1>Basic Example</h1>

      <Routes>
        <Route path="/" element={<Layout />}>
          <>
            {ROUTES.map((item, index) => {
              if (index === 0) {
                return (
                  <Route
                    index
                    element={item.element}
                    key={`app-route-${index}`}
                  />
                )
              } else {
                return (
                  <Route
                    path={item.path}
                    element={item.element}
                    key={`app-route-${index}`}
                  />
                )
              }
            })}
            <Route path="*" element={<Error />} />
          </>
        </Route>
      </Routes>
    </div>
  )
}

function Layout(): JSX.Element {
  return (
    <div>
      <nav>
        <ul>
          {ROUTES.map(
            (item, index) =>
              item.path != null && (
                <li key={`app-route-${index}`}>
                  <Link to={item.path}>{item.title}</Link>
                </li>
              )
          )}
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>

      <hr />
      <Outlet />
    </div>
  )
}

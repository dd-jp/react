import {
  checkAccessibility,
  customRender,
  type IExtendedRenderOptions,
} from '@test-utils'
import App from '../App'

const renderOptions: IExtendedRenderOptions = {
  withRouter: true,
  routerHistory: [':test'],
}

describe('App', () => {
  checkAccessibility(<App />, renderOptions)

  test('Renders main page correctly', () => {
    const { getAllByText } = customRender(<App />, renderOptions)
    expect(getAllByText(/Home/i)).toHaveLength(2)
  })
})

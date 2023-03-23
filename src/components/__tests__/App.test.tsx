import { checkAccessibility, customRender } from '@test-utils'
import App from '../App'

describe('App', () => {
  checkAccessibility(<App />)

  test('Renders main page correctly', () => {
    const { getByText } = customRender(<App />)
    expect(getByText(/Header/i)).toBeInTheDocument()
    expect(getByText(/Hello World!/i)).toBeInTheDocument()
  })
})

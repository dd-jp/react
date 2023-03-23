import { checkAccessibility, customRender, screen } from '@test-utils'
import App from '../App'

describe('App', () => {
  checkAccessibility(<App />)

  test('Renders main page correctly', async () => {
    customRender(<App />)
    const buttonCount = await screen.findByRole('button')
    expect(buttonCount.innerHTML).toBe('count is 0')
  })
})

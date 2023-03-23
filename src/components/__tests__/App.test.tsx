import { checkAccessibility, customRender } from '@test-utils'
import { screen } from '@testing-library/react'
import App from '../App'

describe('App', () => {
  checkAccessibility(<App />)

  test('Renders main page correctly', async () => {
    customRender(<App />)
    const buttonCount = await screen.findByRole('button')
    expect(buttonCount.innerHTML).toBe('count is 0')
  })
})

import { checkAccessibility } from '@test-utils'
import { render, screen } from '@testing-library/react'
import App from '../App'

describe('App', () => {
  checkAccessibility(<App />)

  test('Renders main page correctly', async () => {
    render(<App />)
    const buttonCount = await screen.findByRole('button')
    expect(buttonCount.innerHTML).toBe('count is 0')
  })
})

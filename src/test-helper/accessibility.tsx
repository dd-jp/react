import { axe } from 'jest-axe'
import { type ReactElement } from 'react'
import { render } from '@testing-library/react'

export function checkAccessibility(element: ReactElement): void {
  it('has no accessibility violations', async () => {
    const { container } = render(element)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
}

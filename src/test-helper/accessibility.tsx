import { axe } from 'jest-axe'
import { type ReactElement } from 'react'
import { customRender, type IExtendedRenderOptions } from './wrapper'

export function checkAccessibility(
  element: ReactElement,
  renderOptions?: IExtendedRenderOptions
): void {
  it('has no accessibility violations', async () => {
    const { container } = customRender(element, renderOptions)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
}

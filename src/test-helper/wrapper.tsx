import { type ComponentType, type ReactElement, type ReactNode } from 'react'
import * as RTL from '@testing-library/react'

const AllTheProviders = ({ children }: { children: ReactNode }): ReactNode => {
  return <>{children}</>
}
const customRender = (
  ui: ReactElement,
  options?: Omit<RTL.RenderOptions, 'queries'>
): RTL.RenderResult =>
  RTL.render(ui, { wrapper: AllTheProviders as ComponentType, ...options })

export const customRTL = { ...RTL, render: customRender }

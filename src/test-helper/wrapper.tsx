import React from 'react'
import {
  render,
  type RenderResult,
  type RenderOptions,
} from '@testing-library/react'
import { MemoryRouter as Router } from 'react-router-dom'

interface IExtendedRenderOptions extends RenderOptions {
  withRouter?: boolean
  routerHistory?: string[]
}

const wrapInRouter = (
  componentTree: JSX.Element,
  routerHistory?: string[]
): JSX.Element => (
  <Router initialEntries={routerHistory}>{componentTree}</Router>
)

const setupComponent = (
  ui: JSX.Element,
  renderOptions?: IExtendedRenderOptions
): JSX.Element => {
  if (renderOptions == null) return ui
  let componentTree = <>{ui}</>
  if (renderOptions.withRouter ?? false)
    componentTree = wrapInRouter(componentTree)
  return componentTree
}

const customRender = (
  ui: JSX.Element,
  renderOptions?: IExtendedRenderOptions
): RenderResult => {
  try {
    const componentTree = setupComponent(ui, renderOptions)
    return render(componentTree)
  } catch (error) {
    console.log(error)
    throw error
  }
}

export * from '@testing-library/react'
export { customRender, type IExtendedRenderOptions }

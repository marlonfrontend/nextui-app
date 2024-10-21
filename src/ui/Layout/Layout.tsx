/* eslint-disable react/display-name */
import { PropsWithChildren } from 'react'

import { LayoutProps } from './Layout.types'

export const Layout = ({ children }: PropsWithChildren<LayoutProps>) => {
  return <div>{children}</div>
}

Layout.Header = ({ children }: PropsWithChildren<LayoutProps>) => {
  return <header>{children}</header>
}

Layout.Content = ({ children }: PropsWithChildren<LayoutProps>) => {
  return <main className="">{children}</main>
}

Layout.Footer = ({ children }: PropsWithChildren<LayoutProps>) => {
  return <footer>{children}</footer>
}

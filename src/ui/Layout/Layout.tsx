/* eslint-disable react/display-name */
import { PropsWithChildren } from 'react'

import { LayoutProps, LayoutHeaderProps } from './Layout.types'

export const Layout = ({ children }: PropsWithChildren<LayoutProps>) => {
  return <div className="relative flex flex-col h-screen">{children}</div>
}

Layout.Header = ({ children }: PropsWithChildren<LayoutProps>) => {
  return <header className="pl-[250px]">{children}</header>
}

Layout.Main = ({ children }: PropsWithChildren<LayoutProps>) => {
  return <main className="pl-[250px] w-full flex-grow">{children}</main>
}

Layout.Footer = ({ children }: PropsWithChildren<LayoutProps>) => {
  return <footer>{children}</footer>
}

Layout.Aside = ({
  children,
  ...props
}: PropsWithChildren<LayoutHeaderProps>) => {
  return (
    <div className="w-[250px] fixed h-full" {...props}>
      {children}
    </div>
  )
}

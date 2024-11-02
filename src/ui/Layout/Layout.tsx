/* eslint-disable react/display-name */
import { PropsWithChildren } from 'react'

import { LayoutProps, LayoutHeaderProps } from './Layout.types'

export const Layout = ({ children }: PropsWithChildren<LayoutProps>) => {
  return <div className="relative flex flex-col h-screen">{children}</div>
}

Layout.Header = ({ children }: PropsWithChildren<LayoutProps>) => {
  return <header className="top-0 fixed w-full z-40">{children}</header>
}

Layout.Main = ({ children }: PropsWithChildren<LayoutProps>) => {
  return <main className="w-full flex-grow pt-[131px]">{children}</main>
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

/* eslint-disable react/display-name */
import { PropsWithChildren } from 'react'

import { layoutVariants } from './Layout.styles'
import {
  LayoutProps,
  LayoutHeaderProps,
  LayoutAsideProps
} from './Layout.types'

export const Layout = ({ children }: PropsWithChildren<LayoutProps>) => {
  return <div className="relative flex flex-col h-screen">{children}</div>
}

Layout.Header = ({ children, fixed }: PropsWithChildren<LayoutHeaderProps>) => {
  const s = layoutVariants({ fixed })

  return <header className={s.header()}>{children}</header>
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
}: PropsWithChildren<LayoutAsideProps>) => {
  const s = layoutVariants()

  return (
    <div className={s.aside()} {...props}>
      {children}
    </div>
  )
}

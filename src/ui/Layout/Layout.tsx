/* eslint-disable react/display-name */
import { PropsWithChildren, useLayoutEffect, useRef, useState } from 'react'
import React from 'react'

import { layoutVariants } from './Layout.styles'
import {
  LayoutProps,
  LayoutHeaderProps,
  LayoutAsideProps,
  LayoutMainProps
} from './Layout.types'

export const Layout = ({ children }: PropsWithChildren<LayoutProps>) => {
  const headerRef = useRef<HTMLElement>(null)
  const [headerHeight, setHeaderHeight] = useState(0)

  useLayoutEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight)
    }
  }, [])

  return (
    <div className="relative flex flex-col h-screen">
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          if (child.type === Layout.Main) {
            return React.cloneElement(
              child as React.ReactElement<LayoutMainProps>,
              {
                paddingTop: headerHeight
              }
            )
          }
          if (child.type === Layout.Header) {
            return React.cloneElement(
              child as React.ReactElement<LayoutHeaderProps>,
              {
                headerRef
              }
            )
          }
        }

        return child
      })}
    </div>
  )
}

Layout.Header = ({
  children,
  fixed,
  headerRef
}: PropsWithChildren<LayoutHeaderProps> & {
  headerRef?: React.Ref<HTMLElement>
}) => {
  const s = layoutVariants({ fixed })

  return (
    <header ref={headerRef} className={s.header()}>
      {children}
    </header>
  )
}

Layout.Main = ({
  children,
  paddingTop = 0
}: PropsWithChildren<LayoutMainProps> & { paddingTop?: number }) => {
  return (
    <main
      className="w-full flex-grow"
      style={{ paddingTop: `${paddingTop}px` }}
    >
      {children}
    </main>
  )
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

import { PropsWithChildren } from 'react'

import { TextProps } from './Text.types'

export const Text = ({
  children,
  className,
  ...props
}: PropsWithChildren<TextProps>) => {
  return (
    <span {...props} className={className}>
      {children}
    </span>
  )
}

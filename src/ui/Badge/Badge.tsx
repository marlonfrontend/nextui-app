import { PropsWithChildren } from 'react'

import { StyledBadge } from './Badge.styles'
import { BadgeProps } from './Badge.types'

export const Badge = ({
  children,
  size = 'md',
  ...props
}: PropsWithChildren<BadgeProps>) => {
  return (
    <StyledBadge size={size} {...props}>
      {children}
    </StyledBadge>
  )
}

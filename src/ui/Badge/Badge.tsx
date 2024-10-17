import { PropsWithChildren } from 'react'
import { StyledBadge } from './Badge.styles'
import { BadgeProps } from './Badge.types'

export const Badge = ({
  children,
  ...props
}: PropsWithChildren<BadgeProps>) => {
  return <StyledBadge {...props}>{children}</StyledBadge>
}

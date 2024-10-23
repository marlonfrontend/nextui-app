import { PropsWithChildren } from 'react'

import { StyledAvatar } from './Avatar.styles'
import { AvatarProps } from './Avatar.types'

export const Avatar = ({
  children,
  ...props
}: PropsWithChildren<AvatarProps>) => {
  return <StyledAvatar {...props}>{children}</StyledAvatar>
}

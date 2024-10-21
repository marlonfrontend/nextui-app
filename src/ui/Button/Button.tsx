import { PropsWithChildren } from 'react'

import { StyledButton, StyledButtonGroup } from './Button.styles'
import { ButtonProps, ButtonGroupProps } from './Button.types'

export const Button = ({
  children,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  return <StyledButton {...props}>{children}</StyledButton>
}

export const ButtonGroup = ({
  children,
  ...props
}: PropsWithChildren<ButtonGroupProps>) => {
  return <StyledButtonGroup {...props}>{children}</StyledButtonGroup>
}

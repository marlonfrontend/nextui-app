import { forwardRef } from '@nextui-org/system'
import { ForwardedRef } from 'react'

import { ButtonGroupProps, ButtonProps } from './Button.types'
import { StyledButton, StyledButtonGroup } from './Button.styles'

export const Button = forwardRef(
  (
    { children, radius = 'full', size = 'lg', ...props }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    return (
      <StyledButton ref={ref} radius={radius} size={size} {...props}>
        {children}
      </StyledButton>
    )
  }
)

Button.displayName = 'Button'

export const ButtonGroup = ({ children, ...props }: ButtonGroupProps) => {
  return <StyledButtonGroup {...props}>{children}</StyledButtonGroup>
}

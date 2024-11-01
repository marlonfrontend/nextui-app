/* eslint-disable react/display-name */
import { PropsWithChildren } from 'react'
import { forwardRef } from '@nextui-org/system'

import { StyledButton, StyledButtonGroup } from './Button.styles'
import { ButtonProps, ButtonGroupProps } from './Button.types'

export const Button = forwardRef<'button', ButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <StyledButton ref={ref} {...props}>
        {children}
      </StyledButton>
    )
  }
)

export const ButtonGroup = forwardRef<
  'div',
  PropsWithChildren<ButtonGroupProps>
>(({ children, ...props }, ref) => {
  return (
    <StyledButtonGroup ref={ref} {...props}>
      {children}
    </StyledButtonGroup>
  )
})

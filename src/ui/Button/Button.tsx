import { ButtonGroupProps, ButtonProps } from './Button.types'
import { StyledButton, StyledButtonGroup } from './Button.styles'

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <StyledButton radius={props.radius} {...props}>
      {children}
    </StyledButton>
  )
}

export const ButtonGroup = ({ children, ...props }: ButtonGroupProps) => {
  return <StyledButtonGroup {...props}>{children}</StyledButtonGroup>
}

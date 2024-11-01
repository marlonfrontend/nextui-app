import { ButtonGroupProps, ButtonProps } from './Button.types'
import { StyledButton, StyledButtonGroup } from './Button.styles'

export const Button = ({
  children,
  radius = 'full',
  size = 'lg',
  ...props
}: ButtonProps) => {
  return (
    <StyledButton radius={radius} size={size} {...props}>
      {children}
    </StyledButton>
  )
}

export const ButtonGroup = ({ children, ...props }: ButtonGroupProps) => {
  return <StyledButtonGroup {...props}>{children}</StyledButtonGroup>
}

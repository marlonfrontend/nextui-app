import { StyledInput } from './Input.styles'
import { InputProps } from './Input.types'

export const Input = ({ variant = 'bordered', ...props }: InputProps) => {
  return <StyledInput variant={variant} {...props} />
}

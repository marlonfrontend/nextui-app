import { useFormContext } from 'react-hook-form'

import { StyledInput } from './Input.styles'
import { InputProps } from './Input.types'

export const Input = ({ variant = 'bordered', name, ...props }: InputProps) => {
  const {
    register,
    formState: { errors }
  } = useFormContext()

  return (
    <StyledInput
      {...register(name)}
      errorMessage={errors[name]?.message as string}
      isInvalid={!!errors[name]}
      variant={variant}
      {...props}
    />
  )
}

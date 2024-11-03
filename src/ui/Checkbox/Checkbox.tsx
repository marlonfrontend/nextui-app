import { PropsWithChildren } from 'react'

import { StyledCheckbox, StyledCheckboxGroup } from './Checkbox.styles'
import { CheckboxProps, CheckboxGroupProps } from './Checkbox.types'

export const Checkbox = ({
  children,
  ...props
}: PropsWithChildren<CheckboxProps>) => {
  return <StyledCheckbox {...props}>{children}</StyledCheckbox>
}

export const CheckboxGroup = ({
  children,
  ...props
}: PropsWithChildren<CheckboxGroupProps>) => {
  return <StyledCheckboxGroup {...props}>{children}</StyledCheckboxGroup>
}

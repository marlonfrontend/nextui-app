import { StyledDateInput } from './DateInput.styles'
import { DateInputProps } from './DateInput.types'

export const DateInput = ({ ...props }: DateInputProps) => {
  return <StyledDateInput {...props} />
}

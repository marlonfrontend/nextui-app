import { StyledDatePicker } from './DatePicker.styles'
import { DatePickerProps } from './DatePicker.types'

export const DatePicker = ({ ...props }: DatePickerProps) => {
  return <StyledDatePicker {...props} />
}

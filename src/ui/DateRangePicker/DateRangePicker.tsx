import { StyledDateRangePicker } from './DateRangePicker.styles'
import { DateRangePickerProps } from './DateRangePicker.types'

export const DateRangePicker = ({ ...props }: DateRangePickerProps) => {
  return <StyledDateRangePicker {...props} />
}

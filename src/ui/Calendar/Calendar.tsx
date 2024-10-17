import { StyledCalendar } from './Calendar.styles'
import { CalendarProps } from './Calendar.types'

export const Calendar = ({ ...props }: CalendarProps) => {
  return <StyledCalendar {...props} />
}

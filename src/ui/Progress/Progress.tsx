import { StyledProgress } from './Progress.styles'
import { ProgressProps } from './Progress.types'

export const Progress = ({ ...props }: ProgressProps) => {
  return <StyledProgress {...props} />
}

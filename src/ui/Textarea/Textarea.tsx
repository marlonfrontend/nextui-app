import { StyledTextarea } from './Textarea.styles'
import { TextAreaProps } from './Textarea.types'

export const Textarea = ({ ...props }: TextAreaProps) => {
  return <StyledTextarea {...props} />
}

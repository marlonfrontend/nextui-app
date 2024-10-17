import { StyledSpacer } from './Spacer.styles'
import { SpacerProps } from './Spacer.types'

export const Spacer = ({ ...props }: SpacerProps) => {
  return <StyledSpacer {...props} />
}

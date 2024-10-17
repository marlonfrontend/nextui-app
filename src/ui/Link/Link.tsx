import { StyledLink } from './Link.styles'
import { LinkProps } from './Link.types'

export const Link = ({ ...props }: LinkProps) => {
  return <StyledLink {...props} />
}

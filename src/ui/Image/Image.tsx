import { StyledImage } from './Image.styles'
import { ImageProps } from './Image.types'

export const Image = ({ ...props }: ImageProps) => {
  return <StyledImage {...props} />
}

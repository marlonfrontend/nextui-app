import { PropsWithChildren } from 'react'
import { StyledChip } from './Chip.styles'
import { ChipProps } from './Chip.types'

export const Chip = ({ children, ...props }: PropsWithChildren<ChipProps>) => {
  return <StyledChip {...props}>{children}</StyledChip>
}

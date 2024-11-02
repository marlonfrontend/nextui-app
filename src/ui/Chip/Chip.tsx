import { PropsWithChildren } from 'react'

import { StyledChip } from './Chip.styles'
import { ChipProps } from './Chip.types'

export const Chip = ({
  children,
  variant = 'flat',
  ...props
}: PropsWithChildren<ChipProps>) => {
  return (
    <StyledChip variant={variant} {...props}>
      {children}
    </StyledChip>
  )
}

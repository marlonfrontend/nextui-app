import { extendVariants, Chip } from '@nextui-org/react'

export const StyledChip = extendVariants(Chip, {
  variants: {
    color: {
      default: {},
      secondary: {}
    }
  }
})

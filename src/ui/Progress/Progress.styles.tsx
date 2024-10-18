import { extendVariants, Progress } from '@nextui-org/react'

export const StyledProgress = extendVariants(Progress, {
  variants: {
    color: {
      primary: {
        indicator: 'bg-black'
      }
    }
  }
})

import { extendVariants, Textarea } from '@nextui-org/react'

export const StyledTextarea = extendVariants(Textarea, {
  variants: {
    color: {
      primary: {}
    }
  }
})

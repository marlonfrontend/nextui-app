import { extendVariants, Button, ButtonGroup } from '@nextui-org/react'

export const StyledButton = extendVariants(Button, {
  variants: {
    color: {
      primary: ''
    }
  }
})

export const StyledButtonGroup = extendVariants(ButtonGroup, {})

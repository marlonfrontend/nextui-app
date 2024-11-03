import { extendVariants, Button, ButtonGroup } from '@nextui-org/react'

export const StyledButton = extendVariants(Button, {
  variants: {
    color: {
      primary: '',
      default: 'bg-[#f2f2f2] text-black'
    }
  }
})

export const StyledButtonGroup = extendVariants(ButtonGroup, {})
